import express from "express";
import User from "../models/user.js";
import { createUser, deleteUserbyId, getAllUsers, getUserbyId, updateUserbyId } from "../controllers/user.js";

const router = express.Router();

router
    .route("/")
    .get(getAllUsers)
    .post(createUser);

router
    .route("/:id")
    .get(getUserbyId)
    .patch(updateUserbyId)
    .delete(deleteUserbyId);


export default router;