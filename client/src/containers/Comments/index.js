import React, { Component } from "react";
import ListComments from "./../../component/ListComments";
import axios from "axios";
import "./index.css";
class Comments extends Component {
  state = {
    input: "",
    comments: [],
  };
  async componentDidMount() {
    try {
      // Destructure data from response, rename it into comments
      axios.get("/api/comments").then((response) => {
        console.log(response.data);
        this.setState({ comments: response.data });
      });
      // const { data: comments } = await axios.get('http:/localhost:3001/comments');
      // this.setState({ comments });
    } catch (e) {
      console.log(e);
    }
  }
  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/comments", { comments: this.state.input }).then((res) => {
      this.setState({ comments: res.data, input: "" });
    });
  };
  render() {
    return (
      <div className='container'>
        <h1>Send us your feedback!</h1>
        <input
          className='form-control'
          onChange={this.handleInputChange}
          value={this.state.input}
        />
        <button onClick={this.handleSubmit} className='btn btn-info'>
          Send
        </button>
        <ListComments items={this.state.comments} />
      </div>
    );
  }
}
export default Comments;
