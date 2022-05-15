(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a2253b6"],{"4db6":function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("实例方法")]),n("Explain"),n("ScrollTo"),n("ScrollToColKey"),n("ScrollToRowKey"),n("API",{attrs:{title:"API",anchor:"API",desc:"实例方法"}})],1)},o=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[t._v("1、实例方法可以直接通过 "),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0"}},[t._v("ref")]),t._v(" 访问")])])])}],r=n("2877"),a={},s=Object(r["a"])(a,c,i,!1,null,null,null),d=s.exports,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"scrollTo 滚动方法",fileName:"scroll-to.md"}}),n("demo-block",[n("div",[n("p",[t._v("1、将表格滚动到指定位置（px）"),n("br"),t._v("2、参数请参考 "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTo"}},[t._v("scrollTo")])])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollY(1000)">垂直滚动到1000px</button>\n            <button class="button-demo" @click="scrollY(500)">垂直滚动到500px</button>\n            <button class="button-demo" @click="scrollY(0)">垂直滚动到0px</button>\n            <button class="button-demo" @click="scrollX(500)">水平滚动到300px</button>\n            <button class="button-demo" @click="scrollX(300)">水平滚动到200px</button>\n            <button class="button-demo" @click="scrollX(0)">水平滚动到0px</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollY(val) {\n                this.$refs["tableRef"].scrollTo({ top: val, behavior: "smooth" });\n            },\n            // scroll x\n            scrollX(val) {\n                this.$refs["tableRef"].scrollTo({ left: val, behavior: "smooth" });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},f=[];function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(1e3)}}},[t._v("垂直滚动到1000px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(500)}}},[t._v("垂直滚动到500px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollY(0)}}},[t._v("垂直滚动到0px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(500)}}},[t._v("水平滚动到300px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(300)}}},[t._v("水平滚动到200px")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollX(0)}}},[t._v("水平滚动到0px")])]),t._v(" "),n("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey"}})],1)]],2)},e=[],n={data:function(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],e=0;e<80;e++)t.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=t},scrollY:function(t){this.$refs["tableRef"].scrollTo({top:t,behavior:"smooth"})},scrollX:function(t){this.$refs["tableRef"].scrollTo({left:t,behavior:"smooth"})}},created:function(){this.initTableData()}};return b({render:t,staticRenderFns:e},n)}()}},p=y,w=Object(r["a"])(p,u,f,!1,null,null,null),v=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"scrollToColKey 列滚动方法",fileName:"scroll-to-col-key.md"}}),n("p",[t._v("当存在固定列时，可以通过此方法将指定的列显示在可视区域")]),n("demo-block",[n("div",[n("p",[t._v("1、滚动到指定 column 位置")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollToColKey(\'col4\')">滚动到col4列</button>\n            <button class="button-demo" @click="scrollToColKey(\'col5\')">滚动到col5列</button>\n            <button class="button-demo" @click="scrollToColKey(\'col6\')">滚动到col6列</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="350"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowKey"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "col4",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "col5",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "col6",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 80; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollToColKey(colKey) {\n                this.$refs["tableRef"].scrollToColKey({ colKey });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},g=[];function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){K(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToColKey("col4")}}},[t._v("滚动到col4列")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToColKey("col5")}}},[t._v("滚动到col5列")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToColKey("col6")}}},[t._v("滚动到col6列")])]),t._v(" "),n("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":350,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey"}})],1)]],2)},e=[],n={data:function(){return{columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140}]},{title:"col6",field:"col6",key:"col6",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{initTableData:function(){for(var t=[],e=0;e<80;e++)t.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e});this.tableData=t},scrollToColKey:function(t){this.$refs["tableRef"].scrollToColKey({colKey:t})}},created:function(){this.initTableData()}};return O({render:t,staticRenderFns:e},n)}()}},T=_,j=Object(r["a"])(T,k,g,!1,null,null,null),D=j.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"scrollToRowKey 行滚动方法",fileName:"scroll-to-row-key.md"}}),n("demo-block",[n("div",[n("p",[t._v("1、将表格滚动到指定行的位置")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n    <div>\n        <div style="margin-bottom:20px;line-height:3.0;">\n            <button class="button-demo" @click="scrollToRowKey(9999)">\n                滚动到rowKey为9999的行\n            </button>\n            <button class="button-demo" @click="scrollToRowKey(9989)">\n                滚动到rowKey为9989的行\n            </button>\n            <button class="button-demo" @click="scrollToRowKey(5000)">滚动到rowKey为50的行</button>\n            <button class="button-demo" @click="scrollToRowKey(0)">滚动到rowKey为0的行</button>\n        </div>\n        <ve-table\n            ref="tableRef"\n            style="width:1000px"\n            :scroll-width="1600"\n            :max-height="400"\n            border-y\n            :columns="columns"\n            :table-data="tableData"\n            rowKeyFieldName="rowKey"\n            :virtual-scroll-option="virtualScrollOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                    minRowHeight: 40,\n                },\n                columns: [\n                    {\n                        field: "col1",\n                        key: "a",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "b",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "c",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "d",\n                                        title: "col4",\n                                        width: 130,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "e",\n                                        title: "col5",\n                                        width: 140,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "f",\n                                width: 140,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "g",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "h",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            getRandom(min, max) {\n                return Math.floor(Math.random() * (max - min) + min);\n            },\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 10000; i++) {\n                    let value = "";\n                    if (i % 2 === 0) {\n                        const rowCount = this.getRandom(2, 3);\n\n                        for (let i = 0; i < rowCount; i++) {\n                            value += `this is the long word.<br />`;\n                        }\n                    } else {\n                        value = `name${i}`;\n                    }\n\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // scroll y\n            scrollToRowKey(rowKey) {\n                this.$refs["tableRef"].scrollToRowKey({ rowKey: rowKey });\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},E=[];function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){S(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $={name:"component-doc",components:{"element-demo0":function(){var t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("div",{staticStyle:{"margin-bottom":"20px","line-height":"3.0"}},[n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(9999)}}},[t._v("\n                滚动到rowKey为9999的行\n            ")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(9989)}}},[t._v("\n                滚动到rowKey为9989的行\n            ")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(5e3)}}},[t._v("滚动到rowKey为50的行")]),t._v(" "),n("button",{staticClass:"button-demo",on:{click:function(e){return t.scrollToRowKey(0)}}},[t._v("滚动到rowKey为0的行")])]),t._v(" "),n("ve-table",{ref:"tableRef",staticStyle:{width:"1000px"},attrs:{"scroll-width":1600,"max-height":400,"border-y":"",columns:t.columns,"table-data":t.tableData,rowKeyFieldName:"rowKey","virtual-scroll-option":t.virtualScrollOption}})],1)]],2)},e=[],n={data:function(){return{virtualScrollOption:{enable:!0,minRowHeight:40},columns:[{field:"col1",key:"a",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"b",title:"col2",width:50},{field:"col3",key:"c",title:"col3",width:50}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"d",title:"col4",width:130},{field:"col5",key:"e",title:"col5",width:140}]},{title:"col6",field:"col6",key:"f",width:140}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"g",width:50}]},{field:"col8",key:"h",title:"col8",width:50,fixed:"right"}]}},methods:{getRandom:function(t,e){return Math.floor(Math.random()*(e-t)+t)},initTableData:function(){for(var t=[],e=0;e<1e4;e++){if(e%2===0)for(var n=this.getRandom(2,3),l=0;l<n;l++)"this is the long word.<br />";else"name".concat(e);t.push({rowKey:e,col1:e,col2:e,col3:e,col4:e,col5:e,col6:e,col7:e,col8:e})}this.tableData=t},scrollToRowKey:function(t){this.$refs["tableRef"].scrollToRowKey({rowKey:t})}},created:function(){this.initTableData()}};return P({render:t,staticRenderFns:e},n)}()}},A=$,F=Object(r["a"])(A,R,E,!1,null,null,null),N=F.exports,B=n("c8d7"),X={name:"basic-main",components:{Explain:d,ScrollTo:v,ScrollToColKey:D,ScrollToRowKey:N,API:B["a"]}},Y=X,M=Object(r["a"])(Y,l,o,!1,null,null,null);e["default"]=M.exports},c8d7:function(t,e,n){"use strict";var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tpl",{attrs:{desc:t.desc,anchor:t.anchor,"table-data":t.db.instanceMethods.data,columns:t.db.instanceMethods.columns}})],1)},o=[],c=n("3ef3"),i=n("d890"),r={components:{tpl:c["a"]},props:{anchor:{type:String,default:"实例方法"},desc:{type:String,default:"Table instance methods"}},data:function(){return{db:i["a"]}}},a=r,s=n("2877"),d=Object(s["a"])(a,l,o,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-8a2253b6.1696a1e1.js.map