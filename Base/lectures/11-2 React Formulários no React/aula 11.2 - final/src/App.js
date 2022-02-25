import React, { Component } from 'react';

import Header from './components/Header';
import TopicCard from './components/TopicCard';
import NewTopic from './components/NewTopic';

import data from './data';

import './css/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      topics: data,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.addNewTopic = this.addNewTopic.bind(this);
    this.removeTopic = this.removeTopic.bind(this);
  }

  handleSearch({ target: { value } }) {
    this.setState({ searchInput: value });
  }

  addNewTopic(topic) {
    this.setState((prevState) => ({ topics: [...prevState.topics, topic] }));
  }

  removeTopic(title) {
    const { topics } = this.state;
    this.setState({ topics: topics.filter((item) => item.title !== title) });
  }

  render() {
    const {
      searchInput,
      topics,
    } = this.state;

    return (
      <div className="main-page">
        <Header searchInput={searchInput} handleSearch={this.handleSearch} />

        <NewTopic addNewTopic={this.addNewTopic} />

        <div className="topic-list">
          {
            topics
              .filter((topic) => topic.title.includes(searchInput))
              .map((topic) => (
                <div className="topic-content" key={topic.title}>
                  <TopicCard
                    topic={topic}
                    key={topic.title}
                    removeTopic={this.removeTopic}
                  />
                </div>
              ))
          }
        </div>
      </div>
    );
  }
}
