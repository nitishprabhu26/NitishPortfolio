import React, { Component } from 'react';
import Jump from 'react-reveal/Jump';
import Typewriter from "typewriter-effect";

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            {/* <h1 className="responsive-headline">Hey There!</h1> */}
            <Jump>
               <h1>Hey There!</h1>
            </Jump>
            <h1 className="responsive-headline"><Typewriter onInit={(typewriter) => {
               typewriter.typeString("I'm Nitish. ")
                  .pauseFor(200)
                  .deleteChars(2)
                  .typeString(" Prabhu Kota.")
                  .pauseFor(3000)
                  .start(); }} options={{
                     loop: true,
                   }}
                  /></h1>
            <h2 style={{color:'#F06000'}}>Software Engineer at TCS.</h2>
            <h2 style={{color:'#F06000'}}>MS in Computer Science at The University of Texas at Arlington.</h2>
            <hr/>
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
