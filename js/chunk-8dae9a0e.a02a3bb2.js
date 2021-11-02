(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8dae9a0e"],{"93a2":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.columns.filterProps.data,columns:e.db.columns.filterProps.columns}})],1)},l=[],r=t("3ef3"),i=t("7eb4"),s={components:{tpl:r["a"]},props:{anchor:{type:String,default:"Filter"},desc:{type:String,default:"filter"}},data:function(){return{db:i["a"]}}},o=s,d=t("2877"),c=Object(d["a"])(o,a,l,!1,null,null,null);n["a"]=c.exports},bc82:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Filter")]),t("Explain"),t("SingleFilter"),t("MutilFilter"),t("MixtureFilter"),t("CustomIcon"),t("API",{attrs:{title:"API",anchor:"API",desc:"filter"}})],1)},l=[],r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、The "),t("code",[e._v("filter")]),e._v(" property of the "),t("code",[e._v("column")]),e._v(" object sets the filtering function"),t("br"),e._v(" 2、 "),t("code",[e._v("Filterlist")]),e._v("sets your filter criteria. It contains three attributes:"),t("code",[e._v("label")]),e._v(","),t("code",[e._v("value")]),e._v("and"),t("code",[e._v("selected")]),t("br"),e._v(" 3、"),t("code",[e._v("isMultiple")]),e._v("enables multiple selection of filter items, and the default value is false"),t("br"),e._v(" 4、"),t("code",[e._v("filterConfirm")]),e._v("filter confirm function"),t("br"),e._v(" 5、"),t("code",[e._v("filterReset")]),e._v(" filter reset function"),t("br")])])])}],s=t("2877"),o={},d=Object(s["a"])(o,r,i,!1,null,null,null),c=d.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Single Condition Filter",fileName:"single-filter.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :max-height="300"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                        // filter\n                        filter: {\n                            filterList: [\n                                {\n                                    value: 0,\n                                    label: "1900-05-20",\n                                    selected: false,\n                                },\n                                {\n                                    value: 1,\n                                    label: "1910-06-20",\n                                    selected: false,\n                                },\n                                {\n                                    value: 2,\n                                    label: "2000-07-20",\n                                    selected: false,\n                                },\n                                {\n                                    value: 3,\n                                    label: "2010-08-20",\n                                    selected: false,\n                                },\n                                {\n                                    value: 4,\n                                    label: "2020-09-20",\n                                    selected: false,\n                                },\n                            ],\n                            // filter confirm hook\n                            filterConfirm: (filterList) => {\n                                const labels = filterList\n                                    .filter((x) => x.selected)\n                                    .map((x) => x.label);\n                                this.searchByDateField(labels);\n                            },\n                            // filter reset hook\n                            filterReset: (filterList) => {\n                                this.searchByDateField([]);\n                            },\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // real table data\n                tableData: [],\n                // source data\n                sourceData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {\n            // search by date field\n            searchByDateField(labels) {\n                this.tableData = this.sourceData.filter(\n                    (x) => labels.length === 0 || labels.includes(x.date),\n                );\n            },\n        },\n        created() {\n            this.tableData = this.sourceData.slice(0);\n        },\n    };\n<\/script>\n')])])])],2)],1)},f=[];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){m(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){var e=this;return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%",filter:{filterList:[{value:0,label:"1900-05-20",selected:!1},{value:1,label:"1910-06-20",selected:!1},{value:2,label:"2000-07-20",selected:!1},{value:3,label:"2010-08-20",selected:!1},{value:4,label:"2020-09-20",selected:!1}],filterConfirm:function(n){var t=n.filter((function(e){return e.selected})).map((function(e){return e.label}));e.searchByDateField(t)},filterReset:function(n){e.searchByDateField([])}}},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{searchByDateField:function(e){this.tableData=this.sourceData.filter((function(n){return 0===e.length||e.includes(n.date)}))}},created:function(){this.tableData=this.sourceData.slice(0)}};return h({render:e,staticRenderFns:n},t)}()}},g=y,p=Object(s["a"])(g,u,f,!1,null,null,null),v=p.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Multi Condition Filter",fileName:"mutil-filter.md"}}),t("demo-block",[t("div",[t("p",[e._v("The 'maxheight' property sets the maximum height of the filter box when there is a lot of content in the filter box")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :max-height="300"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                        // filter\n                        filter: {\n                            filterList: [\n                                { value: 0, label: "John", selected: false },\n                                {\n                                    value: 1,\n                                    label: "Dickerson",\n                                    selected: false,\n                                },\n                                { value: 2, label: "Larsen", selected: false },\n                                { value: 3, label: "Geneva", selected: false },\n                                { value: 4, label: "Jami", selected: false },\n                            ],\n                            isMultiple: true,\n                            // filter confirm hook\n                            filterConfirm: (filterList) => {\n                                const labels = filterList\n                                    .filter((x) => x.selected)\n                                    .map((x) => x.label);\n                                this.searchByNameField(labels);\n                            },\n                            // filter reset hook\n                            filterReset: (filterList) => {\n                                this.searchByNameField([]);\n                            },\n                            // max height\n                            maxHeight: 120,\n                        },\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // real table data\n                tableData: [],\n                // source data\n                sourceData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {\n            // search by name field\n            searchByNameField(labels) {\n                this.tableData = this.sourceData.filter(\n                    (x) => labels.length === 0 || labels.includes(x.name),\n                );\n            },\n        },\n        created() {\n            this.tableData = this.sourceData.slice(0);\n        },\n    };\n<\/script>\n')])])])],2)],1)},D=[];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var C={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){var e=this;return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filter:{filterList:[{value:0,label:"John",selected:!1},{value:1,label:"Dickerson",selected:!1},{value:2,label:"Larsen",selected:!1},{value:3,label:"Geneva",selected:!1},{value:4,label:"Jami",selected:!1}],isMultiple:!0,filterConfirm:function(n){var t=n.filter((function(e){return e.selected})).map((function(e){return e.label}));e.searchByNameField(t)},filterReset:function(n){e.searchByNameField([])},maxHeight:120}},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{searchByNameField:function(e){this.tableData=this.sourceData.filter((function(n){return 0===e.length||e.includes(n.name)}))}},created:function(){this.tableData=this.sourceData.slice(0)}};return x({render:e,staticRenderFns:n},t)}()}},N=C,k=Object(s["a"])(N,w,D,!1,null,null,null),j=k.exports,A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Mixed Use",fileName:"mixture-filter.md"}}),t("p",[e._v("According to different business scenarios, it can be used arbitrarily")]),t("demo-block",[t("div",[t("p",[e._v("You can set the default selected item by "),t("code",[e._v("selected=true")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :max-height="300"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    // name fiter list\n    const NAME_FILTER_LIST = [\n        { value: 0, label: "John", selected: true },\n        { value: 1, label: "Dickerson", selected: true },\n        { value: 2, label: "Larsen", selected: false },\n        { value: 3, label: "Geneva", selected: true },\n        { value: 4, label: "Jami", selected: false },\n    ];\n\n    // date fiter list\n    const Date_FILTER_LIST = [\n        { value: 0, label: "1900-05-20", selected: false },\n        { value: 1, label: "1910-06-20", selected: false },\n        { value: 2, label: "2000-07-20", selected: false },\n        { value: 3, label: "2010-08-20", selected: false },\n        { value: 4, label: "2020-09-20", selected: false },\n    ];\n\n    export default {\n        data() {\n            return {\n                // search data\n                searchData: {\n                    names: [],\n                    date: "",\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                        // filter\n                        filter: {\n                            filterList: NAME_FILTER_LIST,\n                            isMultiple: true,\n                            // filter confirm hook\n                            filterConfirm: (filterList) => {\n                                const labels = filterList\n                                    .filter((x) => x.selected)\n                                    .map((x) => x.label);\n                                this.searchData.names = labels;\n                            },\n                            // filter reset hook\n                            filterReset: (filterList) => {\n                                this.searchData.names = [];\n                            },\n                        },\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                        // filter\n                        filter: {\n                            filterList: Date_FILTER_LIST,\n                            // filter confirm hook\n                            filterConfirm: (filterList) => {\n                                const item = filterList.find((x) => x.selected);\n                                this.searchData.date = item ? item.label : "";\n                            },\n                            // filter reset hook\n                            filterReset: (filterList) => {\n                                this.searchData.date = "";\n                            },\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // real table data\n                tableData: [],\n                // source data\n                sourceData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        watch: {\n            searchData: {\n                handler: function () {\n                    this.search();\n                },\n                immediate: true,\n                deep: true,\n            },\n        },\n        methods: {\n            // search\n            search() {\n                const { names, date } = this.searchData;\n                this.tableData = this.sourceData.filter(\n                    (x) =>\n                        (date === "" || date === x.date) &&\n                        (names.length === 0 || names.includes(x.name)),\n                );\n            },\n        },\n        created() {\n            // default search by names\n            this.searchData.names = NAME_FILTER_LIST.filter((x) => x.selected).map((x) => x.label);\n        },\n    };\n<\/script>\n')])])])],2)],1)},K=[];function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){P(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var S={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t=[{value:0,label:"John",selected:!0},{value:1,label:"Dickerson",selected:!0},{value:2,label:"Larsen",selected:!1},{value:3,label:"Geneva",selected:!0},{value:4,label:"Jami",selected:!1}],a=[{value:0,label:"1900-05-20",selected:!1},{value:1,label:"1910-06-20",selected:!1},{value:2,label:"2000-07-20",selected:!1},{value:3,label:"2010-08-20",selected:!1},{value:4,label:"2020-09-20",selected:!1}],l={data:function(){var e=this;return{searchData:{names:[],date:""},columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filter:{filterList:t,isMultiple:!0,filterConfirm:function(n){var t=n.filter((function(e){return e.selected})).map((function(e){return e.label}));e.searchData.names=t},filterReset:function(n){e.searchData.names=[]}}},{field:"date",key:"b",title:"Date",align:"left",width:"15%",filter:{filterList:a,filterConfirm:function(n){var t=n.find((function(e){return e.selected}));e.searchData.date=t?t.label:""},filterReset:function(n){e.searchData.date=""}}},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},watch:{searchData:{handler:function(){this.search()},immediate:!0,deep:!0}},methods:{search:function(){var e=this.searchData,n=e.names,t=e.date;this.tableData=this.sourceData.filter((function(e){return(""===t||t===e.date)&&(0===n.length||n.includes(e.name))}))}},created:function(){this.searchData.names=t.filter((function(e){return e.selected})).map((function(e){return e.label}))}};return L({render:e,staticRenderFns:n},l)}()}},E=S,B=Object(s["a"])(E,A,K,!1,null,null,null),J=B.exports,I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Custom Filter Icon",fileName:"custom-icon.md"}}),e._m(0),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :max-height="300"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                        // filter\n                        filter: {\n                            filterList: [\n                                {\n                                    value: 0,\n                                    label: "1900-05-20",\n                                    selected: false,\n                                },\n                                {\n                                    value: 1,\n                                    label: "1910-06-20",\n                                    selected: false,\n                                },\n                                {\n                                    value: 2,\n                                    label: "2000-07-20",\n                                    selected: false,\n                                },\n                                {\n                                    value: 3,\n                                    label: "2010-08-20",\n                                    selected: false,\n                                },\n                                {\n                                    value: 4,\n                                    label: "2020-09-20",\n                                    selected: false,\n                                },\n                            ],\n                            // filter confirm hook\n                            filterConfirm: (filterList) => {\n                                const labels = filterList\n                                    .filter((x) => x.selected)\n                                    .map((x) => x.label);\n                                this.searchByDateField(labels);\n                            },\n                            // filter reset hook\n                            filterReset: (filterList) => {\n                                this.searchByDateField([]);\n                            },\n                            // custom filter icon\n                            filterIcon: () => {\n                                return <ve-icon name="search" />;\n                            },\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // real table data\n                tableData: [],\n                // source data\n                sourceData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {\n            // search by date field\n            searchByDateField(labels) {\n                this.tableData = this.sourceData.filter(\n                    (x) => labels.length === 0 || labels.includes(x.date),\n                );\n            },\n        },\n        created() {\n            this.tableData = this.sourceData.slice(0);\n        },\n    };\n<\/script>\n')])])])],2)],1)},R=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("filterIcon Supports custom icon. The built-in "),t("code",[e._v('<ve-icon name="search" />')]),e._v(" icon is used here,You can also use other icon libraries")])}];function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){T(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var G={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){var e=this,n=this.$createElement;return{columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%"},{field:"date",key:"b",title:"Date",align:"left",width:"15%",filter:{filterList:[{value:0,label:"1900-05-20",selected:!1},{value:1,label:"1910-06-20",selected:!1},{value:2,label:"2000-07-20",selected:!1},{value:3,label:"2010-08-20",selected:!1},{value:4,label:"2020-09-20",selected:!1}],filterConfirm:function(n){var t=n.filter((function(e){return e.selected})).map((function(e){return e.label}));e.searchByDateField(t)},filterReset:function(n){e.searchByDateField([])},filterIcon:function(){return n("ve-icon",{attrs:{name:"search"}})}}},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{searchByDateField:function(e){this.tableData=this.sourceData.filter((function(n){return 0===e.length||e.includes(n.date)}))}},created:function(){this.tableData=this.sourceData.slice(0)}};return $({render:e,staticRenderFns:n},t)}()}},H=G,q=Object(s["a"])(H,I,R,!1,null,null,null),z=q.exports,X=t("93a2"),Y={name:"basic-main",components:{Explain:c,SingleFilter:v,MutilFilter:j,MixtureFilter:J,CustomIcon:z,API:X["a"]}},U=Y,Q=Object(s["a"])(U,a,l,!1,null,null,null);n["default"]=Q.exports}}]);
//# sourceMappingURL=chunk-8dae9a0e.a02a3bb2.js.map