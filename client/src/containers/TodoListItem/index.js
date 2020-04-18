import React, { Component } from 'react';
import axios from 'axios';


class TodoListItem extends Component {
    state = {
        todo: {
            title: "",
            id: '',
            completed: ''
        },
        title: '',
        error: "",
    };

    handleChange = event => {
        this.setState({ title : event.target.value });
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get(`/api/todos/${this.props.match.params.todoId}`);
            this.setState({ todo: data, e: '' });
        } catch(e) {
            console.log(e);
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        try {
            const res =  await axios.patch(`/api/todos/${this.props.match.params.todoId}`, {title: this.state.title});
            const { data } =  await axios.get(`/api/todos/${this.props.match.params.todoId}`);
            this.setState({ todo: data, e: '', title: '' });
            // this.setState({ todo: data });
        } catch(e) {
            this.setState({ error: e.toString() });
        }
    }
    render() {
        console.log(this.state);
        const { todo } = this.state;
        return (
            <div>
                { this.state.error ? <h1>{this.state.error}</h1> : ""}
                <h1>Title: {todo.title}</h1>
                <h1>Id: {todo.id}</h1>
                <h1>Completed:{todo.completed}</h1>
                <input 
                    onChange={this.handleChange}
                    value={this.state.title}/>
                <button type="submit" onClick={this.handleSubmit}>Submit Change</button>
            </div>
        );
    }
}

export default TodoListItem;

