import React, { Component } from 'react';
import { firestore } from '../../firebase/firebase.utils';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: '',
      title: '',
      description: '',
      complete: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {
      createdAt: new Date(),
      ids: this.state.ids,
      title: this.state.title,
      description: this.state.description,
      complete: this.state.complete,
    };
    const todoRef = firestore.collection(
      `users/${this.props.currentUser.id}/todos`
    );
    todoRef.add(todo).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    });
    this.setState({
      title: '',
      description: '',
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            name='title'
            placeholder='task name'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='description'
            placeholder='task description'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Save</button>
        </form>
      </div>
    );
  }
}
