/*import React, { useState,useEffect } from 'react';
import Axios from "axios";
import Select from 'react-select';
const options = [
  { value: 1, label: 'Java' },
  { value: 2, label: 'Python' },
  { value: 3, label: 'Javascript' },
  { value: 4, label: 'React' },
  { value: 5, label: 'Ruby' },
  { value: 6, label: 'Mysql' },
];
const  Dropdown = () => {
  const [selectedOption,setSelectedOption] = useState(null)

  const [employeeList, setEmployeeList] = useState([]);

  const fetchProducts = async () => {
    
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const employeeList = data;
    setEmployeeList(employeeList);
    console.log(employeeList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
 const handleChange = selectedOption => {
    setSelectedOption(selectedOption)
    console.log(`Option selected:`, selectedOption);
  };
  
    return (
      <div className="App" >
        <Select
          isMulti={true}
          value={selectedOption}
          onChange={handleChange}
          options={options}
        />
      </div>
    );
  }
export default Dropdown; */

/*import React, { useState,useEffect } from "react"
import Axios from "axios"
const Dropdown = () => {
    const [skills,setSkills] = useState()
    const [employeeList,setEmployeeList] = useState([])
    const fetchProducts = async () => {
    
        const { data } = await Axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const employeeList = data;
        setEmployeeList(employeeList);
        console.log(employeeList);
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
     const handleSkills = (event) =>
      {
        setSkills(event.target.value)
        console.log(skills)
      }
    return(
        <div>
            <select className="form-control" value={skills} onChange={handleSkills} >
              <option value="">Choose Company Name</option>

        {employeeList.map(item => (
              <option value={item.name} key={item.id} >{item.name}</option>
    
              ))
              }

          </select>
        </div>
    )    

}
export default Dropdown  */


/*import React from 'react'
export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.username}</strong>
    <select
      className="form-control"
      name="{props.username}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.name}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.username}>
          {item.username}
        </option>
      ))}
    </select>

  </div>
)
export default class Dropdown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: 'samantha',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))
  }
  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="container mt-4">
        <h2>React Dropdown List with Bootstrap Example</h2>
        <CustomDropdown
          name={this.state.username}
          options={this.state.collection}
          onChange={this.onChange}
        />
        <h1>{this.state.value}</h1>
      </div>
    )
  }
}  */


 /* import React, {useState} from "react"
const Form = () =>
{
    const [value,setValue] = useState("C Language")
    const handleInput = (event) =>
    {
        setValue(event.target.value)
        console.log(value)
    }
    return (
        <div>
            <select value={value} onChange={handleInput}>
            <option value="C Language">C Language</option>
            <option value="Python">Python</option>
            <option value="JAVA">Java</option>
            <option value="JavaScript">JavaScript</option>
          </select>
          {value}
        </div>
    )
}
export default Form 

import React, { useState,useEffect} from "react"
import Axios from "axios"
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
const Dropdown = () =>
{
    const [skills,setSkills] = useState(null)
    const [designation,setDesignation] = useState([])
    const fetchDesignation = async () =>
  {
    const {data} = await Axios.get("http://192.168.29.167:9091/desiginations")
    const designation = {data}   
    setDesignation(designation)
    console.log(designation)
  }
  useEffect(() => {
    fetchDesignation()
  },[])
  const handleSkills = (event) =>
  {
      setSkills(event.target.value)
      console.log(skills)
  }
    return (
        <div>
           < CustomDropdown options={designation} onChange={handleSkills} />
        </div>
    )
}
export default Dropdown 

import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: []};
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'New title added',
				body: 'New body added. Hello body.',
				userId: 11
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
			});
	}
	render() {                            
		return (
			<div>
				<p><b>New Resource created in the server as shown below</b></p>
				<p>Id : {this.state.user.id}</p>
				<p>Title : {this.state.user.title}</p>
				<p>Body : {this.state.user.body}</p>
				<p>UserId : {this.state.user.userId}</p>
			</div>
		)
	}
}

export default Dropdown; 


import axios from "axios";
import React, { useState, useEffect } from "react";
import AddEmployee from "./addEmployee";

const Dropdown = () => {
  const [posts, setPosts] = useState([]);
  const [model,setModel] = useState(false)
  const apiEndPoint = "http://192.168.29.167:9091/Employee/add";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  const addPost = async () => {
    const post = {empId: 8,
    fname: "Jeyaroshini",
    lname: "L S S",
    email: "sruthiramesh@gmail.com",
    dob: "2002-06-30",
    jdate: "2020-06-30",
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
  const handleToggle = () => {
    setModel(!model)
  }
  

  return (
    <>
    <button onClick={handleToggle}>Add Employee</button>
    {model &&
      <div className="container">
        <h2> there are {posts.length} post in the Database </h2>
        <button onClick={addPost} className="btn btn-primary btn-sm">
          Add Post
        </button>
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
      </div>
}
    </>
  );
};

export default Dropdown; */


import React,{useEffect,useState} from "react"
import Axios from "axios"
const Dropdown = () => {
  const [employeeSkill, setEmployeeSkill] = useState([]);
  const [skills,setskills] = useState("")
  const fetchEmployeeSkill = async () => {
    
    const { data } = await Axios.get(
      "http://192.168.29.167:7777/departments"
    );
    const employeeSkill = data;
    setEmployeeSkill(employeeSkill);
    console.log(employeeSkill);
  };

  useEffect(() => {
    fetchEmployeeSkill();
  }, []);
  const handleInput = (event) =>{
    setskills(event.target.value)
  }
  return (
    <div>
      <select value={employeeSkill.depart} onChange={handleInput}>
      {employeeSkill.map(item => {
        return(
        <option value={item.depart}>{item.depart}</option>
        )
      }
      )}
      </select>
      <h2>{skills}</h2>
    </div>
  )
}
export default Dropdown