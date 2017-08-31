import React from 'react';
import renderer from 'react-test-renderer';
import Visibility from '../src/Visibility';

it('Visibility renders correctly when visible is false', () => {
  const tree = renderer.create(
    <Visibility visible={false}><h1>Test</h1></Visibility>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Visibility renders correctly when visible is true', () => {
  const tree = renderer.create(
    <Visibility visible><h1>Test</h1></Visibility>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
