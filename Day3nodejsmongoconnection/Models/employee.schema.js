import mongoose from "mongoose";

const empSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    position:String
})

const Employees = mongoose.model('Employees', empSchema)
export default Employees;