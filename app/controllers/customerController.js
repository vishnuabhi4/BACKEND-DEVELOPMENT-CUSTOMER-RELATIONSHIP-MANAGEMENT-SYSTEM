// controllers/customerController.js
import {
  getAllCustomers,
  createCustomer,
  updateCustomerById,
  deleteCustomerById
} from "../services/customerService.js";

// GET all customers
export const customerList = async (req, res) => {
  try {
    const customers = await getAllCustomers();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD a customer
export const addCustomer = async (req, res) => {
  try {
    const customer = await createCustomer(req.body);
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE customer
export const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await updateCustomerById(id, req.body);
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    res.json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE customer
export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await deleteCustomerById(id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
