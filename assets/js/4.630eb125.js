(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{265:function(t,r,n){"use strict";var e=n(2),i=n(14),o=n(266),s="".startsWith;e(e.P+e.F*n(267)("startsWith"),"String",{startsWith:function(t){var r=o(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,r.length)),e=String(t);return s?s.call(r,e,n):r.slice(n,n+e.length)===e}})},266:function(t,r,n){var e=n(74),i=n(15);t.exports=function(t,r,n){if(e(r))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},267:function(t,r,n){var e=n(1)("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(n){try{return r[e]=!1,!"/./"[t](r)}catch(t){}}return!0}},268:function(t,r,n){"use strict";var e=n(2),i=n(24),o=n(18),s=n(6),a=[].sort,u=[1,2,3];e(e.P+e.F*(s(function(){u.sort(void 0)})||!s(function(){u.sort(null)})||!n(19)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},272:function(t,r,n){"use strict";n.r(r);n(265),n(23),n(268),n(167);var e=new(n(180)),i={name:"JobsList",data:function(){return{}},props:{limit:{type:Number,required:!1,default:5}},methods:{markdown:function(t){return e.render(t)}},computed:{jobs:function(){return this.$site.pages.filter(function(t){return t.path.startsWith("/jobs/")&&!t.path.startsWith("/jobs/hidden")&&!t.frontmatter.is_index&&!t.frontmatter.hidden}).sort(function(t,r){return new Date(r.frontmatter.date)-new Date(t.frontmatter.date)})}}},o=n(0),s=Object(o.a)(i,function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[t.jobs&&t.jobs.length?n("div",t._l(t.jobs,function(r,e){return e<t.limit?n("div",[n("h2",[n("router-link",{attrs:{to:r.path}},[t._v(t._s(r.frontmatter.title))])],1),t._v(" "),n("p",[t._v(t._s(r.frontmatter.description))]),t._v(" "),n("p",[n("router-link",{attrs:{to:r.path}},[t._v("Més informació")])],1)]):t._e()})):t._e(),t._v(" "),t.jobs&&0!=t.jobs.length?t._e():n("div",[n("p",[t._v("No hi ha cap procés de selecció obert")])])])},[],!1,null,null,null);s.options.__file="JobsList.vue";r.default=s.exports}}]);