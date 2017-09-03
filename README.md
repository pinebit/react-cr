# react-cr

A tiny library for conditional rendering in JSX.

The purpose of this library to offer a few components that will replace your JS-in-JSX with behavioral components.

For example, instead of writing conditions like this:
```jsx harmony
{this.state.isLoading && <Loading />}
```

You can use one of react-cr components:
```jsx harmony
<Visibility visible={this.state.isLoading}>
  <Loading />
</Visibility>
```

Similar to this example, the library offers: `Switch, Mobile, Desktop, Repeat, Interleave`.
Check [the complete spec here](https://pinebit.github.io/react-cr).

## Basic Usage

`npm install --save react-cr`

```jsx harmony
import { Visibility, Switch, Mobile, Desktop, Repeat, Interleave } from 'react-cr';

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
