import React from "react";
import DatePick from "./datePick";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./front.css"
library.add(faPlus);
class ResumeBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mail: "",
      phoneNumber: "",
      objective: "",
      viewStatus: false,
      skill: "",
      eduStatus: false,
      school: "",
      city: "",
      certiStatus: false,
      certification: "",
      internStatus: false,
      position: "",
      company: "",
      project: "",
    };
    this.handleName = this.handleName.bind(this);
    this.handlemail = this.handlemail.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleObjective = this.handleObjective.bind(this);
    this.handleSkill = this.handleSkill.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleEduStatus = this.handleEduStatus.bind(this);
    this.handleSchool = this.handleSchool.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleCertiStatus = this.handleCertiStatus.bind(this);
    this.handleCertifications = this.handleCertifications.bind(this);
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
    event.preventDefault();
  };
  handlemail = (event) => {
    this.setState({
      mail: event.target.value,
    });
    event.preventDefault();
  };
  handlePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
    event.preventDefault();
  };
  handleObjective = (event) => {
    this.setState({
      objective: event.target.value,
    });
    event.preventDefault();
  };
  handleSkill = (event) => {
    this.setState({
      skill: event.target.value,
    });
    event.preventDefault();
  };
  handleView = (event) => {
    this.setState({
      viewStatus: true,
    });
    event.preventDefault();
  };
  handleEduStatus = (event) => {
    this.setState({
      eduStatus: true,
    });
    event.preventDefault();
  };
  handleSchool = (event) => {
    this.setState({
      school: event.target.value,
    });
  };
  handleCity = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  handleCertiStatus = (event) => {
    this.setState({
      certiStatus: true,
      eduStatus:false
    });
    event.preventDefault();
  };
  handleCertifications = (event) => {
    this.setState({
      certification: event.target.value,
    });
    event.preventDefault();
  };
  internStatus = (event) => {
    this.setState({
      internStatus: true,
    });
    event.preventDefault();
  };
  handlePosition = (event) => {
    this.setState({
      position: event.target.value,
    });
  };
  handleCompanyName = (event) => {
    this.setState({
      company: event.target.value,
    });
  };
  handleProject = (event) => {
    this.setState({
      project: event.target.value,
    });
  };
  render() {
    return (
      <div className="design">
        <form>
          <table>
          <tr><td>
          Name:{" "}</td><td>
          <input
            placeholder="Enter Your Name"
            onChange={this.handleName}
          ></input></td></tr>
          <br />
          <tr><td>
          E-Mail:{" "}</td><td>
          <input
            placeholder="Enter Your E-mail"
            onChange={this.handlemail}
          ></input></td></tr>
          <br /><tr><td>
          Number:{" "}</td><td>
          <input
            placeholder="Enter Your Phone Number"
            onChange={this.handlePhoneNumber}
          ></input></td></tr>
          <br /><tr><td>
          Career Objective:{" "}</td><td>
          <textarea
            placeholder="Enter Your Career Objective"
            onChange={this.handleObjective}
          ></textarea></td></tr>
          <br /><tr><td>
          Skills:{" "}</td><td>
          <textarea
            placeholder="Enter your Skills"
            onChange={this.handleSkill}
          ></textarea></td></tr>
          <br />
          <tr><td>
          <button onClick={this.handleEduStatus} >
            <FontAwesomeIcon icon="plus"></FontAwesomeIcon>Educational
            Qualification{" "}
          </button>
          
          <button onClick={this.handleCertiStatus}>
            <FontAwesomeIcon icon="plus"></FontAwesomeIcon>Certificate
          </button>
         
          <button onClick={this.internStatus}>
            <FontAwesomeIcon icon="plus"></FontAwesomeIcon>Internship
          </button></td></tr>
          <div>
            {this.state.eduStatus && (
              <form>
                <table>
                <tr><td>
                School:</td><td> <input onChange={this.handleSchool}></input></td></tr>
                <br />
                <tr><td>
                City:</td><td><input onChange={this.handleCity}></input></td></tr>
                <br />
                <tr><td>
                Start Date:</td><td><DatePick /></td></tr>
                <br />
                <tr><td>
                End Date: </td><td><DatePick /> <br /></td></tr>
                </table>
              </form>
            )}
          </div>
          <div>
            {this.state.certiStatus && (
              <form>
                <table>
                <tr><td>
                Certifications:{" "}</td><td>
                <input onChange={this.handleCertifications}></input></td></tr>
                </table>
              </form>
            )}
          </div>
          <div>
            {this.state.internStatus && (
              <form>
                <table>
                <tr><td>
                Position: </td><td><input onChange={this.handlePosition}></input></td></tr>
                <br />
                <tr><td>
                Company Name:</td><td> <input onChange={this.handleCompanyName}></input></td></tr>
                <br />
                <tr><td>
                Project:</td><td> <input onChange={this.handleProject}></input> <br /></td></tr>
                </table>
              </form>
            )}
          </div>
          </table>
        </form>
        <tr><td>
        <button onClick={this.handleView}>View Resume</button></td></tr>
        <div>
          {this.state.viewStatus && (
            <p>
              {this.state.name}
              <br />
              {this.state.mail}
              <br />
              {this.state.phoneNumber}
              <br />
              <hr />
              <b>Career Objective</b>
              <br />
              {this.state.objective}
              <br />
              <hr />
              <b>Skills</b> <br />
              {this.state.skill}
              <hr />
              <b>Education</b>
              <br />
              {this.state.school}
              <br />
              {this.state.city} <br />
              <hr />
              <b>Certification</b>
              <br />
              {this.state.certification}
              <br />
              <hr />
              <b>Internships</b>
              <br />
              {this.state.position}
              <br />
              {this.state.company} <br />
              {this.state.project} <br />
            </p>
          )}
        </div>
      </div>
    );
  }
}
export default ResumeBuilder;
