import React, { Component } from 'react'
import Lists from './components/lists';
import TaskRender from './components/task-render';
import Progress from './components/progress';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="test">
        <Lists />
        <TaskRender />
      </div>
    )
  }
}
