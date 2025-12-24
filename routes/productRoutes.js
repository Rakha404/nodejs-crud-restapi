import express from "express";
import {
    deleteProducts,
    getProducts, 
    insertPoducts, 
    showProducts, 
    updateProducts} 
    from "../controllers/productController.js";

const router = express.Router();

router.get("/",getProducts);
router.post("/", insertPoducts);
router.get("/:id", showProducts)
router.put("/:id", updateProducts)
router.delete("/:id", deleteProducts)

export default router;