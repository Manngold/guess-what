(this["webpackJsonpguess-what"]=this["webpackJsonpguess-what"]||[]).push([[0],{20:function(n,e,t){n.exports=t(54)},54:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(15),o=t.n(c),i=t(3),u=t(1),l=t(2),s=t(16),m=t.n(s),f=t(17),d=t.n(f);function g(){var n=Object(u.a)(["\n    list-style-type: none;\n"]);return g=function(){return n},n}function v(){var n=Object(u.a)(["\n    margin-top: 20px;\n"]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n    height: 20rem;\n    width: 30rem;\n"]);return h=function(){return n},n}function p(){var n=Object(u.a)(["\n    margin-top: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]);return p=function(){return n},n}var b=l.a.div(p()),j=l.a.img(h()),O=l.a.ul(v()),w=l.a.li(g());var E=function(n){var e=n.imageSrc,t=Object(r.useState)([]),c=Object(i.a)(t,2),o=c[0],u=c[1],l=Object(r.useState)(!1),s=Object(i.a)(l,2),f=s[0],g=s[1];return a.a.createElement(b,null,a.a.createElement(j,{src:e,id:"image",onLoad:function(){g(!0);var n=m.a.imageClassifier("MobileNet",(function(){return console.log("Module loaded")})),e=document.querySelector("#image");n.predict(e,5,(function(n,e){return e})).then((function(n){g(!1),u(n)}))},crossOrigin:"anonymous"}),f?a.a.createElement(d.a,null):a.a.createElement(O,null,o.map((function(n,e){var t=n.label,r=n.confidence;return a.a.createElement(w,{key:e},"".concat(e+1,". Predictation : ").concat(t," , ").concat(Math.floor(100*r),"%"))}))))};function y(){var n=Object(u.a)(["\n    border: none;\n    width: 16rem;\n    height: 2rem;\n"]);return y=function(){return n},n}function x(){var n=Object(u.a)([""]);return x=function(){return n},n}var S=l.a.div(x()),k=l.a.input(y());var I=function(n){var e=n.setImageSrc;return a.a.createElement(S,null,a.a.createElement(k,{type:"text",onChange:function(n){var t=n.target.value;e(t)},placeholder:"Insert Image Url"}))};function M(){var n=Object(u.a)(["\n    margin: 0px;\n    padding: 0px;\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: #ecf0f1;\n"]);return M=function(){return n},n}var B=l.a.div(M());var C=function(){var n=Object(r.useState)(),e=Object(i.a)(n,2),t=e[0],c=e[1];return a.a.createElement(B,null,a.a.createElement(I,{setImageSrc:c}),a.a.createElement(E,{imageSrc:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d1db58cf.chunk.js.map