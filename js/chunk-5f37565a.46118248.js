(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f37565a"],{"52e0":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.columnWidthResizeOption.data,columns:e.db.columnWidthResizeOption.columns}})],1)},l=[],o=t("3ef3"),c=t("7eb4"),r={components:{tpl:o["a"]},props:{anchor:{type:String,default:"Column Resize Option"},desc:{type:String,default:"columnWidthResizeOption"}},data:function(){return{db:c["a"]}}},a=r,d=t("2877"),s=Object(d["a"])(a,i,l,!1,null,null,null);n["a"]=s.exports},b433:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Column Resize")]),t("Explain"),t("Basic"),t("API",{attrs:{title:"API",anchor:"API"}})],1)},l=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、Column width resize is useful when large text exists"),t("br"),e._v(" 2、Configure the column width resize through "),t("code",[e._v("columnWidthResizeOption")]),t("br"),e._v(" 3、It is recommended to set "),t("code",[e._v("scroll-width=0")]),e._v(", then dragging the column width will change the table width")])])])}],r=t("2877"),a={},d=Object(r["a"])(a,o,c,!1,null,null,null),s=d.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Column Drag",fileName:"basic.md"}}),t("p",[e._v("You can hover the mouse between two columns and drag")]),t("demo-block",[t("div",[t("p",[e._v("1、Set the min width of resize column through "),t("code",[e._v("minWidth")]),t("br"),e._v("2、Get the callback method of resize column changes through "),t("code",[e._v("sizeChange({ column, differWidth, columnWidth, tableWidth })")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <div v-show="columnResizeInfo.column" style="margin:10px 0;line-height:2">\n            <div>column:{{columnResizeInfo.column}}</div>\n            <div>differWidth:{{columnResizeInfo.differWidth}}</div>\n            <div>columnWidth:{{columnResizeInfo.columnWidth}}</div>\n            <div>tableWidth:{{columnResizeInfo.tableWidth}}</div>\n        </div>\n        <ve-table\n            style="width:100%"\n            :scroll-width="0"\n            :columns="columns"\n            :table-data="tableData"\n            :border-around="true"\n            :border-x="true"\n            :border-y="true"\n            :column-width-resize-option="columnWidthResizeOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columnWidthResizeOption: {\n                    // default false\n                    enable: true,\n                    // column resize min width\n                    minWidth: 30,\n                    // column size change\n                    sizeChange: ({ column, differWidth, columnWidth, tableWidth }) => {\n                        this.columnResizeInfo.column = column;\n                        this.columnResizeInfo.differWidth = differWidth;\n                        this.columnResizeInfo.columnWidth = columnWidth;\n                        this.columnResizeInfo.tableWidth = tableWidth;\n                    },\n                },\n                columns: [\n                    {\n                        field: "index",\n                        key: "index",\n                        title: "#",\n                        width: 50,\n                        align: "center",\n                        fixed: "left",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    { field: "col1", key: "col1", title: "Col1" },\n                    { field: "col2", key: "col2", title: "Col2" },\n                    { field: "col3", key: "col3", title: "Col3" },\n                    { field: "col4", key: "col4", title: "Col4" },\n                    { field: "col5", key: "col5", title: "Col5" },\n                    { field: "col6", key: "col6", title: "Col6" },\n                ],\n                columnResizeInfo: {\n                    column: "",\n                    differWidth: "",\n                    columnWidth: "",\n                    tableWidth: "",\n                },\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 8; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A${i + 1}`,\n                        col2: `B${i + 1}`,\n                        col3: `C${i + 1}`,\n                        col4: `D${i + 1}`,\n                        col5: `E${i + 1}`,\n                        col6: `F${i + 1}`,\n                        col7: `G${i + 1}`,\n                        col8: `H${i + 1}`,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},m=[];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){b(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var v={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.columnResizeInfo.column,expression:"columnResizeInfo.column"}],staticStyle:{margin:"10px 0","line-height":"2"}},[t("div",[e._v("column:"+e._s(e.columnResizeInfo.column))]),e._v(" "),t("div",[e._v("differWidth:"+e._s(e.columnResizeInfo.differWidth))]),e._v(" "),t("div",[e._v("columnWidth:"+e._s(e.columnResizeInfo.columnWidth))]),e._v(" "),t("div",[e._v("tableWidth:"+e._s(e.columnResizeInfo.tableWidth))])]),e._v(" "),t("ve-table",{staticStyle:{width:"100%"},attrs:{"scroll-width":0,columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"column-width-resize-option":e.columnWidthResizeOption}})],1)]],2)},n=[],t={data:function(){var e=this;return{columnWidthResizeOption:{enable:!0,minWidth:30,sizeChange:function(n){var t=n.column,i=n.differWidth,l=n.columnWidth,o=n.tableWidth;e.columnResizeInfo.column=t,e.columnResizeInfo.differWidth=i,e.columnResizeInfo.columnWidth=l,e.columnResizeInfo.tableWidth=o}},columns:[{field:"index",key:"index",title:"#",width:50,align:"center",fixed:"left",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"col1",key:"col1",title:"Col1"},{field:"col2",key:"col2",title:"Col2"},{field:"col3",key:"col3",title:"Col3"},{field:"col4",key:"col4",title:"Col4"},{field:"col5",key:"col5",title:"Col5"},{field:"col6",key:"col6",title:"Col6"}],columnResizeInfo:{column:"",differWidth:"",columnWidth:"",tableWidth:""},tableData:[]}},methods:{initTableData:function(){for(var e=[],n=0;n<8;n++)e.push({rowKey:n,col1:"A".concat(n+1),col2:"B".concat(n+1),col3:"C".concat(n+1),col4:"D".concat(n+1),col5:"E".concat(n+1),col6:"F".concat(n+1),col7:"G".concat(n+1),col8:"H".concat(n+1)});this.tableData=e}},created:function(){this.initTableData()}};return f({render:e,staticRenderFns:n},t)}()}},p=v,W=Object(r["a"])(p,u,m,!1,null,null,null),w=W.exports,z=t("52e0"),y={name:"basic-main",components:{Explain:s,Basic:w,API:z["a"]}},_=y,g=Object(r["a"])(_,i,l,!1,null,null,null);n["default"]=g.exports}}]);
//# sourceMappingURL=chunk-5f37565a.46118248.js.map