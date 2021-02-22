import React, { Component } from 'react';
import TaskRender from './task-render';
import firebase from '../util/firebase';

export default class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {
      title: this.state.title,
      description: this.state.description
    }
    const todoRef = firebase.database().ref('Todo');
    firebase.database().ref('Todo').push(todo);
    this.setState ({
      title: '',
      description: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            placeholder="task name"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="task description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Save</button>
        </form>
        <TaskRender />
      </div>
    )
  }
}
