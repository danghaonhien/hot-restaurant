import React, { Component } from "react";
import ListComments from "./../../component/ListComments";
import "./index.css";
import API from "../../component/Utils/api";
class Comments extends Component {
  state = {
    input: "",
    reply: [],
    comments: [],
  };

  async componentDidMount() {
    this.getComments();
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    API.createComment({ comments: this.state.input }).then((res) => {
      this.setState({ comments: res.data, input: "" });
    });
    alert("Thank you for your feedback!");
  };

  handleReply = (commentId, commentText) => {
    const newReply = {
      reply: commentText,
      comment_id: commentId,
    };
    API.createReply(newReply).then((res) => {
      this.setState({ reply: res.data });
    });
  };

  getComments = () => {
    try {
      // Destructure data from response, rename it into comments
      API.getComment().then((response) => {
        this.setState({ comments: response.data });
      });
      API.getReply().then((res) => {
        this.setState({ reply: res.data });
      });
    } catch (e) {
      console.log(e);
    }
  };

  reRenderParent = () => {
    this.getComments();
  };

  render() {
    return (
      <div className='container'>
        <h1>Send us your feedback!</h1>
        <textarea
          placeholder='Write a comment ...'
          className='form-control'
          onChange={this.handleInputChange}
          value={this.state.input}
          name='input'
        />
        <button onClick={this.handleSubmit} className='btn btn-info'>
          Send
        </button>
        <ListComments
          renderParent={this.reRenderParent}
          reply={this.state.reply}
          handleInputChange={this.handleInputChange}
          items={this.state.comments}
          handleReply={this.handleReply}
        />
      </div>
    );
  }
}
export default Comments;
