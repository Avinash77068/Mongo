
import Employee from "../models/Employee.js";
import asyncHandler from "../utils/asyncHandler.js";

export const fetchAllEmployee = async (req, res) => {
  try {
    const data = await Employee.find();

    return res.send({ data, status: true });
  } catch (error) {
    console.log(error);

    return res.send({ error, status: false });
  }
};

export const fetchEmployeeById = async (req, res) => {
  try {
    const { id } = req.params; // Extracting the ID from the request parameters
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).send({ message: "Employee not found", status: false });
    }

    return res.send({ data: employee, status: true });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Server error", status: false });
  }
};


export const addEmployee = async (req, res) => {
  try {
    const { name, title, description } = req.body; // Assuming you send a JSON body
    
    // Validate input
    if (!name || !title || !description) {
      return res.status(400).send({ message: "All fields are required!" });
    }

    const employee = await Employee.create({
      name,
      title,
      description,
    });

    console.log(employee);

    return res.status(201).send({
      message: `User ${name} created successfully!`,
      employee,
    });
  } catch (error) {
    console.error("Error creating employee:", error);
    return res.status(500).send({
      message: "Something went wrong. Please try again later.",
      error: error.message,
    });
  }
};


export const updateSuccessFully = asyncHandler(async (req, res)=>{
  const { id } = req.params;
  if(!id){
    return res.status(401).send({ message:"_id is required", status: false });
  }
  const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body);
  return res.status(200).send({
    message: `Employee Updated!`,
    status: true
  });
})



export const delelteEmployee = asyncHandler(async (req, res)=>{
  const { id } = req.params;
  
  if(!id){
    return res.status(401).send({ message:"_id is required", status: false });
  }
  const employee = await Employee.findByIdAndDelete(id);
  return res.status(200).send({
    message: `User deleted with ID ${id} deleted successfully!`,
   
  });
})

