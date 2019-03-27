import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCartArrowDown);

class ShoppingCartButton extends Component {

  render() {
    return (
      <a href={this.props.url} className="icon-button" target="_blank" rel="noopener noreferrer">
        <span className="icon-button-container">
          <FontAwesomeIcon icon="cart-arrow-down" size="lg"/>
          <span className="icon-button-text">{this.props.urlText}</span>
        </span>
      </a>
    );
  }
}

export default ShoppingCartButton;