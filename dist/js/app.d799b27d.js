(function(e){function t(t){for(var r,n,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&m.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},s={app:0},o=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1099:function(e,t,a){},2175:function(e,t,a){"use strict";a("5ce0")},"2dd6":function(e,t,a){"use strict";a("1099")},"32a6":function(e,t,a){},"45c1":function(e,t,a){"use strict";a("d27f")},"4b57":function(e,t,a){"use strict";a("df2f")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("7f10");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"hide-menu":!e.isMenuVisible||!e.user},attrs:{id:"app"}},[a("Header",{attrs:{title:"Meu Foco é TI - Base de Conhecimento",hideToggle:!e.user,hideUserDropdown:!e.user}}),e.user?a("Menu"):e._e(),e.validatingToken?a("Loading"):a("Content"),a("Footer")],1)},o=[],n=(a("96cf"),a("1da1")),i=a("bc3a"),c=a.n(i),l="__knowledge_user",u="https://knowledgeready.herokuapp.com";function d(e){e&&e.response&&e.response.data?r["default"].toasted.global.defaultError({msg:e.response.data}):"string"===typeof e?r["default"].toasted.global.defaultError({msg:e}):r["default"].toasted.global.defaultError()}function m(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!!t.test(e)||(d("Insira um E-mail Válido"),!1)}var f=a("2f62"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[e.hideToggle?e._e():a("a",{staticClass:"toggle",on:{click:e.toggleMenu}},[a("i",{staticClass:"fa fa-lg",class:e.icon})]),a("h1",{staticClass:"title"},[a("router-link",{attrs:{to:"/"}},[e._v(e._s(e.title))])],1),e.hideUserDropdown?e._e():a("UserDropdown")],1)},g=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-dropdown"},[a("div",{staticClass:"user-button"},[a("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.user.name))]),a("div",{staticClass:"user-dropdown-img"},[a("Gravatar",{attrs:{email:e.user.email,alt:"User"}})],1),a("i",{staticClass:"fa fa-angle-down"})]),a("div",{staticClass:"user-dropdown-content"},[e.user.admin?a("router-link",{attrs:{to:"/admin"}},[a("i",{staticClass:"fa fa-cogs"}),e._v(" Administração ")]):e._e(),a("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[a("i",{staticClass:"fa fa-sign-out"}),e._v(" Sair ")])],1)])},v=[],b=a("e06a"),y=a.n(b),_={name:"UserDropdown",components:{Gravatar:y.a},computed:Object(f["b"])(["user"]),methods:{logout:function(){localStorage.removeItem(l),this.$store.commit("setUser",null),this.$router.push({name:"auth"})}}},C=_,w=(a("a09f"),a("2877")),k=Object(w["a"])(C,h,v,!1,null,null,null),x=k.exports,$={name:"Header",components:{UserDropdown:x},props:{title:String,hideToggle:Boolean,hideUserDropdown:Boolean},computed:{icon:function(){return this.$store.state.isMenuVisible?"fa-angle-left":"fa-angle-down"}},methods:{toggleMenu:function(){this.$store.commit("toggleMenu")}}},S=$,A=(a("9f34"),Object(w["a"])(S,p,g,!1,null,null,null)),O=A.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isMenuVisible,expression:"isMenuVisible"}],staticClass:"menu"},[a("div",{staticClass:"menu-filter"},[a("i",{staticClass:"fa fa-search fa-lg"}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.treeFilter,expression:"treeFilter"}],staticClass:"filter-field",attrs:{type:"text",placeholder:"Digite para filtrar..."},domProps:{value:e.treeFilter},on:{input:function(t){t.target.composing||(e.treeFilter=t.target.value)}}})]),a("Tree",{ref:"tree",attrs:{data:e.treeData,options:e.treeOptions,filter:e.treeFilter}})],1)},E=[],I=a("25ea"),P={name:"Menu",components:{Tree:I["a"]},computed:Object(f["b"])(["isMenuVisible"]),data:function(){return{treeFilter:"",treeData:this.getTreeData(),treeOptions:{propertyNames:{text:"name"},filter:{emptyText:"Categoria não encontrada"}}}},methods:{getTreeData:function(){var e="".concat(u,"/categories/tree");return c.a.get(e).then((function(e){return e.data}))},onNodeSelect:function(e){this.$router.push({name:"articlesByCategory",params:{id:e.id}}),"xs"!==this.$mq&&"sm"!==this.$mq||this.$store.commit("toggleMenu",!1)}},mounted:function(){this.$refs.tree.$on("node:selected",this.onNodeSelect)}},U=P,M=(a("4b57"),Object(w["a"])(U,j,E,!1,null,null,null)),T=M.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("router-view")],1)},D=[],q={name:"Content"},V=q,B=(a("9551"),Object(w["a"])(V,N,D,!1,null,null,null)),F=B.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("span",[e._v("Copyright "),a("strong",[e._v("Meu Foco é TI")]),e._v(" © 2020-2021 ")])])}],H={name:"Footer"},J=H,R=(a("2175"),Object(w["a"])(J,L,z,!1,null,null,null)),G=R.exports,Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},W=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loading"},[r("img",{attrs:{src:a("cf1c"),alt:"Loading"}})])}],K={name:"Loading"},Q=K,X=(a("2dd6"),Object(w["a"])(Q,Z,W,!1,null,null,null)),Y=X.exports,ee={name:"App",components:{Header:O,Menu:T,Content:F,Footer:G,Loading:Y},computed:Object(f["b"])(["isMenuVisible","user"]),data:function(){return{validatingToken:!0}},methods:{validateToken:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.validatingToken=!0,a=localStorage.getItem(l),r=JSON.parse(a),e.$store.commit("setUser",null),r){t.next=8;break}return e.validatingToken=!1,e.$router.push({name:"auth"}),t.abrupt("return");case 8:return t.next=10,c.a.post("".concat(u,"/validateToken"),r);case 10:s=t.sent,s.data?(e.$store.commit("setUser",r),"xs"!==e.$mq&&"sm"!==e.$mq||e.$store.commit("toggleMenu",!1)):(localStorage.removeItem(l),e.$router.push({name:"auth"}).catch((function(){}))),e.validatingToken=!1;case 13:case"end":return t.stop()}}),t)})))()}},created:function(){this.validateToken()}},te=ee,ae=(a("034f"),Object(w["a"])(te,s,o,!1,null,null,null)),re=ae.exports,se=(a("f9e3"),a("2dd8"),a("5f5b"));r["default"].use(se["a"]);var oe=a("a65d"),ne=a.n(oe);r["default"].use(ne.a,{iconPack:"fontawesome",position:"top-center",duration:4e3,keepOnHover:!0,containerClass:"toasted-outer",className:"toasted-inner",fullWidth:!1,closeOnSwipe:!0,singleton:!0}),r["default"].toasted.register("defaultSuccess",(function(e){return e.msg?e.msg:"Operação realizada com sucesso!"}),{type:"success",icon:"check"}),r["default"].toasted.register("defaultError",(function(e){return e.msg?e.msg:"Oops.. Erro inesperado."}),{type:"error",icon:"times"});a("d3b7");var ie=function(e){return e},ce=function(e){if(401!==e.response.status)return Promise.reject(e);window.location="/"};c.a.interceptors.response.use(ie,ce);var le=a("660e");r["default"].use(le["a"],{breakpoints:{xs:576,sm:768,md:960,lg:1140,xl:1/0}}),r["default"].use(f["a"]);var ue=new f["a"].Store({state:{isMenuVisible:!1,user:null},mutations:{toggleMenu:function(e,t){e.user?e.isMenuVisible=void 0===t?!e.isMenuVisible:t:e.isMenuVisible=!1},setUser:function(e,t){e.user=t,t?(c.a.defaults.headers.common["Authorization"]="bearer ".concat(t.token),e.isMenuVisible=!0):(delete c.a.defaults.headers.common["Authorization"],e.isMenuVisible=!1)}}}),de=(a("45fc"),a("8c4f")),me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("PageTitle",{attrs:{icon:"fa fa-home",main:"Dashboard",sub:"Base de Conhecimento"}}),a("div",{staticClass:"stats"},[a("Stat",{attrs:{title:"Categorias",value:e.stat.categories,icon:"fa fa-folder",color:"#d54d50"}}),a("Stat",{attrs:{title:"Artigos",value:e.stat.articles,icon:"fa fa-file",color:"#3bc480"}}),a("Stat",{attrs:{title:"Usuários",value:e.stat.users,icon:"fa fa-user",color:"#3282cd"}})],1)],1)},fe=[],pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-title"},[a("h1",[e.icon?a("i",{class:e.icon}):e._e(),e._v(" "+e._s(e.main)+" ")]),a("h2",[e._v(" "+e._s(e.sub)+" ")]),a("hr")])},ge=[],he={name:"PageTitle",props:["icon","main","sub"]},ve=he,be=(a("a405"),Object(w["a"])(ve,pe,ge,!1,null,null,null)),ye=be.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stat"},[a("div",{staticClass:"stat-icon"},[a("i",{class:e.icon,style:e.style})]),a("div",{staticClass:"stat-info"},[a("span",{staticClass:"stat-title"},[e._v(" "+e._s(e.title)+" ")]),a("span",{staticClass:"stat-value"},[e._v(" "+e._s(e.value)+" ")])])])},Ce=[],we={name:"Stat",props:["title","value","icon","color"],computed:{style:function(){return"color: "+(this.color||"#000")}}},ke=we,xe=(a("5b5c"),Object(w["a"])(ke,_e,Ce,!1,null,null,null)),$e=xe.exports,Se={name:"Home",components:{PageTitle:ye,Stat:$e},data:function(){return{stat:{}}},methods:{getStats:function(){var e=this;c.a.get("".concat(u,"/stats")).then((function(t){return e.stat=t.data}))}},mounted:function(){this.getStats()}},Ae=Se,Oe=(a("b497"),Object(w["a"])(Ae,me,fe,!1,null,null,null)),je=Oe.exports,Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-pages"},[a("PageTitle",{attrs:{icon:"fa fa-cogs",main:"Administração do Sistema",sub:"Cadastros & Cia"}}),a("div",{staticClass:"admin-pages-tabs"},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Artigos",active:""}},[a("ArticleAdmin")],1),a("b-tab",{attrs:{title:"Categorias"}},[a("CategoryAdmin")],1),a("b-tab",{attrs:{title:"Usuários"}},[a("UserAdmin")],1)],1)],1)],1)],1)},Ie=[],Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.id,expression:"user.id"}],attrs:{id:"user-id",type:"hidden"},domProps:{value:e.user.id},on:{input:function(t){t.target.composing||e.$set(e.user,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Nome:","label-for":"user-name"}},[a("b-form-input",{attrs:{id:"user-name",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o Nome do Usuário..."},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"E-mail:","label-for":"user-email"}},[a("b-form-input",{attrs:{id:"user-email",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o E-mail do Usuário..."},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1)],1),a("b-form-checkbox",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}],staticClass:"mt-3 mb-3",attrs:{id:"user-admin"},model:{value:e.user.admin,callback:function(t){e.$set(e.user,"admin",t)},expression:"user.admin"}},[e._v(" Administrador? ")]),a("b-row",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}]},[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Senha:","label-for":"user-password"}},[a("b-form-input",{attrs:{id:"user-password",type:"password",required:"",placeholder:"Informe a Senha do Usuário..."},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Confirme a Senha","label-for":"user-confirm-password"}},[a("b-form-input",{attrs:{id:"user-confirm-password",type:"password",required:"",placeholder:"Confirme a Senha do do Usuário..."},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{xs:"12"}},["save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v(" Salvar ")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v(" Excluir ")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1)],1)],1),a("hr"),a("b-table",{attrs:{responsive:"",hover:"",striped:"",items:e.users,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){return e.loadUser(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.loadUser(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},Ue=[],Me=(a("99af"),a("5530")),Te={name:"UserAdmin",data:function(){return{mode:"save",user:{},users:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"email",label:"E-mail",sortable:!0},{key:"admin",label:"Administrador",sortable:!0,formatter:function(e){return e?"Sim":"Não"}},{key:"actions",label:"Ações"}]}},methods:{loadUsers:function(){var e=this,t="".concat(u,"/users");c.a.get(t).then((function(t){e.users=t.data}))},reset:function(){this.mode="save",this.user={},this.loadUsers()},save:function(){var e=this;if(m(this.user.email)){var t=this.user.id?"put":"post",a=this.user.id?"/".concat(this.user.id):"",r="".concat(u,"/users").concat(a);c.a[t](r,this.user).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)}},remove:function(){var e=this,t=this.user.id,a="".concat(u,"/users/").concat(t);c.a.delete(a,this.user).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d),this.loadUsers(),this.reset()},loadUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.user=Object(Me["a"])({},e)}},mounted:function(){this.loadUsers()}},Ne=Te,De=Object(w["a"])(Ne,Pe,Ue,!1,null,null,null),qe=De.exports,Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.article.id,expression:"article.id"}],attrs:{id:"article-id",type:"hidden"},domProps:{value:e.article.id},on:{input:function(t){t.target.composing||e.$set(e.article,"id",t.target.value)}}}),a("b-form-group",{attrs:{label:"Nome:","label-for":"article-name"}},[a("b-form-input",{attrs:{id:"article-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome do Artigo..."},model:{value:e.article.name,callback:function(t){e.$set(e.article,"name",t)},expression:"article.name"}})],1),a("b-form-group",{attrs:{label:"Descrição:","label-for":"article-description"}},[a("b-form-input",{attrs:{id:"article-description",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe a Descrição do Artigo..."},model:{value:e.article.description,callback:function(t){e.$set(e.article,"description",t)},expression:"article.description"}})],1),"save"===e.mode?a("b-form-group",{attrs:{label:"Imagem (URL):","label-for":"article-image-url"}},[a("b-form-input",{attrs:{id:"article-image-url",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe a URL da imagem..."},model:{value:e.article.imageUrl,callback:function(t){e.$set(e.article,"imageUrl",t)},expression:"article.imageUrl"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Categoria:","label-for":"article-categoryId"}},[a("b-form-select",{attrs:{id:"article-categoryId",options:e.categories},model:{value:e.article.categoryId,callback:function(t){e.$set(e.article,"categoryId",t)},expression:"article.categoryId"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Autor:","label-for":"article-userId"}},[a("b-form-select",{attrs:{id:"article-userId",options:e.users},model:{value:e.article.userId,callback:function(t){e.$set(e.article,"userId",t)},expression:"article.userId"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Conteúdo","label-for":"category-content"}},[a("VueEditor",{attrs:{placeholder:"Informe o Conteúdo do Artigo..."},model:{value:e.article.content,callback:function(t){e.$set(e.article,"content",t)},expression:"article.content"}})],1):e._e(),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v(" Salvar ")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v(" Excluir ")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{responsive:"",hover:"",striped:"",items:e.articles,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){return e.loadArticle(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.loadArticle(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])}),a("b-pagination",{attrs:{size:"md","total-rows":e.count,"per-page":e.limit},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},Be=[],Fe=(a("d81d"),a("b0c0"),a("5873")),Le={name:"ArticleAdmin",components:{VueEditor:Fe["a"]},data:function(){return{mode:"save",article:{},articles:[],categories:[],users:[],page:1,limit:0,count:0,fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"description",label:"Descrição",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadArticles:function(){var e=this,t="".concat(u,"/articles?page=").concat(this.page);c.a.get(t).then((function(t){e.articles=t.data.data,e.count=t.data.count,e.limit=t.data.limit}))},reset:function(){this.mode="save",this.article={},this.loadArticles()},save:function(){var e=this,t=this.article.id?"put":"post",a=this.article.id?"/".concat(this.article.id):"",r="".concat(u,"/articles").concat(a);c.a[t](r,this.article).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)},remove:function(){var e=this,t=this.article.id,a="".concat(u,"/articles/").concat(t);c.a.delete(a).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)},loadArticle:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=a;var r="/".concat(e.id),s="".concat(u,"/articles").concat(r);c.a.get(s).then((function(e){return t.article=e.data}))},loadCategories:function(){var e=this,t="".concat(u,"/categories");c.a.get(t).then((function(t){e.categories=t.data.map((function(e){return{value:e.id,text:e.path}}))}))},loadUsers:function(){var e=this,t="".concat(u,"/users");c.a.get(t).then((function(t){e.users=t.data.map((function(e){return{value:e.id,text:"".concat(e.name," - ").concat(e.email)}}))}))}},watch:{page:function(){this.loadArticles()}},mounted:function(){this.loadUsers(),this.loadCategories(),this.loadArticles()}},ze=Le,He=Object(w["a"])(ze,Ve,Be,!1,null,null,null),Je=He.exports,Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category-admin"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.category.id,expression:"category.id"}],attrs:{id:"category-id",type:"hidden"},domProps:{value:e.category.id},on:{input:function(t){t.target.composing||e.$set(e.category,"id",t.target.value)}}}),a("b-form-group",{attrs:{label:"Nome","label-for":"category-name"}},[a("b-form-input",{attrs:{id:"category-name",type:"text",readonly:"remove"===e.mode,required:"",placeholder:"Informe o Nome da Categoria..."},model:{value:e.category.name,callback:function(t){e.$set(e.category,"name",t)},expression:"category.name"}})],1),a("b-form-group",{attrs:{label:"Categoria Pai:","label-for":"category-parentId"}},["save"===e.mode?a("b-form-select",{attrs:{id:"category-parentId",options:e.categories},model:{value:e.category.parentId,callback:function(t){e.$set(e.category,"parentId",t)},expression:"category.parentId"}}):a("b-form-input",{attrs:{id:"category-parentId",type:"text",readonly:""},model:{value:e.category.path,callback:function(t){e.$set(e.category,"path",t)},expression:"category.path"}})],1),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v(" Salvar ")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v(" Excluir ")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{responsive:"",hover:"",striped:"",items:e.categories,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){return e.loadCategory(t.item)}}},[a("i",{staticClass:"fa fa-pencil"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.loadCategory(t.item,"remove")}}},[a("i",{staticClass:"fa fa-trash"})])]}}])})],1)},Ge=[],Ze={name:"CategoryAdmin",data:function(){return{mode:"save",selected:null,category:{},categories:[],options:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"path",label:"Caminho",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadCategories:function(){var e=this,t="".concat(u,"/categories");c.a.get(t).then((function(t){e.categories=t.data.map((function(e){return Object(Me["a"])(Object(Me["a"])({},e),{},{value:e.id,text:e.path})}))})).catch(d)},reset:function(){this.mode="save",this.category={},this.loadCategories()},save:function(){var e=this,t=this.category.id?"put":"post",a=this.category.id?"/".concat(this.category.id):"",r="".concat(u,"/categories").concat(a);c.a[t](r,this.category).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d)},remove:function(){var e=this,t=this.category.id,a="".concat(u,"/categories/").concat(t);c.a.delete(a,this.category).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(d),this.loadCategories(),this.reset()},loadCategory:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.category=Object(Me["a"])({},e)}},mounted:function(){this.loadCategories()}},We=Ze,Ke=Object(w["a"])(We,Re,Ge,!1,null,null,null),Qe=Ke.exports,Xe={name:"AdminPages",components:{PageTitle:ye,UserAdmin:qe,ArticleAdmin:Je,CategoryAdmin:Qe}},Ye=Xe,et=Object(w["a"])(Ye,Ee,Ie,!1,null,null,null),tt=et.exports,at=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"articles-by-category"},[a("PageTitle",{attrs:{icon:"fa fa-folder-o",main:e.category.name,sub:"Categoria"}}),a("ul",e._l(e.articles,(function(e){return a("li",{key:e.id},[a("ArticleItem",{attrs:{article:e}})],1)})),0),a("div",{staticClass:"load-more"},[e.loadMore?a("button",{staticClass:"btn btn-lg btn-outline-primary",on:{click:e.getArticles}},[e._v(" Carregar Mais Artigos ")]):e._e()])],1)},rt=[],st=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"article-item"},[r("router-link",{attrs:{to:{name:"articleById",params:{id:e.article.id}}}},[r("div",{staticClass:"article-item-image d-done d-sm-block"},[e.article.imageUrl?r("img",{attrs:{src:e.article.imageUrl,height:"150",width:"150",alt:"Article"}}):r("img",{attrs:{src:a("c54c"),height:"150",width:"150",alt:"Article"}})]),r("div",{staticClass:"article-item-info"},[r("h2",[e._v(" "+e._s(e.article.name))]),r("p",[e._v(e._s(e.article.description))]),r("span",{staticClass:"article-item-author"},[r("strong",[e._v("Autor: ")]),e._v(" "+e._s(e.article.author)+" ")])])])],1)},ot=[],nt={name:"Articleitem",props:["article"]},it=nt,ct=(a("fb2c"),Object(w["a"])(it,st,ot,!1,null,null,null)),lt=ct.exports,ut={name:"ArticlesByCategory",components:{PageTitle:ye,ArticleItem:lt},data:function(){return{category:{},articles:[],page:1,loadMore:!0}},methods:{getCategory:function(){var e=this,t="".concat(u,"/categories/").concat(this.category.id);c()(t).then((function(t){return e.category=t.data}))},getArticles:function(){var e=this,t="".concat(u,"/categories/").concat(this.category.id,"/articles?page=").concat(this.page);c()(t).then((function(t){e.articles=e.articles.concat(t.data),e.page++,0===t.data.length&&(e.loadMore=!1)}))}},watch:{$route:function(e){this.category.id=e.params.id,this.articles=[],this.page=1,this.loadMore=!0,this.getCategory(),this.getArticles()}},mounted:function(){this.category.id=this.$route.params.id,this.getCategory(),this.getArticles()}},dt=ut,mt=(a("cb32"),Object(w["a"])(dt,at,rt,!1,null,null,null)),ft=mt.exports,pt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-by-id"},[a("PageTitle",{attrs:{icon:"fa fa-file-o",main:e.article.name,sub:e.article.description}}),a("div",{staticClass:"article-content",domProps:{innerHTML:e._s(e.article.content)}})],1)},gt=[],ht=(a("4160"),a("159b"),a("b8f9"),a("1487")),vt=a.n(ht),bt={name:"ArticleById",components:{PageTitle:ye},data:function(){return{article:{}}},mounted:function(){var e=this,t="".concat(u,"/articles/").concat(this.$route.params.id);c.a.get(t).then((function(t){return e.article=t.data}))},updated:function(){vt.a.configure({languages:["html","css","scss","json","javascript","typescript"]}),document.querySelectorAll(".article-content pre").forEach((function(e){vt.a.highlightBlock(e)}))}},yt=bt,_t=(a("45c1"),Object(w["a"])(yt,pt,gt,!1,null,null,null)),Ct=_t.exports,wt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-content"},[r("div",{staticClass:"auth-modal"},[r("img",{attrs:{src:a("cf05"),width:"200",alt:"Logo"}}),r("hr"),r("div",{staticClass:"auth-title"},[e._v(" "+e._s(e.showSignup?"Cadastro":"Login")+" ")]),e.showSignup?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{name:"email",type:"text",placeholder:"E-mail"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{name:"password",type:"password",placeholder:"Senha"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.showSignup?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"password",placeholder:"Confirme a Senha"},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}):e._e(),e.showSignup?r("button",{on:{click:e.signup}},[e._v("Registrar")]):r("button",{on:{click:e.signin}},[e._v("Entrar")]),r("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.showSignup=!e.showSignup}}},[e.showSignup?r("span",[e._v("Já tem Cadastro? Acesse o login!")]):r("span",[e._v("Não tem cadastro? Registre-se aqui!")])])])])},kt=[],xt={name:"Auth",data:function(){return{showSignup:!1,user:{}}},methods:{signin:function(){var e=this;m(this.user.email)&&c.a.post("".concat(u,"/signin"),this.user).then((function(t){e.$store.commit("setUser",t.data),localStorage.setItem(l,JSON.stringify(t.data)),e.$router.push({path:"/"})})).catch(d)},signup:function(){var e=this;m(this.user.email)&&c.a.post("".concat(u,"/signup"),this.user).then((function(){e.$toasted.global.defaultSuccess(),e.user={},e.showSignup=!1})).catch(d)}}},$t=xt,St=(a("ee68"),Object(w["a"])($t,wt,kt,!1,null,null,null)),At=St.exports;r["default"].use(de["a"]);var Ot=[{name:"home",path:"/",component:je},{name:"adminPages",path:"/admin",component:tt,meta:{requiresAdmin:!0}},{name:"articlesByCategory",path:"/categories/:id/articles",component:ft},{name:"articleById",path:"/articles/:id",component:Ct},{name:"auth",path:"/auth",component:At}],jt=new de["a"]({mode:"history",routes:Ot});jt.beforeEach((function(e,t,a){var r=localStorage.getItem(l);if(e.matched.some((function(e){return e.meta.requiresAdmin}))){var s=JSON.parse(r);s&&s.admin?a():a({path:"/"})}else a()}));var Et=jt;r["default"].config.productionTip=!1,new r["default"]({store:ue,router:Et,render:function(e){return e(re)}}).$mount("#app")},"5b5c":function(e,t,a){"use strict";a("81a0")},"5ce0":function(e,t,a){},"5e0e":function(e,t,a){},6698:function(e,t,a){},"6a5c":function(e,t,a){},"77df":function(e,t,a){},"81a0":function(e,t,a){},8313:function(e,t,a){},"85ec":function(e,t,a){},"8d87":function(e,t,a){},9551:function(e,t,a){"use strict";a("32a6")},"9f34":function(e,t,a){"use strict";a("6698")},a09f:function(e,t,a){"use strict";a("77df")},a405:function(e,t,a){"use strict";a("a90e")},a90e:function(e,t,a){},b497:function(e,t,a){"use strict";a("8313")},c54c:function(e,t,a){e.exports=a.p+"img/article.ceb5521b.png"},cb32:function(e,t,a){"use strict";a("5e0e")},cf05:function(e,t,a){e.exports=a.p+"img/logo.af224374.png"},cf1c:function(e,t,a){e.exports=a.p+"img/loading.8a7630ca.gif"},d27f:function(e,t,a){},df2f:function(e,t,a){},ee68:function(e,t,a){"use strict";a("6a5c")},fb2c:function(e,t,a){"use strict";a("8d87")}});
//# sourceMappingURL=app.d799b27d.js.map