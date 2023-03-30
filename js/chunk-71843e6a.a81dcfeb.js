(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71843e6a"],{"028a":function(e,n,t){},"0c13":function(e,n,t){"use strict";t("870f")},"2ead":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"footer 汇总自定义单元格",fileName:"custom-cell.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、column 配置中，支持通过属性 "),t("code",[e._v("renderFooterCell")]),e._v(" 传入渲染函数，与 body 自定义单元格用法一致。"),t("br"),e._v("2、渲染函数接收三个参数，row:当前行数据、column:当前列配置、rowIndex:行索引")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        border-y\n        fixed-header\n        :max-height="300"\n        :columns="columns"\n        :table-data="tableData"\n        :footer-data="footerData"\n        rowKeyFieldName="rowKey"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "center",\n                        renderFooterCell: ({ row, column, rowIndex }, h) => {\n                            return (\n                                <span class="text-bold" style="">\n                                    {row.name}\n                                </span>\n                            );\n                        },\n                    },\n                    { field: "date", key: "b", title: "Date", align: "left" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n                footerData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 15; i++) {\n                    data.push({\n                        rowKey: i,\n                        name: i,\n                        date: i,\n                        hobby: i,\n                        address: i,\n                    });\n                }\n                this.tableData = data;\n            },\n\n            initFooterData() {\n                this.footerData = [\n                    {\n                        rowKey: 0,\n                        name: "平均值",\n                        date: 213,\n                        hobby: 355,\n                        address: 189,\n                    },\n                    {\n                        rowKey: 1,\n                        name: "汇总值",\n                        date: 1780,\n                        hobby: 890,\n                        address: 2988,\n                    },\n                ];\n            },\n        },\n        created() {\n            this.initTableData();\n            this.initFooterData();\n        },\n    };\n<\/script>\n\n<style>\n    .text-bold {\n        font-weight: bold;\n    }\n</style>\n')])])])],2)],1)},o=[];function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return n=c(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){var n=s(e,"string");return"symbol"===a(n)?n:String(n)}function s(e,n){if("object"!==a(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var u={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{"border-y":"","fixed-header":"","max-height":300,columns:e.columns,"table-data":e.tableData,"footer-data":e.footerData,rowKeyFieldName:"rowKey"}})]],2)},n=[],t={data:function(){this.$createElement;return{columns:[{field:"name",key:"a",title:"Name",align:"center",renderFooterCell:function(e,n){var t=e.row;e.column,e.rowIndex;return n("span",{class:"text-bold",style:""},[t.name])}},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[],footerData:[]}},methods:{initTableData:function(){for(var e=[],n=0;n<15;n++)e.push({rowKey:n,name:n,date:n,hobby:n,address:n});this.tableData=e},initFooterData:function(){this.footerData=[{rowKey:0,name:"平均值",date:213,hobby:355,address:189},{rowKey:1,name:"汇总值",date:1780,hobby:890,address:2988}]}},created:function(){this.initTableData(),this.initFooterData()}};return l({render:e,staticRenderFns:n},t)}()}},b=u,m=(t("fa8c"),t("2877")),y=Object(m["a"])(b,r,o,!1,null,null,null);n["a"]=y.exports},"319e":function(e,n,t){"use strict";t("a1e0")},"870f":function(e,n,t){},a1e0:function(e,n,t){},a377:function(e,n,t){},ad69:function(e,n,t){"use strict";t("028a")},bcb6:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("自定义列")]),t("BodyCell"),t("HeaderCell"),t("FooterCell"),t("More")],1)},o=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"body 自定义单元格",fileName:"body-cell.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、"),t("code",[e._v("column")]),e._v("配置中，支持通过属性 "),t("code",[e._v("renderBodyCell({row,column,rowIndex},h)")]),e._v("传入渲染函数，此处为 jsx 语法,书写和模板语法接近。更多 jsx 知识请参考"),t("a",{attrs:{href:"https://vuejs.org/v2/guide/render-function.html#JSX"}},[e._v("Vue.js 考官方文档")]),t("br"),e._v("2、渲染函数接收三个参数，"),t("code",[e._v("row")]),e._v(":当前行数据、"),t("code",[e._v("column")]),e._v(":当前列配置、"),t("code",[e._v("rowIndex")]),e._v(":行索引")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table style="width:100%" border-y :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "#",\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (\n                                <span class="text-bold" style="color:#1890ff;">\n                                    {++rowIndex}\n                                </span>\n                            );\n                        },\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "center",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "left",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            const text = row[column.field];\n                            return (\n                                <span>\n                                    <a\n                                        class="test-text"\n                                        href="http://github.com"\n                                        style="color:#1890ff;cursor:pointer;"\n                                    >\n                                        {text}\n                                    </a>\n                                    &nbsp;are my hobbies\n                                </span>\n                            );\n                        },\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            const text = row[column.field];\n                            return <input style="width:100%" value={text}></input>;\n                        },\n                    },\n                    {\n                        field: "",\n                        key: "e",\n                        title: "Action",\n                        width: "",\n                        center: "left",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (\n                                <span>\n                                    <button\n                                        class="button-demo"\n                                        on-click={() => this.editRow(rowIndex)}\n                                    >\n                                        Edit\n                                    </button>\n                                    &nbsp;\n                                    <button\n                                        class="button-demo"\n                                        on-click={() => this.deleteRow(rowIndex)}\n                                    >\n                                        Delete\n                                    </button>\n                                </span>\n                            );\n                        },\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            editRow(rowIndex) {\n                alert(`eidt row number:${rowIndex}`);\n            },\n            deleteRow(rowIndex) {\n                this.tableData.splice(rowIndex, 1);\n            },\n        },\n    };\n<\/script>\n\n<style>\n    .text-bold {\n        font-weight: bold;\n    }\n</style>\n')])])])],2)],1)},i=[];function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n=u(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){var n=b(e,"string");return"symbol"===l(n)?n:String(n)}function b(e,n){if("object"!==l(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var m={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{staticStyle:{width:"100%"},attrs:{"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){var e=this;this.$createElement;return{columns:[{field:"",key:"a",title:"#",align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return n("span",{class:"text-bold",style:"color:#1890ff;"},[++t])}},{field:"date",key:"b",title:"Date",align:"center"},{field:"hobby",key:"c",title:"Hobby",align:"left",renderBodyCell:function(e,n){var t=e.row,r=e.column,o=(e.rowIndex,t[r.field]);return n("span",[n("a",{class:"test-text",attrs:{href:"http://github.com"},style:"color:#1890ff;cursor:pointer;"},[o])," are my hobbies"])}},{field:"address",key:"d",title:"Address",width:"",align:"left",renderBodyCell:function(e,n){var t=e.row,r=e.column,o=(e.rowIndex,t[r.field]);return n("input",{style:"width:100%",domProps:{value:o}})}},{field:"",key:"e",title:"Action",width:"",center:"left",renderBodyCell:function(n,t){n.row,n.column;var r=n.rowIndex;return t("span",[t("button",{class:"button-demo",on:{click:function(){return e.editRow(r)}}},["Edit"])," ",t("button",{class:"button-demo",on:{click:function(){return e.deleteRow(r)}}},["Delete"])])}}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{editRow:function(e){alert("eidt row number:".concat(e))},deleteRow:function(e){this.tableData.splice(e,1)}}};return c({render:e,staticRenderFns:n},t)}()}},y=m,f=(t("0c13"),t("2877")),h=Object(f["a"])(y,a,i,!1,null,null,null),p=h.exports,v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"header 自定义单元格",fileName:"header-cell.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、"),t("code",[e._v("column")]),e._v("配置中，支持通过属性 "),t("code",[e._v("renderHeaderCell")]),e._v("传入渲染函数，与 body 自定义单元格用法一致。"),t("code",[e._v("renderHeaderCell")]),e._v("在表头分组中一样适用"),t("br"),e._v("2、渲染函数接收一个参数，"),t("code",[e._v("column")]),e._v(":当前列配置")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:100%"\n        border-y\n        :columns="columns"\n        :table-data="tableData.filter(item=>!searchText || item.name.toLowerCase().includes(searchText.toLowerCase()))"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        width: 200,\n                        align: "center",\n                        renderHeaderCell: ({ column }, h) => {\n                            return (\n                                <input\n                                    // jsx 不能直接使用 v-model。此处为 jsx 实现 v-model，了解更多查看官方文档\n                                    value={this.searchText}\n                                    onInput={this.searchInputChange}\n                                    style="width:90%"\n                                    placeholder="请输入名称关键字"\n                                />\n                            );\n                        },\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "center",\n                        renderHeaderCell: ({ column }, h) => {\n                            return (\n                                <span class="text-bold" style="color:#1890ff;">\n                                    {column.title}\n                                </span>\n                            );\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n                // 搜索\n                searchText: "",\n            };\n        },\n        methods: {\n            // search input change event\n            searchInputChange(e) {\n                this.searchText = e.target.value;\n            },\n        },\n    };\n<\/script>\n\n<style>\n    .text-bold {\n        font-weight: bold;\n    }\n</style>\n')])])])],2)],1)},g=[];function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){C(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e,n,t){return n=j(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function j(e){var n=D(e,"string");return"symbol"===w(n)?n:String(n)}function D(e,n){if("object"!==w(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var _={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{staticStyle:{width:"100%"},attrs:{"border-y":"",columns:e.columns,"table-data":e.tableData.filter((function(n){return!e.searchText||n.name.toLowerCase().includes(e.searchText.toLowerCase())}))}})]],2)},n=[],t={data:function(){var e=this;this.$createElement;return{columns:[{field:"name",key:"a",title:"Name",width:200,align:"center",renderHeaderCell:function(n,t){n.column;return t("input",{domProps:{value:e.searchText},on:{input:e.searchInputChange},style:"width:90%",attrs:{placeholder:"请输入名称关键字"}})}},{field:"date",key:"b",title:"Date",width:200,align:"center",renderHeaderCell:function(e,n){var t=e.column;return n("span",{class:"text-bold",style:"color:#1890ff;"},[t.title])}},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}],searchText:""}},methods:{searchInputChange:function(e){this.searchText=e.target.value}}};return x({render:e,staticRenderFns:n},t)}()}},S=_,k=(t("ad69"),Object(f["a"])(S,v,g,!1,null,null,null)),N=k.exports,P=t("2ead"),A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"通过外部组件自定义",fileName:"more.md"}}),e._m(0),t("demo-block",[t("div",[t("p",[e._v("通过外部组件自定义")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table style="width:100%" border-y :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n    // 此示例是在组件内部定义了一个子组件。你当然也可以通过 `import`关键字导入一个组件\n    const OtherComp = {\n        name: "OtherComp",\n        template: `\n        <div class="other-comp">\n            <span style="color:#1890ff;">row index: {{rowIndex}}</span>\n        </div>\n    `,\n        props: {\n            row: Object,\n            column: Object,\n            rowIndex: Number,\n        },\n    };\n\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "Row Number",\n                        width: 200,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return <OtherComp row={row} column={column} rowIndex={rowIndex} />;\n                        },\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "center",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 300,\n                        align: "left",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        width: "",\n                        align: "left",\n                    },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            editRow(rowIndex) {\n                alert(`eidt row number:${rowIndex}`);\n            },\n            deleteRow(rowIndex) {\n                this.tableData.splice(rowIndex, 1);\n            },\n        },\n    };\n<\/script>\n\n<style>\n    .text-bold {\n        font-weight: bold;\n    }\n</style>\n')])])])],2)],1)},I=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tip"},[t("p",[e._v("1、 当然你也可以通过外部组件自定义单元格内容，此示例是在组件内部定义了一个"),t("code",[e._v("OtherComp")]),e._v("组件，你也可以通过 "),t("code",[e._v("import")]),e._v("关键字导入一个组件作为自定义组件"),t("br"),e._v(" 2、 "),t("code",[e._v("renderBodyCell")]),e._v("、"),t("code",[e._v("renderHeaderCell")]),e._v("等一样适用"),t("br")])])}];function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){T(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(e,n,t){return n=H(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function H(e){var n=$(e,"string");return"symbol"===E(n)?n:String(n)}function $(e,n){if("object"!==E(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}var F={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{staticStyle:{width:"100%"},attrs:{"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={name:"OtherComp",template:'\n        <div class="other-comp">\n            <span style="color:#1890ff;">row index: {{rowIndex}}</span>\n        </div>\n    ',props:{row:Object,column:Object,rowIndex:Number}},r={data:function(){this.$createElement;return{columns:[{field:"",key:"a",title:"Row Number",width:200,align:"center",renderBodyCell:function(e,n){var r=e.row,o=e.column,a=e.rowIndex;return n(t,{attrs:{row:r,column:o,rowIndex:a}})}},{field:"date",key:"b",title:"Date",width:200,align:"center"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{editRow:function(e){alert("eidt row number:".concat(e))},deleteRow:function(e){this.tableData.splice(e,1)}}};return R({render:e,staticRenderFns:n},r)}()}},J=F,K=(t("319e"),Object(f["a"])(J,A,I,!1,null,null,null)),L=K.exports,X={name:"custom-cell",components:{BodyCell:p,HeaderCell:N,FooterCell:P["a"],More:L}},q=X,z=Object(f["a"])(q,r,o,!1,null,null,null);n["default"]=z.exports},fa8c:function(e,n,t){"use strict";t("a377")}}]);
//# sourceMappingURL=chunk-71843e6a.a81dcfeb.js.map