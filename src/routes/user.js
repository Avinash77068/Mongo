
import { Router } from "express";
import { addUser, deleteUser, fetchAllUsers, fetchUserById, updateUser } from "../controllers/user.js";

const router = Router();

//Get route
router.get("/", fetchAllUsers);

// get by sharyi id 
router.get("/:id", fetchUserById);

// POST route
router.post("/", addUser);

//Update route
router.put("/:id",updateUser);

//Modify route
router.patch('/:id', updateUser);

// DELETE route
router.delete("/:id", deleteUser);






// http://localhoist:400/api/wmp/1
// http://localhoist:400/api/wmp/1?name=ram


// :id  => param
// ?name=ram => query

export default router;