import React from "react";
const TableList = (props) => (
  <div className='list'>
    {props.items.map((item) => (
      <ul className='list-group' key={item.id}>
        <li className='list-group-item'> name: {item.name}</li>
        <li className='list-group-item'> email: {item.email}</li>
        <li className='list-group-item'>phone: {item.phone}</li>
        <button
          className='btn btn-danger'
          onClick={() => props.handleDelete(item.id)}
        >
          X
        </button>
      </ul>
    ))}
  </div>
);
export default TableList;
