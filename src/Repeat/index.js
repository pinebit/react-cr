import React from 'react';
import PropTypes from 'prop-types';
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
  count: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default Repeat;
