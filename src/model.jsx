import React, { useState,useEffect } from "react";
import axios from "axios"
import "./model.css";

const Model = () => {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [employeeId,setEmployeeId] = useState(null)
  const[firstName,setFirstName] = useState("")
  const[lastName,setLastName] = useState("")
  const[email,setEmail] = useState("")
  const [dateOfBirth,setDateOfBirth] = useState(null)
  const [joiningDate,setJoiningDate] = useState(null)
  const apiEndPoint = "http://192.168.29.167:9091/Employee/add";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  const addPost = async () => {
    const post = {empId: employeeId,
    fname: firstName,
    lname: lastName,
    email: email,
    dob: dateOfBirth,
    jdate: joiningDate,
    ldate: null,
    employeeskills: [
        {
            "id": 20,
            "skillId": 3,
            "date": "2023-02-16T09:29:18.305+00:00"
        },
        {
            "id": 21,
            "skillId": 2,
            "date": "2023-02-16T09:29:18.305+00:00"
        },
        {
            "id": 22,
            "skillId": 1,
            "date": "2023-02-16T09:29:18.305+00:00"
        }
    ],
    department_id: 1,
    desigination_id: 1,
    date: "2023-02-16T09:29:18.305+00:00",
    employeeprojects: [] };
    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
    if(employeeId !== "" && firstName !== "" && lastName !== "" && email !== "" && dateOfBirth !== "" && joiningDate !== "")
    {
        alert("Added Successfully")
    }
  };

  const handleUpdate = async (post) => {
    post.title = "Updated";
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
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const handleEmployeeId = (event) => {
    setEmployeeId(event.target.value)
  }
  const handleFirstName = (event) => {
    setFirstName(event.target.value)
  }
  const handleLastName = (event) => {
    setLastName(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleJoiningDate = (event) => {
    setJoiningDate(event.target.value)
  }
  const handleDateofBirth = (event) => {
    setDateOfBirth(event.target.value)
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add Employee
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
        <button onClick={addPost} className="addEmp-modal" >
          Add Employee
        </button>
        <label>Employee Id</label>
        <input type="number"  onChange={handleEmployeeId} required></input>
        <input type="text" placeholder="First Name" onChange={handleFirstName} required></input>
        <input type="text" placeholder="Last Name" onChange={handleLastName} required></input>
        <input type="email" placeholder="Email" onChange={handleEmail} required></input>
        <input type="text" placeholder="Date Of Birth (yyyy-mm-dd)" onChange={handleDateofBirth} onFocus="{type=date}" required></input>
        <input type="date" placeholder="Joining Date (yyyy-mm-dd)" onChange={handleJoiningDate} required></input>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
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
export default Model