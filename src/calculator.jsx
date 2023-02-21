import React from "react";
import Button from "./button";
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { input: "", answer: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (event) => {
    const value = event.target.value;
    const input = this.state.input + value;
    switch (value) {
      case "=": {
        if (this.state.input !== "") {
          var answer = eval(this.state.input);
          this.setState({
            answer: answer,
          });
        } else {
          this.setState({
            answer: "Math Error",
            input: "",
          });
        }
        break;
      }
      case "Clear": {
        this.setState({ input: "", answer: "" });
        break;
      }

      case "Delete": {
        var str = this.state.input;
        str = str.substr(0, str.length - 1);
        this.setState({ input: str });
        break;
      }
      default: {
        this.setState({ input: input });
        break;
      }
    }
    event.preventDefault();
  };
  render() {
    const outlook = {
      width: "400px",
      background: "yellow",
      border: "0px",
      padding: "10px",
      textAlign: "right",
      fontWeight: "bolder",
      fontSize: "20px",
    };
    return (
      <div>
        <div>
          <form>
            <input value={this.state.input} style={outlook} readOnly></input>
            <br />
            <input value={this.state.answer} style={outlook} readOnly></input>
            <br />
          </form>
        </div>
        <div>
          <Button label={"1"} handleClick={this.handleClick} />
          <Button label={"2"} handleClick={this.handleClick} />
          <Button label={"3"} handleClick={this.handleClick} />
        </div>
        <div>
          <Button label={"4"} handleClick={this.handleClick} />
          <Button label={"5"} handleClick={this.handleClick} />
          <Button label={"6"} handleClick={this.handleClick} />
        </div>
        <div>
          <Button label={"7"} handleClick={this.handleClick} />
          <Button label={"8"} handleClick={this.handleClick} />
          <Button label={"9"} handleClick={this.handleClick} />
        </div>
        <div>
          <Button label={"+"} handleClick={this.handleClick} />
          <Button label={"-"} handleClick={this.handleClick} />
          <Button label={"*"} handleClick={this.handleClick} />
          <Button label={"="} handleClick={this.handleClick} />
        </div>
        <div>
          <Button label={"Clear"} handleClick={this.handleClick} />
          <Button label={"Delete"} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
export default Calculator;
