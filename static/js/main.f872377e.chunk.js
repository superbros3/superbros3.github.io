(this["webpackJsonpmovie-series-app"]=this["webpackJsonpmovie-series-app"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},132:function(e,t,n){},152:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},158:function(e,t){},159:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),s=n.n(o),r=(n(105),n(34)),i=n(15),l=(n(106),n(107),n(3)),u=function(){var e=Object(i.g)();return Object(l.jsxs)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:[Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:"/logo.png",alt:"logo",className:"headerLogo"})}),"/play"===e.pathname?Object(l.jsx)(r.b,{to:"/",className:"topBarRightLink",children:"\u7ad9\u70b9\u9996\u9875"}):null]})},d=n(14),h=n(204),b=n(207),j=n(209),p=n(210),f=n(85),g=n.n(f),x=Object(h.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100},topBtn:{width:"50px !important",height:"50px !important",position:"fixed",bottom:"80px",right:"10px",backgroundColor:"blue",zIndex:100,color:"white",borderRadius:"50%",cursor:"pointer"}});function O(){var e=x(),t=c.a.useState(0),n=Object(d.a)(t,2),o=n[0],s=n[1],r=Object(i.f)();Object(a.useEffect)((function(){0===o?(r.push("/"),window.scroll(0,0)):1===o&&r.push("/mine")}),[o,r]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(b.a,{value:o,onChange:function(e,t){s(t)},showLabels:!0,className:e.root,children:[Object(l.jsx)(j.a,{style:{color:"white"},label:"\u89c6\u9891",icon:Object(l.jsx)(p.a,{})}),Object(l.jsx)(j.a,{style:{color:"white"},label:"\u6211\u7684",icon:Object(l.jsx)(g.a,{})})]})})}var m=n(213),v=n(86),w=n.n(v),k=(n(132),function(){var e=Object(i.g)(),t=e.state.url,n=(e.state.backurl,e.state.title),a=e.state.dateStr,c=e.state.duration,o=encodeURI(e.state.poster),s=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return console.log(o),Object(l.jsxs)("div",{className:"playerContent",children:[Object(l.jsx)("div",{className:"playTitle",children:n}),Object(l.jsxs)("div",{className:"playerBox",children:[Object(l.jsx)(w.a,{className:"react-player",url:t,controls:!0,playsinline:!0,width:"100%",height:"80%",config:{file:{forceHLS:!s,forceVideo:!0}}}),Object(l.jsxs)("div",{className:"videoInfoLine",children:[Object(l.jsxs)("span",{className:"videoInfoLeft",children:["\u6dfb\u52a0\u65f6\u95f4\uff1a",a]}),Object(l.jsxs)("span",{className:"videoInfoRight",children:["\u5f71\u7247\u65f6\u957f\uff1a",c]})]})]})]})}),N=n(87),y=n(65),S=n.n(y),I=n(43),C=n.n(I),L=(n(152),n(92)),B=n(211),T=n(214),W=n(212),z=n(88),A=n.n(z);function E(e){var t=e.setSearchText,n=e.searchAction,a=Object(L.a)({palette:{type:"dark",primary:{main:"#fff"}}});return Object(l.jsx)(B.a,{theme:a,children:Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(T.a,{style:{flex:1},className:"searchBox",label:"\u641c\u7d22\u5f71\u7247",variant:"filled",size:"small",onChange:function(e){return t(e.target.value)}}),Object(l.jsx)(W.a,{onClick:n,variant:"contained",style:{marginLeft:10},children:Object(l.jsx)(A.a,{fontSize:"large"})})]})})}n(155);var M=function(e){e.id;var t=e.poster,n=e.title,a=e.date,c=(e.media_type,e.vote_average,e.duration),o=e.url,s=e.backurl,r=Object(i.f)();var u=function(e){var t=parseInt(e),n=0,a=0;t>60&&(n=parseInt(t/60),t=parseInt(t%60),n>60&&(a=parseInt(n/60),n=parseInt(n%60)));var c=""+parseInt(t);return c=10>t>0?"0"+parseInt(t):""+parseInt(t),c=10>n>0?"0"+parseInt(n)+":"+c:parseInt(n)+":"+c,a>0&&(c=parseInt(a)+":"+c),c}(c),d=(a=new Date(a)).getFullYear()+"-"+String(a.getMonth()+1).padStart(2,"0")+"-"+String(a.getDate()).padStart(2,"0"),h=n.length>20?n.substring(0,20)+"...":n;return Object(l.jsxs)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){r.push({pathname:"/play",state:{url:o,backurl:s,title:n,dateStr:d,duration:u,poster:t}})},children:[Object(l.jsxs)("div",{className:"imageBox",children:[Object(l.jsx)("img",{className:"poster",src:t,alt:n}),Object(l.jsx)("span",{className:"leftLogo",children:"X10096"}),Object(l.jsx)("span",{className:"rightLogo",children:"HD"})]}),Object(l.jsx)("div",{className:"videoTimeBox",children:Object(l.jsx)("span",{className:"videoTime",children:u})}),Object(l.jsx)("b",{className:"title",children:h}),Object(l.jsx)("span",{className:"subTitle",children:Object(l.jsxs)("span",{className:"subTitle",children:["\u6dfb\u52a0\u65f6\u95f4\uff1a",d]})})]})},R=(n(156),n(93)),_=n(89),U=n.n(_),D=n(91),F=n.n(D),H=n(90),J=Object(h.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100},topBtn:{width:"50px !important",height:"50px !important",position:"fixed",bottom:"80px",right:"10px",backgroundColor:"blue",zIndex:100,color:"white",borderRadius:"50%",cursor:"pointer"}});function P(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(d.a)(o,2),r=s[0],i=s[1],u=Object(a.useState)(),h=Object(d.a)(u,2),b=h[0],j=h[1],p=Object(a.useState)(),f=Object(d.a)(p,2),g=f[0],x=f[1],O=Object(a.useState)(0),m=Object(d.a)(O,2),v=m[0],w=m[1],k=Object(a.useState)([]),y=Object(d.a)(k,2),I=y[0],L=y[1],B=Object(a.useState)(),T=Object(d.a)(B,2),W=T[0],z=T[1],A=Object(a.useState)(),_=Object(d.a)(A,2),D=_[0],P=_[1],X=Object(a.useState)(),V=Object(d.a)(X,2),Y=V[0],$=V[1],q=10,G=J(),K=function(){var e=Object(N.a)(S.a.mark((function e(){var t,n,a,o,s,l,u,d,h,j;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=51;break}if(!(I.length>0&&"string"===typeof I[0])){e.next=31;break}t=[],n=(g-1)*q;case 4:if(!(n<Math.min(g*q,I.length))){e.next=20;break}return a=U()(I[n]).toString(),e.prev=6,e.next=9,C.a.get("".concat("https://superbros3.github.io/","output/").concat(a));case 9:o=e.sent,s=o.data,t.push(s),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:n++,e.next=4;break;case 20:if(0!==t.length){e.next=24;break}c(!1),e.next=29;break;case 24:if(!(r.length>0&&t.length>0)){e.next=27;break}if(r[r.length-1].slug!==t[t.length-1].slug){e.next=27;break}return e.abrupt("return");case 27:i(r.concat(t)),Math.min(g*q,I.length)===I.length?c(!1):c(!0);case 29:e.next=51;break;case 31:if(!(g*q>I.length)){e.next=48;break}return l=String(v).padStart(3,"0"),e.prev=33,e.next=36,C.a.get("".concat("https://superbros3.github.io/","page-").concat(l,".json"));case 36:u=e.sent,(d=u.data).length>0?(h=I.concat(d),L(h),i(r.concat(h.slice((g-1)*q,g*q))),w(v+1),c(!0)):c(!1),e.next=46;break;case 41:e.prev=41,e.t1=e.catch(33),I.length>r.length&&i(r.concat(I.slice((g-1)*q,g*q))),c(!1),console.log(e.t1);case 46:e.next=51;break;case 48:j=I.slice((g-1)*q,g*q),i(r.concat(j)),j.length<q?c(!1):c(!0);case 51:case"end":return e.stop()}}),e,null,[[6,14],[33,41]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){console.log("init config"),C.a.get("".concat("https://superbros3.github.io/config.json")).then((function(e){j(e.data.cdn),C.a.get("".concat("https://superbros3.github.io/","search.json")).then((function(e){P(new R.a(e.data)),x(1)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){K()}),[g,Y]);return Object(l.jsxs)("div",{className:"mContent",children:[Object(l.jsx)(E,{setSearchText:z,searchAction:function(){if(D)if(W&&0!==W.length){var e=D.search(W).map((function(e){return e.item}));i([]),L(e),w(0),x(1),1===g&&$(!Y),e.length>0&&c(!0)}else i([]),x(1),L([]),w(0),c(!1),1===g&&$(!Y);else console.log("db init failed.")}}),Object(l.jsx)("div",{className:"trending",children:Object(l.jsx)(H.a,{dataLength:r.length,next:function(){x(g+1)},hasMore:n,loader:Object(l.jsx)("h4",{children:"~~~\u6b63\u5728\u52a0\u8f7d~~~"}),endMessage:Object(l.jsx)("h4",{children:"~~~\u6211\u4eec\u4e5f\u662f\u6709\u5e95\u7ebf\u7684~~~"}),style:{overflowX:"hidden"},children:r&&r.map((function(e){return Object(l.jsx)(M,{id:e.slug,poster:e.cover,title:e.title,date:e.update_at,media_type:"video",vote_average:"9.0",duration:e.duration,url:e.url,backurl:"/"},e.slug)}))})}),Object(l.jsx)(F.a,{className:G.topBtn,onClick:function(){window.scroll(0,0)}})]})}n(159);function X(){return Object(l.jsx)("div",{className:"mypage",children:"My page."})}var V=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(m.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",component:P,exact:!0}),Object(l.jsx)(i.a,{path:"/play",component:k}),Object(l.jsx)(i.a,{path:"/mine",component:X})]})})}),Object(l.jsx)(O,{})]})},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(160).config(),s.a.render(Object(l.jsx)(V,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):$(t,e)}))}}()}},[[164,1,2]]]);
//# sourceMappingURL=main.f872377e.chunk.js.map