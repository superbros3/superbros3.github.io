(this["webpackJsonpmovie-series-app"]=this["webpackJsonpmovie-series-app"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},134:function(e,t){},153:function(e,t,n){},157:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),s=n.n(c),o=(n(100),n(44)),i=n(11),u=(n(101),n(102),n(4)),l=function(){return Object(u.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:"\ud83c\udfac \u7f51\u7ad9 \ud83c\udfa5"})},j=n(13),b=n(190),p=n(193),d=n(195),h=n(56),f=n.n(h),v=n(196),O=Object(b.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100}});function g(){var e=O(),t=r.a.useState(0),n=Object(j.a)(t,2),c=n[0],s=n[1],o=Object(i.f)();return Object(a.useEffect)((function(){0===c?o.push("/"):1===c&&o.push("/search")}),[c,o]),Object(u.jsxs)(p.a,{value:c,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(u.jsx)(d.a,{style:{color:"white"},label:"\u89c6\u9891",icon:Object(u.jsx)(v.a,{})}),Object(u.jsx)(d.a,{style:{color:"white"},label:"\u641c\u4e00\u641c",icon:Object(u.jsx)(f.a,{})})]})}var x=n(35),m=n(26),w=n.n(m),k=n(30),y=n.n(k),S=n(202),N=n(89),C=n(197),I=Object(N.a)({palette:{type:"dark"}});function L(e){var t=e.setPage,n=e.numOfPages,a=void 0===n?10:n;return Object(u.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(u.jsx)(C.a,{theme:I,children:Object(u.jsx)(S.a,{onChange:function(e){return n=e.target.textContent,t(n),void window.scroll(0,0);var n},count:a,color:"primary"})})})}var _=n(198),P=(n(130),function(e){e.id;var t=e.poster,n=e.title,a=e.date,r=(e.media_type,e.vote_average),c=e.duration,s=e.url,o=e.backurl,l=Object(i.f)();return c=function(e){var t=parseInt(e),n=0,a=0;t>60&&(n=parseInt(t/60),t=parseInt(t%60),n>60&&(a=parseInt(n/60),n=parseInt(n%60)));var r=""+parseInt(t);return r=10>t>0?"0"+parseInt(t):""+parseInt(t),r=10>n>0?"0"+parseInt(n)+":"+r:parseInt(n)+":"+r,a>0&&(r=parseInt(a)+":"+r),r}(c),Object(u.jsxs)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){l.push({pathname:"/play",state:{url:s,backurl:o}})},children:[Object(u.jsx)(_.a,{badgeContent:r,color:r>6?"primary":"secondary"}),Object(u.jsxs)("div",{className:"imageBox",children:[Object(u.jsx)("img",{className:"poster",src:t,alt:n}),Object(u.jsx)("span",{className:"leftLogo",children:"x10096"}),Object(u.jsx)("span",{className:"rightLogo",children:"HD"})]}),Object(u.jsx)("div",{className:"videoTimeBox",children:Object(u.jsx)("span",{className:"videoTime",children:c})}),Object(u.jsx)("b",{className:"title",children:n}),Object(u.jsx)("span",{className:"subTitle",children:Object(u.jsx)("span",{className:"subTitle",children:a})})]})}),W=(n(131),function(){var e=Object(a.useState)(1),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(j.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(),b=Object(j.a)(l,2),p=b[0],d=b[1],h=Object(a.useState)(""),f=Object(j.a)(h,2),v=f[0],O=f[1],g=Object(a.useState)(""),m=Object(j.a)(g,2),k=(m[0],m[1]),S=function(){var e=Object(x.a)(w.a.mark((function e(){var t,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=String(n-1).padStart(3,"0"),""===v){e.next=17;break}return e.prev=2,e.next=5,y.a.get("".concat("https://superbros3.github.io/","page-").concat(t,".json"));case 5:a=e.sent,r=a.data,i(r),n+1>p&&d(n+1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),i([]),console.log(e.t0);case 15:e.next=19;break;case 17:return e.next=19,y.a.get("https://superbros3.github.io/config.json").then(function(){var e=Object(x.a)(w.a.mark((function e(a){var r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(a.data.cdn),k(a.data.google_statistics_id),e.prev=2,e.next=5,y.a.get("".concat("https://superbros3.github.io/","page-").concat(t,".json"));case 5:r=e.sent,c=r.data,i(c),n+1>p&&d(n+1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),i([]),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}());case 19:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.scroll(0,0),S()}),[n]),Object(u.jsxs)("div",{className:"mContent",children:[Object(u.jsx)("div",{className:"trending",children:o&&o.map((function(e){return Object(u.jsx)(P,{id:e.slug,poster:e.cover,title:e.title,date:new Date(e.update_at).toLocaleDateString(),media_type:"video",vote_average:"9.0",duration:e.duration,url:e.url,backurl:"/"},e.slug)}))}),p>1&&Object(u.jsx)(L,{setPage:r,numOfPages:p})]})}),T=n(85),E=n(201),B=n(199),D=(n(132),n(47)),A=n(86),U=n.n(A),z=n(87),H=n.n(z),J=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(1),s=Object(j.a)(c,2),o=s[0],i=s[1],l=Object(a.useState)(),b=Object(j.a)(l,2),p=b[0],d=b[1],h=Object(a.useState)(1),v=Object(j.a)(h,2),O=v[0],g=(v[1],Object(a.useState)("")),m=Object(j.a)(g,2),k=m[0],S=m[1],I=Object(a.useState)(),_=Object(j.a)(I,2),W=_[0],A=_[1],z=Object(N.a)({palette:{type:"dark",primary:{main:"#fff"}}}),J=function(){var e=Object(x.a)(w.a.mark((function e(){var t,a,r,c,s,o,i,u;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:t=W.search(n).map((function(e){return e.item})),a=[],r=Object(T.a)(t),e.prev=5,r.s();case 7:if((c=r.n()).done){e.next=24;break}return s=c.value,o=U()(H.a.encode(s)).toString(),console.log(o),e.prev=11,e.next=14,y.a.get("".concat("https://superbros3.github.io/","output/").concat(o));case 14:i=e.sent,u=i.data,a.push(u),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(11),console.log(e.t0);case 22:e.next=7;break;case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(5),r.e(e.t1);case 29:return e.prev=29,r.f(),e.finish(29);case 32:d(a);case 33:case"end":return e.stop()}}),e,null,[[5,26,29,32],[11,19]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(x.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W){e.next=2;break}return e.abrupt("return");case 2:if(""===k){e.next=17;break}return e.prev=3,e.next=6,y.a.get("".concat("https://superbros3.github.io/","search.json"));case 6:t=e.sent,n=t.data,A(new D.a(n)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),A(new D.a([])),console.log(e.t0);case 15:e.next=19;break;case 17:return e.next=19,y.a.get("https://superbros3.github.io/config.json").then(function(){var e=Object(x.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(t.data.cdn),e.prev=1,e.next=4,y.a.get("".concat("https://superbros3.github.io/","search.json"));case 4:n=e.sent,a=n.data,A(new D.a(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),A(new D.a([])),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}());case 19:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){window.scroll(0,0),R(),J()}),[o]),Object(u.jsxs)("div",{children:[Object(u.jsx)(C.a,{theme:z,children:Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)(E.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return r(e.target.value)}}),Object(u.jsx)(B.a,{onClick:J,variant:"contained",style:{marginLeft:10},children:Object(u.jsx)(f.a,{fontSize:"large"})})]})}),Object(u.jsx)("div",{className:"trending",children:p&&p.map((function(e){return Object(u.jsx)(P,{id:e.slug,poster:e.cover,title:e.title,date:new Date(e.update_at).toLocaleDateString(),media_type:"video",vote_average:"9.0",duration:e.duration,url:e.url,backurl:"/search"},e.slug)}))}),O>1&&Object(u.jsx)(L,{setPage:i,numOfPages:O})]})},R=n(200),V=n(88),$=n.n(V),q=(n(153),function(){var e=Object(i.g)(),t=e.state.url,n=e.state.backurl,a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return Object(u.jsxs)("div",{className:"playerContent",children:[Object(u.jsx)("div",{className:"buttonLine",children:Object(u.jsx)(o.b,{to:{pathname:n},children:"<<\u8fd4\u56de"})}),Object(u.jsx)($.a,{className:"react-player",url:t,width:"100%",height:"80%",controls:!0,config:{file:{forceHLS:!a,forceVideo:!0}}})]})});var F=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(R.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",component:W,exact:!0}),Object(u.jsx)(i.a,{path:"/search",component:J}),Object(u.jsx)(i.a,{path:"/play",component:q})]})})}),Object(u.jsx)(g,{})]})},G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(154).config(),s.a.render(Object(u.jsx)(F,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}()}},[[157,1,2]]]);
//# sourceMappingURL=main.4bc16e5f.chunk.js.map