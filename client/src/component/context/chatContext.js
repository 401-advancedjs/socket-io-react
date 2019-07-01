import React from 'react';
import socketIOClient from 'socket.io-client';

export const ChatContext = React.createContext();

const API_URL = 'http://localhost:3000';

const socket  = socketIOClient.connect(API_URL);

export default class ChatContextProvider extends React.Component{
  constructor(props){
    super(props);
    this.state = {};

    this.state.words      = [];
    this.state.typedInput = '';

    this.state.updateWords    = this.updateWords;
    this.state.handleSubmit   = this.handleSubmit;
    this.state.handleNewWords = this.handleNewWords;
    socket.on('incoming', (payload) => this.updateWords(payload));

  }

  updateWords = words => {
    this.setState(oldState => ({
      words: [...oldState.words, words]
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    socket.emit('chat', this.state.typedInput);
  };

  handleNewWords = event => {
    this.setState({ typedInput: event.target.value });
  };

  render(){
    return(
      <ChatContext.Provider value = { this.state }>
        { this.props.children }
      </ChatContext.Provider>
    );
  }
}