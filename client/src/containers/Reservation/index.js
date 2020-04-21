import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
class Reservation extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    email: "",
    phone: "",
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
  // componentDidMount() {
  //     this.fetchTodos();
  //   }
  //   fetchTodos = () => {
  //     axios.get('/api/todos').then(res => {
  //       console.log(res);
  //       this.setState({todos: res.data});
  //     });
  //   }
  handleFormSubmit = (event) => {
    console.log("I happened");
    // The second parameter to this post request is going to become req.body
    axios.post("/api/customer", this.state).then((res) => {
      this.setState(this.state);
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
            We only have 10 tables! Book your seat before they are all gone!
          </h5>
          <button type='button' className='btn btn-primary'>
            <Link className='nav-link' to='/Tables'>
              View Tables
            </Link>{" "}
            <i className='fa fa-list-alt'></i>
          </button>
          <button type='button' className='btn btn-danger'>
            <Link className='nav-link' to='/'>
              Home
            </Link>{" "}
            <i className='fa fa-id-card-o'></i>
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
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <br></br>
      </div>
    );
  }
}
export default Reservation;
