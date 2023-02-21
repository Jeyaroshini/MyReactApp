/*  import React from "react"
  import "./tableDesign.css"
  import axios from "axios"
class ComponentApi extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            employeeList :[]
        }
    }

 componentDidMount(){
    const  datas =  axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.setState({
            employeeList:datas
        })
    }
render()
{
    return(
        <div>

            <h3>Employee List</h3>
           <input type="text" value={this.state.employeeList.length}  readOnly></input>
            <table>
                <thead>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Email</th>
                </thead>
                <tbody>
                    {this.state.employeeList.map(item => {
                        return(
                            <tr>
                                <td>{item.empId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
}
export default ComponentApi  */

import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./tableDesign.css"
function ComponentApi() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    
    const { data } = await Axios.get(
      "http://192.168.29.167:9091/Employee/allemp"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
    <table>
    <thead>
        <th>Employee Id </th>
        <th> Employee Name </th>
    </thead>
      {products.map((product) => (
        <tbody>
        <tr>
        <td>
        {product.empId}</td>
        <td>{product.name}</td>
        </tr>
        </tbody>
        )
      )}
      </table>
    </div>
  );
}

export default ComponentApi; 
 