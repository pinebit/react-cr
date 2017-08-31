# react-cr

A simple tiny library for conditional rendering inside JSX.

## Basic Usage

`npm install --save react-cr`.

```js
import { Visibility } from 'react-cr';

const Foo = ({toggle}) => (
  <Visibility visible={toggle}>
    <h1>The toggle is set!</h1>
  </Visibility>
)
```

## License

*react-cr* is available under MIT. See LICENSE for more details.
