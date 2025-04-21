const supportTicketSchema = require("../models/CustomerSupportModel");
const User = require("../models/userModel");
const ISSUE_TYPES = {
  BILLING: "Billing",
  TECHNICAL: "Technical",
  GENERAL: "General",
};

const PRIORITIES = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

const validateFields = (fields, requiredFields) => {
  for (const field of requiredFields) {
    if (!fields[field]) {
      return `Field ${field} is required.`;
    }
  }
  return null;
};
exports.CreateSupportTicket = async (req, res) => {
  try {
    const { customerId, issueType, subject, description } = req.body;

    const validationError = validateFields(req.body, [
      "customerId",
      "issueType",
      "description",
      "subject",
    ]);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }
    // Check if issueType is valid
    if (!Object.values(ISSUE_TYPES).includes(issueType)) {
      return res.status(400).json({ error: "Invalid issue type." });
    }

    // Determine priority based on issueType
    let priority;
    switch (issueType) {
      case ISSUE_TYPES.BILLING:
        priority = PRIORITIES.HIGH;
        break;
      case ISSUE_TYPES.TECHNICAL:
        priority = PRIORITIES.MEDIUM;
        break;
      case ISSUE_TYPES.GENERAL:
      default:
        priority = PRIORITIES.LOW;
        break;
    }

    const lastTicket = await supportTicketSchema
      .findOne()
      .sort({ createdAt: -1 });
    let newTokenNumber = 1; // Base number
    if (lastTicket) {
      const lastToken = lastTicket.SupportTIcketToken;
      const lastTokenNumber = parseInt(
        lastToken.replace("CravesSupport", ""),
        10
      );
      newTokenNumber = lastTokenNumber + 1;
    }

    // Create the new token with leading zeros
    const newToken = `CravesSupport${String(newTokenNumber).padStart(4, "0")}`;

    // Find an admin user to assign as the agent
    const assignedAgent = await User.findOne({ role: "Admin" });
    if (!assignedAgent) {
      return res.status(404).json({ error: "No admin user found" });
    }

    const newTicket = new supportTicketSchema({
      customerId,
      issueType,
      subject,
      description,
      priority,
      SupportTIcketToken: newToken,
      assignedAgent: assignedAgent._id,
    });
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket", error });
  }
};

exports.GetAllSupportTickets = async (req, res) => {
  try {
    const { issueType, priority, status } = req.query;
    const filter = {};
    if (issueType) filter.issueType = issueType;
    if (priority) filter.priority = priority;
    if (status) filter.status = status;

    const supportTickets = await supportTicketSchema
      .find(filter)
      // .populate('customerId', 'name email')
      // .populate('assignedAgent', 'name email')
      .sort({ createdAt: -1 }) // sort by creation date in descending order
      .limit(10) // limit to 10 tickets per page
      .skip((req.query.page - 1) * 10); // skip to the current page

    res.status(200).json(supportTickets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching support tickets", error });
  }
};

exports.updateResolution = async (req, res) => {
    try {
      const { supportTicketId } = req.params; 
      const { resolutionSummary } = req.body;
  
      if (!resolutionSummary) {
        return res.status(400).json({ message: "Resolution summary is required" });
      }
  
      const supportTicket = await supportTicketSchema.findById(supportTicketId);
  
      if (!supportTicket) {
        return res.status(404).json({ message: "Support ticket not found" });
      }
  
      // Update the resolution details
      supportTicket.resolution = {
        resolutionDate: new Date(),  
        resolutionSummary,
      };
  
      supportTicket.status = "In Progress";

  
      await supportTicket.save();

      res.status(200).json({ message: "Resolution updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error updating resolution", error });
    }
  };


  exports.updateStatusToResolved = async (req, res) => {
    try {
      const supportTicketId = req.params.id;
      const supportTicket = await supportTicketSchema.findById(supportTicketId);
  
      if (!supportTicket) {
        return res.status(404).json({ message: 'Support ticket not found' });
      }
  
      if (supportTicket.status !== 'In Progress') {
        return res.status(400).json({ message: 'Support ticket is not in progress' });
      }
  
      supportTicket.status = 'Resolved';
      supportTicket.resolution = {
        resolutionDate: new Date(),
        resolutionSummary: req.body.resolutionSummary,
      };
  
      await supportTicket.save();
  
      res.json({ message: 'Support ticket status updated to Resolved' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating support ticket status' });
    }
  };




  
