"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{226:function(r,n,e){e.d(n,{i:function(){return u}});var t=e(439),a=e(791),u=function(r,n){var e=(0,a.useState)(null),u=(0,t.Z)(e,2),c=u[0],i=u[1];return(0,a.useEffect)((function(){r(n).then((function(r){return i(r)}))}),[n,r]),[c,i]}},415:function(r,n,e){e.r(n);var t=e(439),a=e(226),u=e(689),c=e(87),i=e(390),s=e(184);n.default=function(){var r=(0,a.i)(i.wr),n=(0,t.Z)(r,1)[0],e=(0,u.TH)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Trending Today"}),(0,s.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(r){return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{state:{from:e},to:"/movies/".concat(r.id.toString()),children:r.title})},r.id)}))})]})}},390:function(r,n,e){e.d(n,{Hx:function(){return p},PS:function(){return o},Rn:function(){return l},uV:function(){return f},wr:function(){return s}});var t=e(861),a=e(757),u=e.n(a),c=e(340),i="ef2a4e32ebd524f1e2095ff29b5d3d5e";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var r=(0,t.Z)(u().mark((function r(){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day",{params:{api_key:i}});case 2:return n=r.sent,e=n.data,console.log(e),r.abrupt("return",e.results);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(n),{params:{api_key:i}});case 2:return e=r.sent,t=e.data,console.log(t),r.abrupt("return",t);case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(n,"/credits?language=en-US&page=1"),{params:{api_key:i}});case 2:return e=r.sent,t=e.data,console.log(t),r.abrupt("return",t.cast);case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(n,"/reviews?language=en-US&page=1"),{params:{api_key:i}});case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(u().mark((function r(n){var e,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("search/movie",{params:{api_key:i,query:n}});case 2:return e=r.sent,t=e.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.356d6185.chunk.js.map