import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './style.css'


class TodoListItem extends Component {
    state = {
        customer: {
            name: '',
            email: '',
            phone: ''
        },
        name: '',
        email: '',
        phone: ''
      
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

    async componentDidMount() {
        try {
            const { data } = await axios.get(`/api/customer/${this.props.match.params.customerId}`);
            this.setState({ customer: data });
        } catch(e) {
            console.log(e);
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        try {
            const res =  await axios.patch(`/api/customer/${this.props.match.params.customerId}`, {name: this.state.name , email: this.state.email ,phone: this.state.phone});
            const { data } =  await axios.get(`/api/customer/${this.props.match.params.customerId}`);
            this.setState({customer : data , name: "" , email: "" , phone: "" });
            // this.setState({ todo: data });
        } catch(e) {
           console.log(e);
        }
    }
    render() {
        console.log(this.props);
        const { customer } = this.state;
        // console.log(this.state.name);
        // console.log(this.state.email);
        // console.log(this.state.phone);
        
        return (
            <div className= "container" >
            <br></br>
            <br></br>
                <p >Update The Information By Filling The Inputs Area And Hit Submit</p>
                <hr></hr>
                <br></br>
                <ul className="list1">
                    <li className="list-group-item list-group-item-danger">Name: {customer.name}</li>
                    <li className="list-group-item list-group-item-warning">Email: {customer.email}</li>
                    <li className="list-group-item list-group-item-info">Phone: {customer.phone}</li>
                </ul>



            <form className='form1'>
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
            {/* <button onClick={this.handleSubmit}>Submit Change</button> */}
            <Button variant="outline-primary" onClick={this.handleSubmit}>Submit</Button>
           
          </form>
                </div>
        );
    }
}

export default TodoListItem;
