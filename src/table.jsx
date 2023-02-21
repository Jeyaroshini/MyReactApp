import React from 'react'
import "./tableDesign.css"
function Table()
{
    const studentDetails = [
        {SerialNo:"1" , Name:"Jeyaroshini" , RegNo:"913119205015", Gender:"Female"},
        {SerialNo:"2" , Name:"SuryaKumar" , RegNo:"913119205016", Gender:"Male"},
        {SerialNo:"3" , Name:"Subiksha" , RegNo:"913119205017", Gender:"Female"},
        {SerialNo:"4" , Name:"Prathiksha" , RegNo:"913119205018", Gender:"Female"},
        {SerialNo:"5" , Name:"Harshivan" , RegNo:"913119205020", Gender:"Male"}
    ]
    const deleteItem = (id) =>
    {
        var index = studentDetails.map(function(e){
            return e.id
        }).indexOf(id)
        studentDetails.splice(index,1)
    }
    
    return(
        <div>
         <h1>Table </h1>
        <div className="table-design">
                <table>
                    <thead>
                    <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Reg.No</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                    {studentDetails.map(item => {
                        return(
                            <tr>
                                <td>{item.SerialNo}</td>
                                <td>{item.Name}</td>
                                <td>{item.RegNo}</td>
                                <td>{item.Gender}</td>
                                <button onClick ={()=>deleteItem(item.SerialNo)}>Delete</button>
                                <button>Update</button>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
        </div>
        </div>
    )
}
export default Table