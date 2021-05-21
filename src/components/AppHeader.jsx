import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from '../logo.png';

export const AppHeader = (props) => {

  return (
    <div>
      <div>
        <Image src={logo} style={{ float: "right", margin: "1rem ", width: "100px", height: "100px" }} />
        <h1 style={{ textAlign: 'center', padding: "2rem 0" }}>CatWorkers List</h1>
      </div>
      <div style={{ padding: '3rem' }}>
        <span style={{ fontSize: '24px', padding: '40px' }}>Find workers by title: </span>
        <input
          type="text"
          onChange={props.keywords} />
      </div>
    </div >
  );
};
