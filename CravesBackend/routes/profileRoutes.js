const express = require("express");
const router = express.Router();
const {createDeliveryAgent, updateDeliveryAgentProfile} = require('../controllers/DeliveryAgentController');
const { auth } = require("../controllers/RBAC");
const { updateUser,getUserById } = require("../controllers/userProfileManagement");


router.put('/updatePreProfileDetails/:id',updateUser)
router.get('/getUserById/:id',getUserById)

router.post('/Addprofiledetails',createDeliveryAgent)
router.put('/UpdateProfileDetails/:id',updateDeliveryAgentProfile)

module.exports = router;