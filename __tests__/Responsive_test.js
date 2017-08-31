import React from 'react';
import renderer from 'react-test-renderer';
import { Desktop, Mobile } from '../src/Responsive';

it('Desktop renders correctly with implicit wrapping', () => {
  const tree = renderer.create(
    <Desktop>
      <h1>1</h1>
      <h1>2</h1>
    </Desktop>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Desktop renders correctly with header wrapper', () => {
  const tree = renderer.create(
    <Desktop wrapper="header">
      <h1>1</h1>
    </Desktop>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Desktop renders correctly without wrapping', () => {
  const tree = renderer.create(
    <Desktop>
      <h1>1</h1>
    </Desktop>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Mobile does not render because we are on desktop', () => {
  const tree = renderer.create(
    <Mobile>
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
    </Mobile>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
