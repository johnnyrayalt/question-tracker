import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className='headerContainer'>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <style jsx>{`
          .headerContainer {
            text-align:center;
          }
      `}</style>
    </div>

  );
}

export default Header;
