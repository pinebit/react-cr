## Components

### `Visibility`
*Controls children to be rendered or not.*

Properties:
* `visible (bool)`
* `wrapper (string)`

If the `wrapper` property is not defined and the `Visibility` has more than 1 child,
a `div` will be used as the "wrapper" component by default.
However, if the `wrapper` prop is not defined and there is only 1 child,
that child will be rendered alone without a component wrapping it.

If `visible` is false, `null` is rendered.

### `Switch`
*Yields n-th child from the children array.*

Properties:
* `index (number)`

If `index` is out of bound, `null` is rendered.
