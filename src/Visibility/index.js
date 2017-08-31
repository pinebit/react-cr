import React from 'react';
import renderChildren from '../utils/renderChildren';

const Visibility = (props) => {
  const { children, visible, ...otherProps } = props;
  return visible ? renderChildren(children, otherProps) : null;
};

Visibility.propTypes = {
  visible: React.PropTypes.bool
};

export default Visibility;
