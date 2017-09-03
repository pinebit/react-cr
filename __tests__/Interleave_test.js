import React from 'react';
import renderer from 'react-test-renderer';
import Interleave from '../src/Interleave';

it('Interleave renders children with separator', () => {
  const tree = renderer.create(
    <Interleave separator={<span>,</span>}>
      <span key="a">A</span>
      <span key="b">B</span>
      <span key="c">C</span>
    </Interleave>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Interleave renders children with separator and prepend the separator', () => {
  const tree = renderer.create(
    <Interleave separator={<span>,</span>} first>
      <span key="a">A</span>
      <span key="b">B</span>
      <span key="c">C</span>
    </Interleave>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Interleave renders children with separator and append the separator', () => {
  const tree = renderer.create(
    <Interleave separator={<span>,</span>} last>
      <span key="a">A</span>
      <span key="b">B</span>
      <span key="c">C</span>
    </Interleave>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Interleave does not render children without keys', () => {
  const tree = renderer.create(
    <Interleave separator={<span>,</span>}>
      <span>A</span>
      <span>B</span>
      <span>C</span>
    </Interleave>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('Interleave does not render with empty separator', () => {
  /* eslint-disable */
  console.error = function () {};
  const tree = renderer.create(
    <Interleave>
      <span key="abc">ABC</span>
    </Interleave>
  ).toJSON();
  /* eslint-enable */

  expect(tree).toMatchSnapshot();
});

it('Interleave does not render without children', () => {
  /* eslint-disable */
  console.error = function () {};
  const tree = renderer.create(
    <Interleave separator={<span>*</span>}>
    </Interleave>
  ).toJSON();
  /* eslint-enable */

  expect(tree).toMatchSnapshot();
});
