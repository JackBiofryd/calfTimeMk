(this.webpackJsonpcalftime=this.webpackJsonpcalftime||[]).push([[7],{32:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(0);var n=a(15),r=a(1);function c(e){return e.href?Object(r.jsx)("a",{href:e.href,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses),style:e.style,children:e.children}):e.to?Object(r.jsx)(n.b,{to:e.to,exact:e.exact,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses),style:e.style,children:e.children}):Object(r.jsx)("button",{type:e.type,onClick:e.onClick,disabled:e.disabled,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses," ").concat(e.disabled&&"btn-disabled"),style:e.style,children:e.children})}},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n),c=a(15),i=a(32),s=a(14),o=a(1);function l(){var e=Object(n.useContext)(s.a);return Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"nav-links",children:[e.isLoggedIn&&Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{to:"/cows",children:"COWS"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{onClick:e.logout,children:"LOGOUT"})})]}),!e.isLoggedIn&&Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{to:"/login",children:"LOGIN"})}),!e.isLoggedIn&&Object(o.jsx)("li",{children:Object(o.jsx)(i.a,{to:"/signup",children:"SIGN UP"})})]})})}var u=a.p+"static/media/logo.6237e665.png";function d(e){var t=Object(n.useContext)(s.a);return Object(o.jsx)("nav",{className:"main-navbar py-1 ".concat(e.fixed&&"navbar-fixed"),children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)(c.b,{to:"/",className:"nav-logo",children:[Object(o.jsx)("img",{className:"logo",src:u,alt:"Logo"}),Object(o.jsx)("h1",{className:"M-heading",children:"Calf Time"})]}),Object(o.jsx)(l,{}),Object(o.jsx)("i",{className:"fas fa-lightbulb dark-mode-icon ".concat(t.isDarkMode&&"is-dark-mode"),onClick:function(){t.isDarkMode?document.querySelector("html").classList.remove("dark-mode"):document.querySelector("html").classList.add("dark-mode"),t.setIsDarkMode((function(e){return!e}))}})]})})}},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(39);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(0);var n=a(1);function r(e){return Object(n.jsxs)("div",{className:"alert-container my-1-5 alert-".concat(e.type),children:[Object(n.jsx)("i",{className:"".concat(function(e){switch(e){case"error":return"fas fa-exclamation-circle";case"info":return"fas fa-info-circle";default:return"fas icon"}}(e.type)," mr-1")}),Object(n.jsxs)("p",{children:[e.message,e.code&&": ".concat(e.code)]})]})}},38:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(33),r=a.n(n),c=a(34),i=a(8),s=a(0),o=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(s.useState)(),l=Object(i.a)(o,2),u=l[0],d=l[1];return[a,u,Object(s.useCallback)(Object(c.a)(r.a.mark((function e(){var t,a,c,i,s,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"",a=l.length>1&&void 0!==l[1]?l[1]:"GET",c=l.length>2&&void 0!==l[2]?l[2]:null,i=l.length>3&&void 0!==l[3]?l[3]:{},n(!0),e.prev=5,e.next=8,fetch(t,{method:a,body:c,headers:i});case 8:return s=e.sent,e.prev=9,e.next=12,s.json();case 12:o=e.sent,e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(9),new Error("Something went wrong, please try again.");case 18:if(s.ok){e.next=20;break}throw new Error(o.msg);case 20:return n(!1),e.abrupt("return",o);case 24:throw e.prev=24,e.t1=e.catch(5),d(e.t1.message),n(!1),e.t1;case 29:case"end":return e.stop()}}),e,null,[[5,24],[9,15]])}))),[])]}},39:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},40:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"g",(function(){return u}));var n=function(){return{type:"REQUIRED"}},r=function(e){return{type:"MIN_LENGTH",length:e}},c=function(e){return{type:"MAX_LENGTH",length:e}},i=function(){return{type:"IS_EMAIL"}},s=function(){return{type:"IS_DATE"}},o=function(e){return{type:"IS_OVER",num:e}},l=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,u=function(e,t){var a=!0;return t.forEach((function(t){switch(t.type){case"REQUIRED":a=a&&e.trim().length>0;break;case"MIN_LENGTH":a=a&&e.trim().length>=t.length;break;case"MAX_LENGTH":a=a&&e.trim().length<=t.length;break;case"IS_EMAIL":a=a&&/^\S+@\S+\.\S+$/.test(e);break;case"IS_DATE":a=a&&l.test(e);break;case"IS_OVER":a=a&&Number(e)>t.num}})),a}},41:function(e,t,a){"use strict";t.a=a.p+"static/media/cowGrass.2d09bc11.png"},42:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(47),r=a.n(n),c=/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,i="DD.MM.YYYY",s=function(){return r()().format(i)},o=function(e){if(e&&c.test(e))return r()(e,i).format(i)},l=function(e){if(e&&c.test(e)){var t=r()(e,i);return t.add(283,"days"),t.format(i)}},u=function(e){return e&&c.test(e)?{startDate:r()(e,i).add(18,"days").format(i),endDate:r()(e,i).add(26,"days").format(i)}:{startDate:"",endDate:""}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s();if(e&&c.test(e)){t=r()(o(t),i);var a=r()(o(e),i).subtract(10,"days"),n=r()(o(e),i).add(10,"days");return t.isAfter(a)&&t.isBefore(n)||t.isSame(a)||t.isSame(n)}},b=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return e=r()(e,i),t=r()(t,i),(a=r()(a,i)).isAfter(e)&&a.isBefore(t)||a.isSame(e)||a.isSame(t)}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(8),r=a(36),c=a(0),i=a(40),s=a(1),o=function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.value,isValid:t.isValid});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}};function l(e){var t=Object(c.useReducer)(o,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),a=Object(n.a)(t,2),r=a[0],l=a[1],u=e.id,d=e.onInput,b=r.value,j=r.isValid;return Object(c.useEffect)((function(){d(u,b,j)}),[b,j,u,d]),Object(s.jsxs)("div",{className:"form-group my-1-5 center ".concat(!r.isValid&&r.isTouched&&"form-group-invalid"),children:[Object(s.jsx)("label",{htmlFor:e.name,className:"form-label lead",children:e.label}),Object(s.jsx)("input",{type:e.type,value:r.value,name:e.name,id:e.id,onChange:function(t){var a=t.target.value,n=!0;(null===e||void 0===e?void 0:e.validators)&&(n=Object(i.g)(a,e.validators)),e.notRequired&&!a&&(n=!0),l({type:"CHANGE",value:a,isValid:n})},className:"input ".concat(!r.isValid&&r.isTouched&&"input-invalid"),onBlur:function(){return l({type:"TOUCH"})},placeholder:e.placeholder,autoComplete:"off",min:e.min}),!r.isValid&&r.isTouched&&Object(s.jsx)("small",{className:"erorr-text",children:e.errorText})]})}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(8),r=a(39),c=a(36),i=a(0),s=function(e,t){switch(t.type){case"CHANGE":var a=!0;for(var n in e.inputs)a=n!==t.id?a&&e.inputs[n].isValid:a&&t.isValid;return Object(c.a)(Object(c.a)({},e),{},{inputs:Object(c.a)(Object(c.a)({},e.inputs),{},Object(r.a)({},t.id,{value:t.value,isValid:t.isValid})),isFormValid:a});case"SET_DATA":return Object(c.a)(Object(c.a)({},e),{},{inputs:t.newInputs,isFormValid:t.newFormValidity});default:return e}},o=function(e,t){var a=Object(i.useReducer)(s,{inputs:e,isFormValid:t}),r=Object(n.a)(a,2),c=r[0],o=r[1];return[c,Object(i.useCallback)((function(e,t,a){return o({type:"CHANGE",id:e,value:t,isValid:a})}),[]),Object(i.useCallback)((function(e,t){return o({type:"SET_DATA",newInputs:e,newFormValidity:t})}),[])]}},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(8),r=a(0),c=a(32),i=a(1);function s(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),s=a[0],o=a[1],l=Object(r.useState)(),u=Object(n.a)(l,2),d=u[0],b=u[1],j=Object(r.useState)(),f=Object(n.a)(j,2),m=f[0],p=f[1],O=Object(r.useState)(),h=Object(n.a)(O,2),v=h[0],g=h[1],x=Object(r.useRef)();Object(r.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){b(e.result)},e.readAsDataURL(s)}}),[s]);return Object(i.jsxs)("div",{className:"form-group center mb-1",children:[Object(i.jsx)("input",{type:"file",id:e.id,style:{display:"none"},accept:".jpg,.png,.jpeg",ref:x,onChange:function(t){var a,n=m;t.target.files&&1===t.target.files.length?(a=t.target.files[0]).size>5e5?(o(a),g(!0),p(!1),n=!1):(o(a),g(!1),p(!0),n=!0):(p(!1),n=!1),e.onInput(e.id,a,n)}}),Object(i.jsxs)("div",{className:"image-upload center",children:[(d||e.initialUrl)&&Object(i.jsx)("div",{className:"image-upload-preview",children:Object(i.jsx)("img",{src:d||e.initialUrl,alt:"Preview"})}),Object(i.jsx)(c.a,{type:"button",onClick:function(){return x.current.click()},extraClasses:"border",children:"Upload Cow Image"})]}),v&&s&&Object(i.jsx)("p",{className:"error",children:"Image too big."})]})}},51:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(33),r=a.n(n),c=a(34),i=a(8),s=a(0),o=a.n(s),l=a(2),u=a(14),d=a(35),b=a(43),j=a(32),f=a(16),m=a(49),p=a(41),O=a(44),h=a(38),v=a(40),g=a(42),x=a(37),y=a(1);function k(){var e=Object(h.a)(),t=Object(i.a)(e,3),a=t[0],n=t[1],k=t[2],D=Object(O.a)({tag:{value:"",isValid:!1},name:{value:"",isValid:!1},birthDate:{value:"",isValid:!0},motherTag:{value:"",isValid:!0},fertDate:{value:"",isValid:!0},antibioticDate:{value:"",isValid:!0},milk:{value:0,isValid:!0},image:{value:null,isValid:!0}},!1),N=Object(i.a)(D,2),V=N[0],w=N[1],E=Object(s.useState)(!1),I=Object(i.a)(E,2),T=I[0],C=I[1],S=Object(s.useState)("male"),A=Object(i.a)(S,2),L=A[0],P=A[1],F=Object(s.useContext)(u.a),R=Object(l.g)(),M=function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={tag:V.inputs.tag.value,name:V.inputs.name.value,bornOn:Object(g.f)(V.inputs.birthDate.value)||Object(g.e)(),mother:V.inputs.motherTag.value,fertDate:Object(g.f)(V.inputs.fertDate.value)||"",dueOn:Object(g.d)(V.inputs.fertDate.value)||"",children:[],checkingDates:Object(g.c)(V.inputs.fertDate.value),milk:V.inputs.milk.value||0,antibioticDate:V.inputs.antibioticDate.value||"",gender:L},e.prev=2,(n=new FormData).append("cow",JSON.stringify(a)),n.append("image",V.inputs.image.value),e.next=8,k("".concat("https://calf-time.herokuapp.com/api","/cows"),"POST",n,{Authorization:"Bearer ".concat(F.token)});case 8:R.push("/cows"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),G=function(e){return P(e.target.value)};return Object(y.jsxs)("div",{children:[Object(y.jsx)(d.a,{}),a&&Object(y.jsx)(f.a,{}),!a&&Object(y.jsx)("div",{className:"container p-1",children:Object(y.jsxs)("form",{className:"form my-3 p-2",onSubmit:M,children:[Object(y.jsxs)("h1",{className:"center L-heading mb-1",children:["Add ",Object(y.jsx)("span",{className:"text-primary",children:"Cow"})]}),n&&Object(y.jsx)(x.a,{message:n,type:"error"}),Object(y.jsx)(b.a,{type:"text",label:"Tag",placeholder:"Enter Tag...",name:"tag",id:"tag",validators:[Object(v.e)(4),Object(v.d)(20)],errorText:"Please Input A Valid Tag",onInput:w}),Object(y.jsx)(b.a,{type:"text",label:"Name",placeholder:"Enter Name...",name:"name",id:"name",validators:[Object(v.f)(),Object(v.d)(20)],errorText:"Please Input A Valid Name",onInput:w}),Object(y.jsxs)("div",{className:"radio-container center mb-2 mt-0-5",children:[Object(y.jsx)("label",{htmlFor:"gender",children:"Gender"}),Object(y.jsxs)("div",{className:"radio-inputs",children:[Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"radio",name:"gender",id:"gender",value:"male",checked:"male"===L,onChange:G})," ","Male"]}),Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"radio",name:"gender",id:"gender",value:"female",checked:"female"===L,onChange:G})," ","Female"]})]})]}),!T&&Object(y.jsx)(j.a,{type:"button",extraClasses:"mb-2",onClick:function(){return C(!0)},style:{margin:"auto auto 2rem auto"},children:"Add Extra Details"}),T&&Object(y.jsxs)(o.a.Fragment,{children:[Object(y.jsx)(b.a,{type:"text",label:"Mother Tag",placeholder:"Enter Tag of Mother...",name:"motherTag",id:"motherTag",validators:[Object(v.e)(4),Object(v.d)(20)],errorText:"Please Input A Valid Tag",notRequired:!0,onInput:w,initialValid:!0}),Object(y.jsx)(b.a,{type:"text",label:"Birth Date",placeholder:"Enter Date (".concat(Object(g.e)(),")"),name:"birthDate",id:"birthDate",errorText:"Please Input A Valid Birth Date",validators:[Object(v.a)()],notRequired:!0,onInput:w,initialValid:!0}),Object(y.jsx)(b.a,{type:"text",label:"Fertilization Date",placeholder:"Enter Date...",name:"fertDate",id:"fertDate",validators:[Object(v.a)()],notRequired:!0,errorText:"Please Input A Valid Fertilization Date (Leave Empty For None)",onInput:w,initialValid:!0}),Object(y.jsx)(b.a,{type:"text",label:"Antibiotic Date",placeholder:"Enter Date ...",name:"antibioticDate",id:"antibioticDate",validators:[Object(v.a)()],notRequired:!0,errorText:"Please Input A Valid Date (Leave Empty For None)",onInput:w,initialValid:!0}),Object(y.jsx)(b.a,{type:"number",label:"Liters Of Milk",placeholder:"Enter Liters (0)",name:"milk",id:"milk",notRequired:!0,validators:[Object(v.c)(-1)],errorText:"Please Input A Valid Number",onInput:w,min:"0",initialValid:!0}),Object(y.jsx)(m.a,{id:"image",onInput:w})]}),Object(y.jsx)(j.a,{type:"submit",block:!0,disabled:!V.isFormValid,color:"primary",extraClasses:"my-1",children:"Add Cow"}),Object(y.jsx)("img",{src:p.a,className:"cow-img",alt:"Cow Eating Grass"})]})})]})}}}]);
//# sourceMappingURL=7.6c66ca22.chunk.js.map