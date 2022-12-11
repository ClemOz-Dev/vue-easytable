(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228897"],{da37:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{staticClass:"content example-md-doc"},[a("anchor",{attrs:{label:"用法"}}),e._m(0),e._m(1),a("p",[e._v("使用")]),e._m(2)],1)},r=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("p",[e._v("引入 "),a("code",[e._v("VeTable")])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("pre",[a("code",{staticClass:"language-javascript"},[e._v('import Vue from "vue";\nimport { VeTable } from "vue-easytable";\n\nVue.use(VeTable);\n')])])},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("pre",[a("code",{staticClass:"language-javascript"},[e._v('<template>\n  <ve-table :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "center" },\n          { field: "date", key: "b", title: "Date", align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", align: "right" },\n          { field: "address", key: "d", title: "Address", align: "left" }\n        ],\n        tableData: [\n          {\n            name: "John",\n            date:"1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            name: "Dickerson",\n            date:"1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            name: "Larsen",\n            date:"2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            name: "Geneva",\n            date:"2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            name: "Jami",\n            date:"2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])}],d=a("2877"),i={},l=Object(d["a"])(i,t,r,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d228897.086dc17e.js.map