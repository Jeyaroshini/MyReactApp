import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePick() {
 const [date, setDate] = useState(new Date());

 return (
   <DatePicker selected={date} onChange={date => setDate(date)} />
 );
}