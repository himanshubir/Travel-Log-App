(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),s=n(22),a=n.n(s),i=n(19),o=n(6),l=n.n(o),u=n(8),j=n(7),p=n(13),d="http://localhost:5000";function b(){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"/"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=n(9),g=(n(21),function(e){var t=e.entry,n=e.onDelete,s=e.setShowSettings,a=Object(r.useState)(""),i=Object(j.a)(a,2),o=i[0],p=i[1],d=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(t);case 3:n(),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),p(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"settings-overlay",children:[o?Object(c.jsx)("div",{className:"error-text",children:o}):null,Object(c.jsx)("div",{className:"close-button-wrapper",children:Object(c.jsx)("div",{className:"close-button",onClick:function(){s(Object(f.a)({},t._id,!1))},children:"x"})}),Object(c.jsxs)("div",{className:"overlay-buttons",children:[Object(c.jsx)("button",{className:"deleteButton",onClick:d,children:"Delete"}),Object(c.jsx)("button",{className:"update-button",children:"Update"})]})]})}),w=n(24),N=function(e){var t=e.location,n=e.onClose,s=e.getEntries,a=Object(r.useState)(!1),i=Object(j.a)(a,2),o=i[0],p=i[1],d=Object(r.useState)(""),b=Object(j.a)(d,2),m=b[0],O=b[1],x=Object(w.a)(),v=x.register,f=x.handleSubmit,g=function(){var e=Object(u.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p(!0),c.latitude=t[0],c.longitude=t[1],e.next=6,h(c);case 6:n(),s(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),O(e.t0.message),p(!1);case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("form",{onSubmit:f(g),className:"entry-form",children:[m?Object(c.jsx)("h3",{className:"error-text",children:m}):null,Object(c.jsx)("label",{htmlFor:"title",children:"Title"}),Object(c.jsx)("input",{name:"title",required:!0,ref:v}),Object(c.jsx)("label",{htmlFor:"comments",children:"Comments"}),Object(c.jsx)("textarea",{name:"comments",rows:3,ref:v}),Object(c.jsx)("label",{htmlFor:"description",children:"Description"}),Object(c.jsx)("textarea",{name:"description",rows:3,ref:v}),Object(c.jsx)("label",{htmlFor:"image",children:"Image URL"}),Object(c.jsx)("input",{name:"image",ref:v}),Object(c.jsx)("label",{htmlFor:"visitDate",children:"Visit Date"}),Object(c.jsx)("input",{name:"visitDate",type:"date",required:!0,ref:v}),Object(c.jsx)("button",{disabled:o,children:o?"Loading...":"Create Entry"})]})},y=function(e){var t=e.entry,n=e.newMarker,s=e.setShowPopup,a=e.location,i=e.setNewMarker,o=e.getEntries,l=Object(r.useState)({}),u=Object(j.a)(l,2),d=u[0],b=u[1],m=function(){s({}),i(null)};return t||n?Object(c.jsx)(p.b,{className:"popup",latitude:a[0],longitude:a[1],closeButton:!0,closeOnClick:!1,dynamicPosition:!1,onClose:function(){n?i(null):s({})},anchor:"top",children:n?Object(c.jsx)("div",{className:"popup-content-wrapper",children:Object(c.jsx)("div",{className:"popup-form",children:Object(c.jsx)(N,{onClose:m,location:a,getEntries:o})})}):Object(c.jsxs)("div",{className:"popup-container",children:[d[t._id]?Object(c.jsx)(g,{entry:t,onDelete:function(){m(),o()},setShowSettings:b}):null,Object(c.jsx)("div",{className:"settings-button-wrapper",children:Object(c.jsx)("img",{className:"settings-button",onClick:function(){b(Object(f.a)({},t._id,!0))},src:"https://img.icons8.com/material-outlined/24/000000/settings--v1.png"})}),Object(c.jsxs)("div",{className:"popup-content-wrapper",children:[Object(c.jsx)("div",{className:"popup-title",children:t.title}),Object(c.jsxs)("div",{className:"popup-heading",children:[Object(c.jsx)("div",{className:"visited-wrapper",children:Object(c.jsxs)("div",{className:"popup-visited",children:["Visited On: ",new Date(t.visitDate).toLocaleDateString()]})}),Object(c.jsxs)("div",{className:"location-wrapper",children:[Object(c.jsxs)("div",{className:"latitude",children:["(",t.latitude.toFixed(8),","]})," \u2002",Object(c.jsxs)("div",{className:"longitude",children:[t.longitude.toFixed(8),")"]})]})]}),Object(c.jsxs)("div",{className:"popup-info",children:[Object(c.jsx)("div",{className:"rating-wrapper",children:t.rating?Object(c.jsxs)("div",{className:"rating",children:["Rating: ",t.rating," / 10.0"]}):null}),Object(c.jsxs)("div",{className:"popup-columns",children:[Object(c.jsxs)("div",{className:"popup-left-side",style:{width:t.image?"45% ":"100%"},children:[Object(c.jsx)("div",{className:"description-wrapper",children:t.description?Object(c.jsxs)("div",{className:"popup-description",children:["Description: ",Object(c.jsx)("br",{}),t.description]}):null}),Object(c.jsx)("div",{className:"comments-wrapper",children:t.comments?Object(c.jsxs)("div",{className:"popup-comments",children:["Comments: ",Object(c.jsx)("br",{}),t.comments]}):null})]}),Object(c.jsx)("div",{className:"popup-right-side",style:{width:t.comments||t.comments?"55%":"100%"},children:Object(c.jsx)("div",{className:"image-wrapper",children:t.image?Object(c.jsx)("img",{className:"popup-image",src:t.image,alt:t.title}):null})})]})]})]})]})}):null},k=(n(34),function(e){var t=e.entry,n=e.newMarker,s=e.viewport,a=e.setNewMarker,i=e.getEntries,o=Object(r.useState)({}),l=Object(j.a)(o,2),u=l[0],d=l[1],b=[n?n.latitude:t.latitude,n?n.longitude:t.longitude];return Object(c.jsx)("div",{onClick:function(){d(Object(f.a)({},t._id,!0))},children:t||n?Object(c.jsxs)("div",{children:[Object(c.jsx)(p.a,{latitude:b[0],longitude:b[1],children:Object(c.jsx)("div",{children:Object(c.jsx)("img",{className:"marker",style:{height:"".concat(6*s.zoom,"px"),width:"".concat(6*s.zoom,"px")},src:"https://i.imgur.com/y0G5YTX.png",alt:"marker"})})}),n||u[t._id]?Object(c.jsx)(y,{entry:t,newMarker:n,setNewMarker:a,setShowPopup:d,location:b,getEntries:i}):null]}):null})}),S=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(null),o=Object(j.a)(a,2),d=o[0],m=o[1],h=Object(r.useState)({width:"100vw",height:"100vh",latitude:30,longitude:0,zoom:2.5,minZoom:1.5}),O=Object(j.a)(h,2),x=O[0],v=O[1],f=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){f()}),[]);return Object(c.jsx)(p.c,Object(i.a)(Object(i.a)({},x),{},{mapStyle:"mapbox://styles/himanshubiradar/ckhxn18e70un219qlwhq05q5i",mapboxApiAccessToken:"pk.eyJ1IjoiaGltYW5zaHViaXJhZGFyIiwiYSI6ImNraHdyOHNzNTBvYmwyem1vb25tb2djN28ifQ.JWbSVKNAURjCCp2In5jaXQ",onDblClick:function(e){var t=Object(j.a)(e.lngLat,2),n=t[0],c=t[1];m({longitude:n,latitude:c})},onViewportChange:function(e){return v(e)},children:n.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(k,{entry:e,viewport:x,newMarker:d,setNewMarker:m,getEntries:f})},e._id)}))}))};n(35);a.a.render(Object(c.jsx)(S,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9989769d.chunk.js.map