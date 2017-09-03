import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';

const Visibility = ({ visible, ...wrapperProps }) => {
  if (!visible) {
    return null;
  }

  return <Wrapper {...wrapperProps} />;
};

Visibility.defaultProps = {
  visible: true
};

Visibility.propTypes = {
  visible: PropTypes.bool
};

export default Visibility;
