import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';

const Switch = ({ children, index, ...wrapperProps }) => {
  const childrenCount = React.Children.count(children);

  let content = null;
  if (Array.isArray(index)) {
    content = index.filter(i => i >= 0 && i < childrenCount).map(i => children[i]);
    if (content.length === 1) {
      content = content[0];
    }
  } else {
    if (index >= childrenCount) {
      return null;
    }
    content = children[index];
  }

  return <Wrapper {...wrapperProps}>{content}</Wrapper>;
};

Switch.propTypes = {
  index: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]).isRequired
};

export default Switch;
