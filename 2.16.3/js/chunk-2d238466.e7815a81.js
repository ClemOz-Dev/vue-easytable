(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238466"],{ff4d:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Column width")]),t("Explain"),t("NoWidth"),t("PercentWidth"),t("PxWidth"),t("LongWord")],1)},r=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、When the column width is not set, the cell width is automatically scaled according to the content"),t("br"),e._v(" 2、When the column width is set as a percentage, the cell width is scaled as a percentage"),t("br"),e._v(" 3、When the column width is set to PX, the cell width is scaled by pixel ratio"),t("br"),e._v(" 4、The width of the outer container needs to be set for the fixed width of the table")])])])}],i=t("2877"),l={},c=Object(i["a"])(l,o,d,!1,null,null,null),s=c.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Column width not set",fileName:"no-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("When the column width is not set, the cell width is automatically scaled according to the content")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name" },\n                    { field: "date", key: "b", title: "Date" },\n                    { field: "hobby", key: "c", title: "Hobby" },\n                    { field: "address", key: "d", title: "Address" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},b=[];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name"},{field:"date",key:"b",title:"Date"},{field:"hobby",key:"c",title:"Hobby"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return m({render:e,staticRenderFns:n},t)}()}},g=y,f=Object(i["a"])(g,u,b,!1,null,null,null),v=f.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Column width percentage",fileName:"percent-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("When the column width is set as a percentage, the cell width is scaled as a percentage")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name 40%",\n                        width: "40%",\n                    },\n                    { field: "date", key: "b", title: "Tel 20%", width: "20%" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby 20%",\n                        width: "20%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address 20%",\n                        width: "20%",\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},k=[];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){C(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var N={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name 40%",width:"40%"},{field:"date",key:"b",title:"Tel 20%",width:"20%"},{field:"hobby",key:"c",title:"Hobby 20%",width:"20%"},{field:"address",key:"d",title:"Address 20%",width:"20%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return j({render:e,staticRenderFns:n},t)}()}},_=N,A=Object(i["a"])(_,w,k,!1,null,null,null),x=A.exports,D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Column width pixel value",fileName:"px-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、When the column width is set to PX, the cell width is scaled by pixel ratio. If you do not want to zoom, you need to set the outer container width"),t("br"),e._v("2、Set the pixel value, remember not to add units")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name 400px",\n                        width: 400,\n                    },\n                    { field: "date", key: "b", title: "Tel 200px", width: 200 },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby 200px",\n                        width: 200,\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address 200px",\n                        width: 200,\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},P=[];function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){J(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function J(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var B={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name 400px",width:400},{field:"date",key:"b",title:"Tel 200px",width:200},{field:"hobby",key:"c",title:"Hobby 200px",width:200},{field:"address",key:"d",title:"Address 200px",width:200}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return E({render:e,staticRenderFns:n},t)}()}},W=B,z=Object(i["a"])(W,D,P,!1,null,null,null),T=z.exports,X=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Long text destroys layout",fileName:"long-word.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、Too much text in a cell destroys the layout,This can be controlled by style "),t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break"}},[e._v("word-break")]),e._v(" "),t("br"),e._v("2、You can also use it with "),t("a",{attrs:{href:"#/en/doc/table/cell-ellipsis"}},[e._v("Cell Ellipsis")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        word-break：\n        <el-radio-group size="small" v-model="wordBreak">\n            <el-radio-button label="normal">normal</el-radio-button>\n            <el-radio-button label="keep-all">keep-all</el-radio-button>\n            <el-radio-button label="break-all">break-all</el-radio-button>\n            <el-radio-button label="break-word">break-word</el-radio-button>\n        </el-radio-group>\n        <br />\n        <br />\n        <ve-table\n            :style="{\'word-break\':wordBreak}"\n            :columns="columns"\n            :table-data="tableData"\n            :border-around="true"\n            :border-x="true"\n            :border-y="true"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                wordBreak: "normal",\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name 40%",\n                        width: "40%",\n                    },\n                    { field: "date", key: "b", title: "Tel 20%", width: "20%" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby 20%",\n                        width: "20%",\n                        /*   ellipsis: {\n              showTitle: true,\n              lineClamp: 5,\n            }, */\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address 20%",\n                        width: "20%",\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu 大江东去浪淘尽千古风流人物故垒西边人道是三国周郎赤壁乱石穿空惊涛拍岸卷起千堆雪江山如画一时多少豪杰",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},L=[];function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){q(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var G={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[e._v("\n        word-break：\n        "),t("el-radio-group",{attrs:{size:"small"},model:{value:e.wordBreak,callback:function(n){e.wordBreak=n},expression:"wordBreak"}},[t("el-radio-button",{attrs:{label:"normal"}},[e._v("normal")]),e._v(" "),t("el-radio-button",{attrs:{label:"keep-all"}},[e._v("keep-all")]),e._v(" "),t("el-radio-button",{attrs:{label:"break-all"}},[e._v("break-all")]),e._v(" "),t("el-radio-button",{attrs:{label:"break-word"}},[e._v("break-word")])],1),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("ve-table",{style:{"word-break":e.wordBreak},attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})],1)]],2)},n=[],t={data:function(){return{wordBreak:"normal",columns:[{field:"name",key:"a",title:"Name 40%",width:"40%"},{field:"date",key:"b",title:"Tel 20%",width:"20%"},{field:"hobby",key:"c",title:"Hobby 20%",width:"20%"},{field:"address",key:"d",title:"Address 20%",width:"20%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"Honorificabilitudinitatibus califragilisticexpialidocious Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu 大江东去浪淘尽千古风流人物故垒西边人道是三国周郎赤壁乱石穿空惊涛拍岸卷起千堆雪江山如画一时多少豪杰",address:"No.1 Century Avenue, Xiamen"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return H({render:e,staticRenderFns:n},t)}()}},F=G,R=Object(i["a"])(F,X,L,!1,null,null,null),I=R.exports,Y={name:"basic-main",components:{Explain:s,NoWidth:v,PercentWidth:x,PxWidth:T,LongWord:I}},K=Y,M=Object(i["a"])(K,a,r,!1,null,null,null);n["default"]=M.exports}}]);
//# sourceMappingURL=chunk-2d238466.e7815a81.js.map