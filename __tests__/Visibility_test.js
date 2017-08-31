import React from 'react';
import renderer from 'react-test-renderer';
import Visibility from '../src/Visibility';

it('Visibility renders correctly when visible is false', () => {
  const tree = renderer.create(
    <Visibility visible={false}>
      <h1>Test</h1>
    </Visibility>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Visibility renders correctly when visible is true', () => {
  const tree = renderer.create(
    <Visibility visible>
      <h1>Test</h1>
    </Visibility>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Visibility renders with header wrapper', () => {
  const tree = renderer.create(
    <Visibility visible wrapper="header">
      <h1>Test</h1>
    </Visibility>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Visibility renders with wrapper when many children', () => {
  const tree = renderer.create(
    <Visibility visible>
      <h1>Test1</h1>
      <h1>Test2</h1>
    </Visibility>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
