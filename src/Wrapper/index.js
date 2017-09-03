import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children, wrapper, reverse, ...wrapperProps }) => {
  if (!children) {
    return null;
  }

  const useWrapper = React.Children.count(children) > 1 || wrapper;
  if (useWrapper) {
    const type = wrapper || 'div';
    const _children = reverse ? [...children].reverse() : children;
    return React.createElement(type, wrapperProps, _children);
  }

  return children;
};

Wrapper.propTypes = {
  wrapper: PropTypes.string,
  reverse: PropTypes.bool
};

export default Wrapper;
