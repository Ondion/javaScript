import React, { Component } from "react";

import "../css/NewTopic.css";

export default class NewTopic extends Component {
  render() {
    return (
      <form className="new-topic-form">
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="level">
          Level:
          <input type="number" min="1" max="5" name="level" id="level" />
        </label>
        <label htmlFor="thumbnail">
          Image url:
          <input type="text" name="thumbnail" id="thumbnail" />
        </label>
        <label htmlFor="projectFinished">
          Projeto foi finalizado?
          <input id="projectFinished" type="checkbox" name="projectFinished" />
        </label>
        <button type="submit">Adicionar tópico</button>
      </form>
    );
  }
}
