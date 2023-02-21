import React from "react"
class Counter extends React.Component{
constructor()
{
    super()
    this.state = {count: 0}
}

increment = (event) =>
{
    this.setState({
        count: this.state.count + 1
    })
    event.preventDefault()
}

decrement = (event) =>
{
    this.setState({
        count: this.state.count - 1
    })
    event.preventDefault()
}
render()
{
    return(
        <div>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
    )
}
}
export default Counter