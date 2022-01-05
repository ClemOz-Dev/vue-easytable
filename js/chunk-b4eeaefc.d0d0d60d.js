(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4eeaefc"],{"35da":function(e,t,r){"use strict";r("fac2")},"56d5":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Icon")]),r("Explain"),r("Usage"),r("Base"),r("Collection"),r("API")],1)},o=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"content example-md-doc"},[r("div",{staticClass:"tip"},[r("p",[e._v("Built-in some icons for you to choose")])])])}],l=r("2877"),s={},i=Object(l["a"])(s,a,c,!1,null,null,null),u=i.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"content example-md-doc"},[r("anchor",{attrs:{"is-edit":"",label:"Usage",fileName:"usage.md"}}),e._m(0),e._m(1),r("p",[e._v("use")]),e._m(2)],1)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("import "),r("code",[e._v("VeIcon")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{staticClass:"language-javascript"},[e._v('import Vue from "vue";\nimport { VeIcon } from "vue-easytable";\n\nVue.use(VeIcon);\n')])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",{staticClass:"language-javascript"},[e._v('<template>\n    <ve-icon name="double-right-arrow" />;\n</template>\n')])])}],d={},m=Object(l["a"])(d,v,_,!1,null,null,null),p=m.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"content example-md-doc"},[r("anchor",{attrs:{"is-edit":"",label:"Base Usage",fileName:"base.md"}}),r("demo-block",[r("div",[r("p",[e._v("1、The "),r("code",[e._v("name")]),e._v(" property sets the name of the icon"),r("br"),e._v(" 2、The "),r("code",[e._v("size")]),e._v(" property sets the size of the icon"),r("br"),e._v(" 3、The "),r("code",[e._v("color")]),e._v(" property sets the color of the icon")])]),r("template",{slot:"source"},[r("element-demo0")],1),r("template",{slot:"highlight"},[r("pre",{pre:!0},[r("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-icon name="double-right-arrow" />\n        <ve-icon name="double-right-arrow" color="red" />\n        <ve-icon name="double-right-arrow" :size="40" />\n    </div>\n</template>\n')])])])],2)],1)},h=[];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("div",[r("ve-icon",{attrs:{name:"double-right-arrow"}}),e._v(" "),r("ve-icon",{attrs:{name:"double-right-arrow",color:"red"}}),e._v(" "),r("ve-icon",{attrs:{name:"double-right-arrow",size:40}})],1)]],2)},t=[],r={};return O({render:e,staticRenderFns:t},r)}()}},R=w,E=Object(l["a"])(R,f,h,!1,null,null,null),j=E.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("anchor",{attrs:{label:"Icon Collection"}},[r("div",{staticClass:"icon-container"},e._l(Object.values(this.icons),(function(t){return r("div",{key:t,staticClass:"icon-item"},[r("div",{staticClass:"icon-item-comp"},[r("ve-icon",{attrs:{name:t}})],1),r("span",{staticClass:"icon-name"},[e._v(e._s(t))])])})),0)])},T=[],C={data:function(){return{icons:{FILTER:"filter",DOUBLE_RIGHT_ARROW:"double-right-arrow",DOUBLE_LEFT_ARROW:"double-left-arrow",TOP_ARROW:"top-arrow",RIGHT_ARROW:"right-arrow",BOTTOM_ARROW:"bottom-arrow",LEFT_ARROW:"left-arrow",SORT_TOP_ARROW:"sort-top-arrow",SORT_BOTTOM_ARROW:"sort-bottom-arrow",SEARCH:"search"}}}},P=C,x=(r("35da"),Object(l["a"])(P,y,T,!1,null,"517a6232",null)),I=x.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"content example-md-doc"},[r("anchor",{attrs:{"is-edit":"",label:"API",fileName:"api.md"}}),r("h3",[e._v("props")]),e._m(0)],1)},$=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"example-table"},[r("thead",[r("tr",[r("th",[e._v("Property")]),r("th",[e._v("Description")]),r("th",[e._v("Type")]),r("th",[e._v("Optional value")]),r("th",[e._v("Default")])])]),r("tbody",[r("tr",[r("td",[e._v("name")]),r("td",[e._v("Icon name")]),r("td",[r("code",[e._v("String")])]),r("td",[e._v("refer to example")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("size")]),r("td",[e._v("Icon size")]),r("td",[r("code",[e._v("Number")])]),r("td",[e._v("-")]),r("td",[e._v("-")])]),r("tr",[r("td",[e._v("color")]),r("td",[e._v("Icon color")]),r("td",[r("code",[e._v("String")])]),r("td",[e._v("-")]),r("td",[e._v("-")])])])])}],B={},D=Object(l["a"])(B,A,$,!1,null,null,null),W=D.exports,S={components:{Explain:u,Usage:p,Base:j,Collection:I,API:W}},k=S,z=Object(l["a"])(k,n,o,!1,null,null,null);t["default"]=z.exports},fac2:function(e,t,r){}}]);
//# sourceMappingURL=chunk-b4eeaefc.d0d0d60d.js.map