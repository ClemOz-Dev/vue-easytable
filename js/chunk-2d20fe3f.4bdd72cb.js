(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fe3f"],{b60e:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("剪贴板")]),n("Explain"),n("ShortCuts"),n("Base")],1)},o=[],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、你可以像 excle 那样，选中单元格并批量的复制、粘贴、剪切、删除操作")])])])}],c=n("2877"),s={},r=Object(c["a"])(s,a,i,!1,null,null,null),d=r.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"快捷键",fileName:"shortcuts.md"}}),n("p",[e._v("剪贴板功能以下快捷键（参考 excel 快捷键）：")]),e._m(0)],1)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[e._v("功能")]),n("th",{staticStyle:{"text-align":"left"}},[e._v("快捷键")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("复制区域单元格内容")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Ctrl")]),e._v(" + "),n("code",[e._v("C")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("粘贴（支持 excel 内容格式）")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Ctrl")]),e._v(" + "),n("code",[e._v("V")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("剪切区域单元格内容")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Ctrl")]),e._v(" + "),n("code",[e._v("X")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("删除区域单元格内容")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("Delete")])])])])])}],f={},p=Object(c["a"])(f,g,u,!1,null,null,null),y=p.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"基础功能",fileName:"base.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            :max-height="350"\n            :columns="columns"\n            :table-data="tableData"\n            borderY\n            :rowStyleOption="rowStyleOption"\n            :cell-autofill-option="cellAutofillOption"\n            :edit-option="editOption"\n            row-key-field-name="rowKey"\n            :clipboard-option="clipboardOption"\n            :virtual-scroll-option="virtualScrollOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                rowStyleOption: {\n                    clickHighlight: false,\n                    hoverHighlight: false,\n                },\n                // clipboard option\n                clipboardOption: {\n                    copy: true,\n                    paste: true,\n                    cut: true,\n                    delete: true,\n                    beforeCopy: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {\n                        console.log("beforeCopy");\n                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });\n                    },\n                    afterCopy: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {\n                        console.log("afterCopy");\n                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });\n                    },\n                    beforePaste: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {\n                        console.log("beforePaste");\n                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });\n                    },\n                    afterPaste: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {\n                        console.log("afterPaste");\n                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });\n                    },\n                    beforeCut: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {\n                        console.log("beforeCut");\n                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });\n                    },\n                    afterCut: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {\n                        console.log("afterCut");\n                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });\n                    },\n                    beforeDelete: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {\n                        console.log("beforeDelete");\n                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });\n                    },\n                    afterDelete: ({ data, selectionRangeIndexes, selectionRangeKeys }) => {\n                        console.log("afterDelete");\n                        this.log({ data, selectionRangeIndexes, selectionRangeKeys });\n                    },\n                },\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: false,\n                },\n                cellAutofillOption: true,\n                editOption: {\n                    // cell value change\n                    cellValueChange: ({ row, column }) => {},\n                },\n                columns: [\n                    {\n                        field: "index",\n                        key: "index",\n                        operationColumn: true,\n                        title: "#",\n                        width: 35,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    { field: "col1", key: "col1", title: "Col1", edit: true, width: 150 },\n                    { field: "col2", key: "col2", title: "Col2", edit: true, width: 150 },\n                    { field: "col3", key: "col3", title: "Col3", edit: true, width: 150 },\n                    { field: "col4", key: "col4", title: "Col4", edit: true, width: 150 },\n                    { field: "col5", key: "col5", title: "Col5", edit: true, width: 150 },\n                    { field: "col6", key: "col6", title: "Col6", edit: true, width: 150 },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 100; i++) {\n                    data.push({\n                        rowKey: `row${i}`,\n                        col1: `A${i + 1}`,\n                        col2: `B${i + 1}`,\n                        col3: `C${i + 1}`,\n                        col4: `D${i + 1}`,\n                        col5: `E${i + 1}`,\n                        col6: `F${i + 1}`,\n                        col7: `G${i + 1}`,\n                        col8: `H${i + 1}`,\n                    });\n                }\n                this.tableData = data;\n            },\n            log({ data, selectionRangeIndexes, selectionRangeKeys }) {\n                console.log("data::", data);\n                console.log("selectionRangeIndexes::", selectionRangeIndexes);\n                console.log("selectionRangeKeys::", selectionRangeKeys);\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},R=[];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"max-height":350,columns:e.columns,"table-data":e.tableData,borderY:"",rowStyleOption:e.rowStyleOption,"cell-autofill-option":e.cellAutofillOption,"edit-option":e.editOption,"row-key-field-name":"rowKey","clipboard-option":e.clipboardOption,"virtual-scroll-option":e.virtualScrollOption}})],1)]],2)},t=[],n={data:function(){var e=this;return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},clipboardOption:{copy:!0,paste:!0,cut:!0,delete:!0,beforeCopy:function(t){var n=t.data,l=t.selectionRangeIndexes,o=t.selectionRangeKeys;console.log("beforeCopy"),e.log({data:n,selectionRangeIndexes:l,selectionRangeKeys:o})},afterCopy:function(t){var n=t.data,l=t.selectionRangeIndexes,o=t.selectionRangeKeys;console.log("afterCopy"),e.log({data:n,selectionRangeIndexes:l,selectionRangeKeys:o})},beforePaste:function(t){var n=t.data,l=t.selectionRangeIndexes,o=t.selectionRangeKeys;console.log("beforePaste"),e.log({data:n,selectionRangeIndexes:l,selectionRangeKeys:o})},afterPaste:function(t){var n=t.data,l=t.selectionRangeIndexes,o=t.selectionRangeKeys;console.log("afterPaste"),e.log({data:n,selectionRangeIndexes:l,selectionRangeKeys:o})},beforeCut:function(t){var n=t.data,l=t.selectionRangeIndexes,o=t.selectionRangeKeys;console.log("beforeCut"),e.log({data:n,selectionRangeIndexes:l,selectionRangeKeys:o})},afterCut:function(t){var n=t.data,l=t.selectionRangeIndexes,o=t.selectionRangeKeys;console.log("afterCut"),e.log({data:n,selectionRangeIndexes:l,selectionRangeKeys:o})},beforeDelete:function(t){var n=t.data,l=t.selectionRangeIndexes,o=t.selectionRangeKeys;console.log("beforeDelete"),e.log({data:n,selectionRangeIndexes:l,selectionRangeKeys:o})},afterDelete:function(t){var n=t.data,l=t.selectionRangeIndexes,o=t.selectionRangeKeys;console.log("afterDelete"),e.log({data:n,selectionRangeIndexes:l,selectionRangeKeys:o})}},virtualScrollOption:{enable:!1},cellAutofillOption:!0,editOption:{cellValueChange:function(e){e.row,e.column}},columns:[{field:"index",key:"index",operationColumn:!0,title:"#",width:35,align:"center",renderBodyCell:function(e,t){e.row,e.column;var n=e.rowIndex;return++n}},{field:"col1",key:"col1",title:"Col1",edit:!0,width:150},{field:"col2",key:"col2",title:"Col2",edit:!0,width:150},{field:"col3",key:"col3",title:"Col3",edit:!0,width:150},{field:"col4",key:"col4",title:"Col4",edit:!0,width:150},{field:"col5",key:"col5",title:"Col5",edit:!0,width:150},{field:"col6",key:"col6",title:"Col6",edit:!0,width:150}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<100;t++)e.push({rowKey:"row".concat(t),col1:"A".concat(t+1),col2:"B".concat(t+1),col3:"C".concat(t+1),col4:"D".concat(t+1),col5:"E".concat(t+1),col6:"F".concat(t+1),col7:"G".concat(t+1),col8:"H".concat(t+1)});this.tableData=e},log:function(e){var t=e.data,n=e.selectionRangeIndexes,l=e.selectionRangeKeys;console.log("data::",t),console.log("selectionRangeIndexes::",n),console.log("selectionRangeKeys::",l)}},created:function(){this.initTableData()}};return x({render:e,staticRenderFns:t},n)}()}},w=m,C=Object(c["a"])(w,h,R,!1,null,null,null),O=C.exports,K={name:"basic-main",components:{Explain:d,ShortCuts:y,Base:O}},I=K,_=Object(c["a"])(I,l,o,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d20fe3f.4bdd72cb.js.map