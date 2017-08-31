import React from 'react';

const renderChildren = (children, props = {}) => {
  const childrenCount = React.Children.count(children);
  const wrapChildren = childrenCount > 1 ||
    typeof children === 'string' ||
    (Array.isArray(children) && childrenCount === 1) ||
    children === undefined;

  if (wrapChildren) {
    return (
      // eslint-disable-next-line
      <div style={props.style || { display: 'inline-block' }} {...props}>
        {children}
      </div>
    );
  } else if (childrenCount) {
    return children;
  }

  return null;
};

export default renderChildren;
