import Customer from "../models/customer.js";

export const customerList = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const addCustomer = async (req, res) => {
  try {
    const { name, contactInfo, status } = req.body;
    const customer = new Customer({ name, contactInfo, status });
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const customer = await Customer.findByIdAndUpdate(id, updates, { new: true });
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

