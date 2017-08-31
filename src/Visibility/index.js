import React from 'react';
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
  visible: React.PropTypes.bool
};

export default Visibility;
