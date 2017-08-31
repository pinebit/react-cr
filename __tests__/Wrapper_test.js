import React from 'react';
import renderer from 'react-test-renderer';
import Wrapper from '../src/Wrapper';

it('Wrapper should reverse children when reverse is enabled', () => {
  const tree = renderer.create(
    <Wrapper reverse>
      <h1>Test1</h1>
      <h1>Test2</h1>
      <h1>Test3</h1>
    </Wrapper>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Wrapper should not reverse children when reverse is undefined', () => {
  const tree = renderer.create(
    <Wrapper>
      <h1>Test1</h1>
      <h1>Test2</h1>
      <h1>Test3</h1>
    </Wrapper>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Wrapper does not render when children is null', () => {
  const tree = renderer.create(
    <Wrapper>
      {null}
    </Wrapper>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
