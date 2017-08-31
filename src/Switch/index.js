import React from 'react';
import Wrapper from '../Wrapper';

const Switch = ({ children, index, ...wrapperProps }) => {
  const childrenCount = React.Children.count(children);
  if (index >= childrenCount) {
    return null;
  }

  return <Wrapper {...wrapperProps}>{children[index]}</Wrapper>;
};

Switch.propTypes = {
  index: React.PropTypes.number.isRequired
};

export default Switch;
