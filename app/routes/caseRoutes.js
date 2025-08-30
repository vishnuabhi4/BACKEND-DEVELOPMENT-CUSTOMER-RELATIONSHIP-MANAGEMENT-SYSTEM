import express from "express";
import { allCases,createCase, caseUpdate, caseDelete } from "../controllers/caseController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/caseList",verifyToken,allCases);
router.post("/createCase",verifyToken,createCase);
router.patch("/caseUpdate/:id",verifyToken,caseUpdate);
router.delete("/caseDelete/:id",verifyToken,caseDelete)

export default router;