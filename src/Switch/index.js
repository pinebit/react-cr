import React from 'react';

const Switch = ({ children, index }) => {
  const childrenCount = React.Children.count(children);
  if (index >= childrenCount) {
    return null;
  }

  return children[index];
};

Switch.propTypes = {
  index: React.PropTypes.number.isRequired
};

export default Switch;
