import React from 'react';
import renderer from 'react-test-renderer';
import Repeat from '../src/Repeat';

it('Repeat renders children 3 times', () => {
  const tree = renderer.create(
    <Repeat count={3}>
      <h1>1</h1>
    </Repeat>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Repeat does not render when count is zero or negative', () => {
  const tree = renderer.create(
    <Repeat count={0}>
      <h1>1</h1>
    </Repeat>
  ).toJSON();

  expect(tree).toMatchSnapshot();

  const tree2 = renderer.create(
    <Repeat count={-1}>
      <h1>1</h1>
    </Repeat>
  ).toJSON();

  expect(tree2).toMatchSnapshot();
});

it('Repeat does not render when children are array', () => {
  const tree = renderer.create(
    <Repeat count={3}>
      <h1>1</h1>
      <h1>2</h1>
    </Repeat>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Repeat does not wrap when count is one', () => {
  const tree = renderer.create(
    <Repeat count={1}>
      <h1>1</h1>
    </Repeat>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
