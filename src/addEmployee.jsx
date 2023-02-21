import React, { useState } from "react"
import "./employee.css"
import Form from "./form"
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import EmployeeCardContainer from "./employeeCardContainer"
library.add(faTrash)
const AddEmployee = () =>
{
    const [employeeId, setEmployeeId] = useState(0)
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [skills,setSkills] = useState("")
    const [department,setDepartment] = useState("")
    const [employeeList, setEmployeeList] = useState([])
    const [editStatus, setEditStatus] = useState(false)
    const inputStates = {
        employeeId,firstName,lastName,email,setEmployeeId,setFirstName,setLastName,setEmail,employeeList,setEmployeeList,
        editStatus,setEditStatus,skills,setSkills,department,setDepartment
    }
    const containerStatus = {
        setEmployeeId,setFirstName,setLastName,setEmail,setEmployeeList,setEditStatus,employeeList,setSkills,setDepartment
    }
    return (
        <div className="container">
            <Form inputStates = {inputStates}/>
            <EmployeeCardContainer containerStatus = {containerStatus}/>
        </div>
    )
}
export default AddEmployee