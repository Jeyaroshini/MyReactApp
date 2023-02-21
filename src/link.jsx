import { Routes, Route } from "react-router-dom"
import AddTask from "../../../Desktop/addTask"

function Link() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <AddTask/> } />
      </Routes>
    </div>
  )
}

export default Link