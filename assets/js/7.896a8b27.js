(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{167:function(e,t,s){"use strict";var i=s(3),r=s(13),n=s(12),u=s(73),a=s(71),o=s(6),c=s(95).f,l=s(94).f,f=s(8).f,p=s(93).trim,d=i.Number,h=d,N=d.prototype,_="Number"==n(s(72)(N)),g="trim"in String.prototype,m=function(e){var t=a(e,!1);if("string"==typeof t&&t.length>2){var s,i,r,n=(t=g?t.trim():p(t,3)).charCodeAt(0);if(43===n||45===n){if(88===(s=t.charCodeAt(2))||120===s)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+t}for(var u,o=t.slice(2),c=0,l=o.length;c<l;c++)if((u=o.charCodeAt(c))<48||u>r)return NaN;return parseInt(o,i)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof d&&(_?o(function(){N.valueOf.call(s)}):"Number"!=n(s))?u(new h(m(t)),s,d):m(t)};for(var I,b=s(7)?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),v=0;b.length>v;v++)r(h,I=b[v])&&!r(d,I)&&f(d,I,l(h,I));d.prototype=N,N.constructor=d,s(9)(i,"Number",d)}},273:function(e,t,s){"use strict";s.r(t);s(23);var i=s(189),r=(s(167),s(174)),n={name:"IssuesList",data:function(){return{issues:null}},props:{emptyMessage:{type:String,required:!1,default:"No s'han trobat entrades"},limit:{type:Number,required:!1,default:5},github:{type:Object,required:!0}},mounted:function(){var e=this,t=this.github;r.get("https://api.github.com/repos/".concat(t.organization,"/").concat(t.repo,"/issues"),{params:Object(i.a)({},{sort:"created",direction:"desc"},t.params)}).then(function(t){e.issues=t.data,console.log(e.issues)}).catch(function(e){console.log("Error fetching repo ".concat(t),e)})},computed:{issues_cleaned:function(){return this.issues.filter(function(e){return!e.pull_request})}}},u=s(0),a=Object(u.a)(n,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.issues&&e.issues.length>0?s("div",e._l(e.issues_cleaned,function(t,i){return!e.limit||i<e.limit?s("issues-list-item",e._b({key:t.id,attrs:{index:i+1}},"issues-list-item",t,!1)):e._e()}),1):e._e(),e._v(" "),e.issues&&0!=e.issues.length?e._e():s("div",[s("p",[e._v(e._s(e.emptyMessage))])])])},[],!1,null,null,null);a.options.__file="IssuesList.vue";t.default=a.exports}}]);