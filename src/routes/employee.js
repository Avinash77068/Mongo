import { Router } from "express";
import { addEmployee, delelteEmployee, fetchAllEmployee, fetchEmployeeById, updateSuccessFully } from "../controllers/employee.js";

const router = Router();

//Get route
router.get("/", fetchAllEmployee);

// get by sharyi id 
router.get("/:id", fetchEmployeeById);

// POST route
router.post("/", addEmployee);

//Update route
router.put("/:id",updateSuccessFully);

//Modify route
router.patch('/modify/id', updateSuccessFully);

// DELETE route
router.delete("/:id", delelteEmployee);


// http://localhoist:400/api/wmp/1
// http://localhoist:400/api/wmp/1?name=ram


// :id  => param
// ?name=ram => query

export default router;
