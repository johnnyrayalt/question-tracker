import React from 'react';
import TicketList from './TicketList';
import TicketIssue from './TicketIssue';
import PropTypes from 'prop-types';

function TicketDisplay(props) {
  return(
    <div className='ticketDisplayContainer'>
      <div>
        <TicketList className='ticketList'
          onSelectingTicketIssue={props.onSelectingTicketIssue}
          showFullTicketList={props.ticketList}
          handleShowingSelectedTicketIssue={props.handleShowingSelectedTicketIssue}/>
      </div>
      <TicketIssue className='ticketIssue' ticketIssue={props.ticketList}
        requestedTicketIssue={props.requestedTicketIssue}/>
      <style jsx>{`
          .ticketDisplayContainer {
            display:flex;
          }
          .ticketList {
            width:33%;
            margin: 10px;
          }
          .ticketIssue {

          }
            `}</style>
    </div>

  );
}

TicketDisplay.propTypes = {
  ticketList: PropTypes.array,
  onSelectingTicketIssue: PropTypes.func,
  requestedTicketIssue: PropTypes.string,
  handleShowingSelectedTicketIssue: PropTypes.func
};

export default TicketDisplay;
