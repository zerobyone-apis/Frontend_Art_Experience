(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34ccce02"],{"458f":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var s=a("d225"),r=a("b0b4"),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(s["a"])(this,e),this.userId=t.userId||null,this.clientId=t.clientId||null,this.barberId=t.barberId||null,this.username=t.username||null,this.fullName=t.fullName||null,this.password=t.password||null,this.email=t.email||null,this.cel=t.cel||null,this.deleteOn=t.deleteOn||null,this.createOn=t.createOn||null,this.status=t.status||null}return Object(r["a"])(e,[{key:"getUserId",get:function(){return this.userId}},{key:"setUserId",set:function(e){this.userId=e}},{key:"getClientId",get:function(){return this.clientId}},{key:"setClientId",set:function(e){this.clientId=e}},{key:"getBarberId",get:function(){return this.barberId}},{key:"setBarberId",set:function(e){this.barberId=e}},{key:"getUsername",get:function(){return this.username}},{key:"setUsername",set:function(e){this.username=e}},{key:"getFullName",get:function(){return this.fullName}},{key:"setFullName",set:function(e){this.fullName=e}},{key:"getPassword",get:function(){return this.password}},{key:"setPassword",set:function(e){this.password=e}},{key:"getEmail",get:function(){return this.email}},{key:"setEmail",set:function(e){this.email=e}},{key:"getCel",get:function(){return this.cel}},{key:"setCel",set:function(e){this.cel=e}},{key:"getDeleteOn",get:function(){return this.deleteOn}},{key:"setDeleteOn",set:function(e){this.deleteOn=e}},{key:"getCreateOn",get:function(){return this.createOn}},{key:"setCreateOn",set:function(e){this.createOn=e}},{key:"getStatus",get:function(){return this.status}},{key:"setStatus",set:function(e){this.status=e}}]),e}()},5525:function(e,t,a){},"746c":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.$vuetify.breakpoint.name+"-format",attrs:{id:"barberShopPage"}},[a("div",{staticClass:"banner"},[a("v-img",{staticClass:"banner-wallpaper grey lighten-2",attrs:{src:e.barberShop.pageDesign.banner.img,"aspect-ratio":"1"}}),a("v-img",{staticClass:"banner-logo grey lighten-2",attrs:{src:e.barberShop.pageDesign.logo.img,"aspect-ratio":"1"}}),a("div",{staticClass:"actions-box"},[a("v-img",{staticClass:"action-logo",attrs:{src:e.icons.facebook}}),a("v-img",{staticClass:"action-logo",attrs:{src:e.icons.instagram}}),a("v-btn",{staticClass:"btn-reservation",attrs:{small:""}},[e._v("consultar")]),a("div",{staticClass:"darkbox"},[a("h2",{staticClass:"font-title"},[e._v(e._s(e.barberShop.info.name))]),a("v-icon",{staticClass:"darkbox-white-stars",attrs:{dark:"",small:""}},[e._v("star star star star star")]),a("v-icon",{staticClass:"darkbox-stars",attrs:{small:""}},[e._v(e._s(e.getStars()))])],1)],1)],1),a("div",{staticClass:"info-content"},[a("v-stepper",{attrs:{vertical:""},model:{value:e.wizard,callback:function(t){e.wizard=t},expression:"wizard"}},[a("v-stepper-header",[a("v-stepper-step",{attrs:{step:"1"},on:{click:function(t){e.wizard=1}}},[e._v("informacion")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"2"},on:{click:function(t){e.wizard=2}}},[e._v("productos")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"3"},on:{click:function(t){e.wizard=3}}},[e._v("promociones")])],1),a("v-stepper-items",[a("v-stepper-content",{attrs:{step:"1"}},[a("v-card",[a("div",{staticClass:"info-content-box"},[a("p",{staticClass:"font-title"},[e._v("Direccion")]),a("p",{staticClass:"font-text"},[e._v(e._s(e.barberShop.info.direction))]),a("p",{staticClass:"font-title"},[e._v("Cel")]),a("p",{staticClass:"font-text"},[e._v(e._s(e.barberShop.info.phone))]),a("p",{staticClass:"font-title"},[e._v("Email")]),a("p",{staticClass:"font-text"},[e._v(e._s(e.barberShop.info.email))])])])],1),a("v-stepper-content",{attrs:{step:"2"}},[a("v-card",[a("v-btn",[e._v("free for more")])],1)],1),a("v-stepper-content",{attrs:{step:"3"}},[a("v-card",[a("v-btn",[e._v("free for more")])],1)],1)],1)],1)],1),a("div",{staticClass:"barbershop-content"},[a("div",{staticClass:"barbershop-content-barbers"},[a("div",{staticClass:"barbershop-content-barbers-profiles"},[a("h2",{staticClass:"font-title"},[e._v("Barberos")]),e._l(e.barberShop.barbers,(function(t,s){return a("div",{key:s,staticClass:"profile-box",attrs:{transition:"scroll-x-transition"},on:{click:function(t){return e.showBarberProfile(e.barberShop.barbers[s])}}},[a("div",{staticClass:"picture-background"},[a("v-img",{staticClass:"banner-wallpaper grey lighten-2",attrs:{src:e.barberShop.barbers[s].banner.img,"aspect-ratio":"1"}})],1),a("div",{staticClass:"info-box"},[a("v-img",{staticClass:"barber-profile-picture grey lighten-2",attrs:{"aspect-ratio":"1",src:e.barberShop.barbers[s].picture.img}}),a("p",{staticClass:"font-text"},[e._v(e._s(e.barberShop.barbers[s].info.name))]),a("p",{staticClass:"font-text"},[e._v(e._s(e.barberShop.barbers[s].info.job))])],1)])}))],2)])]),a("barber-dialog",{attrs:{"barber-data":e.selectedBarber},model:{value:e.barberDialog,callback:function(t){e.barberDialog=t},expression:"barberDialog"}})],1)},r=[],i=a("d225"),n=a("308d"),o=a("6bb5"),c=a("4e2b"),l=a("9ab4"),b=a("b0b4"),u=a("ae9f"),p=a("458f"),d=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.stepsBarberShop=[{},{}],e.events=[],e.selectedEvents=[],e.barberDialog=!1,e.selectedBarber={},e.user=new p["a"],e.barberShop={info:{name:"Art Experience",direction:"Bvar Artigas 2333",email:"artexperience@gmail.com",phone:"098345432",stars:4,time:{start:"12:00",end:"22:00",days:"luenes a viernes"}},pageDesign:{banner:{img:"https://static.vecteezy.com/system/resources/previews/000/539/084/non_2x/barbershop-logo-design-vector.jpg",scala:100,x:0,y:0},logo:{img:"https://i.etsystatic.com/13221305/r/il/ab6ed6/1210022632/il_794xN.1210022632_eygv.jpg",scala:100,x:0,y:0},presentation:{img:"https://image.shutterstock.com/image-vector/barber-shopface-modern-designvector-illustrationhipster-260nw-764435734.jpg",scala:100,x:0,y:0}},barbers:[{info:{name:"ZeroByOne",job:"barber",email:"zerobyone@gmail.com",phone:"099 999 999",stars:5},picture:{img:"http://es.web.img3.acsta.net/r_640_360/newsv7/16/04/15/12/49/422146.jpg",scala:100,x:0,y:0},banner:{img:"https://s.yimg.com/ny/api/res/1.2/OoBy44.dLtaLgobVIO7fNA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzQ0O2g9Mzcy/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d4345e2367382e3b40a1e43f5016972b",scala:100,x:0,y:0}},{info:{name:"Damian Rodriguez",job:"peluquero",email:"damianezretirl1@gmail.com",phone:"099 999 999",stars:4},picture:{img:"https://i.ytimg.com/vi/9aFVSkncq00/maxresdefault.jpg",scala:100,x:0,y:0},banner:{img:"https://diarioavance.com/wp-content/uploads/2017/03/matrix.jpg",scala:100,x:0,y:0}}]},e.snackbar={state:!1,timeout:0},e.pagination={page:1,total:0,limit:8,descending:!0,sortBy:"code"},e.icons={instagram:"https://image.flaticon.com/icons/png/512/87/87390.png",facebook:"https://image.flaticon.com/icons/png/512/33/33702.png"},e.rules={},e.steps=[{title:"Datos basicos",fields:[{is:"input",name:"location",label:"Barberia",hint:"EVENT.hintLocation",icon:"home",rules:e.rules.required,required:!0},{is:"input",name:"location",label:"Tipo de trabajo",hint:"EVENT.hintLocation",icon:"work",rules:e.rules.required,required:!0}]},{title:"Fecha de inicio y fin",fields:[{is:"input",name:"location",label:"Barberia",hint:"EVENT.hintLocation",icon:"home",rules:e.rules.required,required:!1},{is:"input",name:"location",label:"Tipo de trabajo",hint:"EVENT.hintLocation",icon:"work",rules:e.rules.required,required:!1},{is:"date",name:"startDate",label:"inicio",hint:"EVENT.hintDate",icon:"event",rules:e.rules.required,required:!0},{is:"hour",workTime:.5,name:"startDate",label:"horarios",hint:"EVENT.hintDate",icon:"event",rules:e.rules.required,required:!0}]}],e}return Object(c["a"])(t,e),Object(b["a"])(t,[{key:"showBarberProfile",value:function(e){this.selectedBarber=e,this.barberDialog=!0,console.log(e)}},{key:"getStars",value:function(){for(var e="",t=0;t<this.barberShop.info.stars;t++)e+="star ";return e}}]),t}(u["a"]),h=(a("5525"),a("1192"),a("60a3")),m=a("21e5"),g=function(e){function t(){return Object(i["a"])(this,t),Object(n["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(d);g=Object(l["a"])([Object(h["a"])({components:{BarberDialog:m["default"]}})],g);var f=g,v=f,y=a("2877"),k=a("6544"),C=a.n(k),_=a("8336"),w=a("b0af"),x=a("ce7e6"),O=a("132d"),S=a("adda"),j=a("7e85"),I=a("e516"),D=a("9c54"),B=a("56a4"),E=Object(y["a"])(v,s,r,!1,null,null,null);t["default"]=E.exports;C()(E,{VBtn:_["a"],VCard:w["a"],VDivider:x["a"],VIcon:O["a"],VImg:S["a"],VStepper:j["a"],VStepperContent:I["a"],VStepperHeader:D["a"],VStepperItems:D["b"],VStepperStep:B["a"]})}}]);
//# sourceMappingURL=chunk-34ccce02.487d6a3e.js.map