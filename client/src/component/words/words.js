import React from 'react';
import { ChatContext } from '../context/chatContext.js';
import './words.css';

export default class Words extends React.Component{
  static contextType = ChatContext;
  render(){
    return (
      <>
        <ul>
            { 
              this.context.words.map(word => <li key = { word } >{ word }</li>)
            }
        </ul>
      </>
    );
  }
}
