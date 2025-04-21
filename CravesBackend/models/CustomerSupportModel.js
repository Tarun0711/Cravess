const mongoose = require("mongoose");
const { Schema } = mongoose;

const supportTicketSchema = new Schema({
  SupportTIcketToken: {
    type: String,
    required: true,
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  subject:{
    type:String,
    required:true
  },
  issueType: {
    type: String,
    enum: ["Technical", "Billing", "General"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Open", "In Progress", "Resolved", "Closed"],
    default: "Open",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  resolution: {
    type: {
      resolutionDate: Date,
      resolutionSummary: String,
    },
    default: null,
  },
  assignedAgent: {
    type: Schema.Types.ObjectId,
    ref: "SupportAgent",
    default: null,
  },
});


supportTicketSchema.pre('save', function(next) {
    if (this.status === 'Resolved') {
      const now = new Date();
      const resolvedDate = this.resolution.resolutionDate;
      const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
  
      if (now.getTime() - resolvedDate.getTime() >= oneDay) {
        this.status = 'Closed';
      }
    }
    next();
  });

module.exports = mongoose.model("SupportTicket", supportTicketSchema);
