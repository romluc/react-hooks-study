(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{28:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);c(28);var n=c(21),s=c.n(n),r=c(2),a=c.n(r),j=c(3),i=c(6),u=(c(33),c(34),c(1)),l=function(){return Object(u.jsx)("aside",{className:"Menu",children:Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{exact:!0,to:"/react-hooks-study",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/useState",children:"useState()"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/useEffect",children:"useEffect()"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/useRef",children:"useRef()"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/useMemo",children:"useMemo()"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/useCallback",children:"useCallback()"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/useContext",children:"useContext()"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/useReducer",children:"useReducer()"})}),Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/useCustom",children:"useMyHook()"})})]})})})},b=(c(41),c(10)),o=c(25),O=c(24),x=(c(42),function(e){var t=e.error,c=e.title,n=e.subtitle;return Object(u.jsxs)("div",{className:"PageTitle ".concat(t?"error":""),children:[Object(u.jsx)("h1",{children:c}),Object(u.jsx)("h2",{children:n})]})}),d=function(){return Object(u.jsxs)("div",{className:"Home",children:[Object(u.jsx)(x,{title:"React Hooks",subtitle:"Starting from React 16.8."}),Object(u.jsxs)("div",{className:"Home-content",children:[Object(u.jsx)(O.a,{size:120}),Object(u.jsx)(o.a,{size:120})]})]})},h=function(){return Object(u.jsx)("div",{className:"Home",children:Object(u.jsx)(x,{error:!0,title:"404",subtitle:"Oops... Page Not Found!"})})},m=(c(43),function(e){var t=e.title;return Object(u.jsx)("div",{className:"SectionTitle",children:Object(u.jsx)("h3",{children:t})})}),f=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(""),a=Object(j.a)(s,2),i=a[0],l=a[1];return Object(u.jsxs)("div",{className:"UseState",children:[Object(u.jsx)(x,{title:"useState hook",subtitle:"Stateful function-based components!"}),Object(u.jsx)(m,{title:"Exercise #1"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("span",{className:"text",children:c})}),Object(u.jsxs)("div",{className:"center mb-4",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return n((function(e){return e-1}))},children:"-1"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return n(0)},children:"Reset"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return n((function(e){return e+1}))},children:"+1"})]}),Object(u.jsx)(m,{title:"Exercise #2 - Controlled component"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("span",{className:"text",children:c})}),Object(u.jsx)("div",{className:"center mb-4",children:Object(u.jsx)("input",{type:"text",className:"input",value:i,onChange:function(e){return l(e.target.value)},placeholder:"Enter your text..."})})]})};function v(e){return 0===e?1:e<0?"Invalid number":e*v(e-1)}var p=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(1),a=Object(j.a)(s,2),i=a[0],l=a[1];Object(r.useEffect)((function(){l(v(Number(c)))}),[c]);var b=Object(r.useState)("Odd"),o=Object(j.a)(b,2),O=o[0],d=o[1];return Object(r.useEffect)((function(){d(c%2===0?"Even":"Odd")}),[c]),Object(u.jsxs)("div",{className:"UseEffect",children:[Object(u.jsx)(x,{title:"useEffect hook",subtitle:"Execute collateral effects in functional components!"}),Object(u.jsx)(m,{title:"Exercise #1"}),Object(u.jsxs)("div",{className:"center col",children:[Object(u.jsx)("span",{className:"text",children:"Factorial: "}),Object(u.jsx)("span",{className:"text + ".concat(i>=0?"green":"red"),children:i}),Object(u.jsx)("input",{type:"number",className:"input narrow",value:c,onChange:function(e){return n(e.target.value)}})]}),Object(u.jsx)(m,{title:"Exercise #2"}),Object(u.jsxs)("div",{className:"center col",children:[Object(u.jsx)("span",{className:"text",children:"Status"}),Object(u.jsx)("span",{className:"text green",children:O})]})]})},N=c(27),C=function(e,t){return Object(N.a)(e).map((function(e,c){var n;return"".concat(e).concat(null!==(n=t[c])&&void 0!==n?n:"")})).join("")},k=function(){var e=a.a.useState(""),t=Object(j.a)(e,2),c=t[0],n=t[1],s=a.a.useState(""),i=Object(j.a)(s,2),l=i[0],b=i[1],o=Object(r.useRef)(0),O=Object(r.useRef)(null),d=Object(r.useRef)(null);return Object(r.useEffect)((function(){o.current++,d.current.focus()}),[c]),Object(r.useEffect)((function(){o.current++,O.current.focus()}),[l]),Object(u.jsxs)("div",{className:"UseRef",children:[Object(u.jsx)(x,{title:"useRef hook",subtitle:"Return a mutable object with the .current property!"}),Object(u.jsx)(m,{title:"Exercise #1"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"text",children:"Times rendered: "}),Object(u.jsx)("span",{className:"text",children:"["}),Object(u.jsx)("span",{className:"text green",children:o.current}),Object(u.jsx)("span",{className:"text",children:"]"}),Object(u.jsx)("input",{type:"text",ref:O,className:"input center",value:c,onChange:function(e){return n(e.target.value)}})]})}),Object(u.jsx)(m,{title:"Exercise #2"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",ref:d,className:"input center",value:l,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("span",{className:"text",children:"Merged values:"}),Object(u.jsxs)("span",{className:"text green",children:[" ",C(c,l)]})]})})]})};function g(e){var t=e.inc,c=e.setCount;return console.log("Rendering..."),Object(u.jsxs)("div",{className:"center",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return t(5)},children:"+5"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return t(10)},children:"+10"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return t(20)},children:"+20"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return c(0)},children:"Reset"})]})}var y=a.a.memo(g),S=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(r.useCallback)((function(e){return n((function(t){return t+e}))}),[n]);return Object(u.jsxs)("div",{className:"UseCallback",children:[Object(u.jsx)(x,{title:"useCallback hook",subtitle:"Return a memoized function!"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("span",{className:"text",children:c})}),Object(u.jsx)(y,{inc:s,setCount:n})]})};var E=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)(0),a=Object(j.a)(s,2),i=a[0],l=a[1],b=Object(r.useState)(0),o=Object(j.a)(b,2),O=o[0],d=o[1],h=Object(r.useMemo)((function(){0===c&&0===i||function(e,t){for(var c=Date.now()+1e3;Date.now()<c;);}()}),[c,i]);return Object(u.jsxs)("div",{className:"UseMemo",children:[Object(u.jsx)(x,{title:"useMemo hook",subtitle:"Return a memoized value!"}),Object(u.jsx)("input",{type:"number",className:"input narrow",value:c,onChange:function(e){return n(Number(e.target.value))}}),Object(u.jsx)("input",{type:"number",className:"input narrow",value:i,onChange:function(e){return l(Number(e.target.value))}}),Object(u.jsx)("input",{type:"number",className:"input narrow",value:O,onChange:function(e){return d(Number(e.target.value))}}),Object(u.jsx)("span",{className:"text",children:h})]})},R=c(4),w={title:"Data",subtitle:"From context API",number:123},I=a.a.createContext(null),H=c(15),M={number:1234,text:"Context API + Hooks"},P=a.a.createContext(M);function T(e){var t=e.children,c=a.a.useState(M),n=Object(j.a)(c,2),s=n[0],r=n[1];function i(e,t){r((function(c){return Object(R.a)(Object(R.a)({},c),{},Object(H.a)({},e,t))}))}return Object(u.jsx)(P.Provider,{value:{number:s.number,text:s.text,setNumber:function(e){return i("number",e)},setText:function(e){return i("text",e)}},children:t})}var U=function(){var e=Object(r.useContext)(I),t=e.state,c=e.setState,n=Object(r.useContext)(P),s=n.number,a=n.setNumber,j=n.text,i=n.setText;return Object(u.jsxs)("div",{className:"UseContext",children:[Object(u.jsx)(x,{title:"useContext hook",subtitle:"Receives a context object and return its current value!"}),Object(u.jsx)(m,{title:"Exercise #1 - Context API"}),Object(u.jsxs)("div",{className:"center col",children:[Object(u.jsx)("span",{className:"text red",children:t.title}),Object(u.jsx)("h1",{className:"text green",children:t.subtitle}),Object(u.jsx)("span",{className:"text mb-4",children:t.number}),Object(u.jsxs)("div",{className:"center mb-4",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return e=5,c((function(t){return Object(R.a)(Object(R.a)({},t),{},{number:t.number+e})}));var e},children:"+5"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return e=5,c((function(t){return Object(R.a)(Object(R.a)({},t),{},{number:t.number-e})}));var e},children:"-5"})]})]}),Object(u.jsx)(m,{title:"Exercise #2 - Context API + Hooks"}),Object(u.jsxs)("div",{className:"center col",children:[Object(u.jsx)("span",{className:"text red",children:s}),Object(u.jsx)("span",{className:"text mb-4",children:j}),Object(u.jsxs)("div",{className:"center",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return a(s+1)},children:"+1"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return a(s-1)},children:"-1"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return i("New text")},children:"Change text using context"})]})]})]})};function A(e,t){var c=function(e,t){switch(t.type){case"login":return Object(R.a)(Object(R.a)({},e),{},{user:{name:t.payload}});case"logout":return Object(R.a)(Object(R.a)({},e),{},{user:null});case"addNumber":return Object(R.a)(Object(R.a)({},e),{},{number:e.number+t.payload});case"divNumberBy25":return Object(R.a)(Object(R.a)({},e),{},{number:e.number/25});case"numberTimes7":return Object(R.a)(Object(R.a)({},e),{},{number:7*e.number});case"numberInt":return Object(R.a)(Object(R.a)({},e),{},{number:parseInt(e.number)});default:return e}}(e,t);return function(e,t){switch(t.type){case"login":return Object(R.a)(Object(R.a)({},e),{},{user:{name:t.payload}});case"logout":return Object(R.a)(Object(R.a)({},e),{},{user:null});default:return e}}(c,t)}var F={user:null,number:1234};var z=function(){var e=Object(r.useReducer)(A,F),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(u.jsxs)("div",{className:"UseReducer",children:[Object(u.jsx)(x,{title:"UseReducer hook",subtitle:"Another way to manage state, especially complex ones!"}),Object(u.jsx)(m,{title:"Exercise #1"}),Object(u.jsxs)("div",{className:"center col",children:[c.user?Object(u.jsxs)("span",{className:"text green",children:[c.user.name," "]}):Object(u.jsx)("span",{className:"text red",children:"No user"}),Object(u.jsxs)("div",{className:"mb-4",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return function(e,t){e({type:"login",payload:t})}(n,"John Doe")},disabled:c.user,children:"Login"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return function(e){e({type:"logout",payload:null})}(n)},disabled:!c.user,children:"Logout"})]}),Object(u.jsxs)("span",{className:"text",children:[c.number," "]}),Object(u.jsxs)("div",{className:"center",children:[Object(u.jsx)("button",{className:"btn",onClick:function(){return function(e,t){e({type:"addNumber",payload:t})}(n,1)},children:"+1"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return function(e){e({type:"divNumberBy25"})}(n)},children:"/ 25"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return function(e){e({type:"numberTimes7"})}(n)},children:"* 7"}),Object(u.jsx)("button",{className:"btn",onClick:function(){return function(e){e({type:"numberInt"})}(n)},children:"to Int"})]})]})]})},D=c(19),L=c.n(D),B=c(26);c(45);function J(e){var t=e.title,c=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("span",{className:"title",children:[" ",t," "]}),Object(u.jsx)("ul",{className:"List",children:c})]})}var G=function(){var e,t=function(){var e=Object(r.useState)(100),t=Object(j.a)(e,2),c=t[0],n=t[1];return[c,function(){n(c+1)},function(){n(c-1)}]}(),c=Object(j.a)(t,3),n=c[0],s=c[1],a=c[2],i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=Object(r.useState)(null),n=Object(j.a)(c,2),s=n[0],a=n[1],i=Object(r.useState)(!0),u=Object(j.a)(i,2),l=u[0],b=u[1],o=Object(r.useState)(null),O=Object(j.a)(o,2),x=O[0],d=O[1];return Object(r.useEffect)((function(){var c=function(){var c=Object(B.a)(L.a.mark((function c(){var n,s;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,fetch(e,{method:t,headers:{"Content-Type":"application/json"}});case 3:return n=c.sent,c.next=6,n.json();case 6:s=c.sent,a(s),b(!1),c.next=15;break;case 11:c.prev=11,c.t0=c.catch(0),d(c.t0),b(!1);case 15:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(){return c.apply(this,arguments)}}();c()}),[e,t]),[s,l,x]}("https://canada-holidays.ca/api/v1/provinces"),l=Object(j.a)(i,2),b=l[0],o=l[1];return Object(u.jsxs)("div",{className:"UseCounter",children:[Object(u.jsx)(x,{title:"Custom Hook",subtitle:"Custom hook example!"}),Object(u.jsx)(m,{title:"Exercise #1 - useCounter()"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("span",{className:"text",children:n})}),Object(u.jsxs)("div",{className:"center mb-4",children:[Object(u.jsx)("button",{className:"btn",onClick:s,children:"+1"}),Object(u.jsx)("button",{className:"btn",onClick:a,children:"-1"})]}),Object(u.jsx)(m,{title:"Exercise #2 - useFetch()"}),Object(u.jsx)("div",{className:"center",children:Object(u.jsx)("span",{className:"text",children:o?"Loading...":Object(u.jsx)(J,{title:"Provinces and territories of Canada",children:(e=b,e.provinces.map((function(e){var t=e.id,c=e.nameEn;return Object(u.jsx)("li",{children:"".concat(t," - ").concat(c)},t)})))})})})]})},q=function(){return Object(u.jsx)("main",{className:"Content",children:Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",children:Object(u.jsx)(d,{})}),Object(u.jsx)(b.a,{path:"/useState",children:Object(u.jsx)(f,{})}),Object(u.jsx)(b.a,{path:"/useEffect",children:Object(u.jsx)(p,{})}),Object(u.jsx)(b.a,{path:"/useRef",children:Object(u.jsx)(k,{})}),Object(u.jsx)(b.a,{path:"/useCallback",children:Object(u.jsx)(S,{})}),Object(u.jsx)(b.a,{path:"/useMemo",children:Object(u.jsx)(E,{})}),Object(u.jsx)(b.a,{path:"/useContext",children:Object(u.jsx)(U,{})}),Object(u.jsx)(b.a,{path:"/useReducer",children:Object(u.jsx)(z,{})}),Object(u.jsx)(b.a,{path:"/useCustom",children:Object(u.jsx)(G,{})}),Object(u.jsx)(b.a,{path:"*",children:Object(u.jsx)(h,{})})]})})},K=function(){var e=Object(r.useState)(w),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(u.jsx)(T,{children:Object(u.jsx)(I.Provider,{value:{state:c,setState:n},children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(l,{}),Object(u.jsx)(q,{})]})})})})};s.a.render(Object(u.jsx)(K,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.727c1be0.chunk.js.map