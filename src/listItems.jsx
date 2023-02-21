 import React from 'react'
import './listItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Hello from './hello'
function ListItems(props)
{
    const items = props.items
    const listItems = items.map(item =>
        {
            return(
                <div className='list' key={item.key}>
                    <p> <input type="text" id={item.key} value={item.text} onChange={(e) => {props.setUpdate(e.target.value,item.key)}}  />
                        <span>
                        <FontAwesomeIcon className='trashIcon' icon='trash' onClick={() => props.deleteItem(item.key)} />
                        <button className='trashIcon' onClick={(e) => {props.setUpdate(e.target.value,item.key)}} >Clear</button>
                        <FontAwesomeIcon className='icon-checkmark' icon='check'  />
                    </span>
                    </p>
                    <div>
                        <Hello />
                    </div>
                </div>
            )
        })
        
    return(
        <div>
            {listItems}
        </div>
    )
}

export default ListItems