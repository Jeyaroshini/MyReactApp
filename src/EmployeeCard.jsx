import React from "react"
import "./employeeCard.css"
const EmployeeCard = ({handleDelete,handleEdit,employee}) =>
{
    return (
        <div className="card">
            <div className="cardDetails">
            <strong>{employee.firstName} {employee.lastName}</strong>
            <p>{employee.skills}</p>
            </div>
            <div className="cardButtons">
            <button className="btn-delete"  onClick={()=>handleDelete(employee.employeeId)}>Delete</button>
            <button className="btn-edit" onClick={() => handleEdit(employee.employeeId)}> Edit</button>
            </div>
        </div>
    )
}
export default EmployeeCard   