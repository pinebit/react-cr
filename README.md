# react-cr

A tiny library for conditional rendering inside JSX.

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

```

## Components

[See detailed specification](/components)

## License

*react-cr* is available under MIT. See LICENSE for more details.
