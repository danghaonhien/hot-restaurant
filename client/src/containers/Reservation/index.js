import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./style.css";
class Reservation extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    email: "",
    phone: "",
    count: 0,
  };
  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };
  componentDidMount() {
    this.fetchTodos();
  }
  fetchTodos = () => {
    axios.get("/api/customer/count").then((res) => {
      console.log(res.data["COUNT(id)"]);
      if (res.data["COUNT(id)"] > 10) {
        this.setState({ count: 10 });
      } else {
        this.setState({ count: res.data["COUNT(id)"] });
      }
    });
  };
  handleFormSubmit = (event) => {
    console.log("I happened");
    // The second parameter to this post request is going to become req.body
    axios.post("/api/customer", this.state).then((res) => {
      this.setState({ name: "", email: "", phone: "" });
    });
  };
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className='container'>
        <div className='jumbotron text-center'>
          <h1>
            <i className='fa fa-fire'></i> Hot Restaurant
          </h1>
          <hr></hr>
          <h5>
            WE ONLY HAVE {10 - this.state.count} AVAILABLE TABLES LEFT OF 10.
          </h5>
          <button type='button' className='btn btn-secondary'>
            <Link className='nav-link' to='/Tables'>
              View Tables
            </Link>{" "}
            <i className='fa fa-list-alt'></i>
          </button>
        </div>
        <h1>Table Reservation</h1>
        <form className='form'>
          <div>
            <input
              className='name1'
              value={this.state.name}
              name='name'
              onChange={this.handleInputChange}
              type='text'
              placeholder=' Your Name'
            />
          </div>
          <br></br>
          <div>
            <input
              className='email'
              value={this.state.email}
              name='email'
              onChange={this.handleInputChange}
              type='text'
              placeholder='Email'
            />
          </div>
          <div>
            <br></br>
            <input
              className='phone'
              value={this.state.phone}
              name='phone'
              onChange={this.handleInputChange}
              type='text'
              placeholder='Phone Number'
            />
          </div>
          <Button variant='outline-secondary' onClick={this.handleFormSubmit}>
            Submit
          </Button>
        </form>
        <br></br>
      </div>
    );
  }
}
export default Reservation;
