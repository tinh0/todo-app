import React, { useEffect, useState } from 'react';
import firebase from '../util/firebase';
import Todo from './todo';

export default function TaskRender() {
  const [todoList, setTodoList] = useState();
    useEffect(() => {
      const todoRef = firebase.database().ref('Todo');
      todoRef.on('value', (snapshot) => {
        const todos = snapshot.val();
        const todoList = [];
        for (let id in todos) {
          todoList.push(todos[id]);
        }
        console.log(todoList);
        setTodoList(todoList);
      });
    }, []);
  return (
    <div>
      {todoList
      ? todoList.map((todo, index) => <Todo todo={todo} key={index} />)
      : ''}
    </div>
  )
}
