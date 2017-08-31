import React from 'react';
import Wrapper from '../Wrapper';

const Repeat = ({ count, children, ...wrapperProps }) => {
  if (!children || count <= 0 || Array.isArray(children)) {
    return null;
  }

  if (count === 1) {
    return (
      <Wrapper {...wrapperProps}>
        {children}
      </Wrapper>
    );
  }

  const fakeArray = Array.from(new Array(count)).map((x, index) => index + 1);

  return (
    <Wrapper {...wrapperProps}>
      {fakeArray.map(key => React.cloneElement(children, { key }))}
    </Wrapper>
  );
};

Repeat.propTypes = {
  count: React.PropTypes.number.isRequired,
  children: React.PropTypes.node
};

export default Repeat;
