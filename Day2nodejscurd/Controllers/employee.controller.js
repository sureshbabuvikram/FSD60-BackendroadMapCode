const employees=[
    {id:1,name:"suresh",desgination:"FSD"},//0
    {id:2, name:"mukesh", desgination:"Front end developer"},//1
    {id:3, name:"Armstrong", desgination:"Backend Developer"},//2
    {id:4, name:"Hema", desgination:"FSD"} // 3
]

export const getEmpDetails=(req,res)=>{
    res.status(200).json({data:employees})
}

export const getEmpDetailsById=(req,res)=>{
    const empId= req.params.id
    const empDetail= employees.find(emp=>emp.id== empId)
    if(!empDetail){
        return res.status(404).json({message:"Emp detail not found"})
    }

    res.status(200).json({data:empDetail})
}

export const createEmpDetail = (req,res)=>{
    // console.log("create emp");
    // console.log("body", req.body);
  const{name,desgination}=req.body;
//   console.log("name", name);
//   console.log("desg", desgination);
  const newEmpDetail= {
    id:employees.length+1,
    name:name,
    desgination:desgination
  }

  employees.push(newEmpDetail)

  res.status(200).json({message:"Emp detail added successfully", data:employees})
}

export const updateEmpById = (req,res)=>{

    const empId= req.params.id;
    const {name,desgination}= req.body;

    const index = employees.findIndex(emp=>emp.id == empId)
    console.log("index", index);

    if(index === -1){
        return res.status(404).json({message:"emp not found"})
    }

    employees[index].name=name;
    employees[index].desgination= desgination

    res.status(200).json({message:"updated sucessfully", data:employees})
}

export const deleteEmpId = (req,res)=>{
    const empId = req.params.id;
    const index = employees.findIndex(emp=>emp.id == empId)
    // console.log("index", index);
    
    if(index === -1){
        return res.status(404).json({message:"emp not found"})
    }

    employees.splice(index,1)

    res.status(200).json({message:"deleted successfully", data: employees})


}