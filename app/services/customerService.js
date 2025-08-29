// services/customerService.js
import Customer from "../models/customer.js";

// Get all customers
export const getAllCustomers = async () => {
  return await Customer.find();
};

// Add new customer
export const createCustomer = async (data) => {
  const { name, contactInfo, status } = data;
  const customer = new Customer({ name, contactInfo, status });
  return await customer.save();
};

// Update customer
export const updateCustomerById = async (id, updates) => {
  return await Customer.findByIdAndUpdate(id, updates, { new: true });
};

// Delete customer
export const deleteCustomerById = async (id) => {
  return await Customer.findByIdAndDelete(id);
};
