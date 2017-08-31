import React from 'react';

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
  wrapper: React.PropTypes.string,
  reverse: React.PropTypes.bool
};

export default Wrapper;
