(this["webpackJsonpmovie-series-app"]=this["webpackJsonpmovie-series-app"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},131:function(e,t,n){},151:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},157:function(e,t){},158:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),r=n.n(o),s=(n(103),n(34)),i=n(15),l=(n(104),n(105),n(3)),h=function(){var e=Object(i.g)();return Object(l.jsxs)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:[Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:"/logo.png",alt:"logo",className:"headerLogo"})}),"/play"===e.pathname?Object(l.jsx)(s.b,{to:"/",className:"topBarRightLink",children:"\u7ad9\u70b9\u9996\u9875"}):null]})},u=n(14),d=n(204),j=n(207),b=n(209),p=n(210),g=n(84),f=n.n(g),x=Object(d.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100},topBtn:{width:"50px !important",height:"50px !important",position:"fixed",bottom:"80px",right:"10px",backgroundColor:"blue",zIndex:100,color:"white",borderRadius:"50%",cursor:"pointer"}});function O(){var e=x(),t=c.a.useState(0),n=Object(u.a)(t,2),o=n[0],r=n[1],s=Object(i.f)();return Object(a.useEffect)((function(){0===o?(s.push("/"),window.scroll(0,0)):1===o&&s.push("/mine")}),[o,s]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(j.a,{value:o,onChange:function(e,t){r(t)},showLabels:!0,className:e.root,children:[Object(l.jsx)(b.a,{style:{color:"white"},label:"\u89c6\u9891",icon:Object(l.jsx)(p.a,{})}),Object(l.jsx)(b.a,{style:{color:"white"},label:"\u6211\u7684",icon:Object(l.jsx)(f.a,{})})]})})}var m=n(213),v=n(85),w=n.n(v),k=(n(131),function(){var e=Object(i.g)(),t=e.state.url,n=e.state.title,a=e.state.dateStr,c=e.state.duration,o=encodeURI(e.state.poster).replace(/[()]/g,(function(e){return"%"+e.charCodeAt(0).toString(16)})),r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return window.scroll(0,0),Object(l.jsxs)("div",{className:"playerContent",children:[Object(l.jsx)("div",{className:"playTitle",children:n}),Object(l.jsxs)("div",{className:"playerBox",children:[Object(l.jsx)(w.a,{className:"react-player",url:t,controls:!0,playsinline:!0,width:"100%",height:"300px",light:o,playing:!0,config:{file:{forceHLS:!r,forceVideo:!0}}}),Object(l.jsxs)("div",{className:"videoInfoLine",children:[Object(l.jsxs)("span",{className:"videoInfoLeft",children:["\u6dfb\u52a0\u65f6\u95f4\uff1a",a]}),Object(l.jsxs)("span",{className:"videoInfoRight",children:["\u5f71\u7247\u65f6\u957f\uff1a",c]})]})]})]})}),S=n(86),N=n(64),y=n.n(N),I=n(43),C=n.n(I),L=(n(151),n(90)),T=n(211),A=n(214),B=n(212),M=n(87),W=n.n(M);function z(e){var t=e.setSearchText,n=e.searchAction,a=Object(L.a)({palette:{type:"dark",primary:{main:"#fff"}}});return Object(l.jsx)(T.a,{theme:a,children:Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(A.a,{style:{flex:1},className:"searchBox",label:"\u641c\u7d22\u5f71\u7247",variant:"filled",size:"small",onChange:function(e){return t(e.target.value)}}),Object(l.jsx)(B.a,{onClick:n,variant:"contained",style:{marginLeft:10},children:Object(l.jsx)(W.a,{fontSize:"large"})})]})})}n(154);var E=function(e){var t=e.poster,n=e.title,a=e.date,c=e.duration,o=e.url,r=Object(i.f)();var s=function(e){var t=parseInt(e),n=0,a=0;t>60&&(n=parseInt(t/60),t=parseInt(t%60),n>60&&(a=parseInt(n/60),n=parseInt(n%60)));var c=""+parseInt(t);return c=10>t>0?"0"+parseInt(t):""+parseInt(t),c=10>n>0?"0"+parseInt(n)+":"+c:parseInt(n)+":"+c,a>0&&(c=parseInt(a)+":"+c),c}(c),h=(a=new Date(a)).getFullYear()+"-"+String(a.getMonth()+1).padStart(2,"0")+"-"+String(a.getDate()).padStart(2,"0"),u=n.length>20?n.substring(0,20)+"...":n;return Object(l.jsxs)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){r.push({pathname:"/play",state:{url:o,title:n,dateStr:h,duration:s,poster:t}})},children:[Object(l.jsxs)("div",{className:"imageBox",children:[Object(l.jsx)("img",{className:"poster",src:t,alt:n}),Object(l.jsx)("span",{className:"leftLogo",children:"X10096"}),Object(l.jsx)("span",{className:"rightLogo",children:"HD"})]}),Object(l.jsx)("div",{className:"videoTimeBox",children:Object(l.jsx)("span",{className:"videoTime",children:s})}),Object(l.jsx)("b",{className:"title",children:u}),Object(l.jsx)("span",{className:"subTitle",children:Object(l.jsxs)("span",{className:"subTitle",children:["\u6dfb\u52a0\u65f6\u95f4\uff1a",h]})})]})},R=(n(155),n(91)),U=n(88),D=n.n(U),P=n(89),F=Object(d.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"#2d313a",zIndex:100},topBtn:{width:"50px !important",height:"50px !important",position:"fixed",bottom:"80px",right:"10px",backgroundColor:"blue",zIndex:100,color:"white",borderRadius:"50%",cursor:"pointer"}});function H(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),r=Object(u.a)(o,2),s=r[0],i=r[1],h=Object(a.useState)(),d=Object(u.a)(h,2),j=d[0],b=d[1],p=Object(a.useState)(),g=Object(u.a)(p,2),f=g[0],x=g[1],O=Object(a.useState)(0),m=Object(u.a)(O,2),v=m[0],w=m[1],k=Object(a.useState)([]),N=Object(u.a)(k,2),I=N[0],L=N[1],T=Object(a.useState)(),A=Object(u.a)(T,2),B=A[0],M=A[1],W=Object(a.useState)(),U=Object(u.a)(W,2),H=U[0],J=U[1],X=Object(a.useState)(),V=Object(u.a)(X,2),Y=V[0],$=V[1],_=10,q=(F(),function(){var e=Object(S.a)(y.a.mark((function e(){var t,n,a,o,r,l,h,u,d,b;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=51;break}if(!(I.length>0&&"string"===typeof I[0])){e.next=31;break}t=[],n=(f-1)*_;case 4:if(!(n<Math.min(f*_,I.length))){e.next=20;break}return a=D()(I[n]).toString(),e.prev=6,e.next=9,C.a.get("".concat("https://superbros3.github.io/","output/").concat(a));case 9:o=e.sent,r=o.data,t.push(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:n++,e.next=4;break;case 20:if(0!==t.length){e.next=24;break}c(!1),e.next=29;break;case 24:if(!(s.length>0&&t.length>0)){e.next=27;break}if(s[s.length-1].slug!==t[t.length-1].slug){e.next=27;break}return e.abrupt("return");case 27:i(s.concat(t)),Math.min(f*_,I.length)===I.length?c(!1):c(!0);case 29:e.next=51;break;case 31:if(!(f*_>I.length)){e.next=48;break}return l=String(v).padStart(3,"0"),e.prev=33,e.next=36,C.a.get("".concat("https://superbros3.github.io/","page-").concat(l,".json"));case 36:h=e.sent,(u=h.data).length>0?(d=I.concat(u),L(d),i(s.concat(d.slice((f-1)*_,f*_))),w(v+1),c(!0)):c(!1),e.next=46;break;case 41:e.prev=41,e.t1=e.catch(33),I.length>s.length&&i(s.concat(I.slice((f-1)*_,f*_))),c(!1),console.log(e.t1);case 46:e.next=51;break;case 48:b=I.slice((f-1)*_,f*_),i(s.concat(b)),b.length<_?c(!1):c(!0);case 51:case"end":return e.stop()}}),e,null,[[6,14],[33,41]])})));return function(){return e.apply(this,arguments)}}());Object(a.useEffect)((function(){console.log("init config"),C.a.get("".concat("https://superbros3.github.io/config.json")).then((function(e){b(e.data.cdn),C.a.get("".concat("https://superbros3.github.io/","search.json")).then((function(e){J(new R.a(e.data),{shouldSort:!0,matchAllTokens:!0,findAllMatches:!0,includeScore:!0,threshold:0,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1}),x(1)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){q()}),[f,Y]);return Object(l.jsxs)("div",{className:"mContent",children:[Object(l.jsx)(z,{setSearchText:M,searchAction:function(){if(H)if(B&&0!==B.length){var e='"'+B.replace(" ",'" "')+'"';console.log(e);var t=H.search(e).map((function(e){return e.item}));i([]),L(t),w(0),x(1),1===f&&$(!Y),t.length>0&&c(!0)}else i([]),x(1),L([]),w(0),c(!1),1===f&&$(!Y);else console.log("db init failed.")}}),Object(l.jsx)("div",{className:"trending",children:Object(l.jsx)(P.a,{dataLength:s.length,next:function(){x(f+1)},hasMore:n,loader:Object(l.jsx)("h4",{children:"~~~\u6b63\u5728\u52a0\u8f7d~~~"}),endMessage:Object(l.jsx)("h4",{children:"~~~\u6211\u4eec\u4e5f\u662f\u6709\u5e95\u7ebf\u7684~~~"}),style:{overflowX:"hidden"},children:s&&s.map((function(e){return Object(l.jsx)(E,{poster:e.cover,title:e.title,date:e.update_at,duration:e.duration,url:e.url},e.slug)}))})})]})}n(158);function J(){return Object(l.jsx)("div",{className:"mypage",children:"My page."})}var X=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(h,{}),Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(m.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",component:H,exact:!0}),Object(l.jsx)(i.a,{path:"/play",component:k}),Object(l.jsx)(i.a,{path:"/mine",component:J})]})})}),Object(l.jsx)(O,{})]})},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(159).config(),r.a.render(Object(l.jsx)(X,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Y(t,e)}))}}()}},[[163,1,2]]]);
//# sourceMappingURL=main.7e5d55e0.chunk.js.map