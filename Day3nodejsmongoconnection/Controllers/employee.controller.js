import Employees from "../Models/employee.schema.js";

export const createEmployee = async (req, res) => {

    try {
        const employee = new Employees(req.body) // document creation
        await employee.save() // document save
        res.status(200).json({ message: "Employee created", data: employee })

    } catch (error) {
        console.log(error);
    }
}

export const getAllEmployees = async (req, res) => {

    try {
        const employees = await Employees.find()
        res.status(200).json({ data: employees })
    } catch (error) {
        console.log(error);
    }

}

export const getEmployeeById = async (req, res) => {

    try {
        const empId = req.params.id
        const employee = await Employees.findById(empId)
        if (!employee) {
            return res.status(404).json({ message: "Emp not found" })
        }
        res.status(200).json({ data: employee })
    } catch (error) {
        console.log(error);
    }
}

export const updateEmployeeById = async (req, res) => {
    try {
        const empId = req.params.id
        const { firstName, lastName, email, position } = req.body

         // const deletedEmp = await Employee.findById(empId)
       // if(!employee){
       //     return res.status(404).json({message:"Empid is not found "})
       // }

        const result = await Employees.updateOne({ _id: empId }, { firstName, lastName, email, position })
        //  console.log(result);

        if (result.matchedCount === 0) {
            return res.status(400).json({ error: "Emp id not found" })
        }

         const employee = await Employees.find()

      
       // res.status(200).json([updatedEmp])
       res.status(200).json(employee)


    } catch (error) {
        res.status(500).json({ error: "Error in update employee" })

    }
}

export const deleteEmployeeById = async (req, res) => {
    try {
        const empId = req.params.id
       // const deletedEmp = await Employee.findById(empId)
       // if(!employee){
       //     return res.status(404).json({message:"Empid is not found "})
       // }

        const result = await Employees.deleteOne({ _id: empId })
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "emp id not found" })
        }
        const employee = await Employees.find()
        res.status(200).json({ message: "EmpId deleted  successfully", data:[employee] })

    } catch (error) {
        res.status(500).json({ error: "Error in delete employee" })

    }

}