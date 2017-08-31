import React from 'react';

const Visibility = ({ children, visible, wrapper, ...wrapperProps }) => {
  if (!visible) {
    return null;
  }

  const useWrapper = React.Children.count(children) > 1;
  if (useWrapper) {
    const type = wrapper || 'div';
    return React.createElement(type, wrapperProps, children);
  }

  return children;
};

Visibility.defaultProps = {
  visible: true,
  wrapper: undefined
};

Visibility.propTypes = {
  visible: React.PropTypes.bool,
  wrapper: React.PropTypes.string
};

export default Visibility;
