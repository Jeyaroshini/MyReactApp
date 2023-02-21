import React from 'react'
import "./designer.css"
import ListItems from './listItems'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
library.add(faCheck)


class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            items:[],
            currentItem:{
                text:"",
                key:"",
                status:false
            }
        }
        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem=this.deleteItem.bind(this)
        this.setUpdate=this.setUpdate.bind(this)
    }
    handleInput(e)
    {
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }
    addItem(e)
    {
        e.preventDefault()
        const newItem = this.state.currentItem
        console.log(newItem)
        if(newItem.text !== "")
        {
            const newItems = [...this.state.items, newItem]
            this.setState({
                items:newItems,
                currentItem:{
                    text:"",
                    key:""
                }
            })
        }
    }
    deleteItem(key)
    {
        window.confirm("Are you sure to delete?")
        const filteredItems = this.state.items.filter(item => item.key !== key)
        this.setState({
            items:filteredItems
        })
    }
    setUpdate(text,key)
    {
        const items = this.state.items
        items.map(item => {
            if(item.key === key)
            {
                item.text = text
            }
        })
        this.setState({
            items:items
        })
    }
    
    
    render()
    {
        return(
            <div className='App'>
            <form  id="to-do-form" onSubmit={this.addItem}>
                <input type="text"  placeholder="Enter your Task" value={this.state.currentItem.text} onChange={this.handleInput}/>
                <button type="submit">Add</button>
            </form>
            <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} editItem={this.editItem}></ListItems>
        </div>
        )
    }
}
export default App