(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./docs/components/Menu.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/react-native-web/dist/exports/Text/index.js"),l=n("./node_modules/react-native-web/dist/exports/View/index.js"),d=n("./src/components/Menu.tsx");function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=p(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"menu"}},"Menu"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(s.PropsTable,{of:d.a}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(s.Playground,{__position:1,__code:"<View style={{ height: 600, width: 400, borderWidth: 1, overflow: 'hidden' }}>\n  <Menu\n    ref={menu => menu && menu.open()}\n    renderLogo={() => (\n      <View>\n        <Text style={{ fontFamily: 'Lato-Bold', fontSize: 40 }}>My App</Text>\n      </View>\n    )}\n    menu={[\n      { text: 'Home', path: 'Home', textStyle: { color: 'red' } },\n      {\n        text: 'Settings',\n        path: 'Settings',\n        textStyle: { color: 'green' },\n        submenu: [\n          {\n            text: 'Basic Settings',\n            path: 'BasicSettings',\n            textStyle: { color: 'blue' },\n          },\n          { text: 'Advanced Settings', path: 'AdvancedSettings' },\n        ],\n      },\n      { text: 'About', path: 'About' },\n    ]}\n    onMenuPress={path => alert(path)}\n  />\n</View>",__scope:{props:n,Text:i.a,View:l.a,Menu:d.a}},r.a.createElement(l.a,{style:{height:600,width:400,borderWidth:1,overflow:"hidden"}},r.a.createElement(d.a,{ref:function(e){return e&&e.open()},renderLogo:function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{style:{fontFamily:"Lato-Bold",fontSize:40}},"My App"))},menu:[{text:"Home",path:"Home",textStyle:{color:"red"}},{text:"Settings",path:"Settings",textStyle:{color:"green"},submenu:[{text:"Basic Settings",path:"BasicSettings",textStyle:{color:"blue"}},{text:"Advanced Settings",path:"AdvancedSettings"}]},{text:"About",path:"About"}],onMenuPress:function(e){return alert(e)}}))))}}}]);