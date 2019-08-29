(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./docs/components/DropDown.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/react-native-vector-icons/FontAwesome.js"),s=n("./src/components/Modal.tsx"),c=n("./src/modules/theme.ts"),u=n("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"),d=n("./node_modules/react-native-web/dist/exports/View/index.js"),m=n("./node_modules/react-native-web/dist/exports/Text/index.js"),p=n("./node_modules/react-native-web/dist/exports/TouchableHighlight/index.js"),y=n("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),f=n("./node_modules/react-native-web/dist/exports/Platform/index.js"),b=n("./node_modules/react-native-web/dist/exports/FlatList/index.js"),g=n("./src/modules/layout.ts");function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function S(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function x(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){var e,n;h(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=x(this,(e=E(t)).call.apply(e,[this].concat(a)))).getStyles=function(){return u.a.create({modalItem:{paddingHorizontal:16,paddingVertical:16,fontFamily:"Lato-Bold",fontSize:16},icon:{fontSize:26},rowView:{flexDirection:"row"},iconView:{width:100,alignItems:"center",justifyContent:"center"},iconOnlyView:{width:200,alignItems:"center",justifyContent:"center"},iconOnly:{paddingHorizontal:16,paddingVertical:16,fontSize:60}})},n.renderOpenDropDownItem=function(){var e=n.props,t=e.label,r=e.icon,a=Object(c.a)(),l=n.getStyles();return t&&r?o.createElement(d.a,{style:l.rowView},o.createElement(d.a,{style:l.iconView},o.createElement(i.a,{name:r,color:a.textColor1,style:l.icon})),o.createElement(d.a,null,o.createElement(m.a,{style:l.modalItem},t))):t&&!r?o.createElement(d.a,{style:l.rowView},o.createElement(m.a,{style:l.modalItem},t)):!t&&r?o.createElement(d.a,{style:l.iconOnlyView},o.createElement(i.a,{name:r,color:a.textColor1,style:l.iconOnly})):null},n}return O(t,o["PureComponent"]),S(t,[{key:"render",value:function(){var e=this.props,t=e.first,n=e.last,r=e.value,a=e.onPress,l=Object(c.a)();return o.createElement(p.a,{onPress:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return a(r)}),underlayColor:l.backgroundColor2,style:{borderTopLeftRadius:t?5:0,borderTopRightRadius:t?5:0,borderBottomLeftRadius:n?5:0,borderBottomRightRadius:n?5:0}},this.renderOpenDropDownItem())}}]),t}(),j=function(e){function t(){var e,n;h(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=x(this,(e=E(t)).call.apply(e,[this].concat(a)))).state={modalOpen:!1},n.handleItemPress=function(e){var t=n.props.onChange;n.setState({modalOpen:!1}),t(e)},n.renderClosedDropDown=function(e,t){var r=Object(c.a)(),a=n.getStyles();return e?e.label&&e.icon?o.createElement(o.Fragment,null,o.createElement(d.a,{style:a.rowView},o.createElement(d.a,{style:a.iconView},o.createElement(i.a,{name:e.icon,color:r.textColor1,style:a.icon})),o.createElement(m.a,{style:[a.text,t]},e.label)),o.createElement(i.a,{name:"caret-down",style:a.seta})):e.label&&!e.icon?o.createElement(o.Fragment,null,o.createElement(m.a,{style:[a.text,t]},e.label),o.createElement(i.a,{name:"caret-down",style:a.seta})):!e.label&&e.icon?o.createElement(o.Fragment,null,o.createElement(i.a,{name:e.icon,color:r.textColor1,style:a.iconOnly}),o.createElement(i.a,{name:"caret-down",style:a.setaIcone})):null:o.createElement(o.Fragment,null,o.createElement(m.a,{style:[a.text,t]},"-"),o.createElement(i.a,{name:"caret-down",style:a.seta}))},n.getStyles=function(){var e=Object(c.a)();return u.a.create({container:{paddingHorizontal:16,paddingVertical:8,borderWidth:1,borderColor:e.borderColor1,borderRadius:3},label:{color:e.textColor2,fontFamily:"Lato-Regular",fontSize:Object(g.a)()?15:12,lineHeight:16},text:{height:22,color:e.textColor1,fontFamily:"Lato-Bold",fontSize:16},seta:{color:e.textColor1,fontSize:16,position:"absolute",bottom:10,right:16},setaIcone:{color:e.textColor1,fontSize:16,position:"absolute",bottom:25,right:16},modalOverlay:{justifyContent:"center"},modalContainer:{borderRadius:5,backgroundColor:e.backgroundColor1,margin:16},modalItem:{paddingHorizontal:16,paddingVertical:16,fontFamily:"Lato-Bold",fontSize:16},emptyMessageContainer:{flexDirection:"row",alignItems:"center",paddingHorizontal:16},readonly:{backgroundColor:e.disabledColor},icon:{fontSize:26},rowView:{flexDirection:"row"},iconView:{width:50,alignItems:"center"},iconOnlyView:{width:200,alignItems:"center",justifyContent:"center"},iconOnly:{paddingHorizontal:16,paddingVertical:8,fontSize:26}})},n}return O(t,o["Component"]),S(t,[{key:"render",value:function(){var e=this,t=this.state.modalOpen,n=this.props,r=n.label,a=n.items,l=n.value,u=n.emptyMessage,p=n.style,g=n.disabled,w=n.labelStyle,h=n.inputStyle,v=a.find(function(e){return e.value===l}),S=this.getStyles(),x=Object(c.a)();return o.createElement(y.a,{onPress:function(){return e.setState({modalOpen:!0})},disabled:g},o.createElement(d.a,{style:[S.container,p,g?S.readonly:null]},o.createElement(m.a,{style:[S.label,w]},r),this.renderClosedDropDown(v,h),o.createElement(s.a,{visible:t,onRequestClose:function(){return e.setState({modalOpen:!1})},overlayStyle:S.modalOverlay},o.createElement(d.a,{style:[S.modalContainer,"web"===f.a.OS&&{margin:"auto",width:"90%",maxWidth:450,justifyContent:"center",marginBottom:"10px",marginTop:"10px"}]},a.length>0?o.createElement(b.a,{data:a,initialNumToRender:a.length,keyExtractor:function(e){return e.value.toString()},renderItem:function(t){var n=t.item,r=t.index;return o.createElement(D,{first:0===r,last:r===a.length-1,label:n.label,value:n.value,onPress:e.handleItemPress,icon:n.icon})}}):o.createElement(d.a,{style:S.emptyMessageContainer},o.createElement(i.a,{name:"warning",color:x.warningColor,size:24}),o.createElement(m.a,{style:S.modalItem},u))))))}}]),t}();j.defaultProps={emptyMessage:"N\xe3o h\xe1 registros cadastrados"};try{j.displayName="DropDown",j.__docgenInfo={description:"",displayName:"DropDown",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ label: string; value: any; icon?: string; }[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: any) => void"}},emptyMessage:{defaultValue:{value:"N\xe3o h\xe1 registros cadastrados"},description:"",name:"emptyMessage",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"StyleProp<TextStyle>"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:"StyleProp<TextStyle>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DropDown.tsx#DropDown"]={docgenInfo:j.__docgenInfo,name:"DropDown",path:"src/components/DropDown.tsx#DropDown"})}catch(e){}function _(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=_(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"dropdown"}},"DropDown"),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),r.a.createElement(l.PropsTable,{of:j}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(l.Playground,{__position:1,__code:"<DropDown\n  label=\"DropDown\"\n  items={[{ value: 1, label: 'Fernando' }, { value: 2, label: 'Alex' }]}\n  value={2}\n  onChange={value => alert('Selected ' + value)}\n/>",__scope:{props:n,DropDown:j}},r.a.createElement(j,{label:"DropDown",items:[{value:1,label:"Fernando"},{value:2,label:"Alex"}],value:2,onChange:function(e){return alert("Selected "+e)}})))}}}]);