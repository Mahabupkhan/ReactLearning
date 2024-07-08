import React from 'react'
import {FaTrashAlt} from "react-icons/fa";
function LineItem({item,handleChange,handleDelete}) {
  return (
    <li className="item" key={item.id}>
    <input 
    onChange={()=>handleChange(item.id)}
    type="checkbox" 
    checked={item.checked}/>
    <label
    onDoubleClick={()=>handleChange(item.id)} 
    style={(item.checked) ? {textDecoration : 'line-through'} : null}
    >{item.item}</label>
    <FaTrashAlt onClick={()=>handleDelete(item.id)} role="button" tabIndex="0" />
  </li>
  )
}

export default LineItem