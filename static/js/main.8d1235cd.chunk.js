(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(15),r=n.n(o),i=n(10),s=n(13),d=(n(20),n(30)),j=n(28),l=n(29),u=(n(21),n(5));function b(e){var t=e.todo,n=e.index,c=e.markTodo,a=e.removeTodo;return Object(u.jsxs)("div",{className:"todo",children:[Object(u.jsx)("span",{style:{textDecoration:t.isDone?"line-through":""},children:t.text}),Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{variant:"outline-success",onClick:function(){return c(n)},children:"\u2713"})," ",Object(u.jsx)(d.a,{variant:"outline-danger",onClick:function(){return a(n)},children:"\u2715"})]})]})}function x(e){var t=e.addTodo,n=a.a.useState(""),c=Object(s.a)(n,2),o=c[0],r=c[1];return Object(u.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),o&&(t(o),r(""))},children:[Object(u.jsxs)(j.a.Group,{children:[Object(u.jsx)(j.a.Label,{children:Object(u.jsx)("b",{children:"Add Todo"})}),Object(u.jsx)(j.a.Control,{type:"text",className:"input",value:o,onChange:function(e){return r(e.target.value)},placeholder:"Add new todo"})]}),Object(u.jsx)(d.a,{variant:"primary mb-3",type:"submit",children:"Submit"})]})}var h=function(){var e=a.a.useState([{text:"This is a sampe todo",isDone:!1}]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=function(e){var t=Object(i.a)(n);t[e].isDone=!0,c(t)},r=function(e){var t=Object(i.a)(n);t.splice(e,1),c(t)};return Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"text-center mb-4",children:"Todo List"}),Object(u.jsx)(x,{addTodo:function(e){var t=[].concat(Object(i.a)(n),[{text:e}]);c(t)}}),Object(u.jsx)("div",{children:n.map((function(e,t){return Object(u.jsx)(l.a,{children:Object(u.jsx)(l.a.Body,{children:Object(u.jsx)(b,{index:t,todo:e,markTodo:o,removeTodo:r},t)})})}))})]})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8d1235cd.chunk.js.map