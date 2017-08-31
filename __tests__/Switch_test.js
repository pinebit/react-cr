import React from 'react';
import renderer from 'react-test-renderer';
import Switch from '../src/Switch';

it('Switch renders correctly when index is valid', () => {
  const tree = renderer.create(
    <Switch index={1}>
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
    </Switch>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Switch does not render when index is invalid', () => {
  const tree = renderer.create(
    <Switch index={7}>
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
    </Switch>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
