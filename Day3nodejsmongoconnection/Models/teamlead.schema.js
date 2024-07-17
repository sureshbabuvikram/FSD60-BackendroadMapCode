import mongoose from "mongoose";

const tlSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    empId: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employees'
    }]

})

const Teamleads = mongoose.model('Teamleads', tlSchema);
export default Teamleads;