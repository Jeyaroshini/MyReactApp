import React, { useState, useEffect } from "react";
import "./dashboard.css";
import "./model.css";
import Axios from "axios";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faUsers,
  faAlignJustify,
  faHourglass,
  faStar,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUser, faUsers, faAlignJustify, faHourglass, faStar, faPlus);
const Dashboard = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [employeeId, setEmployeeId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [joiningDate, setJoiningDate] = useState(null);
  const apiEndPoint = "http://192.168.43.101:7777/Employee/add";
  const apiEndPointUpdate = "http://192.168.43.101:7777/Employee/edit";
  const [employeeSkill, setEmployeeSkill] = useState([]);
  const [skills, setskills] = useState("");
  const fetchEmployeeSkill = async () => {
    const { data } = await Axios.get(
      "http://192.168.43.101:7777/Employee/allskills"
    );
    const employeeSkill = data;
    setEmployeeSkill(employeeSkill);
    console.log(employeeSkill);
  };

  useEffect(() => {
    fetchEmployeeSkill();
  }, []);
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  const addPost = async () => {
    const post = {
      empId: employeeId,
      fname: firstName,
      lname: lastName,
      email: email,
      dob: dateOfBirth,
      jdate: joiningDate,
      ldate: null,
      employeeskills: [
        {
          id: 20,
          skillId: 3,
          date: "2023-02-16T09:29:18.305+00:00",
        },
        {
          id: 21,
          skillId: 2,
          date: "2023-02-16T09:29:18.305+00:00",
        },
        {
          id: 22,
          skillId: 1,
          date: "2023-02-16T09:29:18.305+00:00",
        },
      ],
      department_id: 1,
      desigination_id: 1,
      date: "2023-02-16T09:29:18.305+00:00",
      employeeprojects: [],
    };
    await axios.post(apiEndPoint, post);
    setPosts([post, ...posts]);
    if (
      employeeId !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      dateOfBirth !== "" &&
      joiningDate !== ""
    ) {
      alert("Added Successfully");
    }
  };

  const handleUpdate = async (post) => {
    await axios.put(apiEndPointUpdate);
    const postsClone = [...posts];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setPosts(postsClone);
  };

  const handleDelete = async (post) => {
    await axios.delete(apiEndPoint + "/" + post.empId + post);
    setPosts(posts.filter((p) => p.empId !== post.empId));
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const handleEmployeeId = (event) => {
    setEmployeeId(event.target.value);
  };
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleJoiningDate = (event) => {
    setJoiningDate(event.target.value);
  };
  const handleDateofBirth = (event) => {
    setDateOfBirth(event.target.value);
  };
  const handleSkill = (event) => {
    setskills(event.target.value);
  };

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "http://192.168.43.101:7777/Employee/allemp"
    );
    const employeeList = data;
    setEmployeeList(employeeList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div class="sidebar">
        <img
          src="https://media.licdn.com/dms/image/C560BAQFQjpUsEHRACQ/company-logo_200_200/0/1628851208046?e=2147483647&v=beta&t=ShskhxjF7Hk8mIJoSWMkZw8J3xnuG6rUFR722ZJKhlU"
          alt="SquareShift Logo"
        />
        <ul class="nav-links">
          <li>
            <a href="#" class="active">
              <i class="bx bx-grid-alt"></i>
              <span class="links_name">
                <FontAwesomeIcon icon={faUsers} /> Employee
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-box"></i>
              <span role="button" class="links_name">
                <FontAwesomeIcon icon={faAlignJustify} /> Projects
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-list-ul"></i>
              <span class="links_name">
                <FontAwesomeIcon icon={faHourglass} /> Timesheets
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span class="links_name">
                <FontAwesomeIcon icon={faStar} /> Skills and Certification
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-coin-stack"></i>
              <span class="links_name">Department</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-book-alt"></i>
              <span class="links_name">Payroll</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-user"></i>
              <span class="links_name">Team</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-message"></i>
              <span class="links_name">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
              <span class="links_name">Setting</span>
            </a>
          </li>
          <li class="log_out">
            <a href="#">
              <i class="bx bx-log-out"></i>
              <span class="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..."></input>
            <i class="bx bx-search"></i>
          </div>
          <div class="profile-details">
            <span class="admin_name">
              <FontAwesomeIcon icon={faUser} /> Username
            </span>
            <i class="bx bx-chevron-down"></i>
          </div>
        </nav>
        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Employee Count</div>
                <div class="number">{employeeList.length}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bx-cart-alt cart"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Active Employees</div>
                <div class="number">{employeeList.length}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bxs-cart-add cart two"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Inactive Employees</div>
                <div class="number">0</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class="bx bx-cart cart three"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Profit</div>
                <div class="number">$11,086</div>
                <div class="indicator">
                  <i class="bx bx-down-arrow-alt down"></i>
                  <span class="text">Up From Today</span>
                </div>
              </div>
              <i class="bx bxs-cart-download cart four"></i>
            </div>
          </div>

          <div class="sales-boxes">
            <div class="recent-sales box">
              <div class="title">Employee List</div>
              <div class="sales-details">
                <ul class="details">
                  <li class="topic">First Name</li>
                  {employeeList.map((item) => {
                    return <li>{item.fname}</li>;
                  })}
                </ul>
                <ul class="details">
                  <li class="topic">Last Name</li>
                  {employeeList.map((item) => {
                    return <li>{item.lname}</li>;
                  })}
                </ul>
                <ul class="details">
                  <li class="topic">Email</li>
                  {employeeList.map((item) => {
                    return <li>{item.email}</li>;
                  })}
                </ul>
                <ul class="details">
                  <li class="topic">DOB</li>
                  {employeeList.map((item) => {
                    return <li>{item.dob}</li>;
                  })}
                </ul>
                <ul class="details">
                  <li class="topic">Joining Date</li>
                  {employeeList.map((item) => {
                    return <li>{item.jdate}</li>;
                  })}
                </ul>
                <ul class="details">
                  <li class="topic">Action</li>
                  {employeeList.map((item) => {
                    return (
                      <div>
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <button onClick={toggleModal} className="button-addemp">
                <FontAwesomeIcon icon={faPlus} /> Add Employee
              </button>
              {modal && (
                <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                  <div className="modal-content">
                    <button onClick={addPost} className="addEmp-modal">
                      Add
                    </button>
                    <input
                      type="number"
                      placeholder="Employee Id"
                      onChange={handleEmployeeId}
                      required
                    ></input>
                    <br />
                    <input
                      type="text"
                      placeholder="First Name"
                      onChange={handleFirstName}
                      required
                    ></input>
                    <input
                      type="text"
                      placeholder="Last Name"
                      onChange={handleLastName}
                      required
                    ></input>
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={handleEmail}
                      required
                    ></input>
                    <input
                      type="text"
                      placeholder="Date Of Birth (yyyy-mm-dd)"
                      onChange={handleDateofBirth}
                      required
                    ></input>
                    <input
                      type="text"
                      placeholder="Joining Date (yyyy-mm-dd)"
                      onChange={handleJoiningDate}
                      required
                    ></input>
                    <select value={employeeSkill.skill} onChange={handleSkill}>
                      {employeeSkill.map((item) => {
                        return <option value={item.skill}>{item.skill}</option>;
                      })}
                    </select>
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
                      X
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
