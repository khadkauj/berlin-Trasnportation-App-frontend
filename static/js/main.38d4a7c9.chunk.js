(this["webpackJsonpberlin-traffic-app"]=this["webpackJsonpberlin-traffic-app"]||[]).push([[0],{264:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},432:function(e,t){},434:function(e,t){},444:function(e,t){},446:function(e,t){},456:function(e,t){},458:function(e,t){},483:function(e,t){},485:function(e,t){},486:function(e,t){},491:function(e,t){},493:function(e,t){},512:function(e,t){},524:function(e,t){},527:function(e,t){},544:function(e,t){},625:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(59),r=n.n(i),s=(n(287),n(288),n(48)),o=n(159),l=n.n(o),j=n(160),d=n.n(j),u=n(643),h=n(647),b=n(646),O=n(642),x=n(644),f=n(645),g=n(626),p=n(61),v=n(40),m=n.n(v),w=n(41),S=n.n(w),y=(n(264),n(270)),N=n.n(y),A=n(269),k=n.n(A),B=n(2);function C(e){var t=e.data,n=Object(c.useState)(),a=Object(s.a)(n,2),i=(a[0],a[1]);t.forEach((function(e){if(null===e.id){var n=t.indexOf(e);t.splice(n,1)}}));return Object(B.jsx)("div",{className:"main__div",children:Object(B.jsx)(g.a,{elevation:3,className:"paper",children:Object(B.jsx)(O.a,{children:Object(B.jsxs)(u.a,{className:"","aria-label":"simple table",children:[Object(B.jsx)(x.a,{children:Object(B.jsxs)(f.a,{children:[Object(B.jsx)(b.a,{children:"Stops"}),Object(B.jsx)(b.a,{align:"right",children:"Bus"}),Object(B.jsx)(b.a,{align:"right",children:"Tram"}),Object(B.jsx)(b.a,{align:"right",children:"Ferry"}),Object(B.jsx)(b.a,{align:"right",children:"Suburban"}),Object(B.jsx)(b.a,{align:"right",children:"Express"}),Object(B.jsx)(b.a,{align:"right",children:"Regional"}),Object(B.jsx)(b.a,{align:"right",children:"See More"}),Object(B.jsx)(b.a,{align:"right",children:"Mark Favourite"})]})}),Object(B.jsx)(h.a,{children:t.map((function(e){var t,n,c,a,r,s;return Object(B.jsxs)(f.a,{children:[Object(B.jsx)(b.a,{component:"th",scope:"row",children:e.name}),Object(B.jsx)(b.a,{align:"right",children:!0===(null===(t=e.products)||void 0===t?void 0:t.bus)?Object(B.jsx)(m.a,{}):Object(B.jsx)(S.a,{})}),Object(B.jsx)(b.a,{align:"right",children:!0===(null===(n=e.products)||void 0===n?void 0:n.tram)?Object(B.jsx)(m.a,{}):Object(B.jsx)(S.a,{})}),Object(B.jsx)(b.a,{align:"right",children:!0===(null===(c=e.products)||void 0===c?void 0:c.ferry)?Object(B.jsx)(m.a,{}):Object(B.jsx)(S.a,{})}),Object(B.jsx)(b.a,{align:"right",children:!0===(null===(a=e.products)||void 0===a?void 0:a.suburban)?Object(B.jsx)(m.a,{}):Object(B.jsx)(S.a,{})}),Object(B.jsxs)(b.a,{align:"right",children:[" ",!0===(null===(r=e.products)||void 0===r?void 0:r.express)?Object(B.jsx)(m.a,{}):Object(B.jsx)(S.a,{})]}),Object(B.jsx)(b.a,{align:"right",children:!0===(null===(s=e.products)||void 0===s?void 0:s.regional)?Object(B.jsx)(m.a,{}):Object(B.jsx)(S.a,{})}),Object(B.jsx)(b.a,{align:"right",children:Object(B.jsx)(p.b,{to:e.id,children:"See more"})}),Object(B.jsx)(b.a,{align:"right",children:"fav"===localStorage.getItem(e.id)?Object(B.jsx)(k.a,{onClick:function(t){var n;n=e.id,localStorage.removeItem(n),i({})},children:"SetFav"}):Object(B.jsx)(N.a,{onClick:function(t){var n;n=e.id,localStorage.setItem(n,"fav"),i({})},children:"RemFav"})})]},e.name)}))})]})})})})}var E=n(648),F=n(650),P=n(651),I=n(652),W=n(271),_=n.n(W),M=function(){var e=Object(c.useState)("Airport"),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),r=Object(s.a)(i,2),o=r[0],j=r[1];return console.log("*",n),Object(c.useEffect)((function(){var e=l()(d.a,"my-awesome-program");""!==n&&e.locations(n,{results:5}).then((function(e){console.log(e),j(e)})).catch(console.error)}),[n]),Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{children:"Berlin Transportation APP"}),Object(B.jsxs)(E.a,{className:"",children:[Object(B.jsx)(F.a,{htmlFor:"input-with-icon-adornment",children:"Enter your stop."}),Object(B.jsx)(P.a,{value:n,onChange:function(e){a(e.target.value)},id:"input-with-icon-adornment",startAdornment:Object(B.jsx)(I.a,{position:"start",children:Object(B.jsx)(_.a,{})})})]}),Object(B.jsx)(C,{data:o})]})},R=n(11),T=n(649);function D(e){var t=e.data;return Object(B.jsxs)("div",{className:"main__div",children:[Object(B.jsx)("h1",{children:"Possible stops"}),Object(B.jsx)(g.a,{elevation:3,className:"paper",children:Object(B.jsx)(O.a,{component:T.a,children:Object(B.jsxs)(u.a,{className:"","aria-label":"simple table",children:[Object(B.jsx)(x.a,{children:Object(B.jsxs)(f.a,{children:[Object(B.jsx)(b.a,{align:"right",children:"Direction"}),Object(B.jsx)(b.a,{align:"right",children:"Platform No."}),Object(B.jsx)(b.a,{align:"right",children:"Scheduled Date"})]})}),Object(B.jsx)(h.a,{children:t.map((function(e){return Object(B.jsxs)(f.a,{children:[Object(B.jsx)(b.a,{align:"right",children:null!=e.direction?e.direction:"NA"}),Object(B.jsx)(b.a,{align:"right",children:null!=e.platform?e.platform:"NA"}),Object(B.jsx)(b.a,{align:"right",children:null!=e.plannedWhen?e.plannedWhen:"NA"})]},e.name)}))})]})})})]})}var J=n(159),$=n(160),q=function(){var e=Object(R.f)().stop;console.log("id",e);var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){J($,"my-awesome-program").departures(e,{duration:3}).then((function(e){console.log(e),i(e)})).catch(console.error)}),[e]),Object(B.jsx)("div",{children:Object(B.jsx)(D,{data:a})})};var z=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(p.a,{children:Object(B.jsx)("div",{children:Object(B.jsxs)(R.c,{children:[Object(B.jsx)(R.a,{path:"/:stop",children:Object(B.jsx)(q,{})}),Object(B.jsx)(R.a,{path:"/",children:Object(B.jsx)(M,{})})]})})})})},G=n(78),H=n(60),K=n.n(H),L=n(272);function Q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var U=Object(G.b)("counter/fetchCount",function(){var e=Object(L.a)(K.a.mark((function e(t){var n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V=Object(G.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(U.pending,(function(e){e.status="loading"})).addCase(U.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),X=V.actions,Y=(X.increment,X.decrement,X.incrementByAmount,V.reducer),Z=Object(G.a)({reducer:{counter:Y}}),ee=n(273);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(ee.a,{store:Z,children:Object(B.jsx)(z,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[625,1,2]]]);
//# sourceMappingURL=main.38d4a7c9.chunk.js.map