import React, { Component } from 'react';
import { firestore } from '../firebase/firebase.utils';

import Todo from './todo';
import Progress from './progress';

export default class TaskRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    }
  }

  componentDidMount() {
    if (this.props.currentUser === null) return null;
    const todoRef = firestore.collection(`users/${this.props.currentUser.id}/todos`);

    todoRef.onSnapshot((querySnapshot) => {
      const todoList = [];
      querySnapshot.forEach((doc) => {
        const todoData = doc.data();
        todoData.ids = doc.id;
        console.log(todoData);
        todoList.push(todoData);
      });
      todoList.sort((a, b) => a.createdAt.seconds - b.createdAt.seconds);
      this.setState({
        todoList: todoList
      })
      console.log('Todolists', todoList);
    });
  }

  render() {
    return (
      <div>
        <Progress todoList={this.state.todoList} />
        {this.state.todoList
          ? this.state.todoList.map((todo, index) => (
              <Todo todo={todo} key={index} currentUser={this.props.currentUser} />
            ))
          : ''}
      </div>
    );
  }
}
