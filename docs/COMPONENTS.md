## Components

### `Visibility`
*Controls children to be rendered or not.*

Properties:
* `visible (bool)`
* `wrapper (string)`
* `reverse (bool)`

If the `wrapper` property is not defined and the `Visibility` has more than 1 child,
a `div` will be used as the "wrapper" component by default.
However, if the `wrapper` prop is not defined and there is only 1 child,
that child will be rendered alone without a component wrapping it.

The `reverse` property simply reverses the order of children.

If `visible` is false, `null` is rendered.

### `Switch`
*Yields n-th child from the children array.*

Properties:
* `index (number)`
* `wrapper (string)` (see Visibility.wrapper)
* `reverse (bool)`   (see Visibility.reverse)

If `index` is out of bound, `null` is rendered.

### `Desktop` and `Mobile`
*Controls rendering for desktop and mobile devices respectively.*

Properties:
* `wrapper (string)`
* `wrapper (string)` (see Visibility.wrapper)
* `reverse (bool)`   (see Visibility.reverse)

See `Visibility.wrapper` for this property description.

When user's device is recognized as a mobile device, `Mobile` renders its children.
Alternatively, `Desktop` component renders its children when that condition is not met.
 
### `Repeat`
*Renders the given node `count` times (using `React.cloneElement`).*

Properties:
* `count (number)`
* `wrapper (string)` (see Visibility.wrapper)
* `reverse (bool)`   (see Visibility.reverse)

If `count` is out of bound (<=0), `null` is rendered.
The resulted array is automatically wrapped unless `count` is 1.
Every cloned element is given a unique key. 
