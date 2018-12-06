(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docs/components/Details.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),c=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),s=n("./node_modules/react-native-web/dist/exports/Text/index.js"),u=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),p=n("./node_modules/react-native-vector-icons/FontAwesome.js"),f=n("./src/components/Card.tsx"),d=n("./src/components/Space.tsx"),m=n("./src/modules/theme.ts"),y=n("./src/modules/layout.ts");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=g(this,(e=O(t)).call.apply(e,[this].concat(a)))).renderIcon=function(e,t){var n=o.createElement(p.a,{key:t,name:e.name,color:e.color,size:e.size,style:S.lineValueIcon});return e.onPress?o.createElement(c.a,{key:t,onPress:e.onPress},n):n},n.renderLine=function(e,t){var r=e.title,a=e.value,i=e.icons,c=e.render,u=c?S.lineSectionCustomRender:S.lineSection,p=c?c():o.createElement(o.Fragment,null,o.createElement(s.a,{style:S.lineTitle},r),o.createElement(l.a,{style:S.lineValueContainer},i&&i.map(n.renderIcon),o.createElement(s.a,{style:S.lineTitle},a)));return o.createElement(o.Fragment,{key:t},o.createElement(d.a,{height:3}),o.createElement(f.a,null,o.createElement(f.a.Section,{style:u},p)))},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.title,n=e.lines;return o.createElement(o.Fragment,null,o.createElement(f.a,null,o.createElement(f.a.Section,null,o.createElement(s.a,{style:S.title},t))),n.map(this.renderLine))}}])&&h(n.prototype,r),a&&h(n,a),t}(),w=Object(m.a)(),S=u.a.create({title:{fontFamily:"Lato-Bold",fontSize:Object(y.a)()?22:18,color:w.textColor1},lineSection:{paddingVertical:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:45},lineSectionCustomRender:{padding:0},lineTitle:{fontFamily:"Lato-Bold",fontSize:Object(y.a)()?18:14,color:w.textColor1,minWidth:40,textAlign:"left"},lineValueContainer:{flexDirection:"row",alignItems:"center"},lineValueIcon:{width:25,textAlign:"center"}});try{_.displayName="Details",_.__docgenInfo={description:"",displayName:"Details",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},lines:{defaultValue:null,description:"",name:"lines",required:!0,type:{name:"DetailsLine[]"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Details.tsx#Details"]={docgenInfo:_.__docgenInfo,name:"Details",path:"src/components/Details.tsx#Details"})}catch(e){}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=j(this,(e=P(t)).call.apply(e,[this].concat(a)))).renderButton=function(e,t){return t?o.createElement(c.a,{style:L.button,onPress:t},o.createElement(p.a,{name:"left"===e?"angle-left":"angle-right",color:T.textColor3,size:14})):o.createElement(l.a,{style:L.buttonPlaceholder})},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onLeftPress,r=e.onRightPress;return o.createElement(f.a,null,o.createElement(f.a.Section,{style:L.container},this.renderButton("left",n),o.createElement(s.a,{style:L.text},t),this.renderButton("right",r)))}}])&&x(n.prototype,r),a&&x(n,a),t}(),T=Object(m.a)(),L=u.a.create({container:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},text:{fontFamily:"Lato-Bold",fontSize:Object(y.a)()?22:18,color:T.textColor1,width:"80%",textAlign:"center"},button:{height:Object(y.a)()?28:24,width:Object(y.a)()?28:24,alignItems:"center",justifyContent:"center",borderColor:T.borderColor1,borderWidth:1,borderRadius:24},buttonPlaceholder:{height:Object(y.a)()?28:24,width:Object(y.a)()?28:24}});try{C.displayName="DetailsHeader",C.__docgenInfo={description:"",displayName:"DetailsHeader",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},onLeftPress:{defaultValue:null,description:"",name:"onLeftPress",required:!1,type:{name:"() => void"}},onRightPress:{defaultValue:null,description:"",name:"onRightPress",required:!1,type:{name:"() => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DetailsHeader.tsx#DetailsHeader"]={docgenInfo:C.__docgenInfo,name:"DetailsHeader",path:"src/components/DetailsHeader.tsx#DetailsHeader"})}catch(e){}function V(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=V(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"details"}},"Details"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"details-1"}},"Details"),r.a.createElement(i.PropsTable,{of:_}),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"detailsheader"}},"DetailsHeader"),r.a.createElement(i.PropsTable,{of:C}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(i.Playground,{__position:2,__code:"<View style={{ padding: 20, backgroundColor: '#ccc' }}>\n  <DetailsHeader\n    text=\"Title\"\n    onLeftPress={() => alert('left')}\n    onRightPress={() => alert('right')}\n  />\n  <Space />\n  <Details\n    title=\"Another title\"\n    lines={[\n      {\n        title: 'Line 1',\n        value: 'Value 1',\n        icons: [\n          {\n            name: 'cog',\n            color: 'red',\n            size: 20,\n            onPress: () => alert('config'),\n          },\n          {\n            name: 'facebook',\n            color: 'blue',\n            size: 20,\n            onPress: () => alert('facebook'),\n          },\n        ],\n      },\n      {\n        title: 'Line 2',\n        value: 'Value 2',\n      },\n      {\n        title: 'Line 3',\n        value: 'Value 3',\n      },\n    ]}\n  />\n</View>",__scope:{props:n,View:l.a,Details:_,DetailsHeader:C,Space:d.a}},r.a.createElement(l.a,{style:{padding:20,backgroundColor:"#ccc"}},r.a.createElement(C,{text:"Title",onLeftPress:function(){return alert("left")},onRightPress:function(){return alert("right")}}),r.a.createElement(d.a,null),r.a.createElement(_,{title:"Another title",lines:[{title:"Line 1",value:"Value 1",icons:[{name:"cog",color:"red",size:20,onPress:function(){return alert("config")}},{name:"facebook",color:"blue",size:20,onPress:function(){return alert("facebook")}}]},{title:"Line 2",value:"Value 2"},{title:"Line 3",value:"Value 3"}]}))))}}}]);