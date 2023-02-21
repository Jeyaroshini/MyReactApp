import React, { useState,useEffect } from "react";
import axios from "axios"
import Axios from "axios"
import "./model.css";
const AddProject = () => {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [projectTitle,setProjectTitle] = useState("")
  const [startDate,setStartDate] = useState("")
  const [endDate,setEndDate] = useState("")
  const [duration,setDuration] = useState(null)
  const [amounts,setAmounts] = useState(null)
  const apiEndPoint = "http://192.168.29.167:7777/add-project";
  const[typesOfProject,setTypesOfProject] = useState("")
  const[employeeList,setEmployeeList] = useState([])
  const[employeeName,setEmployeeName] = useState("")
  const[nameStatus,setNameStatus] = useState(false)
  const[projectId,setProjectId] = useState(null)
  const fetchProducts = async () => {
    
    const { data } = await Axios.get(
      "http://192.168.29.167:7777/Employee/allemp"
    );
    const employeeList = data;
    setEmployeeList(employeeList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const addPost = async () => {
    const post = {
        project_id: projectId,
            title: projectTitle,
            start_date: startDate,
            end_date: endDate,
            type_of_project: typesOfProject,
            date:  "2023-02-18T10:33:46.752+00:00",
            emp_ProId: [
                {
                    project_id: projectId,
                   empId:employeeName,
                    team_id: 1,
                    duration: duration,
                    amount: amounts
                }
            ]
        
    };
    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
    if(projectId !== null && projectTitle !== "" && startDate !== "" && endDate !== "" && typesOfProject !== "" && duration !== null && amounts !== null)
    {
        alert("Added Successfully")
    }
    else{
        alert("Enter Required Fields")
    }
  };

  const handleUpdate = async (post) => {
    await axios.put(apiEndPoint + "/" + post.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);
  };

  const handleDelete = async (post) => {
    await axios.delete(apiEndPoint + "/" + post.empId + post);
    setPosts(posts.filter((p) => p.empId !== post.empId));
  }
  const toggleModal = () => {
    setModal(!modal);
    setNameStatus(false)
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
    const handleProjectTitle = (event) =>
    {
        setProjectTitle(event.target.value)
    } 
    const handleStartDate = (event) =>
    {
        setStartDate(event.target.value)
    } 
    const handleEndDate = (event) => 
    {
        setEndDate(event.target.value)
    }
    const handleTypeOfProject = (event) => 
    {
        setTypesOfProject(event.target.value)
    }
    const handleDuration = (event) =>
    {
        setDuration(event.target.value)
    }
    const handleAmount = (event) =>
    {
        setAmounts(event.target.value)
    }
    const handleEmployeeName = (event) =>
    {
        setEmployeeName(event.target.value)
       setNameStatus(true)
       
    }
    const handleProjectId = (event) =>
    {
        setProjectId(event.target.value)
    }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add Project
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
        <button onClick={addPost} className="addEmp-modal" >
          Add 
        </button>
        <input type="number" placeholder="Project Id" onChange={handleProjectId}></input>
        <input type="text" placeholder="Project Title" onChange={handleProjectTitle} required></input>
        <input type="text" placeholder="Start Date (yyyy-mm-dd)" onChange={handleStartDate}  required></input>
        <input type="text" placeholder="End Date (yyyy-mm-dd)" onChange={handleEndDate} required></input>
        <input type="text" placeholder="Type of Project" onChange={handleTypeOfProject} required></input><br />
        { /*<button onClick={addPost} className="addProject-modal" >
          Create Team
      </button>  */}
      <b><label>Select Team Members</label></b><br/>
      <select value={employeeList.fname} onChange={handleEmployeeName}>
      {employeeList.map(item => {
        return(
        <option value={item.empId}>{item.fname}</option>
        )
      }
      )}
      </select>
      {nameStatus && (
        <div>
        <input type="number" placeholder="Project Id" value={projectId} onChange={handleProjectId}></input>
        <input type="number" placeholder="Duration of the Project" onChange={handleDuration} required></input>
        <input type="number" placeholder="Amount" onChange={handleAmount} required></input><br />
        </div>
      )}
        <table className="table">
          <tbody>
            {posts.map((post) => (
              <tr>
                <td> {post.fname} </td>
                <td>
                  <button
                    onClick={() => handleUpdate(post)}
                    className="btn btn-info btn-sm"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(post)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
      </>
  );
}
export default AddProject