import React from 'react';
import firebase from '../util/firebase';
import Icons from "../helpers/icon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Todo({ todo }) {
  Icons();

  const handleProgress = () => {
    console.log('test');
  }

  const handleDeleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  }

  const handleComplete = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete
    });
    handleProgress();
  }
  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      <div className="icon-wrapper">
        <div className="icon" onClick={handleComplete}>{todo.complete ? <FontAwesomeIcon icon="check-square" /> : <FontAwesomeIcon icon={["far", "circle"]} />}</div>
        <div className="icon" onClick={handleDeleteTodo}><FontAwesomeIcon icon="trash" /></div>
      </div>
    </div>
  )
}
