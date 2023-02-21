import React from "react";
class StudentMarkList extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: "",
      mark: "",
      subjects: [],
      marks: [],
      total: "",
      average: "",
    };
    this.addSubject = this.addSubject.bind(this);
    this.addMark = this.addMark.bind(this);
    this.addToTable = this.addToTable.bind(this);
    this.handleTotal = this.handleTotal.bind(this);
    this.showDialog = this.showDialog.bind(this)
  }
  addSubject = (event) => {
    this.setState({
      subject: event.target.value,
    });
    event.preventDefault();
  };
  addMark = (event) => {
    this.setState({
      mark: event.target.value,
    });
    event.preventDefault();
  };
  addToTable = (event) => {
    if (this.state.subject !== "" && this.state.mark !== "") {
      const subjects = [...this.state.subjects];
      subjects.push(this.state.subject);
      const marks = [...this.state.marks];
      marks.push(this.state.mark);
      this.setState({
        subjects: subjects,
        marks: marks,
        subject: "",
        mark: "",
      });
    }
    event.preventDefault();
  };
  handleTotal = (event) => {
    var total = 0;
    for (let mark = 0; mark < this.state.marks.length; mark++) {
      total = total + parseInt(this.state.marks[mark]);
    }
    this.setState({
      total: total,
      average: total / this.state.marks.length,
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form>
          Subject:{" "}
          <input type={this.state.subject} onChange={this.addSubject}></input>
          Mark: <input type={this.state.mark} onChange={this.addMark}></input>
          <button onClick={this.addToTable}>Add</button>
        </form>
        <div>
          <table>
            <th>Subject</th>
            <th>Mark</th>
            <tbody>
              <tr>
                <td>
                  {this.state.subjects.map((item) => {
                    return <div>{item}</div>;
                  })}
                </td>
                <td>
                  {this.state.marks.map((item) => {
                    return <div>{item}</div>;
                  })}
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.handleTotal}>Total</button> <br />
          Total: {this.state.total} <br />
          Average: {this.state.average}
        </div>
      </div>
    );
  }
}
export default StudentMarkList;
