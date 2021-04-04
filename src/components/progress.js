import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.handleProgressBar = this.handleProgressBar.bind(this);
    this.handleProgressUpdate = this.handleProgressUpdate.bind(this);
  }

  handleProgressBar() {
    if (!this.props.todoList) return null;
    const {todoList} = this.props;
    var count = todoList.reduce(function (n, list) {
      return n + (list.complete === true);
    }, 0);
    return (count / todoList.length) * 100;
  }

  handleProgressUpdate() {
    if (!this.props.todoList) return null;
    const {todoList} = this.props;
    var count = todoList.reduce(function (n, list) {
      return n + (list.complete === true);
    }, 0);
    return count;
  }

  handleLength() {
    if (!this.props.todoList) return null;
    const {todoList} = this.props;
    return todoList.length;
  }

  render() {
    if (this.props === null) return null;
    return (
      <div>
        <div className="progress-update">{this.handleProgressUpdate()} / {this.handleLength()}</div>
        <ProgressBar now={this.handleProgressBar()} />
      </div>
    )
  }
}
