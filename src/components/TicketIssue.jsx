import React from 'react';
import PropTypes from 'prop-types';

function TicketIssue(props) {

  return (
    <div>
      <h1>{props.requestedTicketIssue}</h1>
    </div>
  );
}

TicketIssue.propTypes = {
  requestedTicketIssue: PropTypes.string
};

export default TicketIssue;
