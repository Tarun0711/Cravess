const User = require('../models/userModel');

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Use object destructuring to update only provided fields
    const { email, userName, addressLine1, city, country } = req.body;

    // Update user details if provided, or retain current values
    user.email = email ;
    user.userName = userName;
    user.addressLine1 = addressLine1;
    user.city = city ;
    user.country = country 

    // Save the updated user
    const updatedUser = await user.save();
    console.log(updatedUser,"user",user)

    // Respond with the updated user details
    res.json({ message: 'User updated successfully', user: updatedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating user' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by their ID
    const user = await User.findById(userId);

    // If user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching user details' });
  }
};