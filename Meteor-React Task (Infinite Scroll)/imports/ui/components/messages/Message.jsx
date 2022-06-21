import React from "react";

export const Message = ({ message }) => {
  return (
    <div className="message">

      <div className="d-flex flex-row justify-content-between align-items-center py-2">

        <p className="source">{message.source}</p>
        
        <span className={[
          'type', 'badge',
          message.type == 'Error' ? 'bg-danger' : '',
          message.type == 'Warning' ? 'bg-warning' : '',
          message.type == 'Info' ? 'bg-info' : '',
          message.type == 'Verbose' ? ' bg-dark' : '',
          message.type == 'Success' ? 'bg-success' : '',
          message.type == 'Log' ? 'bg-secondary' : '',
        ].join(' ')}>
          {message.type}
        </span>
      </div>

      <p className="text">{message.text}</p>
      <p className="date">{message.date}</p>
    </div>
  );
};
