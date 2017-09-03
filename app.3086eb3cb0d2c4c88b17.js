webpackJsonp([0],{298:function(e,n,t){var i=t(1),r=t(102);r.__esModule&&(r=r.default),e.exports=i.createClass({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(631)}},componentWillMount:function(){},render:function(){return i.createElement(r,Object.assign({},this.props,{content:this.state.content}))}})},299:function(e,n,t){var i=t(1),r=t(102);r.__esModule&&(r=r.default),e.exports=i.createClass({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(632)}},componentWillMount:function(){},render:function(){return i.createElement(r,Object.assign({},this.props,{content:this.state.content}))}})},300:function(e,n){},301:function(e,n){},303:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s=t(1),o=i(s),a=t(73),l=i(a),p=t(302),c=i(p),d=t(297);t(301),t(300);var u={},h=[{path:"/",title:"Introduction",component:t(298)},{path:"/components",title:"Components",component:t(299)}];l.default.render(o.default.createElement("div",null,o.default.createElement(c.default,{href:"https://github.com/pinebit/react-cr",bannerColor:"#fff",octoColor:"#000",width:80,height:80,direction:"right"}),o.default.createElement(d.Catalog,{imports:u,pages:h,specimens:{javascript:function(e){return o.default.createElement(d.CodeSpecimen,r({},e,{lang:"javascript"}))},js:function(e){return o.default.createElement(d.CodeSpecimen,r({},e,{lang:"javascript"}))},jsx:function(e){return o.default.createElement(d.ReactSpecimen,e)}},title:"react-cr v0.0.8"})),document.getElementById("app"))},631:function(e,n){e.exports='# react-cr\n\nA tiny library for conditional rendering in JSX.\n\n## Basic Usage\n\n`npm install --save react-cr`\n\n```js\nimport { Visibility, Switch } from \'react-cr\';\n\n// control children visibility\n<Visibility visible={this.state.showLogo}>\n  <Logo />\n</Visibility>\n\n// select child by index\n<Switch index={1}>\n  <First />\n  <Second />\n</Switch>\n\n// select child by multiple indices\n<Switch index={[1, 10, 12, 43]}>\n  {items.map(...)}\n</Switch>\n\n// repeat (clone) given n times \n<Repeat count={this.state.stars}>\n  <RatingStar />\n</Repeat>\n\n// render for mobile (or Desktop) only\n<Mobile>\n  <MobileMenu />\n</Mobile>\n\n// interleaves children with the given separator\n<Interleave wrapper="p" separator={<span>,</span>}>\n  <span key="alpha">Alpha</span>\n  <span key="beta">Beta</span>\n  <span key="gamma">Gamma</span>\n</Interleave>\n\n```\n\n## Components\n\n[See detailed specification](https://pinebit.github.io/react-cr/#/components)\n\n## License\n\n*react-cr* is available under MIT. See LICENSE for more details.\n'},632:function(e,n){e.exports="## Components\n\nSee `samples/index.js` for the sample code, or `run npm samples` to see components in action.\n\n### `Visibility`\n*Controls children to be rendered or not.*\n\nProperties:\n* `visible (bool)`\n* `wrapper (string)`\n* `reverse (bool)`\n\nIf the `wrapper` property is not defined and the `Visibility` has more than 1 child,\na `div` will be used as the \"wrapper\" component by default.\nHowever, if the `wrapper` prop is not defined and there is only 1 child,\nthat child will be rendered alone without a component wrapping it.\n\nThe `reverse` property simply reverses the order of children.\n\nIf `visible` is false, `null` is rendered.\n\n### `Switch`\n*Yields children whose index is matching the given `index`.*\n\nProperties:\n* `index (number|array of numbers)`\n* `wrapper (string)` (see Visibility.wrapper)\n* `reverse (bool)`   (see Visibility.reverse)\n\nIf `index` is out of bound, `null` is rendered.\nWhen `index` is array of numbers, only valid indices are used. \n\n### `Desktop` and `Mobile`\n*Controls rendering for desktop and mobile devices respectively.*\n\nProperties:\n* `wrapper (string)`\n* `wrapper (string)` (see Visibility.wrapper)\n* `reverse (bool)`   (see Visibility.reverse)\n\nSee `Visibility.wrapper` for this property description.\n\nWhen user's device is recognized as a mobile device, `Mobile` renders its children.\nAlternatively, `Desktop` component renders its children when that condition is not met.\n \n### `Repeat`\n*Renders the given node `count` times (using `React.cloneElement`).*\n\nProperties:\n* `count (number)`\n* `wrapper (string)` (see Visibility.wrapper)\n* `reverse (bool)`   (see Visibility.reverse)\n\nIf `count` is out of bound (<=0), `null` is rendered.\nThe resulted array is automatically wrapped unless `count` is 1.\nEvery cloned element is given a unique key. \n\n### `Interleave`\n*Renders given children by inserting `separator` in between.*\n \nProperties:\n* `separator (node)`\n* `first (bool)`\n* `last (bool)`\n* `wrapper (string)` (see Visibility.wrapper)\n* `reverse (bool)`   (see Visibility.reverse)\n\nFlags `first` and `last` specify whether it needs to prepend and append the `separator`.\n`separator` is any node that will be cloned with `React.cloneElement`.\n\n> Important: children must have `key`s assigned. Any children having no keys won't be rendered.\nSeparator nodes will get unique keys automatically, so you should not assign `key` to `separator`.\n"}},[303]);