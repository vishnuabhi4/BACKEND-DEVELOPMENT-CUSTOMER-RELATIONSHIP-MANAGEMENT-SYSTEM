import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: String,
  contactInfo: String,
  status: { type: String, default: "active" },
});

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;

