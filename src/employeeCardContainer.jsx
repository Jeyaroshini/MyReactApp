import React from "react"
import EmployeeCard from "./EmployeeCard";
import "./cardContainer.css"
const EmployeeCardContainer = ({containerStatus}) =>
{
    const {
        setEmployeeId,setFirstName,setLastName,setEmail,setEmployeeList,setEditStatus,employeeList,setSkills,setDepartment
    } = containerStatus

    const handleDelete = (employeeId) => {
        let newEmployeeList = employeeList.filter((employee) => employee.employeeId !== employeeId);
        setEmployeeList(newEmployeeList)
    }

    const handleEdit = (employeeId) => {
        let editEmployee = employeeList.find((employee) => employee.employeeId === employeeId);
        let{firstName,lastName,email,skills,department} = editEmployee
        setFirstName(firstName)
        setLastName(lastName)
        setEmail(email)
        setSkills(skills)
        setDepartment(department)
        setEditStatus(true)
        setEmployeeId(employeeId)
    }
    return (
        <div className="cardContainer">
           {employeeList.map((employee) => {
            return (
                <EmployeeCard  handleEdit={handleEdit} handleDelete={handleDelete} 
                employee={employee} key={employee.employeeId}/>
            )
           })}
        </div>
    )
}
export default EmployeeCardContainer