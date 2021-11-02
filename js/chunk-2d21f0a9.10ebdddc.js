(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f0a9"],{d7aa:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Header Grouping")]),n("Explain"),n("grouping-header"),n("grouping-header-fixed-column")],1)},i=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、Setting the "),n("code",[e._v("children")]),e._v(" property of "),n("code",[e._v("columns")]),e._v(", header grouping is realized"),n("br"),e._v(" 2、The "),n("code",[e._v("children")]),e._v(" attribute specifies the columns to be merged"),n("br"),e._v(" 3、The header grouping must specify the "),n("code",[e._v("key")]),e._v(" attribute of the column！！"),n("br"),e._v(" 4、When you need to fix the grouped columns, you only need to set the fixed attribute in the top-level configuration")])])])}],r=n("2877"),a={},d=Object(r["a"])(a,o,c,!1,null,null,null),s=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Header Grouping",fileName:"grouping-header.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、Specify the currently merged column by setting "),n("code",[e._v("children")])])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table border-y :columns="columns" :table-data="tableData" rowKeyFieldName="rowKey" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "col1", width: "10%" },\n                    {\n                        title: "col2-col3",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 100,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 110,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    { field: "col7", key: "g", title: "col7", width: 150 },\n                    { field: "col8", key: "h", title: "col8", width: 160 },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 6; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},u=[];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"border-y":"",columns:e.columns,"table-data":e.tableData,rowKeyFieldName:"rowKey"}})]],2)},t=[],n={data:function(){return{columns:[{field:"col1",key:"a",title:"col1",width:"10%"},{title:"col2-col3",children:[{field:"col2",key:"b",title:"col2",width:100},{field:"col3",key:"c",title:"col3",width:110}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{field:"col7",key:"g",title:"col7",width:150},{field:"col8",key:"h",title:"col8",width:160}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<6;t++)e.push({rowKey:t,col1:t,col2:t,col3:t,col4:t,col5:t,col6:t,col7:t,col8:t});this.tableData=e}},created:function(){this.initTableData()}};return p({render:e,staticRenderFns:t},n)}()}},y=m,w=Object(r["a"])(y,h,u,!1,null,null,null),g=w.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Header Grouping With Columns Fixed",fileName:"grouping-header-fixed-column.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、Fix the left column by setting "),n("code",[e._v('fixed:"left"')]),n("br"),e._v("2、The fixed column only needs to be assigned to the top column")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        fixed-header\n        :scroll-width="1600"\n        :max-height="380"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n        rowKeyFieldName="rowKey"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 10; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},k=[];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"fixed-header":"","scroll-width":1600,"max-height":380,"border-y":"",columns:e.columns,"table-data":e.tableData,rowKeyFieldName:"rowKey"}})]],2)},t=[],n={data:function(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<10;t++)e.push({rowKey:t,col1:t,col2:t,col3:t,col4:t,col5:t,col6:t,col7:t,col8:t});this.tableData=e}},created:function(){this.initTableData()}};return _({render:e,staticRenderFns:t},n)}()}},D=j,P=Object(r["a"])(D,v,k,!1,null,null,null),E=P.exports,K={name:"basic-main",components:{Explain:s,GroupingHeader:g,GroupingHeaderFixedColumn:E}},T=K,F=Object(r["a"])(T,l,i,!1,null,null,null);t["default"]=F.exports}}]);
//# sourceMappingURL=chunk-2d21f0a9.10ebdddc.js.map