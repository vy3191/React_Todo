import React from 'react';
import './Todo.css';

export default function Todo(props) {
  const handleToggle = (event) => {
     event.preventDefault();
     props.toggle(event, props.item.id);
  }
  {console.log(props.item.id)}
  {console.log(props.item.completed)}
  return (
    <div>
      <p onClick={handleToggle}
         className={`${props.item.completed ? "purchased" : ""}`} >
         {props.item.name}</p>
    </div>
  );

}
