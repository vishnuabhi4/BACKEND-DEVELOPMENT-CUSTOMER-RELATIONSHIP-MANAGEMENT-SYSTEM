import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  priority: String,
  status: { type: String, default: "open" },
  createdAt: { type: Date, default: Date.now },
});

const Case = mongoose.model("Case", caseSchema);
export default Case;
