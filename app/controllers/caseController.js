// controllers/caseController.js
import {
  getAllCases,
  createNewCase,
  updateCaseById,
  deleteCaseById,
} from "../services/caseSevices.js";

// GET all cases
export const allCases = async (req, res) => {
  try {
    const cases = await getAllCases();
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE new case
export const createCase = async (req, res) => {
  try {
    const caseItem = await createNewCase(req.body);
    res.status(201).json(caseItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE case
export const caseUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const caseItem = await updateCaseById(id, req.body);
    if (!caseItem) return res.status(404).json({ message: "Case not found" });
    res.json(caseItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE case
export const caseDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const caseItem = await deleteCaseById(id);
    if (!caseItem) return res.status(404).json({ message: "Case not found" });
    res.json({ message: "Case deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
