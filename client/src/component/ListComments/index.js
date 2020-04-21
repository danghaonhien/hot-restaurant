import React from "react";
const ListComments = (props) => {
  return (
    <ul className='list-group'>
      {props.items.map((item) => (
        <div key={item.id}>
          <hr></hr>
          <li className='list-group-item'>{item.comments}</li>
        </div>
      ))}
    </ul>
  );
};
export default ListComments;
