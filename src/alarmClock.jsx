import React from "react";
class AlarmClock extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: "",
      alarmTime: "",
      message: "",
    };
    this.setAlarmTime = this.setAlarmTime.bind(this);
  }
  componentDidMount() {
    this.clock = setInterval(() => this.setTime(), 1000);

    this.check = setInterval(() => this.checkTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clock);
    clearInterval(this.check);
  }
  setTime() {
    this.setState({
      currentTime: new Date().toLocaleTimeString("en-US", { hour12: false }),
    });
  }
  checkTime() {
    if (this.state.alarmTime === "undefined" || !this.state.alarmTime) {
      this.setState({
        message: "Please set your Alarm",
      });
    } else {
      this.setState({
        message: "Your alarm has been set for: " + this.state.alarmTime,
      });
    }
    if (this.state.alarmTime === this.state.currentTime) {
      alert("Its time");
    }
  }

  setAlarmTime(event) {
    this.setState({
      alarmTime: event.target.value + ":00",
    });
    console.log(this.state.alarmTime);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Set Your Alarm</h1>
        <div>
          <h2>Your Current Time is: {this.state.currentTime}</h2>
        </div>
        <div>
          <h2>{this.state.message}</h2>
        </div>
        <form>
          <input type="time" onChange={this.setAlarmTime}></input>
        </form>
      </div>
    );
  }
}
export default AlarmClock;
