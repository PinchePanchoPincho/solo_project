import React, { Component } from 'react';
import { Link } from '@reach/router';
import ballimg from '../files/ball1.svg';
import chatimg from '../files/chat1.svg';
import profile from '../mocks/profile';


// import profilimg from '../files/nadal1.jpg';


class Nav extends Component {

  render () {

    const myStyle = {
      backgroundImage: `url(${profile.img})`

    }





    return (
      <div className="navbar">
        <Link to="profile">
          <div className="navbutton button profilpic" style={myStyle} alt="user"></div>
        </Link>
        <Link to="/">
          <img className="navbutton button" src={ballimg} alt="matching"></img>
        </Link>
        <Link to="mymatches">
          <img className="navbutton button" src={chatimg} alt="chat"></img>
        </Link>



      </div>
    );
  }
};

export default Nav;