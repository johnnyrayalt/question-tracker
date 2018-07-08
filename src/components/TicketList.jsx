import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  return (
    <div>
      <hr/>
      {props.showFullTicketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          handleShowingSelectedTicketIssue={props.handleShowingSelectedTicketIssue}
          timeOpen={ticket.timeOpen}
          key={ticket.id}
        />
      )}
    </div>
  );
}

TicketList.propTypes = {
  showFullTicketList: PropTypes.array,
  handleShowingSelectedTicketIssue: PropTypes.func
};

export default TicketList;
