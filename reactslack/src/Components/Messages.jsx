import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
  if (!messages || messages.length === 0) {
    return <p>Start conversation here!</p>;
  }

  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <Message key={index} msg={msg} />
      ))}
    </div>
  );
};

export default Messages;
