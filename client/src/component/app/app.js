import React from 'react';
import Words from '../words/words.js';
import Form from '../form/form.js';
import ChatContext from '../context/chatContext.js';

class App extends React.Component {
  render() {
    return (
      <>
        <ChatContext>
          <Words/>
          <Form/>
        </ChatContext>
      </>
    );
  }
};

export default App;
