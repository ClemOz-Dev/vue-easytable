(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e943c"],{"8d93":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h2",[e._v("Column fixed")]),l("Explain"),l("ColumnFixedLeft"),l("ColumnFixedRight"),l("ColumnFixedLeftRight"),l("ColumnFixedAutoWidth")],1)},n=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"content example-md-doc"},[l("div",{staticClass:"tip"},[l("p",[e._v("1、The property "),l("code",[e._v("scroll-width")]),e._v(" is the width of the scroll area"),l("br"),e._v(" 2、The attribute "),l("code",[e._v("scroll-width")]),e._v(" is the width of the scroll area. When the outer container width is less than the "),l("code",[e._v("scroll-width")]),e._v(" value, a horizontal scroll bar will appear; when the outer container width is greater than the "),l("code",[e._v("scroll-width")]),e._v(" value, it will follow the container;when 'scroll-width=0', the scroll bar will be according to your column width"),l("br"),e._v(" 3、Column width can not be set, or set to percentage, or pixel value (PX)"),l("br"),e._v(" 4、The "),l("code",[e._v("scroll-width")]),e._v(" attribute is set, and the column width unit "),l("strong",[e._v("is strongly recommended to be consistent!")]),l("br")])])])}],r=l("2877"),a={},d=Object(r["a"])(a,c,i,!1,null,null,null),f=d.exports,u=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"content example-md-doc"},[l("anchor",{attrs:{"is-edit":"",label:"Left column fixed",fileName:"column-fixed-left.md"}}),l("demo-block",[l("div",[l("p",[e._v("1、Set the width of the scroll area through "),l("code",[e._v('scroll-width="1200"')]),e._v(",Via "),l("code",[e._v('style="width:900px"')]),e._v(" set outer container width"),l("br"),e._v("2、Via "),l("code",[e._v('style="width:900px"')]),e._v("set the width of the outer container. Use "),l("code",[e._v('fixed:"left"')]),e._v(" to set the left column that needs to be fixed")])]),l("template",{slot:"source"},[l("element-demo0")],1),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    { field: "col9", key: "i", title: "Title9" },\n                    { field: "col10", key: "j", title: "Title10" },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},s=[];function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function m(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){h(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function h(e,t,l){return t=p(t),t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function p(e){var t=v(e,"string");return"symbol"===y(t)?t:String(t)}function v(e,t){if("object"!==y(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var o=l.call(e,t||"default");if("object"!==y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var w={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},t=[],l={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9"},{field:"col10",key:"j",title:"Title10"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return m({render:e,staticRenderFns:t},l)}()}},g=w,T=Object(r["a"])(g,u,s,!1,null,null,null),k=T.exports,O=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"content example-md-doc"},[l("anchor",{attrs:{"is-edit":"",label:"Right column fixed",fileName:"column-fixed-right.md"}}),l("demo-block",[l("div",[l("p",[e._v("1、Set the width of the scroll area through "),l("code",[e._v('scroll-width="1200"')]),e._v(",Via "),l("code",[e._v('style="width:900px"')]),e._v("set outer container width"),l("br"),e._v("2、Set the right column to be fixed through "),l("code",[e._v('fixed:"right"')])])]),l("template",{slot:"source"},[l("element-demo0")],1),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1" },\n                    { field: "col2", key: "b", title: "Title2" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},_=[];function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function j(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function S(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?j(Object(l),!0).forEach((function(t){P(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):j(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function P(e,t,l){return t=D(t),t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function D(e){var t=E(e,"string");return"symbol"===x(t)?t:String(t)}function E(e,t){if("object"!==x(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var o=l.call(e,t||"default");if("object"!==x(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var C={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},t=[],l={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1"},{field:"col2",key:"b",title:"Title2"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return S({render:e,staticRenderFns:t},l)}()}},F=C,$=Object(r["a"])(F,O,_,!1,null,null,null),N=$.exports,R=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"content example-md-doc"},[l("anchor",{attrs:{"is-edit":"",label:"Fixed left and right columns",fileName:"column-fixed-left-right.md"}}),l("demo-block",[l("div",[l("p",[e._v("1、Set the width of the scroll area through "),l("code",[e._v('scroll-width="1200"')]),e._v("，Via "),l("code",[e._v('style="width:900px"')]),e._v("set outer container width"),l("br"),e._v("2、Set the left column to be fixed by "),l("code",[e._v('fixed:"left"')]),e._v("; set the right column to be fixed by"),l("code",[e._v('fixed:"right"')])])]),l("template",{slot:"source"},[l("element-demo0")],1),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},K=[];function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function W(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function V(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?W(Object(l),!0).forEach((function(t){A(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):W(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function A(e,t,l){return t=J(t),t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function J(e){var t=q(e,"string");return"symbol"===L(t)?t:String(t)}function q(e,t){if("object"!==L(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var o=l.call(e,t||"default");if("object"!==L(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var z={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},t=[],l={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return V({render:e,staticRenderFns:t},l)}()}},U=z,X=Object(r["a"])(U,R,K,!1,null,null,null),B=X.exports,G=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("section",{staticClass:"content example-md-doc"},[l("anchor",{attrs:{"is-edit":"",label:"Container adaptive column fixed",fileName:"column-fixed-auto-width.md"}}),l("demo-block",[l("div",[l("p",[e._v("1、Set the width of the scroll area through "),l("code",[e._v('scroll-width="1600"')]),l("br"),e._v("2、The outer container width is not set. Equivalent to settings "),l("code",[e._v('style="width:100%"')]),l("br"),e._v("3、Try changing the browser width.When the container width is less than "),l("code",[e._v("scroll-width")]),e._v(", the scroll bar will appear；When it is greater than "),l("code",[e._v("scroll-width")]),e._v(", it will follow the container adaptation")])]),l("template",{slot:"source"},[l("element-demo0")],1),l("template",{slot:"highlight"},[l("pre",{pre:!0},[l("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :scroll-width="1600"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n        rowKeyFieldName="rowKey"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 10; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},H=[];function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function M(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,o)}return l}function Q(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?M(Object(l),!0).forEach((function(t){Y(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):M(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function Y(e,t,l){return t=Z(t),t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function Z(e){var t=ee(e,"string");return"symbol"===I(t)?t:String(t)}function ee(e,t){if("object"!==I(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var o=l.call(e,t||"default");if("object"!==I(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var te={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[[l("ve-table",{attrs:{"scroll-width":1600,"border-y":"",columns:e.columns,"table-data":e.tableData,rowKeyFieldName:"rowKey"}})]],2)},t=[],l={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}]}},methods:{initTableData:function(){for(var e=[],t=0;t<10;t++)e.push({rowKey:t,col1:t,col2:t,col3:t,col4:t,col5:t,col6:t,col7:t,col8:t,col9:t,col10:t});this.tableData=e}},created:function(){this.initTableData()}};return Q({render:e,staticRenderFns:t},l)}()}},le=te,oe=Object(r["a"])(le,G,H,!1,null,null,null),ne=oe.exports,ce={name:"basic-main",components:{Explain:f,ColumnFixedLeft:k,ColumnFixedRight:N,ColumnFixedLeftRight:B,ColumnFixedAutoWidth:ne}},ie=ce,re=Object(r["a"])(ie,o,n,!1,null,null,null);t["default"]=re.exports}}]);
//# sourceMappingURL=chunk-2d0e943c.a99ab759.js.map