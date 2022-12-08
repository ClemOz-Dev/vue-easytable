(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217cc9"],{c7ed:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Pagination")]),n("Usage"),n("BaseUsage"),n("PageIndex"),n("PageSize"),n("PagingButtons"),n("PagingConfiguration"),n("CallbackEvents"),n("LayoutSettings"),n("Api")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Usage",fileName:"usage.md"}}),e._m(0),e._m(1),n("p",[e._v("use")]),e._m(2)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("import "),n("code",[e._v("VePagination")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('import Vue from "vue";\nimport { VePagination } from "vue-easytable";\n\nVue.use(VePagination);\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-javascript"},[e._v('<template>\n  <ve-pagination :total="600" />\n</template>\n')])])}],l=n("2877"),c={},u=Object(l["a"])(c,a,i,!1,null,null,null),s=u.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Base Usage",fileName:"base-usage.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" />\n</template>\n')])])])],2)],1)},m=[];function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t=g(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=y(e,"string");return"symbol"===v(t)?t:String(t)}function y(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var h={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600}})]],2)},t=[],n={};return f({render:e,staticRenderFns:t},n)}()}},_=h,O=Object(l["a"])(_,p,m,!1,null,null,null),j=O.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Page Index",fileName:"page-index.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("page-index")]),e._v(" sets the current page number")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" :page-index="2" />\n</template>\n')])])])],2)],1)},S=[];function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t=C(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=D(e,"string");return"symbol"===w(t)?t:String(t)}function D(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"page-index":2}})]],2)},t=[],n={};return x({render:e,staticRenderFns:t},n)}()}},N=k,$=Object(l["a"])(N,P,S,!1,null,null,null),T=$.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Page Size",fileName:"page-size.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("page-size")]),e._v(" set the size of each page")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" :page-size="30" />\n</template>\n')])])])],2)],1)},F=[];function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return t=L(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){var t=V(e,"string");return"symbol"===I(t)?t:String(t)}function V(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"page-size":30}})]],2)},t=[],n={};return B({render:e,staticRenderFns:t},n)}()}},q=J,H=Object(l["a"])(q,A,F,!1,null,null,null),M=H.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Paging Buttons",fileName:"paging-buttons.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("pagingCount")]),e._v(" set the number of middle buttons and paging buttons for the forward 5 pages and backward 5 pages")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" :paging-count="6" />\n</template>\n')])])])],2)],1)},G=[];function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e,t,n){return t=Z(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z(e){var t=ee(e,"string");return"symbol"===K(t)?t:String(t)}function ee(e,t){if("object"!==K(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var te={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"paging-count":6}})]],2)},t=[],n={};return X({render:e,staticRenderFns:t},n)}()}},ne=te,re=Object(l["a"])(ne,W,G,!1,null,null,null),oe=re.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Paging Configuration",fileName:"paging-configuration.md"}}),n("demo-block",[n("div",[n("p",[n("code",[e._v("pageSizeOption")]),e._v(" set paging size drop-down option")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination :total="600" :page-size-option="[5,10,15]" :page-size="5" />\n</template>\n')])])])],2)],1)},ie=[];function le(e){return le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(e)}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){se(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function se(e,t,n){return t=pe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pe(e){var t=me(e,"string");return"symbol"===le(t)?t:String(t)}function me(e,t){if("object"!==le(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==le(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var ve={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600,"page-size-option":[5,10,15],"page-size":5}})]],2)},t=[],n={};return ue({render:e,staticRenderFns:t},n)}()}},be=ve,fe=Object(l["a"])(be,ae,ie,!1,null,null,null),de=fe.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Callback Events",fileName:"callback-events.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、"),n("code",[e._v("on-page-number-change")]),e._v("Page number change callback event"),n("br"),e._v("2、"),n("code",[e._v("on-page-size-change")]),e._v("Change callback events under each page")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-pagination\n        :total="600"\n        @on-page-number-change="pageNumberChange"\n        @on-page-size-change="pageSizeChange"\n    />\n</template>\n<script>\n    export default {\n        methods: {\n            pageNumberChange(pageIndex) {\n                console.log(pageIndex);\n            },\n\n            pageSizeChange(pageSize) {\n                console.log(pageSize);\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},ye=[];function he(e){return he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(e)}function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(n),!0).forEach((function(t){je(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function je(e,t,n){return t=Pe(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pe(e){var t=Se(e,"string");return"symbol"===he(t)?t:String(t)}function Se(e,t){if("object"!==he(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==he(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var we={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-pagination",{attrs:{total:600},on:{"on-page-number-change":e.pageNumberChange,"on-page-size-change":e.pageSizeChange}})]],2)},t=[],n={methods:{pageNumberChange:function(e){console.log(e)},pageSizeChange:function(e){console.log(e)}}};return Oe({render:e,staticRenderFns:t},n)}()}},Ee=we,xe=Object(l["a"])(Ee,ge,ye,!1,null,null,null),ze=xe.exports,Ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Layout Settings",fileName:"layout-settings.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、Change the layout by setting the "),n("code",[e._v("layout")]),e._v(" property."),n("br"),e._v("2、The "),n("code",[e._v("layout")]),e._v(" property supports the following option items:"),n("br"),n("code",[e._v("total")]),e._v(":Display total number、"),n("code",[e._v("prev")]),e._v(":Show previous button、"),n("code",[e._v("pager")]),e._v(":Show page number button、"),n("code",[e._v("next")]),e._v(":Show next page button、"),n("code",[e._v("sizer")]),e._v(":Show per page size settings、"),n("code",[e._v("jumper")]),e._v(":Show goto input")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v("<template>\n    <div>\n        <div>\n            <div class=\"mb20 bold\">Don't display page number button</div>\n            <ve-pagination :total=\"600\" :layout=\"['total', 'prev', 'next', 'sizer', 'jumper']\" />\n        </div>\n        <div>\n            <div class=\"mt30 mb20 bold\">Adjust display order</div>\n            <ve-pagination\n                :total=\"600\"\n                :layout=\"['total', 'sizer', 'prev', 'pager', 'next', 'jumper']\"\n            />\n        </div>\n\n        <div>\n            <div class=\"mt30 mb20 bold\">All layout</div>\n            <ve-pagination\n                :total=\"600\"\n                :layout=\"['total', 'prev', 'pager', 'next', 'sizer', 'jumper']\"\n            />\n        </div>\n    </div>\n</template>\n")])])])],2)],1)},De=[];function ke(e){return ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ke(e)}function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){Te(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Te(e,t,n){return t=Ae(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ae(e){var t=Fe(e,"string");return"symbol"===ke(t)?t:String(t)}function Fe(e,t){if("object"!==ke(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==ke(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var Ie={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",[n("div",{staticClass:"mb20 bold"},[e._v("Don't display page number button")]),e._v(" "),n("ve-pagination",{attrs:{total:600,layout:["total","prev","next","sizer","jumper"]}})],1),e._v(" "),n("div",[n("div",{staticClass:"mt30 mb20 bold"},[e._v("Adjust display order")]),e._v(" "),n("ve-pagination",{attrs:{total:600,layout:["total","sizer","prev","pager","next","jumper"]}})],1),e._v(" "),n("div",[n("div",{staticClass:"mt30 mb20 bold"},[e._v("All layout")]),e._v(" "),n("ve-pagination",{attrs:{total:600,layout:["total","prev","pager","next","sizer","jumper"]}})],1)])]],2)},t=[],n={};return $e({render:e,staticRenderFns:t},n)}()}},Re=Ie,Be=Object(l["a"])(Re,Ce,De,!1,null,null,null),Ue=Be.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"API",fileName:"api.md"}}),n("h3",[e._v("props")]),e._m(0),n("h3",[e._v("Event")]),e._m(1)],1)},Ve=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[e._v("Property")]),n("th",[e._v("Description")]),n("th",[e._v("Type")]),n("th",[e._v("Optional value")]),n("th",[e._v("Default")])])]),n("tbody",[n("tr",[n("td",[e._v("layout")]),n("td",[e._v("Layout settings can be matched according to your own business scenarios")]),n("td",[n("code",[e._v("Array")])]),n("td",[e._v("['total', 'prev', 'pager', 'next', 'sizer', 'jumper']")]),n("td",[e._v("['total', 'prev', 'pager', 'next', 'sizer', 'jumper']")])]),n("tr",[n("td",[e._v("total")]),n("td",[e._v("Total Count")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("-")])]),n("tr",[n("td",[e._v("pageIndex")]),n("td",[e._v("Current page number")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("1")])]),n("tr",[n("td",[e._v("pagingCount")]),n("td",[e._v("The number of buttons in the middle of forward 5 pages and backward 5 pages")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("5")])]),n("tr",[n("td",[e._v("pageSize")]),n("td",[e._v("Page size")]),n("td",[n("code",[e._v("Number")])]),n("td",[e._v("-")]),n("td",[e._v("10")])]),n("tr",[n("td",[e._v("pageSizeOption")]),n("td",[e._v("Per page size drop-down option")]),n("td",[n("code",[e._v("Array")])]),n("td",[e._v("-")]),n("td",[e._v("[10, 20, 30]")])]),n("tr",[n("td",[e._v("popperAppendTo")]),n("td",[e._v("Parent Node which the selector should be rendered to. Default to "),n("code",[e._v("body")]),e._v(". When position issues happen, try to modify it into scrollable content and position it relative. "),n("a",{attrs:{href:"https://codesandbox.io/s/vue-easytable-2-15-0-example-forked-q9k3m0?file=/Example.vue"}},[e._v("Example")])]),n("td",[n("code",[e._v("String | HTMLElement")])]),n("td",[e._v("-")]),n("td",[e._v("document.body")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",[e._v("Event Name")]),n("th",[e._v("Description")]),n("th",[e._v("Parameters")])])]),n("tbody",[n("tr",[n("td",[e._v("on-page-number-change")]),n("td",[e._v("Page change callback event")]),n("td",[e._v("Current page number")])]),n("tr",[n("td",[e._v("on-page-size-change")]),n("td",[e._v("Page size dropdown change callback")]),n("td",[e._v("Current page size")])])])])}],Je={},qe=Object(l["a"])(Je,Le,Ve,!1,null,null,null),He=qe.exports,Me={components:{Usage:s,BaseUsage:j,PageIndex:T,PageSize:M,PagingButtons:oe,PagingConfiguration:de,CallbackEvents:ze,LayoutSettings:Ue,Api:He}},We=Me,Ge=Object(l["a"])(We,r,o,!1,null,null,null);t["default"]=Ge.exports}}]);
//# sourceMappingURL=chunk-2d217cc9.30498160.js.map