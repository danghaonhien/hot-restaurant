import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";


class Details extends Component {
    state = {
        name: "",
        email: "",
        phone: ""
    };


    async componentDidMount() {
        console.log("aaaaaaa");
        try {
            const { data } = await axios.get(`/api/customer/${this.props.match.params.customerId}`);
            console.log("ahmed", data);
            this.setState({ name: data.name, email: data.email, phone: data.phone });
        } catch (e) {
            console.log(e);
        }
    }
    

    render() {
        //console.log(this.props);
        console.log(this.state);
        return (
            <div className="details">
                <br></br>
                <ul>
                    <li className="list-group-item list-group-item-danger ">Name: {this.state.name}</li>
                    <li className="list-group-item list-group-item-warning ">Email: {this.state.email}</li>
                    <li className="list-group-item list-group-item-info ">Phone: {this.state.phone}</li>
                </ul>



            </div>
        );
    }
}

export default Details;

