import React from "react";
class Education extends React.Component {
  constructor() {
    super();
    this.state = { degree: "", stream: "", graduation: "" };
    this.handleDegree = this.handleDegree.bind(this);
    this.handleStream = this.handleStream.bind(this);
    this.handlegraduation = this.handlegraduation.bind(this);
  }
  handleDegree = (event) => {
    this.setState({
      degree: event.target.value,
    });
  };
  handleStream = (event) => {
    this.setState({
      stream: event.target.value,
    });
  };
  handlegraduation = (event) => {
    this.setState({
      graduation: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <form>
          Degree: <input onChange={this.handleDegree}></input>
          <br />
          Stream: <input onChange={this.handleStream}></input>
          <br />
          Year of Graduation: <input onChange={this.handlegraduation}></input>
          <br />
        </form>
      </div>
    );
  }
}
export default Education;
