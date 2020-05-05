import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import local from '../../data/local';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: local
    }
  }

  render () {
    return (
      <main className="app">
      <h1>What's New?</h1>
        <NewsContainer news={this.state.local} />
      </main>
    );
  }
}

export default App;
