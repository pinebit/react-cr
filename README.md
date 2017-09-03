# react-cr

A tiny library for conditional rendering in JSX.

## Basic Usage

`npm install --save react-cr`

```js
import { Visibility, Switch } from 'react-cr';

// control children visibility
<Visibility visible={this.state.showLogo}>
  <Logo />
</Visibility>

// select child by index
<Switch index={1}>
  <First />
  <Second />
</Switch>

// select child by multiple indices
<Switch index={[1, 10, 12, 43]}>
  {items.map(...)}
</Switch>

// repeat (clone) given n times 
<Repeat count={this.state.stars}>
  <RatingStar />
</Repeat>

// render for mobile (or Desktop) only
<Mobile>
  <MobileMenu />
</Mobile>

// interleaves children with the given separator
<Interleave wrapper="p" separator={<span>,</span>}>
  <span key="alpha">Alpha</span>
  <span key="beta">Beta</span>
  <span key="gamma">Gamma</span>
</Interleave>

```

## Components

[See detailed specification](https://pinebit.github.io/react-cr/#/components)

## License

*react-cr* is available under MIT. See LICENSE for more details.
