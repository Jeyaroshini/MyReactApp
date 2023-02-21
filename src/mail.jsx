import React, { useState } from "react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Mail() {
  const [otp, setotp] = useState(0);
  const [status, setStatus] = useState(false);
  const [input, setInput] = useState("");
  const [start, setStart] = useState(true);
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const sendmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_akksl58",
        "template_in9b83c",
        event.target,
        "5agA4Qxcu1pE1y335"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    let otp = Math.floor(Math.random() * 10000);
    setotp(otp);
    setStatus(true);
    console.log(otp);
  };
  const handleLeave = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_akksl58",
        "template_zlyjewi",
        event.target,
        "5agA4Qxcu1pE1y335"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    if (otp === Number(input)) {
      setStart(false);
    } else {
      alert("Invalid Verification Code");
    }
    event.preventDefault();
  };
  return (
    <div>
      {start && (
        <form onSubmit={sendmail}>
          <label>Name</label>
          <input type="text" name="username" required></input>
          <br />
          <label>Email-ID</label>
          <input type="text" name="email-id" required></input>
          <br />
          {status && (
            <form>
              <label>Enter OTP</label>
              <input
                name="otp-otp"
                type="number"
                onChange={handleInput}
              ></input>
              <button onClick={handleSubmit}>Submit</button>
            </form>
          )}
          <button>Get OTP</button>
        </form>
      )}
      {!start && (
        <div>
          <h1>Welcome to Leave Application</h1>
          <form onSubmit={handleLeave}>
            <label>Name</label>
            <input name="username" type="text"></input>
            <label>Mail-ID</label>
            <input type="email" name="email"></input>
            <label>Start Date</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              name="startDate"
            />
            <label>End Date</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              name="endDate"
            />
            <label>Reason for leave</label>
            <textarea type="text" name="reason"></textarea>
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default Mail;
