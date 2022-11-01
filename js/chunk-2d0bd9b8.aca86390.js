(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd9b8"],{"2d5e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"content example-md-doc"},[a("h2",[e._v("国际化")]),a("anchor",{attrs:{"is-edit":"",label:"语言切换",fileName:"locale.md"}}),e._m(0),e._m(1),a("anchor",{attrs:{"is-edit":"",label:"修改语言包",fileName:"locale.md"}}),e._m(2),e._m(3),a("anchor",{attrs:{"is-edit":"",label:"CDN 方式加载语言文件",fileName:"locale.md"}}),e._m(4),e._m(5),a("anchor",{attrs:{"is-edit":"",label:"语言包",fileName:"locale.md"}}),a("p",[e._v("目前支持以下语言：")]),e._m(6),e._m(7)],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("你可以通过 "),a("code",[e._v("VeLocal")]),e._v(" 组件实现多语言支持，使用 "),a("code",[e._v("VeLocal.use")]),e._v(" 方法可以切换当前使用的语言。")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[a("code",{staticClass:"language-javascript"},[e._v('import { VeLocale } from "vue-easytable";\n// 引入英文语言包\nimport enUS from "vue-easytable/libs/locale/lang/en-US.js";\n\nVeLocale.use(enUS);\n')])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("通过 "),a("code",[e._v("VeLocale.update")]),e._v(" 方法可以实现文案的修改和扩展。")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[a("code",{staticClass:"language-javascript"},[e._v('import { VeLocale } from "vue-easytable";\n\nconst lang = {\n    pagination: {\n        goto: "跳转到",\n    },\n};\n\nVeLocale.update(lang);\n')])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tip"},[a("p",[e._v("1、从目录 “//unpkg.com/vue-easytable/libs/locale/lang/” 目录下引用需要的语言包"),a("br"),e._v(" 2、使用 "),a("code",[e._v("VETable.VeLocale.use")]),e._v(" 方法使用和切换语言包"),a("br"),e._v(" 3、语言包固定格式为 "),a("code",[e._v("VETable.lang.[语言包名称]")]),e._v("，[语言包名称] 不包含‘-’符号，具体见下面示例"),a("br")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pre",[a("code",[e._v('<script src="//unpkg.com/vue"><\/script>\n<script src="//unpkg.com/vue-easytable"><\/script>\n<script src="//unpkg.com/vue-easytable/libs/locale/lang/en-US.js"><\/script>\n<script src="//unpkg.com/vue-easytable/libs/locale/lang/zh-CN.js"><\/script>\n\n<script>\n  // 切换到英文\n  VETable.VeLocale.use(VETable.lang.enUS);\n\n  /*\n  切换中文\n  VETable.VeLocale.use(VETable.lang.zhCN);\n  */\n<\/script>\n')])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"example-table"},[a("thead",[a("tr",[a("th",[e._v("语言")]),a("th",[e._v("文件名")])])]),a("tbody",[a("tr",[a("td",[e._v("简体中文")]),a("td",[e._v("zh-CN")])]),a("tr",[a("td",[e._v("繁體中文（中国台湾）")]),a("td",[e._v("zh-TW")])]),a("tr",[a("td",[e._v("英语（en）")]),a("td",[e._v("en-US")])]),a("tr",[a("td",[e._v("南非（荷兰语）")]),a("td",[e._v("af-ZA")])]),a("tr",[a("td",[e._v("南非（Zulu）")]),a("td",[e._v("zu-ZA")])]),a("tr",[a("td",[e._v("法语（fr）")]),a("td",[e._v("fr-FR")])]),a("tr",[a("td",[e._v("巴西葡萄牙语")]),a("td",[e._v("pt-BR")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("如果你需要使用其他的语言，欢迎贡献 PR：只需在 "),a("a",{attrs:{href:"https://github.com/huangshuwei/vue-easytable/tree/master/packages/src/locale/lang"}},[e._v("这里")]),e._v(" 添加一个语言配置文件即可。")])}],c=a("2877"),r={},s=Object(c["a"])(r,n,l,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0bd9b8.aca86390.js.map