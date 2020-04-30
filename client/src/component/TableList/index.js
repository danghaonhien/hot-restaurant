import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const TableList = (props) => (
  <div className='list'>
    {props.items.map((item, index) => (
      <ul className='list-group' key={item.id}>
        <h3 className='tableNo'>
          <Spinner animation='grow' variant='primary' />
          Table:{index + 1}
        </h3>
        <li className='list-group-item list-group-item-danger'>
          Name: {item.name}
        </li>
        <br></br>
        <div className='buttons'>
          <Button variant='outline-success'>
            <Link to={`/Details/${item.id}`}>Details</Link>
          </Button>{" "}
          <Button variant='outline-warning'>
            <Link to={`/Update/${item.id}`}>Update</Link>
          </Button>{" "}
          <Button
            variant='outline-danger'
            onClick={() => props.handleDelete(item.id)}
          >
            Delete
          </Button>{" "}
        </div>
      </ul>
    ))}
  </div>
);
export default TableList;
