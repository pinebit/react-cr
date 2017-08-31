webpackJsonp([0],{298:function(e,t,n){var r=n(1),i=n(163);i.__esModule&&(i=i.default),e.exports=r.createClass({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(630)}},componentWillMount:function(){},render:function(){return r.createElement(i,Object.assign({},this.props,{content:this.state.content}))}})},299:function(e,t){},300:function(e,t){},302:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),o=r(a),c=n(73),l=r(c),s=n(301),u=r(s),f=n(297);n(300),n(299);var d={},p=[{path:"/",title:"Introduction",component:n(298)}];l.default.render(o.default.createElement("div",null,o.default.createElement(u.default,{href:"https://github.com/pinebit/react-cr",bannerColor:"#fff",octoColor:"#000",width:80,height:80,direction:"right"}),o.default.createElement(f.Catalog,{imports:d,pages:p,specimens:{javascript:function(e){return o.default.createElement(f.CodeSpecimen,i({},e,{lang:"javascript"}))},js:function(e){return o.default.createElement(f.CodeSpecimen,i({},e,{lang:"javascript"}))},jsx:function(e){return o.default.createElement(f.ReactSpecimen,e)}},title:"react-cr v0.0.2"})),document.getElementById("app"))},630:function(e,t){e.exports="# react-cr - a tiny library for conditional components rendering\n\nA simple tiny library for conditional rendering inside JSX.\n\n## Basic Usage\n\n`npm install --save react-cr`.\n\n```js\nimport { Visibility } from 'react-cr';\n\nconst Foo = ({toggle}) => (\n  <Visibility visible={toggle}>\n    <h1>The toggle is set!</h1>\n  </Visibility>\n)\n```\n\n## License\n\n*react-cr* is available under MIT. See LICENSE for more details.\n"}},[302]);