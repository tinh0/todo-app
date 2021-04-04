import React from 'react';
import AddTodo from '../../components/add-todo/add-todo.component';
import TaskRender from '../../components/task-render';

import { auth } from '../../firebase/firebase.utils';

import './todopage.styles.scss';

const TodoPage = ({ currentUser }) => (
  <div className='todopage'>
    <div onClick={() => auth.signOut()}>Todo Page</div>
    <AddTodo currentUser={currentUser} />
    <TaskRender currentUser={currentUser} />
  </div>
);

export default TodoPage;
