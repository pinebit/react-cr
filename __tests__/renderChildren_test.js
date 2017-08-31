import React from 'react';
import renderChildren from '../src/utils/renderChildren';

it('renderChildren yields null for null', () => {
  const tree = renderChildren(null);
  expect(tree).toBeNull();
});

it('renderChildren yields single node child', () => {
  const children = <h1>Test</h1>;
  const tree = renderChildren(children);
  expect(tree).toBe(children);
});

it('renderChildren yields wrapped single string child', () => {
  const children = 'Test';
  const tree = renderChildren(children);
  expect(tree).toMatchSnapshot();
});

it('renderChildren yields wrapped multiple children', () => {
  const children = React.Children.toArray([
    <h1 key={1}>Test1</h1>,
    <h2 key={2}>Test2</h2>
  ]);
  const tree = renderChildren(children);
  expect(tree).toMatchSnapshot();
});
