import React, { Component } from 'react';

import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';

import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import health from '../../data/health';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topicSelected: local,
      local: local,
      science: science,
      technology: technology,
      entertainment: entertainment,
      health: health,
      topicTitle: 'local'
    }
  }

  filterTopics = (topicValue) => {
    this.setState({topicSelected: this.state[topicValue], topicSelectedTitle: topicValue})
  }

  searchNews = (searchInput) => {
    const results = this.state[this.state.topicTitle]
    .filter(news => {
      return (
        news.description.toLowerCase().includes(searchInput) ||
        news.headline.toLowerCase().includes(searchInput))
    })
    this.setState({topicSelected: results})
  }

  render () {
    return (
      <main className="app">
      <h1>What's <span className='highlight'>New?</span></h1>
        <Menu filterTopics={this.filterTopics} newsData={this.state.data} />
        <SearchForm searchNews={this.searchNews} />
        <NewsContainer news={this.state.topicSelected} />
      </main>
    );
  }
}

export default App;
