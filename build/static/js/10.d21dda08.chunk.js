(this.webpackJsonpcalftime=this.webpackJsonpcalftime||[]).push([[10],{32:function(e,c,t){"use strict";t.d(c,"a",(function(){return s}));t(0);var n=t(15),a=t(1);function s(e){return e.href?Object(a.jsx)("a",{href:e.href,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses),style:e.style,children:e.children}):e.to?Object(a.jsx)(n.b,{to:e.to,exact:e.exact,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses),style:e.style,children:e.children}):Object(a.jsx)("button",{type:e.type,onClick:e.onClick,disabled:e.disabled,className:"btn ".concat(e.color&&"btn-".concat(e.color)," ").concat(e.danger&&"btn-danger"," ").concat(e.inverse&&"btn-inverse"," ").concat(e.block&&"btn-block"," ").concat(e.extraClasses," ").concat(e.disabled&&"btn-disabled"),style:e.style,children:e.children})}},35:function(e,c,t){"use strict";t.d(c,"a",(function(){return b}));var n=t(0),a=t.n(n),s=t(15),r=t(32),i=t(14),o=t(1);function l(){var e=Object(n.useContext)(i.a);return Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{className:"nav-links",children:[e.isLoggedIn&&Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{to:"/cows",children:"COWS"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{onClick:e.logout,children:"LOGOUT"})})]}),!e.isLoggedIn&&Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{to:"/login",children:"LOGIN"})}),!e.isLoggedIn&&Object(o.jsx)("li",{children:Object(o.jsx)(r.a,{to:"/signup",children:"SIGN UP"})})]})})}var d=t.p+"static/media/logo.6237e665.png";function b(e){var c=Object(n.useContext)(i.a);return Object(o.jsx)("nav",{className:"main-navbar py-1 ".concat(e.fixed&&"navbar-fixed"),children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)(s.b,{to:"/",className:"nav-logo",children:[Object(o.jsx)("img",{className:"logo",src:d,alt:"Logo"}),Object(o.jsx)("h1",{className:"M-heading",children:"Calf Time"})]}),Object(o.jsx)(l,{}),Object(o.jsx)("i",{className:"fas fa-lightbulb dark-mode-icon ".concat(c.isDarkMode&&"is-dark-mode"),onClick:function(){c.isDarkMode?document.querySelector("html").classList.remove("dark-mode"):document.querySelector("html").classList.add("dark-mode"),c.setIsDarkMode((function(e){return!e}))}})]})})}},41:function(e,c,t){"use strict";c.a=t.p+"static/media/cowGrass.2d09bc11.png"},57:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return b}));var n=t(0),a=t(35),s=t(32),r=t(14),i=t(1);function o(){var e=Object(n.useContext)(r.a);return Object(i.jsxs)("div",{className:"landing-image-container",children:[Object(i.jsx)("div",{className:"landing-image"}),Object(i.jsxs)("div",{className:"landing-text",children:[Object(i.jsxs)("h2",{className:"XL-heading",children:["Farmers ",Object(i.jsx)("span",{className:"text-primary",children:"Galore"})]}),Object(i.jsx)("p",{className:"lead bold mb-0-5",children:"Keep your farm on track!"}),!e.isLoggedIn&&Object(i.jsx)(s.a,{to:"/signup",color:"primary",extraClasses:"my-1",children:"Get Started!"})]})]})}var l=t(41);function d(){return Object(i.jsxs)("footer",{className:"landing-footer",children:[Object(i.jsx)("div",{className:"cow-img-container",children:Object(i.jsx)("img",{src:l.a,className:"cow-img",alt:"Cow Eating Grass"})}),Object(i.jsx)("hr",{className:"primary-line"}),Object(i.jsx)("div",{className:"white-bar"})]})}function b(){return Object(i.jsxs)("div",{className:"landing-page",children:[Object(i.jsx)(a.a,{fixed:!0}),Object(i.jsx)(o,{}),Object(i.jsx)(d,{})]})}}}]);
//# sourceMappingURL=10.d21dda08.chunk.js.map