(this["webpackJsonpmovie-series-app"]=this["webpackJsonpmovie-series-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},133:function(e,t){},152:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),s=(n(100),n(44)),i=n(11),u=(n(101),n(102),n(4)),l=function(){return Object(u.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:"\ud83c\udfac \u7f51\u7ad9 \ud83c\udfa5"})},j=n(13),d=n(189),b=n(192),p=n(194),f=n(56),h=n.n(f),v=n(195),O=Object(d.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function g(){var e=O(),t=c.a.useState(0),n=Object(j.a)(t,2),r=n[0],o=n[1],s=Object(i.f)();return Object(a.useEffect)((function(){0===r?s.push("/"):1===r&&s.push("/search")}),[r,s]),Object(u.jsxs)(b.a,{value:r,onChange:function(e,t){o(t)},showLabels:!0,className:e.root,children:[Object(u.jsx)(p.a,{style:{color:"white"},label:"\u89c6\u9891",icon:Object(u.jsx)(v.a,{})}),Object(u.jsx)(p.a,{style:{color:"white"},label:"\u641c\u4e00\u641c",icon:Object(u.jsx)(h.a,{})})]})}var x=n(35),m=n(26),w=n.n(m),k=n(30),y=n.n(k),S=n(201),N=n(89),C=n(196),_=Object(N.a)({palette:{type:"dark"}});function L(e){var t=e.setPage,n=e.numOfPages,a=void 0===n?10:n;return Object(u.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(u.jsx)(C.a,{theme:_,children:Object(u.jsx)(S.a,{onChange:function(e){return n=e.target.textContent,t(n),void window.scroll(0,0);var n},count:a,color:"primary"})})})}var P=n(197),W=(n(130),function(e){e.id;var t=e.poster,n=e.title,a=e.date,c=e.media_type,r=e.vote_average,o=(e.duration,e.url),s=e.backurl,l=Object(i.f)();return Object(u.jsxs)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){l.push({pathname:"/play",state:{url:o,backurl:s}})},children:[Object(u.jsx)(P.a,{badgeContent:r,color:r>6?"primary":"secondary"}),Object(u.jsx)("img",{className:"poster",src:t,alt:n}),Object(u.jsx)("b",{className:"title",children:n}),Object(u.jsxs)("span",{className:"subTitle",children:["video"===c?"Video":"Movie",Object(u.jsx)("span",{className:"subTitle",children:a})]})]})}),E=function(){var e=Object(a.useState)(1),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),o=Object(j.a)(r,2),s=o[0],i=o[1],l=Object(a.useState)(),d=Object(j.a)(l,2),b=d[0],p=d[1],f=Object(a.useState)(""),h=Object(j.a)(f,2),v=h[0],O=h[1],g=Object(a.useState)(""),m=Object(j.a)(g,2),k=(m[0],m[1]),S=function(){var e=Object(x.a)(w.a.mark((function e(){var t,a,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=String(n-1).padStart(3,"0"),""===v){e.next=17;break}return e.prev=2,e.next=5,y.a.get("".concat(v,"page-").concat(t,".json"));case 5:a=e.sent,c=a.data,i(c),n+1>b&&p(n+1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),i([]),console.log(e.t0);case 15:e.next=19;break;case 17:return e.next=19,y.a.get("https://superbros3.github.io/config.json").then(function(){var e=Object(x.a)(w.a.mark((function e(a){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(a.data.cdn),k(a.data.google_statistics_id),e.prev=2,e.next=5,y.a.get("".concat(a.data.cdn,"page-").concat(t,".json"));case 5:c=e.sent,r=c.data,i(r),n+1>b&&p(n+1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),i([]),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}());case 19:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.scroll(0,0),S()}),[n]),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"pageTitle",children:"\u53d1\u73b0\u89c6\u9891"}),Object(u.jsx)("div",{className:"trending",children:s&&s.map((function(e){return Object(u.jsx)(W,{id:e.slug,poster:e.cover,title:e.title,date:new Date(e.update_at).toLocaleDateString(),media_type:"video",vote_average:"9.0",duration:e.duration,url:e.url,backurl:"/"},e.slug)}))}),b>1&&Object(u.jsx)(L,{setPage:c,numOfPages:b})]})},T=n(85),D=n(200),A=n(198),B=(n(131),n(47)),U=n(86),z=n.n(U),I=n(87),J=n.n(I),H=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(1),o=Object(j.a)(r,2),s=o[0],i=o[1],l=Object(a.useState)(),d=Object(j.a)(l,2),b=d[0],p=d[1],f=Object(a.useState)(1),v=Object(j.a)(f,2),O=v[0],g=(v[1],Object(a.useState)("")),m=Object(j.a)(g,2),k=m[0],S=m[1],_=Object(a.useState)(),P=Object(j.a)(_,2),E=P[0],U=P[1],I=Object(N.a)({palette:{type:"dark",primary:{main:"#fff"}}}),H=function(){var e=Object(x.a)(w.a.mark((function e(){var t,a,c,r,o,s,i,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:t=E.search(n).map((function(e){return e.item})),a=[],c=Object(T.a)(t),e.prev=5,c.s();case 7:if((r=c.n()).done){e.next=24;break}return o=r.value,s=z()(J.a.encode(o)).toString(),console.log(s),e.prev=11,e.next=14,y.a.get("".concat(k,"output/").concat(s));case 14:i=e.sent,u=i.data,a.push(u),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),console.log(e.t0);case 22:e.next=7;break;case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(5),c.e(e.t1);case 29:return e.prev=29,c.f(),e.finish(29);case 32:p(a);case 33:case"end":return e.stop()}}),e,null,[[5,26,29,32],[11,19]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(x.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=2;break}return e.abrupt("return");case 2:if(""===k){e.next=17;break}return e.prev=3,e.next=6,y.a.get("".concat(k,"search.json"));case 6:t=e.sent,n=t.data,U(new B.a(n)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),U(new B.a([])),console.log(e.t0);case 15:e.next=19;break;case 17:return e.next=19,y.a.get("https://superbros3.github.io/config.json").then(function(){var e=Object(x.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(t.data.cdn),e.prev=1,e.next=4,y.a.get("".concat(t.data.cdn,"search.json"));case 4:n=e.sent,a=n.data,U(new B.a(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),U(new B.a([])),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}());case 19:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.scroll(0,0),M(),H()}),[s]),Object(u.jsxs)("div",{children:[Object(u.jsx)(C.a,{theme:I,children:Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)(D.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)(A.a,{onClick:H,variant:"contained",style:{marginLeft:10},children:Object(u.jsx)(h.a,{fontSize:"large"})})]})}),Object(u.jsx)("div",{className:"trending",children:b&&b.map((function(e){return Object(u.jsx)(W,{id:e.slug,poster:e.cover,title:e.title,date:new Date(e.update_at).toLocaleDateString(),media_type:"video",vote_average:"9.0",duration:e.duration,url:e.url,backurl:"/search"},e.slug)}))}),O>1&&Object(u.jsx)(L,{setPage:i,numOfPages:O})]})},M=n(199),R=n(88),V=n.n(R),$=(n(152),function(){var e=Object(i.g)(),t=e.state.url,n=e.state.backurl;return Object(u.jsxs)("div",{className:"playerContent",children:[Object(u.jsx)("div",{className:"buttonLine",children:Object(u.jsx)(s.b,{to:{pathname:n},children:"<<\u8fd4\u56de"})}),Object(u.jsx)(V.a,{className:"react-player",url:t,width:"100%",height:"100%",controls:!0,config:{file:{forceHLS:!0}}})]})});var q=function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(M.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",component:E,exact:!0}),Object(u.jsx)(i.a,{path:"/search",component:H}),Object(u.jsx)(i.a,{path:"/play",component:$})]})})}),Object(u.jsx)(g,{})]})},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(153).config(),o.a.render(Object(u.jsx)(q,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):G(t,e)}))}}()}},[[156,1,2]]]);
//# sourceMappingURL=main.6c5f9ace.chunk.js.map