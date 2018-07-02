import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  function handleClick() {
    props.handleShowingSelectedTicketIssue(props.issue);
  }

  return (
    <div className='ticketContainer'>
      <h3 className='groupInfo' onClick={handleClick}>
        {props.location} - {props.names}
      </h3>
      <hr/>
      <style jsx>{`
          .ticketContainer {
            border-right:1px solid black;
            margin: 5% 30px 5% 100px;
          }

          .groupInfo:hover {
            cursor:pointer;
          }
            `}</style>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  onSelectingTicketIssue: PropTypes.func
};

export default Ticket;
