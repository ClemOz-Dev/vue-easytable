(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74192098"],{4565:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.radioOption.data,columns:e.db.radioOption.columns}})],1)},a=[],r=t("3ef3"),i=t("7eb4"),d={components:{tpl:r["a"]},props:{anchor:{type:String,default:"Row radio option"},desc:{type:String,default:"radioOption"}},data:function(){return{db:i["a"]}}},l=d,c=t("2877"),s=Object(c["a"])(l,o,a,!1,null,null,null);n["a"]=s.exports},"6a77":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Row Radio")]),t("Explain"),t("Base"),t("RadioColumn"),t("SelectedDefault"),t("SelectedDisable"),t("SelectedControl"),t("SelectedRowClick"),t("API",{attrs:{title:"API",anchor:"API",desc:"radioOption option"}})],1)},a=[],r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、Use the "),t("code",[e._v("radioOption")]),e._v(" attribute to enable the row radio."),t("br"),e._v(" 2、Set "),t("code",[e._v("type=radio")]),e._v(" in "),t("code",[e._v("columns")]),e._v(" as a radio column"),t("br"),e._v(" 3、The "),t("code",[e._v("rowKeyFieldName")]),e._v(" property must be set"),t("br"),e._v(" 4、"),t("code",[e._v("Selectedrowchange")]),e._v(" is row change event.Event receives 1 parameter,"),t("code",[e._v("row")]),e._v(":current row data")])])])}],d=t("2877"),l={},c=Object(d["a"])(l,r,i,!1,null,null,null),s=c.exports,y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Base Usage",fileName:"base.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            style="width:100%"\n            :columns="columns"\n            :table-data="tableData"\n            :radio-option="radioOption"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                radioOption: {\n                    selectedRowChange: ({ row }) => {\n                        console.log(row);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=radio\n                        type: "radio",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        rowKey: 1001,\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        rowKey: 1002,\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        rowKey: 1003,\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        rowKey: 1004,\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        rowKey: 1005,\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},u=[];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){m(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var p={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{staticStyle:{width:"100%"},attrs:{columns:e.columns,"table-data":e.tableData,"radio-option":e.radioOption,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{radioOption:{selectedRowChange:function(e){var n=e.row;console.log(n)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return h({render:e,staticRenderFns:n},t)}()}},w=p,g=Object(d["a"])(w,y,u,!1,null,null,null),f=g.exports,v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Radio column option",fileName:"radio-column.md"}}),t("demo-block",[t("div",[t("p",[e._v("Select the existing column as radio radio column")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            style="width:100%"\n            :columns="columns"\n            :table-data="tableData"\n            :radio-option="radioOption"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                radioOption: {\n                    // 行选择改变事件\n                    selectedRowChange: ({ row }) => {\n                        console.log(row);\n                    },\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "b",\n                        // type=radio\n                        type: "radio",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        rowKey: 1001,\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        rowKey: 1002,\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        rowKey: 1003,\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        rowKey: 1004,\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        rowKey: 1005,\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},O=[];function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?K(Object(t),!0).forEach((function(n){k(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var j={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{staticStyle:{width:"100%"},attrs:{columns:e.columns,"table-data":e.tableData,"radio-option":e.radioOption,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{radioOption:{selectedRowChange:function(e){var n=e.row;console.log(n)}},columns:[{field:"name",key:"b",type:"radio",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return C({render:e,staticRenderFns:n},t)}()}},S=j,R=Object(d["a"])(S,v,O,!1,null,null,null),A=R.exports,N=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Selected by default",fileName:"selected-default.md"}}),t("demo-block",[t("div",[t("p",[t("code",[e._v("defaultSelectedRowKey")]),e._v(" sets the default selected rowKey")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            style="width:100%"\n            :columns="columns"\n            :table-data="tableData"\n            :radio-option="radioOption"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                radioOption: {\n                    defaultSelectedRowKey: 1003,\n                    selectedRowChange: ({ row }) => {\n                        console.log(row);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=radio\n                        type: "radio",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        rowKey: 1001,\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        rowKey: 1002,\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        rowKey: 1003,\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        rowKey: 1004,\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        rowKey: 1005,\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},_=[];function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){E(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var x={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{staticStyle:{width:"100%"},attrs:{columns:e.columns,"table-data":e.tableData,"radio-option":e.radioOption,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{radioOption:{defaultSelectedRowKey:1003,selectedRowChange:function(e){var n=e.row;console.log(n)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return P({render:e,staticRenderFns:n},t)}()}},J=x,B=Object(d["a"])(J,N,_,!1,null,null,null),$=B.exports,z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Disable Selection",fileName:"selected-disable.md"}}),t("demo-block",[t("div",[t("p",[t("code",[e._v("disableSelectedRowKeys")]),e._v("sets the rowKey array to be disabled(it is forbidden to select or cancel the select)")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            style="width:100%"\n            :columns="columns"\n            :table-data="tableData"\n            :radio-option="radioOption"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                radioOption: {\n                    // 禁用的选择（禁止勾选或者禁止取消勾选）\n                    disableSelectedRowKeys: [1003, 1005],\n                    // 行选择改变事件\n                    selectedRowChange: ({ row }) => {\n                        console.log(row);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=radio\n                        type: "radio",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        rowKey: 1001,\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        rowKey: 1002,\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        rowKey: 1003,\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        rowKey: 1004,\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        rowKey: 1005,\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},q=[];function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function H(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?G(Object(t),!0).forEach((function(n){L(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function L(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var X={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{staticStyle:{width:"100%"},attrs:{columns:e.columns,"table-data":e.tableData,"radio-option":e.radioOption,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){return{radioOption:{disableSelectedRowKeys:[1003,1005],selectedRowChange:function(e){var n=e.row;console.log(n)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return H({render:e,staticRenderFns:n},t)}()}},F=X,I=Object(d["a"])(F,z,q,!1,null,null,null),T=I.exports,U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Controllable Attribute",fileName:"selected-control.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、"),t("code",[e._v("selectedRowKey")]),e._v("is a controllable attribute of row selection,After selection, you need to re assign values in the "),t("code",[e._v("selectedRowChange")]),e._v(" event.通过这个属性可以自定义更多功能"),t("br"),e._v("2、After setting the "),t("code",[e._v("selectedRowKey")]),e._v(" property, the "),t("code",[e._v("defaultSelectedRowKey")]),e._v(" property will be invalid")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <button class="button-demo" @click="selectedSwitch(1002)">\n            Second Row Switch Selection\n        </button>\n        <button class="button-demo" @click="unselected()">UnCheck</button>\n        <br />\n        <br />\n        <ve-table\n            style="width:100%"\n            :columns="columns"\n            :table-data="tableData"\n            :radio-option="radioOption"\n            row-key-field-name="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                radioOption: {\n                    selectedRowKey: "",\n                    selectedRowChange: ({ row }) => {\n                        this.changeSelectedRowKey(row.rowKey);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=radio\n                        type: "radio",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        rowKey: 1001,\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        rowKey: 1002,\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        rowKey: 1003,\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        rowKey: 1004,\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        rowKey: 1005,\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            changeSelectedRowKey(key) {\n                this.radioOption.selectedRowKey = key;\n            },\n            // 切换选中行\n            selectedSwitch(key) {\n                let selectedRowKey = this.radioOption.selectedRowKey;\n\n                if (selectedRowKey === key) {\n                    this.radioOption.selectedRowKey = "";\n                } else {\n                    this.radioOption.selectedRowKey = key;\n                }\n            },\n            // 取消选中\n            unselected() {\n                this.radioOption.selectedRowKey = "";\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},Y=[];function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){V(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var W={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("button",{staticClass:"button-demo",on:{click:function(n){return e.selectedSwitch(1002)}}},[e._v("\n            Second Row Switch Selection\n        ")]),e._v(" "),t("button",{staticClass:"button-demo",on:{click:function(n){return e.unselected()}}},[e._v("UnCheck")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("ve-table",{staticStyle:{width:"100%"},attrs:{columns:e.columns,"table-data":e.tableData,"radio-option":e.radioOption,"row-key-field-name":"rowKey"}})],1)]],2)},n=[],t={data:function(){var e=this;return{radioOption:{selectedRowKey:"",selectedRowChange:function(n){var t=n.row;e.changeSelectedRowKey(t.rowKey)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeSelectedRowKey:function(e){this.radioOption.selectedRowKey=e},selectedSwitch:function(e){var n=this.radioOption.selectedRowKey;this.radioOption.selectedRowKey=n===e?"":e},unselected:function(){this.radioOption.selectedRowKey=""}}};return Q({render:e,staticRenderFns:n},t)}()}},Z=W,ee=Object(d["a"])(Z,U,Y,!1,null,null,null),ne=ee.exports,te=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Row Click Trigger",fileName:"selected-row-click.md"}}),t("p",[e._v("This example is row click trigger selection,You can also click and select columns through event customization")]),t("demo-block",[t("div",[t("p",[e._v('The controllable attribute combined with "event customization" can trigger the selection effect by clicking the line')])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            style="width:100%"\n            :columns="columns"\n            :table-data="tableData"\n            :radio-option="radioOption"\n            row-key-field-name="rowKey"\n            :event-custom-option="eventCustomOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                eventCustomOption: {\n                    bodyRowEvents: ({ row, rowIndex }) => {\n                        return {\n                            click: (event) => {\n                                const currentRowKey = row["rowKey"];\n                                this.changeSelectedRowKeyByRowClick(currentRowKey);\n                            },\n                        };\n                    },\n                },\n                radioOption: {\n                    selectedRowKey: "",\n                    selectedRowChange: ({ row }) => {\n                        this.changeSelectedRowKey(row.rowKey);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        // type=radio\n                        type: "radio",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                    },\n                    {\n                        field: "name",\n                        key: "b",\n                        title: "Name",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        rowKey: 1001,\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        rowKey: 1002,\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        rowKey: 1003,\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        rowKey: 1004,\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        rowKey: 1005,\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            changeSelectedRowKey(key) {\n                this.radioOption.selectedRowKey = key;\n            },\n            // 行点击触发\n            changeSelectedRowKeyByRowClick(currentRowKey) {\n                this.radioOption.selectedRowKey = currentRowKey;\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},oe=[];function ae(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function re(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ae(Object(t),!0).forEach((function(n){ie(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ie(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var de={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{staticStyle:{width:"100%"},attrs:{columns:e.columns,"table-data":e.tableData,"radio-option":e.radioOption,"row-key-field-name":"rowKey","event-custom-option":e.eventCustomOption}})],1)]],2)},n=[],t={data:function(){var e=this;return{eventCustomOption:{bodyRowEvents:function(n){var t=n.row;n.rowIndex;return{click:function(n){var o=t["rowKey"];e.changeSelectedRowKeyByRowClick(o)}}}},radioOption:{selectedRowKey:"",selectedRowChange:function(n){var t=n.row;e.changeSelectedRowKey(t.rowKey)}},columns:[{field:"",key:"a",type:"radio",title:"",width:50,align:"center"},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{changeSelectedRowKey:function(e){this.radioOption.selectedRowKey=e},changeSelectedRowKeyByRowClick:function(e){this.radioOption.selectedRowKey=e}}};return re({render:e,staticRenderFns:n},t)}()}},le=de,ce=Object(d["a"])(le,te,oe,!1,null,null,null),se=ce.exports,ye=t("4565"),ue={name:"basic-main",components:{Explain:s,Base:f,RadioColumn:A,SelectedDefault:$,SelectedDisable:T,SelectedControl:ne,SelectedRowClick:se,API:ye["a"]}},be=ue,he=Object(d["a"])(be,o,a,!1,null,null,null);n["default"]=he.exports}}]);
//# sourceMappingURL=chunk-74192098.f283551b.js.map