import React from "react";
class GpaCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      grade: "",
      creditPoints: "",
      grades: [],
      points: [],
      gradePoints: [],
      gradePoint: "",
      total: "",
      status: false,
    };
    this.handleGrade = this.handleGrade.bind(this);
    this.handleCreditPoints = this.handleCreditPoints.bind(this);
    this.addGrade = this.addGrade.bind(this);
    this.handleGradePoints = this.handleGradePoints.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }
  handleGrade = (event) => {
    this.setState({
      grade: event.target.value,
    });
    console.log(this.state.gradePoints);
    event.preventDefault();
  };
  handleCreditPoints = (event) => {
    this.setState({
      creditPoints: event.target.value,
    });
    event.preventDefault();
  };
  addGrade = (event) => {
    const grades = [...this.state.grades];
    grades.push(this.state.grade);
    const points = [...this.state.points];
    points.push(this.state.creditPoints);
    const gradePoints = [...this.state.gradePoints];
    gradePoints.push(this.state.gradePoint);
    this.setState({
      grades: grades,
      points: points,
      gradePoints: gradePoints,
      gradePoint: "",
      grade: "",
      creditPoints: "",
    });
    event.preventDefault();
  };
  handleGradePoints = (event) => {
    this.setState({
      gradePoint: event.target.value,
    });
    event.preventDefault();
  };
  handleCalculate = (event) => {
    var sum = 0;
    var numerator = 0;
    for (let gpa = 0; gpa < this.state.gradePoints.length; gpa++) {
      var total =
        parseFloat(this.state.points[gpa]) *
        parseFloat(this.state.gradePoints[gpa]);
      numerator = numerator + total;
      sum = parseFloat(this.state.points[gpa]) + sum;
    }
    this.setState({
      total: numerator / sum,
      status: true,
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form>
          Grade:{" "}
          <input type={this.state.grade} onChange={this.handleGrade}></input>
          Grade Point:{" "}
          <input
            type={this.state.gradePoint}
            onChange={this.handleGradePoints}
          ></input>
          Credit Points:{" "}
          <input
            type={this.state.creditPoints}
            onChange={this.handleCreditPoints}
          ></input>
          <button onClick={this.addGrade}>Add Grade</button>
          <br />
          <button onClick={this.handleCalculate}>Calculate</button>
          <table>
            <th>Grade</th>
            <th>Gradepoints</th>
            <th>Credit Points</th>
            <tbody>
              <tr>
                <td>
                  {this.state.grades.map((item) => {
                    return <div>{item}</div>;
                  })}
                </td>
                <td>
                  {this.state.gradePoints.map((item) => {
                    return <div>{item}</div>;
                  })}
                </td>
                <td>
                  {this.state.points.map((item) => {
                    return <div>{item}</div>;
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <b>GPA is: </b>
        {this.state.status && this.state.total}
      </div>
    );
  }
}
export default GpaCalculator;
