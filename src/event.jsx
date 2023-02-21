
import React from "react";
class Event extends React.Component {
  constructor() {
    super();
    this.handleLogin= this.handleLogin.bind(this)
    this.handleLogout=this.handleLogout.bind(this)
    this.state = { status: false };
  }
  handleLogin() {
    this.setState({
      status: true,
    });
  }
  handleLogout() {
    this.setState({
      status: false,
    });
  }
  render() 
  { 
    if (this.state.status) {
     return(<LogOutButton onClick={this.handleLogout} />);
    } else {
    return (<LogInButton onClick={this.handleLogin} />);
    }
  }
}

function LogOutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function LogInButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}
export default Event;
