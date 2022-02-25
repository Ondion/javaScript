import React, { Component } from 'react';

import '../css/NewTopic.css';

export default class NewTopic extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      level: 1,
      thumbnail: '',
      projectFinished: false,
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;

    this.setState({ [name]: value }, () => this.validateForm());
  }

  handleSubmit(e) {
    const { addNewTopic } = this.props;
    e.preventDefault();
    addNewTopic(this.state);
    this.setState({
      title: '',
      level: 1,
      thumbnail: '',
      projectFinished: false,
      isDisabled: true,
    });
  }

  validateForm() {
    const { title, thumbnail } = this.state;
    if (title === '' || thumbnail === '') {
      this.setState({ isDisabled: true });
    } else {
      this.setState({ isDisabled: false });
    }
  }

  render() {
    const {
      state: {
        title, level, thumbnail, projectFinished, isDisabled,
      }, handleChange, handleSubmit,
    } = this;

    return (
      <form className="new-topic-form" id="new-topic-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" onChange={handleChange} value={title} />
        </label>
        <label htmlFor="level">
          Level:
          <input type="number" min="1" max="5" name="level" id="level" onChange={handleChange} value={level} />
        </label>
        <label htmlFor="thumbnail">
          Image url:
          <input type="text" name="thumbnail" id="thumbnail" onChange={handleChange} value={thumbnail} />
        </label>
        <label htmlFor="projectFinished">
          Projeto foi finalizado?
          <input
            id="projectFinished"
            type="checkbox"
            name="projectFinished"
            onChange={this.handleChange}
            value={projectFinished}
          />
        </label>
        <button disabled={isDisabled} type="submit">Adicionar tópico</button>
      </form>
    );
  }
}
