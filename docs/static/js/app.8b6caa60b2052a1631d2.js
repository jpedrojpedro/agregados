webpackJsonp([1],{EWfp:function(t,e,a){"use strict";function n(t){a("NhJr")}var s=a("EZYi"),i=a("M1Ae"),r=a("VU/8"),o=n,c=r(s.a,i.a,o,null,null);e.a=c.exports},EZYi:function(t,e,a){"use strict";var n=a("K8Pu");e.a={name:"app",firebase:{tags:n.a.ref("development")},methods:{perform:function(){this.$router.push({name:"Event",params:{event_name:this.myEvent.name}})}},data:function(){return{myEvent:{name:"evento-teste"}}}}},IBcb:function(t,e,a){"use strict";e.a={apiKey:"AIzaSyCgkmsB80VtKgSFxTuPZD8HawM2IGNVgZQ",authDomain:"agregados-311b9.firebaseapp.com",databaseURL:"https://agregados-311b9.firebaseio.com",projectId:"agregados-311b9",storageBucket:"agregados-311b9.appspot.com",messagingSenderId:"116540803034"}},K8Pu:function(t,e,a){"use strict";var n=a("IBcb"),s=a("q6Ae"),i=a.n(s),r=i.a.initializeApp(n.a);e.a=r.database()},M1Ae:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-inline"},[a("label",{attrs:{for:"novoNome"}},[t._v("jpedrojpedro.github.io/agregados/")]),t._v(" \n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.myEvent.name,expression:"myEvent.name"}],staticClass:"form-control",attrs:{type:"text",id:"novoNome"},domProps:{value:t.myEvent.name},on:{input:function(e){e.target.composing||(t.myEvent.name=e.target.value)}}}),t._v(" \n        "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Vai!"},on:{click:function(e){if(!("button"in e)&&t._k(e.keyCode,"pevent"))return null;t.perform()}}})])])]),t._v(" "),t._m(1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",[t._v("AGREGADOS")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h3",{staticClass:"panel-title"},[t._v("Instruções:")]),t._v(" "),a("ul",[a("li",[t._v("Não precisa logar 😱  basta usar a URL")]),t._v(" "),a("li",[t._v("Não precisa salvar 😱  as modificações são salvas automaticamente")]),t._v(" "),a("li",[t._v("Use Agregados 🚀")])])])])}],i={render:n,staticRenderFns:s};e.a=i},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("1mcD"),i=a.n(s),r=a("EWfp"),o=a("YaEn"),c=a("sCSS");n.a.config.productionTip=!1,n.a.use(i.a),n.a.use(c.a),window.app=new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},NhJr:function(t,e){},SzYY:function(t,e){},T8kR:function(t,e,a){"use strict";function n(t){a("SzYY")}var s=a("o/ku"),i=a("WkdC"),r=a("VU/8"),o=n,c=r(s.a,i.a,o,null,null);e.a=c.exports},WkdC:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col"},[a("h2",[t._v(t._s(t.name))])])]),t._v(" "),a("div",{staticClass:"row"})])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("h1",[t._v("AGREGADOS")])])}],i={render:n,staticRenderFns:s};e.a=i},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),i=a("EWfp"),r=a("T8kR");n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Main",component:i.a},{path:"/:event_name",name:"Event",component:r.a},{path:"/:event_name/",name:"EventTags",component:r.a}]})},"o/ku":function(t,e,a){"use strict";var n=a("K8Pu");e.a={name:"app",firebase:{tags:n.a.ref("development/evento-teste")},data:function(){return{event:{name:""}}}}}},["NHnr"]);
//# sourceMappingURL=app.8b6caa60b2052a1631d2.js.map