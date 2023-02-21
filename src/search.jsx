import React, { useState } from "react"
var data = require("./data.json")
function Search()
{
    const [input,setInput] = useState("")
    const handleInput = (event) =>
    {
        event.preventDefault()
        setInput(event.target.value)
    }
    const handleSearch =(input) =>
    {
        setInput(input)
    }
    return(
        <div>
            <form>
                <input type="text" value={input} onChange={handleInput}></input>
                <button onClick={()=>handleSearch(input)}>Search</button>
                {data.filter((item) => {
                    const searchItem = input.toLowerCase()
                    const fullName = item.full_name.toLowerCase()
                    return(
                        searchItem && fullName.startsWith(searchItem) 
                    )
                }).slice(0,10).map((item) => {
                    return(
                        <div>
                            {item.full_name}
                        </div>
                    )
                })}
            </form>
        </div>
    )
}
export default Search