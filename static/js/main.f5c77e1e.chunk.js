(this.webpackJsonpemployeeapp=this.webpackJsonpemployeeapp||[]).push([[0],{45:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(18),i=n.n(s),a=(n(9),n(0));var o=function(){return Object(a.jsx)("nav",{children:Object(a.jsx)("h1",{children:"Directory of Employees"})})};var l=function(){return Object(a.jsx)("footer",{children:Object(a.jsxs)("ul",{className:"footer",children:[Object(a.jsx)("li",{children:"Copyright \xa9 Richie Roman | All Rights Reserved"}),Object(a.jsx)("li",{children:"Users by Random User Generator"})]})})},j=n(6),b=n.n(j),u=n(7),d=n(19),h=n(8),m=n(20),O=n.n(m);var p=function(e){return Object(a.jsxs)("table",{style:{width:"100%"},children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Image"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsxs)("th",{children:["Phone Number ",Object(a.jsx)("button",{className:"filter",onClick:e.sortNumber,children:Object(a.jsx)("i",{className:"fas fa-filter"})})]}),Object(a.jsxs)("th",{children:["Email ",Object(a.jsx)("button",{className:"filter",onClick:e.sortEmail,children:Object(a.jsx)("i",{className:"fas fa-filter"})})]}),Object(a.jsx)("th",{children:"Location"})]})}),Object(a.jsx)("tbody",{children:e.list.map((function(e){return Object(a.jsxs)("tr",{style:{borderTop:"2px solid gray"},children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.picture.thumbnail,alt:"profile"})}),Object(a.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsxs)("td",{children:[e.location.state,", ",e.location.country]})]})}))})]})};var x=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(h.a)(s,2),o=i[0],l=i[1];function j(){return(j=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://randomuser.me/api/?results=30");case 2:t=e.sent,r(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),Object(a.jsxs)("div",{className:"container",style:{marginTop:"50px",marginBottom:"50px"},children:[Object(a.jsxs)("div",{className:"input-group mb-3 float-center",children:[Object(a.jsx)("input",{value:o,onChange:function(e){l(e.target.value),console.log(e.target.value)},type:"text",className:"form-control",placeholder:"Search Employee by Name","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),function(){var e=n.filter((function(e){return o.indexOf(e.name.first)>-1||o.indexOf(e.name.last)>-1}));r(e)}()},className:"btn btn-outline-primary",type:"submit",id:"button-addon2",children:"Search"})]}),Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"auto",color:"black"},children:Object(a.jsx)("p",{children:"Hover over the right of Phone Number or Email to Sort Employees"})}),Object(a.jsx)(p,{list:n,sortEmail:function(){console.log("SORTING!!!!");var e=n.sort((function(e,t){return e.email<t.email?-1:e.email>t.email?1:0}));console.log("Sorted List: ",e),r(Object(u.a)(e))},sortNumber:function(){console.log("SORTING!!!!");var e=n.sort((function(e,t){return e.phone<t.phone?-1:e.phone>t.phone?1:0}));console.log("Sorted List: ",e),r(Object(u.a)(e))}})]})};var f=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(o,{}),Object(a.jsx)(x,{}),Object(a.jsx)(l,{})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.f5c77e1e.chunk.js.map