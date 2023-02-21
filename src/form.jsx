import React,{useEffect,useState} from "react";
import Axios from "axios"
import "./form.css"
export const CustomDropdown = (props) => (
    <div>
      <select 
        onChange={props.handleSkills} 
      >
        <option defaultValue>Skills {props.design}</option>
        {props.options.map((item, index) => (
          <option key={index} value={item.id}>
            {item.design}
          </option>
        ))}
      </select>
    </div>
  )
  export const CustomDepartment = (props) => (
    <div>
      <select 
        onChange={props.handleDepartment} 
      >
        <option defaultValue>Department {props.name}</option>
        {props.options.map((item, index) => (
          <option key={index} value={item.id}>
            {item.username}
          </option>
        ))}
      </select>
    </div>
  )
const Form = ({inputStates}) =>
{
    const [employeesList,setEmployeesList] = useState([])
    const [designation,setDesignation] = useState([])
    const url = "http://192.168.29.167:9091/Employee/allemp"
  const fetchEmployeeList = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const employeesList = data;
    setEmployeesList(employeesList);
  };
  useEffect(() => {
    fetchEmployeeList();
  }, []);
  const fetchDesignation = async () =>
  {
    const {data} = await Axios.get("http://192.168.100.137:9091/desiginations")
    const designation = data
    setDesignation(designation)
  }
  useEffect(() => {
    fetchDesignation()
  },[])
    const {
        employeeId,firstName,lastName,email,skills,department,setEmployeeId,setFirstName,setLastName,setEmail,employeeList,setEmployeeList,
        editStatus,setEditStatus,setSkills,setDepartment
    } = inputStates

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event) =>
    {
        setLastName(event.target.value)
    }
    const handleEmployeeId = (event) =>
    {
        setEmployeeId(event.target.value)

    }
    const handleEmail = (event) =>
    {
        setEmail(event.target.value)
    }
    const handleSkills = (event) =>
    {
        setSkills(event.target.value)
    }
    const handleDepartment = (event) =>
    {
        setDepartment(event.target.value)
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault()
        Axios.post(url,{
            employeeId: employeeId,firstName:firstName,lastName:lastName,email:email,skills:skills,department:department
        })
        .then(res => {
            console.log(res.data)
        })
        if(firstName !== "" && lastName !== "" && employeeId !== 0 && email !== ""  )
        {
            if(editStatus)
            {
                let updateEmployee = employeeList.map((employee) => {
                   return employee.employeeId === employeeId ? {...employee,firstName,lastName,employeeId,email,skills,department} : employee

                })
                setEmployeeList(updateEmployee)
                setEditStatus(false)
            }else{
            const employee = {
                employeeId: employeeId,
                firstName,lastName,email,skills,department
            } 
            setEmployeeList([...employeeList,employee])
            console.log(employee)
            setEmployeeId()
            setFirstName("")
            setLastName("")
            setEmail("")
            setSkills("")
            setDepartment("")}
        }
        else{
            alert("Enter Required Fields!!!")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} id="employeeForm">
                <input type="number"  placeholder="Employee Id" onChange={handleEmployeeId} required></input>
                <input type="text"  placeholder="First Name" onChange={handleFirstName} required></input>
                <input type="text"  placeholder="Last Name" onChange={handleLastName} required></input>
                <input type="email" placeholder="Email" onChange={handleEmail} required></input>
                <CustomDropdown options={designation} onChange={handleSkills} />
                <CustomDepartment options={employeesList} onChange={handleDepartment}/>
                <button className="btn-submit">{editStatus ? "Edit" : "Submit"}</button>
            </form>
        </div>
    )
}
export default Form