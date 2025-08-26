import Case from "../models/case.js";

//list all cases
export const allCases = async (req, res) => {
  try {
    const cases = await Case.find()
      .populate("customerId", "name contactInfo")  // populate customer info
      .populate("assignedTo", "username role");   // populate user info
    res.json(cases);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//create a new case 
export const createCase = async (req,res)=>{
    try {
    const { customerId, assignedTo, priority, status } = req.body;
    const caseItem = new Case({customerId, assignedTo, priority, status});
    await caseItem.save();
        res.status(201).json(caseItem);
    } catch (error) {
    res.status(400).json({ message: err.message });
    }
}

//update a case 
export const caseUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const caseItem = await Case.findByIdAndUpdate(id, updates, { new: true });
    if (!caseItem) return res.status(404).json({ message: "Case not found" });
    res.json(caseItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

//case delete 
export const caseDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const caseItem = await Case.findByIdAndDelete(id);
    if (!caseItem) return res.status(404).json({ message: "Case not found" });
    res.json({ message: "Case deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}