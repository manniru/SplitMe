import React from 'react';
import {StyleRoot, Style} from 'radium';

import Modal from 'Main/Modal/Modal';
import Snackbar from 'Main/Snackbar/Snackbar';

const rules = {
  html: {
    background: '#eee',
    WebkitFontSmoothing: 'antialiased',
  },
  body: {
    margin: 0,
    fontFamily: 'Roboto, sans-serif',
  },
};

const Main = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
  },
  render() {
    const {
      children,
    } = this.props;

    return (
      <StyleRoot>
        {children}
        <Modal />
        <Snackbar />
        <Style rules={rules} />
      </StyleRoot>
    );
  },
});

export default Main;
