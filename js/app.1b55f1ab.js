(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0670":function(e,t,a){},"0c9a":function(e,t,a){"use strict";a("9f01")},1938:function(e,t,a){"use strict";a("7313")},2154:function(e,t,a){},2323:function(e,t,a){"use strict";a("0670")},2395:function(e,t,a){},"26f98":function(e,t,a){"use strict";a("8610")},3626:function(e,t,a){},"39dd":function(e,t,a){"use strict";a("ba59")},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("f23d"),s=a("2819"),i=a.n(s),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],u={mounted:function(){this.$bus.$on("message",(function(e){"success"===e.status?this.$message.success(e.msg):this.$message.error(e.msg)}))}},l=u,d=(a("7c55"),a("2877")),f=Object(d["a"])(l,o,c,!1,null,null,null),m=f.exports,p=(a("202f"),a("99af"),a("8c4f")),h=(a("a434"),a("2f62")),b=(a("4fad"),a("a78e")),v=a.n(b);function g(e){for(var t=Object.entries(e),a=0;a<t.length;a+=1)v.a.set(t[a][0],t[a][1]);return e}function j(){return{username:v.a.get("username"),appkey:v.a.get("appkey"),role:v.a.get("role"),email:v.a.get("email")}}function y(){return{username:v.a.remove("username"),appkey:v.a.remove("appkey"),role:v.a.remove("role"),email:v.a.remove("email")}}r["a"].use(h["a"]);var k=new h["a"].Store({state:{collapsed:!1,username:"",loginStatus:!1,userInfo:j(),menuList:[],filterList:[],headTitle:[{title:"标题",dataIndex:"title"},{title:"描述",dataIndex:"desc"},{title:"类目",dataIndex:"categoryName"},{title:"标签",dataIndex:"tags"},{title:"价格",dataIndex:"price"},{title:"折扣价",dataIndex:"price_off"},{title:"状态",dataIndex:"upStatus"},{title:"库存量",dataIndex:"inventory"},{title:"销量",dataIndex:"sale"},{title:"操作",dataIndex:"action",key:"action",scopedSlots:{customRender:"action"}}],category:[],breadcrumb:[]},mutations:{changeUser:function(e,t){e.username=t},userSetCookie:function(e,t){e.userInfo=t},userDelCookie:function(e,t){e.userInfo=t},changeList:function(e,t){e.menuList=t},changeFilterList:function(e,t){e.filterList=t},setBreadcrumb:function(e,t){e.breadcrumb.push(t)},delBreadcrumb:function(e,t){e.breadcrumb.splice(t,1)},setCategory:function(e,t){e.category=t}},actions:{changeCollapsed:function(){this.state.collapsed=!this.state.collapsed},setUserInfo:function(e,t){var a=e.commit;a("userSetCookie",t),g(t)},delUserInfo:function(e){var t=e.commit;t("userDelCookie",y())},changeMenuList:function(e,t){var a=e.commit;a("changeList",t)},changeAsyncMenuList:function(e,t){var a=e.commit;a("changeFilterList",t)},setBreadcrumbInfo:function(e,t){var a=e.commit;a("setBreadcrumb",t)},delBreadcrumbInfo:function(e,t){var a=e.commit;a("delBreadcrumb",t)},setCategoryInfo:function(e,t){var a=e.commit;a("setCategory",t)}},modules:{}}),w=(a("d81d"),a("b0c0"),a("4de4"),{coustomer:[{name:"product"},{name:"productList"},{name:"productAdd"},{name:"home"},{name:"statistics"}],admin:[{name:"product"},{name:"productList"},{name:"productAdd"},{name:"category"},{name:"home"},{name:"statistics"}]});function x(e,t){var a=w[e].map((function(e){return e.name})),r=t.filter((function(e){var t=e.children;if(-1!==a.indexOf(e.name)){var r=t;return e.children=r.filter((function(e){return-1!==a.indexOf(e.name)})),!0}return!1}));return r}var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"list-container"},[a("Drawer"),a("div",{staticClass:"search"},[a("a-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入关键词"},model:{value:e.keyWords,callback:function(t){e.keyWords=t},expression:"keyWords"}}),a("a-select",{staticClass:"seletCategory",staticStyle:{width:"120px"},attrs:{"default-value":1},model:{value:e.searchCategory,callback:function(t){e.searchCategory=t},expression:"searchCategory"}},e._l(this.cateList,(function(t,r){return a("a-select-option",{key:r,attrs:{value:r}},[e._v(" "+e._s(t)+" ")])})),1),a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.handleClickSearch}},[e._v(" 检索 ")])],1),a("a-table",{attrs:{columns:e.columns,"row-key":function(e){return e._id},"data-source":e.data,pagination:e.pagination,loading:e.loading},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("span",{staticClass:"action",on:{click:function(t){return e.edit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("span",{staticClass:"action",on:{click:function(t){return e.del(r)}}},[e._v("删除")])],1)}}])})],1)},C=[],$=a("5530"),O=(a("159b"),a("1da1")),I=(a("96cf"),a("caad"),a("2532"),a("d3b7"),a("bc3a")),L=a.n(I),S=L.a.create();S.defaults.baseURL="https://mallapi.duyiedu.com",S.interceptors.request.use((function(e){return e.url.includes("/passport")?e:Object($["a"])(Object($["a"])({},e),{},{params:Object($["a"])(Object($["a"])({},e.params),{},{appkey:k.state.userInfo.appkey})})}),(function(e){return Promise.reject(e)})),S.interceptors.response.use((function(e){var t=e.data;return"success"===t.status&&"登陆成功"===t.msg&&g(t.data),t}),(function(e){return Promise.reject(e)}));var R=S;function z(e,t){return D.apply(this,arguments)}function D(){return D=Object(O["a"])(regeneratorRuntime.mark((function e(t,a){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.post("/passport/login",{email:t,password:a});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function q(e,t,a,r){return F.apply(this,arguments)}function F(){return F=Object(O["a"])(regeneratorRuntime.mark((function e(t,a,r,n){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.post("/passport/logon",{email:t,password:a,code:r,username:n});case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function P(e){return E.apply(this,arguments)}function E(){return E=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.post("/passport/getCode",{email:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function B(e){return N.apply(this,arguments)}function N(){return N=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.get("/products/all",{params:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function T(e){return U.apply(this,arguments)}function U(){return U=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.get("/category/all",{params:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function A(e){return M.apply(this,arguments)}function M(){return M=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.delete("/products/".concat(t.id),{params:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),M.apply(this,arguments)}function V(e){return W.apply(this,arguments)}function W(){return W=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.get("/products/".concat(t.id),{params:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function G(e){return H.apply(this,arguments)}function H(){return H=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,R.put("/products/edit",t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function J(e){return K.apply(this,arguments)}function K(){return K=Object(O["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,R.post("/products/add",t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"drawer-wrapper"},[a("a-drawer",{attrs:{title:"编辑商品",placement:"left",closable:!0,visible:e.visible,width:"90%","after-visible-change":e.afterVisibleChange},on:{close:e.onClose}},[a("a-steps",{staticClass:"steps",attrs:{current:e.current}},e._l(e.steps,(function(e){return a("a-step",{key:e.title,attrs:{title:e.title}})})),1),a("div",{staticClass:"steps-content"},[0==this.current?a("basicInfo",{attrs:{data:this.data},on:{next:e.next}}):1==this.current?a("prefectInfo",{attrs:{data:this.data},on:{prev:e.prev,submit:e.editSubmit}}):e._e()],1)],1)],1)},X=[],Y=a("3835"),Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"basicInfo"},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.data,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{ref:"name",attrs:{"has-feedback":"",label:"标题",prop:"title",required:""}},[a("a-input",{on:{blur:function(){e.$refs.name.onFieldBlur()}},model:{value:e.data.title,callback:function(t){e.$set(e.data,"title",t)},expression:"data.title"}})],1),a("a-form-model-item",{ref:"desc",attrs:{"has-feedback":"",label:"商品描述",prop:"desc",required:""}},[a("a-input",{model:{value:e.data.desc,callback:function(t){e.$set(e.data,"desc",t)},expression:"data.desc"}})],1),a("a-form-model-item",{attrs:{label:"商品类别",prop:"category",required:""}},[a("a-select",{attrs:{placeholder:"请选择子类目"},on:{change:e.changeCategory},model:{value:e.data.category,callback:function(t){e.$set(e.data,"category",t)},expression:"data.category"}},e._l(e.cateData,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1),a("a-select",{attrs:{placeholder:"请选择子类目"},model:{value:e.data.c_item,callback:function(t){e.$set(e.data,"c_item",t)},expression:"data.c_item"}},e._l(e.categoryItems,(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1),a("a-form-model-item",{attrs:{label:"商品标签",prop:"tags"}},[a("a-select",{staticStyle:{width:"100%"},attrs:{mode:"tags",placeholder:"标签"},model:{value:e.data.tags,callback:function(t){e.$set(e.data,"tags",t)},expression:"data.tags"}},e._l(e.data.tags,(function(t,r){return a("a-select-option",{key:r,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])})),1)],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[a("a-button",{attrs:{type:"primary"},on:{click:e.handleClick}},[e._v(" 下一步 ")])],1)],1)],1)},ee=[],te={props:["data"],data:function(){return{labelCol:{span:4},wrapperCol:{span:14},other:"",result:"",rules:{},cateData:[],categoryItems:[]}},created:function(){var e=this;T().then((function(t){e.cateData=t.data.data,console.log(t)}))},methods:{changeCategory:function(e){for(var t=0;t<this.cateData.length;t+=1)this.cateData[t].id===e&&(this.categoryItems=this.cateData[t].c_items)},handleClick:function(){var e=this;this.$refs.ruleForm.validate((function(t){return console.log(t),t?(e.$emit("next",e.data),!0):(alert("填写有误!!"),!1)}))}}},ae=te,re=Object(d["a"])(ae,Z,ee,!1,null,null,null),ne=re.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"prefectInfo"},[a("a-form-model",{ref:"ruleForm",attrs:{model:e.data,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{"has-feedback":"",label:"商品价格",prop:"price"}},[a("a-input",{model:{value:e.data.price,callback:function(t){e.$set(e.data,"price",t)},expression:"data.price"}})],1),a("a-form-model-item",{attrs:{label:"折扣价格",prop:"price_off"}},[a("a-input",{model:{value:e.data.price_off,callback:function(t){e.$set(e.data,"price_off",t)},expression:"data.price_off"}})],1),a("a-form-model-item",{attrs:{"has-feedback":"",label:"商品库存",prop:"inventory"}},[a("a-input",{model:{value:e.data.inventory,callback:function(t){e.$set(e.data,"inventory",t)},expression:"data.inventory"}})],1),a("a-form-model-item",{attrs:{"has-feedback":"",label:"计量单位",prop:"unit"}},[a("a-input",{model:{value:e.data.unit,callback:function(t){e.$set(e.data,"unit",t)},expression:"data.unit"}})],1),a("a-form-model-item",{attrs:{label:"商品相册"}},[a("a-upload",{attrs:{"list-type":"picture-card","file-list":e.fileList},on:{preview:e.handlePreview,change:e.handleChange}},[e.fileList.length<8?a("div",[a("a-icon",{attrs:{type:"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v("Upload")])],1):e._e()]),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[a("a-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.handleClick}},[e._v(" 上一步 ")]),a("a-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.submit}},[e._v(" 提交 ")])],1)],1)],1)},ie=[];function oe(e){return new Promise((function(t,a){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return a(e)}}))}var ce={props:["data"],data:function(){return{previewVisible:!1,previewImage:"",fileList:[],labelCol:{span:4},wrapperCol:{span:14},other:"",result:"",rules:{price:[{required:!0,message:"请填写商品价格",trigger:"change"}],inventory:[{required:!0,message:"请填写商品价格",trigger:"change"}],unit:[{required:!0,message:"请填写商品价格",trigger:"change"}]}}},created:function(){this.fileList=this.data.images.map((function(e,t){return{uid:"".concat(t),name:"image".concat(t,".png"),status:"done",url:e}}))},methods:{submit:function(){var e=this.fileList.map((function(e){return e.url}));this.$emit("submit",Object($["a"])(Object($["a"])({},this.data),{},{images:e}))},resetCate:function(){this.data.c_item=""},handleClick:function(){this.$emit("prev")},handleCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,oe(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}}),a)})))()},handleChange:function(e){var t=e.fileList;this.fileList=t}}},ue=ce,le=(a("0c9a"),Object(d["a"])(ue,se,ie,!1,null,"1c60b2c1",null)),de=le.exports,fe={data:function(){return{visible:!1,current:0,result:"",data:"",cateData:"",steps:[{title:"填写基本信息"},{title:"完善商品信息"}]}},components:{basicInfo:ne,prefectInfo:de},computed:{isBasis:function(){return this.current}},created:function(){var e=this;this.$bus.$on("close",this.onClose),this.$bus.$on("edit",function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(a){var r,n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,L.a.all([V({id:a.id}),T()]);case 2:e.result=t.sent,r=e.result,n=Object(Y["a"])(r,2),s=n[0],i=n[1],e.data=s.data,e.cateData=i.data.data,e.$bus.$emit("info",e.cateData),e.visible=!0;case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},mounted:function(){var e=this;this.$bus.$on("prev",(function(){e.current-=1}))},methods:{next:function(e){this.data=Object($["a"])(Object($["a"])({},this.data),e),this.current+=1},prev:function(){this.current-=1},afterVisibleChange:function(e){!1===e&&(this.current=0)},editSubmit:function(e){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,G(e).then((function(e){"success"===e.status&&(alert("提交成功"),t.$bus.$emit("refresh"),t.$bus.$emit("close"))}));case 2:case"end":return a.stop()}}),a)})))()},onClose:function(){this.visible=!1}}},me=fe,pe=(a("aa25"),Object(d["a"])(me,Q,X,!1,null,"e3e6f9fe",null)),he=pe.exports,be={data:function(){return{data:[],flag:!1,pagination:{current:1,pageSize:10,total:1,showSizeChanger:!0},cateList:[],loading:!1,keyWords:null,searchCategory:null,status:["下架","上架"]}},components:{Drawer:he},created:function(){this.fetchCategory(),this.fetch()},computed:{columns:function(){return this.$store.state.headTitle}},methods:{handleTableChange:function(e){var t=Object($["a"])({},this.pagination);t.current=e.current,t.pageSize=e.pageSize,this.pagination=t,this.fetch({size:this.pagination.pageSize,page:this.pagination.current})},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,B(Object($["a"])({page:1,size:10},t)).then((function(t){var a=t.data;a.data=a.data.map((function(t){return Object($["a"])(Object($["a"])({},t),{},{categoryName:e.cateList[t.category],upStatus:e.status[t.status]})}));var r=Object($["a"])({},e.pagination);r.total=a.total,e.loading=!1,e.data=a.data,e.pagination=r}))},fetchCategory:function(){var e=this;T({appkey:this.$store.state.userInfo.appkey}).then((function(t){t.data.data.forEach((function(t){e.cateList[t.id]=t.name})),e.cateList[0]="全部",e.$store.dispatch("setCategoryInfo",t.data.data)}))},edit:function(e){this.$bus.$emit("edit",e),this.$bus.$on("refresh",this.fetch),this.flag=!0},del:function(e){var t=this;A({id:e.id}).then((function(e){alert(e.msg),t.fetch()}))},handleClickSearch:function(){this.fetch({searchWord:this.keyWords,category:0===this.searchCategory?null:this.searchCategory})}}},ve=be,ge=(a("2323"),Object(d["a"])(ve,_,C,!1,null,"1a4b814f",null)),je=ge.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addProduct"},[a("a-steps",{staticClass:"steps",attrs:{current:e.current}},e._l(e.steps,(function(e){return a("a-step",{key:e.title,attrs:{title:e.title}})})),1),a("div",{staticClass:"steps-content"},[0==this.current?a("basicInfo",{attrs:{data:this.dataList},on:{next:e.next}}):1==this.current?a("prefectInfo",{attrs:{data:this.dataList},on:{prev:e.prev,submit:e.addSubmit}}):e._e()],1)],1)},ke=[],we={data:function(){return{current:0,steps:[{title:"填写基本信息"},{title:"完善商品信息"}],dataList:{title:"",desc:"",category:null,c_item:[],tags:[],price:0,price_off:0,unit:"",inventory:0,images:[]}}},components:{basicInfo:ne,prefectInfo:de},mounted:function(){},methods:{next:function(e){this.dataList=Object($["a"])(Object($["a"])({},this.dataList),e),this.current+=1},prev:function(){this.current-=1},addSubmit:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,J(Object($["a"])({},e)).then((function(e){"success"===e.status&&(alert("提交成功"),console.log(e))}));case 2:case"end":return t.stop()}}),t)})))()}}},xe=we,_e=(a("7236"),Object(d["a"])(xe,ye,ke,!1,null,"e0bdfa36",null)),Ce=_e.exports,$e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("category")])},Oe=[],Ie={},Le=Ie,Se=Object(d["a"])(Le,$e,Oe,!1,null,null,null),Re=Se.exports,ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"card-content"},[a("div",{staticStyle:{"background-color":"#ececec",padding:"20px"}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{md:8}},[a("a-card",{attrs:{title:"热销商品",bordered:!1}},[a("p",[e._v("商品1")]),a("p",[e._v("商品2")])])],1),a("a-col",{attrs:{md:8}},[a("a-card",{attrs:{title:"昨日营收",bordered:!1}},[a("p",[e._v("营收1")]),a("p",[e._v("营收2")])])],1),a("a-col",{attrs:{md:8}},[a("a-card",{attrs:{title:"系统公告",bordered:!1}},[a("p",[e._v("公告1")]),a("p",[e._v("公告2")])])],1)],1)],1)]),a("charts")],1)},De=[],qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ve-line",{attrs:{data:e.chartData,settings:e.chartSettings}})},Fe=[],Pe={data:function(){return this.chartSettings={area:!0},{chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}}},Ee=Pe,Be=Object(d["a"])(Ee,qe,Fe,!1,null,null,null),Ne=Be.exports,Te={components:{charts:Ne}},Ue=Te,Ae=(a("39dd"),Object(d["a"])(Ue,ze,De,!1,null,"430cb6ed",null)),Me=Ae.exports,Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Aside"),a("topHeader"),a("div",{staticClass:"main",class:this.$store.state.collapsed?"active-btn":""},[a("router-view")],1)],1)},We=[],Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"left-menu",class:this.$store.state.collapsed?"active":""},[a("a-menu",{attrs:{"default-selected-keys":[1],"default-open-keys":["sub1"],mode:"inline",theme:"dark","inline-collapsed":this.$store.state.collapsed}},e._l(e.menuList,(function(t,r){return a("a-sub-menu",{key:"sub"+(r+1)},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:t.icon}}),a("span",[e._v(e._s(t.meta.title))])],1),e._l(t.children,(function(t){return a("a-menu-item",{key:t.index,on:{click:function(a){return e.setBreadcrumb(t)}}},[a("router-link",{attrs:{to:{name:t.name}}},[a("a-icon",{attrs:{type:t.icon}}),e._v(" "+e._s(t.meta.title))],1)],1)}))],2)})),1)],1)},He=[],Je=a("b85c"),Ke={computed:{menuList:function(){return this.$store.state.filterList}},methods:{setBreadcrumb:function(e){var t,a=!1,r=Object(Je["a"])(this.$store.state.breadcrumb);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(e.meta.title===n.title)return void(a=!0)}}catch(s){r.e(s)}finally{r.f()}a||this.$store.dispatch("setBreadcrumbInfo",{title:e.meta.title,path:e.name})}}},Qe=Ke,Xe=(a("d60b"),Object(d["a"])(Qe,Ge,He,!1,null,"f5a0acea",null)),Ye=Xe.exports,Ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"top-header",class:this.$store.state.collapsed?"active-btn":""},[a("a-button",{staticClass:"open-btn",staticStyle:{"margin-bottom":"16px"},attrs:{type:"primary"},on:{click:e.toggleCollapsed}},[a("a-icon",{attrs:{type:this.$store.state.collapsed?"menu-unfold":"menu-fold"}})],1),a("a-breadcrumb",{staticClass:"breadcrumb"},e._l(e.breadcrumbData,(function(e,t){return a("a-breadcrumb-item",{key:t},[a("Breadcrumb",{attrs:{title:e.title,path:e.path,index:t}})],1)})),1),a("div",{staticClass:"user-info"},[a("ul",[a("li",[e._v("欢迎您，"+e._s(this.$store.state.userInfo.username))]),a("li",{staticClass:"logout",on:{click:e.clickDelCookie}},[a("router-link",{attrs:{to:"/login"}},[e._v("退出")])],1)])])],1)},et=[],tt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"bredcrumb"},[a("router-link",{staticClass:"breadcrumb",attrs:{to:{name:this.path}}},[e._v(e._s(this.title))]),a("a-icon",{attrs:{type:"close"},on:{click:function(t){return e.closeBreadcrumb()}}})],1)},at=[],rt=(a("a9e3"),{props:{title:{type:String,require:!0},path:{type:String,require:!0},index:{type:Number,require:!0}},methods:{closeBreadcrumb:function(){this.$store.dispatch("delBreadcrumbInfo",this.index)}}}),nt=rt,st=(a("26f98"),Object(d["a"])(nt,tt,at,!1,null,"6f321358",null)),it=st.exports,ot={data:function(){return{}},components:{Breadcrumb:it},methods:{toggleCollapsed:function(){this.$store.dispatch("changeCollapsed")},clickDelCookie:function(){this.$store.dispatch("delUserInfo")}},computed:{user:function(){return this.$store.state.username},breadcrumbData:function(){return this.$store.state.breadcrumb}}},ct=ot,ut=(a("85da"),Object(d["a"])(ct,Ze,et,!1,null,"544fb32d",null)),lt=ut.exports,dt={data:function(){return{}},components:{Aside:Ye,topHeader:lt}},ft=dt,mt=(a("5e38"),Object(d["a"])(ft,Ve,We,!1,null,"3666e58e",null)),pt=mt.exports,ht=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("a-form",{staticClass:"login-form",attrs:{id:"components-form-demo-normal-login",form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"请输入邮箱!"}]}],expression:"[\n          'email',\n          {\n            rules: [{ required: true, message: '请输入邮箱!' }],\n          },\n        ]"}],attrs:{placeholder:"邮箱"}},[a("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码!"}]}],expression:"[\n          'password',\n          {\n            rules: [{ required: true, message: '请输入密码!' }],\n          },\n        ]"}],attrs:{type:"password",placeholder:"密码"}},[a("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["rember",{valuePropName:"checked",initialValue:!0}],expression:"[\n          'rember',\n          {\n            valuePropName: 'checked',\n            initialValue: true,\n          },\n        ]"}]},[e._v(" 记住密码 ")]),a("a",{staticClass:"login-form-forgot",attrs:{href:""}},[e._v(" 忘记密码 ")]),a("a-button",{staticClass:"login-form-button",attrs:{type:"primary","html-type":"submit"}},[e._v(" 登录 ")]),e._v(" 没有账号？ "),a("router-link",{attrs:{to:"/logon"}},[e._v("现在注册!")])],1)],1)],1)},bt=[],vt={data:function(){return{}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"normal_login"})},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,a){if(!e){var r=z(a.email,a.password);r.then((function(e){console.log(e),t.$bus.$emit("message",e),"success"===e.status&&(t.$store.commit("changeUser",e.data.username),t.$store.dispatch("setUserInfo",e.data).then((function(){t.$router.push("/home")}),(function(e){console.log(e)})))}))}}))}}},gt=vt,jt=(a("66c0"),Object(d["a"])(gt,ht,bt,!1,null,null,null)),yt=jt.exports,kt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logon"},[a("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[a("a-form-item",e._b({attrs:{label:"邮箱"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{type:"email",message:"请输入邮箱!"},{required:!0,message:"请输入邮箱!"}]}],expression:"[\n          'email',\n          {\n            rules: [\n              {\n                type: 'email',\n                message: '请输入邮箱!',\n              },\n              {\n                required: true,\n                message: '请输入邮箱!',\n              },\n            ],\n          },\n        ]"}]})],1),a("a-form-item",e._b({attrs:{label:"用户名"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{message:"请输入用户名!"},{required:!0,message:"请输入用户名!"}]}],expression:"[\n          'username',\n          {\n            rules: [\n              {\n                message: '请输入用户名!',\n              },\n              {\n                required: true,\n                message: '请输入用户名!',\n              },\n            ],\n          },\n        ]"}]})],1),a("a-form-item",e._b({attrs:{label:"密码","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码!"},{validator:e.validateToNextPassword}]}],expression:"[\n          'password',\n          {\n            rules: [\n              {\n                required: true,\n                message: '请输入密码!',\n              },\n              {\n                validator: validateToNextPassword,\n              },\n            ],\n          },\n        ]"}],attrs:{type:"password"}})],1),a("a-form-item",e._b({attrs:{label:"确认密码","has-feedback":""}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["confirm",{rules:[{required:!0,message:"请确认密码!"},{validator:e.compareToFirstPassword}]}],expression:"[\n          'confirm',\n          {\n            rules: [\n              {\n                required: true,\n                message: '请确认密码!',\n              },\n              {\n                validator: compareToFirstPassword,\n              },\n            ],\n          },\n        ]"}],attrs:{type:"password"},on:{blur:e.handleConfirmBlur}})],1),a("a-form-item",e._b({attrs:{label:"验证码"}},"a-form-item",e.formItemLayout,!1),[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["code",{rules:[{message:"请输入验证码!"}]}],expression:"[\n              'code',\n              {\n                rules: [\n                  {\n                    message: '请输入验证码!',\n                  },\n                ],\n              },\n            ]"}]})],1),a("a-col",{attrs:{span:12}},[a("a-button",{on:{click:e.handleGetCode}},[e._v("获取验证码")])],1)],1)],1),a("a-form-item",e._b({},"a-form-item",e.tailFormItemLayout,!1),[a("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" 注册 ")]),a("span",{staticClass:"toLogin"},[a("router-link",{attrs:{to:"/login"}},[e._v("已有账号，去登录")])],1)],1)],1)],1)},wt=[],xt={data:function(){return{confirmDirty:!1,autoCompleteResult:[],formItemLayout:{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},tailFormItemLayout:{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}}}},beforeCreate:function(){this.form=this.$form.createForm(this,{name:"register"})},methods:{handleGetCode:function(){this.form.validateFieldsAndScroll((function(e,t){t.code&&e||P(t.email)}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFieldsAndScroll((function(e,a){if(!e){var r=q(a.email,a.password,a.code,a.username);r.then((function(e){console.log(e),t.$bus.$emit("message",e)})),r.catch((function(e){console.log(e),t.$bus.$emit("message",e)}))}}))},handleConfirmBlur:function(e){var t=e.target.value;this.confirmDirty=this.confirmDirty||!!t},compareToFirstPassword:function(e,t,a){var r=this.form;t&&t!==r.getFieldValue("password")?a("两次密码不一致!"):a()},validateToNextPassword:function(e,t,a){var r=this.form;t&&this.confirmDirty&&r.validateFields(["confirm"],{force:!0}),a()},handleWebsiteChange:function(e){var t;t=e?[".com",".org",".net"].map((function(t){return"".concat(e).concat(t)})):[],this.autoCompleteResult=t}}},_t=xt,Ct=(a("1938"),Object(d["a"])(_t,kt,wt,!1,null,"b8eaf1c8",null)),$t=Ct.exports;r["a"].use(p["a"]);var Ot=[{path:"/home",name:"home",component:pt,redirect:"/home/statistics",meta:{title:"首页"},icon:"home",children:[{path:"statistics",name:"statistics",index:1,component:Me,meta:{title:"统计"},icon:"pie-chart"}]},{path:"/product",name:"product",icon:"shop",component:pt,redirect:"/product/list",meta:{title:"商品"},children:[{path:"list",name:"productList",icon:"container",index:2,meta:{title:"商品列表"},component:je},{path:"add",name:"productAdd",icon:"import",index:3,meta:{title:"添加商品"},component:Ce},{path:"category",name:"category",icon:"database",index:4,meta:{title:"商品类别"},component:Re}]}],It=[{path:"/login",name:"login",component:yt},{path:"/logon",name:"logon",component:$t}],Lt=new p["a"]({mode:"history",base:"/",routes:It}),St=!1;Lt.beforeEach((function(e,t,a){if("/login"===e.path||"/logon"===e.path)return a();if("/login"!==e.path){if(k.state.userInfo.appkey&&k.state.userInfo.username&&k.state.userInfo.role){if(!St){var r=x(k.state.userInfo.role,Ot);k.dispatch("changeAsyncMenuList",r),k.dispatch("changeMenuList",It.concat(r)).then((function(){Lt.addRoute(r[0]),Lt.addRoute(r[1]),a({name:"statistics"})})),St=!0}return a()}return a("/login")}return a()}));var Rt=Lt;r["a"].prototype.$bus=new r["a"]({}),r["a"].use(n["a"]),r["a"].use(i.a),r["a"].config.productionTip=!1,new r["a"]({router:Rt,store:k,render:function(e){return e(m)}}).$mount("#app")},"5e38":function(e,t,a){"use strict";a("67fe")},"5ff3":function(e,t,a){},6314:function(e,t,a){},"66c0":function(e,t,a){"use strict";a("2154")},"67fe":function(e,t,a){},7236:function(e,t,a){"use strict";a("e081")},7313:function(e,t,a){},"7c55":function(e,t,a){"use strict";a("2395")},"85da":function(e,t,a){"use strict";a("5ff3")},8610:function(e,t,a){},"9f01":function(e,t,a){},aa25:function(e,t,a){"use strict";a("3626")},ba59:function(e,t,a){},d60b:function(e,t,a){"use strict";a("6314")},e081:function(e,t,a){}});
//# sourceMappingURL=app.1b55f1ab.js.map