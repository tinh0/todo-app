import React, { Component } from 'react'
import Lists from './components/lists';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="test">
        <Lists />

      </div>
    )
  }
}
