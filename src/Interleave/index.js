import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';

const Interleave = ({ separator, first, last, children, ...wrapperProps }) => {
  if (!children || !separator) {
    return null;
  }

  const content = [];
  children.forEach((child, index) => {
    const key = child.key;
    if (key) {
      content.push(child);
      const lastChild = index === children.length - 1;
      if (!lastChild) {
        content.push(React.cloneElement(separator, { key: `${key}_separator` }));
      }
    }
  });

  return (
    <Wrapper {...wrapperProps}>
      {first && React.cloneElement(separator, { key: 'first_separator' })}
      {content}
      {last && React.cloneElement(separator, { key: 'last_separator' })}
    </Wrapper>
  );
};

Interleave.propTypes = {
  separator: PropTypes.node.isRequired,
  first: PropTypes.bool,
  last: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Interleave;
