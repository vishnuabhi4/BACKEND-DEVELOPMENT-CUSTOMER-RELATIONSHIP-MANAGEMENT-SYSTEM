// services/caseService.js
import Case from "../models/case.js";

// List all cases (with populated data)
export const getAllCases = async () => {
  return await Case.find()
    .populate("customerId", "name contactInfo")
    .populate("assignedTo", "username role");
};

// Create new case
export const createNewCase = async (data) => {
  const { customerId, assignedTo, priority, status } = data;
  const caseItem = new Case({ customerId, assignedTo, priority, status });
  return await caseItem.save();
};

// Update case by ID
export const updateCaseById = async (id, updates) => {
  return await Case.findByIdAndUpdate(id, updates, { new: true });
};

// Delete case by ID
export const deleteCaseById = async (id) => {
  return await Case.findByIdAndDelete(id);
};
