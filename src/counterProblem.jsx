import React ,{useState} from "react"
import "./space.css"
function CounterProblem({CounterProblem})
{
    const [count,setCount] = useState(0)
    return (
        <div className="space">{CounterProblem}
        <div>
       <h1 className="h1">Counter Problem</h1>
        <h2>{count}</h2> 
      <button className="button-one" type="button" onClick={()=> setCount(count+1)} >Increment</button> 
     <button className="button-two" type="button" onClick={()=> setCount(count-1)} disabled= {count === 0}>Decrement</button>
     </div>
        </div>
        
        
    )

    
}
export default CounterProblem