import React from 'react';
import { firestore } from '../firebase/firebase.utils';
import Icons from '../helpers/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Todo({ todo, currentUser }) {
  Icons();

  const handleDeleteTodo = (id) => {
    const todoRef = firestore.doc(`users/${currentUser.id}/todos/${id}`);
    todoRef
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  };

  const handleCompleteTodo = (id) => {
    const todoRef = firestore.doc(`users/${currentUser.id}/todos/${id}`);
    if (todo.complete === true) {
      todoRef
        .update({
          complete: false,
        })
        .then(() => {
          console.log('Document successfully false');
        })
        .catch((error) => {
          console.error('Error updating document: ', error);
        });
    } else {
      todoRef
        .update({
          complete: true,
        })
        .then(() => {
          console.log('Document successfully true ');
        })
        .catch((error) => {
          console.error('Error updating document: ', error);
        });
    }
  };

  const handleEditTodo = (id) => {
    console.log('edit');
  }
  return (
    <div className='todo-wrapper'>
      <div className='todo-item'>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <div className='icon-wrapper'>
          <div className='icon' onClick={() => handleCompleteTodo(todo.ids)}>
            {todo.complete ? (
              <FontAwesomeIcon icon='check-square' />
            ) : (
              <FontAwesomeIcon icon={['far', 'circle']} />
            )}
          </div>
          <div className='icon' onClick={() => handleDeleteTodo(todo.ids)}>
            <FontAwesomeIcon icon='trash' />
          </div>
          <div className='icon' onClick={() => handleEditTodo(todo.ids)}>
            <FontAwesomeIcon icon='edit' />
          </div>
        </div>
      </div>
    </div>
  );
}
