const DeliveryAgentDetails = require("../models/DeliveryAgentDetails");
const AccountDetails = require("../models/BankDetailsModel");
const User = require("../models/userModel");
// Helper function to validate required fields
const validateFields = (fields, requiredFields) => {
  for (const field of requiredFields) {
    if (!fields[field]) {
      return `Field ${field} is required.`;
    }
  }
  return null;
};

// Create a delivery agent
const moment = require("moment"); // Ensure moment is installed

exports.createDeliveryAgent = async (req, res) => {
  const {
    vehicleType,
    vehicleNumber,
    vehicleModel,
    document,
    accountDetails,
    assignedOrders,
    availabilityStatus,
    location,
    userId,
    gender,
    aadharNumber,
    panNumber,
    dateOfBirth
  } = req.body;

  // Validate required fields
  const requiredFields = [
    // "vehicleType",
    // "vehicleNumber",
    // "vehicleModel",
    // "document",
    // "location",
    "userId",
    "gender",
    "aadharNumber",
    "panNumber",
    "dateOfBirth"
  ];
  
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `${field} is required.` });
    }
  }

  try {
    // Ensure dateOfBirth is valid and formatted correctly
    const formattedDateOfBirth = moment(dateOfBirth, moment.ISO_8601, true);
    if (!formattedDateOfBirth.isValid()) {
      return res.status(400).json({ error: "Invalid date format for date of birth" });
    }

    // Save account details
    const newAccountDetails = new AccountDetails(accountDetails);
    const savedAccountDetails = await newAccountDetails.save();

    // Create new delivery agent details
    const newAgent = new DeliveryAgentDetails({
      vehicleDetails: {
        vehicleType,
        vehicleNumber,
        vehicleModel,
      },
      document,
      accountDetails: savedAccountDetails._id,
      assignedOrders,
      availabilityStatus,
      location,
      gender,
      aadharNumber,
      panNumber,
      dateOfBirth: formattedDateOfBirth.toISOString(), // Save formatted date
    });

    const savedAgent = await newAgent.save();

    // Get the user who is creating the delivery agent
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the user has the correct role
    if (user.role !== "DeliveryAgent") {
      return res.status(400).json({ error: "Only Delivery Agents can create Delivery Agents" });
    }

    // Push the saved agent into the user's AdditionalDetails
    user.additionalDetail = user.additionalDetail || [];
    user.additionalDetail.push(savedAgent._id);
    await user.save();

    res.status(201).json({
      message: "Delivery agent created successfully",
      data: savedAgent,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getDeliveryAgentDetailsById = async (req, res) => {
    try {
      const agentId = req.params.id;
      const agent = await DeliveryAgentDetails.findById(agentId);
      if (!agent) {
        return res.status(404).json({ error: "Delivery agent not found" });
      }
      res.status(200).json({ data: agent });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.updateDeliveryAgentProfile = async (req, res) => {
    const {
      vehicleType,
      vehicleNumber,
      vehicleModel,
      document,
      accountDetails,
      assignedOrders,
      availabilityStatus,
      location,
      userId,
    } = req.body;
  
    const validationError = validateFields(req.body, [
      "vehicleType",
      "vehicleNumber",
      "vehicleModel",
      "document",
      "location",
    ]);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }
  
    try {
      const agentId = req.params.id;
      const agent = await DeliveryAgentDetails.findById(agentId);
      if (!agent) {
        return res.status(404).json({ error: "Delivery agent not found" });
      }
  
      // Update vehicle details
      agent.vehicleDetails.vehicleType = vehicleType;
      agent.vehicleDetails.vehicleNumber = vehicleNumber;
      agent.vehicleDetails.vehicleModel = vehicleModel;
  
      // Update document
      agent.document = document;
  
      // Update account details
      const updatedAccountDetails = await AccountDetails.findByIdAndUpdate(
        agent.accountDetails,
        { $set: accountDetails },
        { new: true }
      );
  
      // Update assigned orders
      agent.assignedOrders = assignedOrders;
  
      // Update availability status
      agent.availabilityStatus = availabilityStatus;
  
      // Update location
      agent.location = location;
  
      // Save the updated agent
      const savedAgent = await agent.save();
  
      res.status(200).json({
        message: "Delivery agent profile updated successfully",
        data: savedAgent,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };




