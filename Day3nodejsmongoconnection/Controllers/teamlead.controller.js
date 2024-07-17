import Teamleads from "../Models/teamlead.schema.js";
import Employees from "../Models/employee.schema.js";

export const createTeamLead = async(req, res)=>{
    try {
        const teamLead = new Teamleads(req.body)
        await teamLead.save(
        res.status(200).json({message:"Teamlead created", data:teamLead})
        )
    } catch (error) {
        console.log(error);
    }
}

export const getAllTeamleads = async (req, res) => {

    try {
        const teamleads = await Teamleads.find()
        res.status(200).json({ data: teamleads })
    } catch (error) {
        console.log(error);
    }

}


export const getAssignedEmployee = async(req, res)=>{
    try {
        const tlId = req.params.id;
        const teamLead = await Teamleads.findById(tlId).populate('empId') // populate() => document that contain reference to another collections doc
        // console.log("TeamLead", teamLead);
        res.status(200).json({Teamlead:teamLead.firstName, Employee:teamLead.empId.map((item)=>item.firstName)})
    } 
    catch (error) {
        console.log(error);
    }
}