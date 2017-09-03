## Components

See `samples/index.js` for the sample code, or `run npm samples` to see components in action.

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
*Yields children whose index is matching the given `index`.*

Properties:
* `index (number|array of numbers)`
* `wrapper (string)` (see Visibility.wrapper)
* `reverse (bool)`   (see Visibility.reverse)

If `index` is out of bound, `null` is rendered.
When `index` is array of numbers, only valid indices are used. 

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

### `Interleave`
*Renders given children by inserting `separator` in between.*
 
Properties:
* `separator (node)`
* `first (bool)`
* `last (bool)`
* `wrapper (string)` (see Visibility.wrapper)
* `reverse (bool)`   (see Visibility.reverse)

Flags `first` and `last` specify whether it needs to prepend and append the `separator`.
`separator` is any node that will be cloned with `React.cloneElement`.

> Important: children must have `key`s assigned. Any children having no keys won't be rendered.
Separator nodes will get unique keys automatically, so you should not assign `key` to `separator`.
