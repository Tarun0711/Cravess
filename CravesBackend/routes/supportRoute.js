const express = require("express");
const { CreateSupportTicket, GetAllSupportTickets, updateResolution, updateStatusToResolved } = require("../controllers/SupportController");
const router = express.Router()

router.post('/CreateSupport',CreateSupportTicket)
router.get('/getSupportTicket',GetAllSupportTickets)
router.patch('/AddResolution/:supportTicketId',updateResolution)
router.patch('/:id/resolved', updateStatusToResolved)

module.exports = router;