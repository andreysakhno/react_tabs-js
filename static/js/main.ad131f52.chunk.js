(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),r=function(t,e){return t.find((function(t){return t.id===e}))},o=c(0),l=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected,a=r(e,c)||e[0];return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){var e=t.id,i=t.title;return Object(o.jsx)("li",{className:d()({"is-active":e===a.id}),"data-cy":"Tab",children:Object(o.jsx)("a",{onClick:function(){return function(t){t.id!==c&&n(t)}(t)},href:"#".concat(e),"data-cy":"TabLink",children:i})},e)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(s.useState)("tab-1"),e=Object(i.a)(t,2),c=e[0],n=e[1],a=r(j,c).title;return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a)}),Object(o.jsx)(l,{tabs:j,selectedTabId:c,onTabSelected:function(t){return n(t.id)}})]})};a.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ad131f52.chunk.js.map