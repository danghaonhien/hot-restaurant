import React from "react";
const ListItems = (props) => (
  <ul className="list-group">
    {props.items.map((item) => (
      <div key={item.id}>
        <li className="list-group-item">Post name: {item.name}</li>
        <li className="list-group-item">User email: {item.email}</li>
        <li className="list-group-item">Comment: {item.body}</li>
      </div>
    ))}
  </ul>
);
export default ListItems;