import express from "express";
import {
    deleteUsers,
    getUsers, 
    insertUser, 
    showUser, 
    updateUser} 
    from "../controllers/userController.js";

const router = express.Router();

router.get("/",getUsers);
router.post("/", insertUser);
router.get("/:id", showUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUsers)

export default router;