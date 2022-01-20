import React, { Component } from 'react';
import notFoundImage from './NotFound404.png';
export default class NotFound404 extends Component {
  render() {
      return <div style={{minHeight: "80vh", display: 'flex', flexWrap: "wrap", justifyContent: "center", alignItems: 'center'}}>
          <img style={{maxHeight: "70vh"}} src={notFoundImage} alt="not found" />
          <h1 style={{color: "#212F4D", textAlign: "center"}}>OPPS! <br /> Page not found</h1>
    </div>;
  }
}
