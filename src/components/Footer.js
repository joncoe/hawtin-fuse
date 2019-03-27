import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav className="social-links">
          <ul className="list-unstyled">
            <li><a href="https://www.facebook.com/Plus8Records/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/plus8records" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/plus8records" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </nav>
        &copy; 2019 <a href="http://www.plus8.com">PLUS8 Records</a> | &copy; 2019 <a href="https://thevinylfactory.com/product/fuse/" target="_blank" rel="noopener noreferrer">The Vinyl Factory</a>
      </footer>
    );
  }
}

export default Footer;