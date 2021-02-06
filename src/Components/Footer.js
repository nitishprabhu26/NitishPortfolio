import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul>
            <li>If you are interested in my work or if you like to collaborate or just say hello, feel free to contact me ♥️</li>
           </ul>

           <ul className="copyright">
              <li>Copyrights &copy; 2021 - Nitish Prabhu Kota. All rights reserved.</li>
              <li>Design by <a title="Nitish - LinkedIn" href="https://www.linkedin.com/in/NitishPrabhuKota/" target="_blank">Nitish Prabhu Kota</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
