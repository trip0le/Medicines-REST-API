import express from "express";
import {getMedicines, addMedicine, deleteById, findById, updateQuantityById} from '../controllers/medicines.js'

const router = express.Router();

router.get("/", getMedicines);

router.post("/", addMedicine );

router.get("/:id", findById );

router.delete("/:id", deleteById);

router.patch("/:id", updateQuantityById);

export default router;
