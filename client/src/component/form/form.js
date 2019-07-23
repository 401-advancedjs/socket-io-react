import React from 'react';
import io from 'socket.io-client';
import { ChatContext } from '../context/chatContext.js';

export default class Form extends React.Component {
  static contextType = ChatContext;

  render() {
    return (
      <>
        <form onSubmit  = { event => this.context.handleSubmit(event) }>
          <input
            name        = "typedInput"
            placeholder = "New Words"
            onChange    = { event => this.context.handleNewWords(event) }
          />
        </form>
      </>
    );
  }
}

