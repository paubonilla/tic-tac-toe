(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(n,e,t){n.exports=t.p+"static/media/michael-scott.b09e93bf.png"},15:function(n,e,t){n.exports=t.p+"static/media/the-office-theme-song.45ddc095.mp3"},17:function(n,e,t){n.exports=t(26)},22:function(n,e,t){},23:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(10),c=t.n(r),o=(t(22),t(23),t(16)),l=t(4),u=t(1),s=t(2);function f(){var n=Object(u.a)(["\n  width: 100px;\n  height: 100px;\n  @media (max-width: 320px) {\n    width: 85px;\n    height: 85px;\n  }\n  margin: 2px;\n  border: 1px solid #4a2908;\n  border-radius: 0px;\n  color: #173ef2;\n  font-size: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Special Elite', cursive;\n  background: #f6fe81;\n  outline: none;\n  &:hover {\n    background: #BADAC4;\n  }\n"]);return f=function(){return n},n}var m=s.a.button(f());function d(n){var e=n.value,t=n.onClick,a=e?"squares ".concat(e):"squares";return i.a.createElement(m,{className:a,onClick:t},e)}function v(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var a=Object(l.a)(e[t],3),i=a[0],r=a[1],c=a[2];if(n[i]&&n[i]===n[r]&&n[i]===n[c])return n[i]}return null}function h(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  > div {\n    display: flex;\n  }\n  .status {\n    display: flex;\n    justify-content: center;\n    font-size: 35px;\n    font-family: 'Special Elite', cursive;\n    color: #F40804;\n  }\n"]);return h=function(){return n},n}var p=s.a.div(h());function x(){var n,e,t=Object(a.useState)(Array(9).fill(null)),r=Object(l.a)(t,2),c=r[0],u=r[1],s=Object(a.useState)(!0),f=Object(l.a)(s,2),m=f[0],h=f[1],x=function(n){return i.a.createElement(d,{value:c[n],onClick:function(){return function(n){var e=Object(o.a)(c),t=m?"X":"O";v(c)||e[n]||(e[n]=t,u(e),h(!m))}(n)}})},g=v(c);return n=g?"".concat(g," wins the game"):"".concat(m?"Dwight":"Michael","'s turn"),e="".concat(g?"Dwight you ignorant...":""),i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null,i.a.createElement("div",{className:"status"},n),i.a.createElement("div",null,x(0),x(1),x(2)),i.a.createElement("div",null,x(3),x(4),x(5)),i.a.createElement("div",null,x(6),x(7),x(8)),i.a.createElement("div",null,void c.map((function(n){var e={move:n};return i.a.createElement("button",{onClick:function(){return e(c)}},"Restart")})))),i.a.createElement("div",{className:"ignorant"},e))}function g(){var n=Object(u.a)(["\n  > p {\n    font-size: 80px;\n    @media (max-width: 480px) {\n      font-size: 70px;\n    }\n    @media (max-width: 320px) {\n      font-size: 60px;\n    }\n    color: #fff;\n    text-shadow: 1px 1px black;\n    font-family: 'Special Elite', cursive;\n  }\n"]);return g=function(){return n},n}function E(){var n=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  height: auto;\n  bottom: 0;\n  right: 0;\n  pointer-events: none;\n"]);return E=function(){return n},n}function b(){var n=Object(u.a)(["\n  position: relative;\n  max-width: 100vw;\n  min-height: 100vh;\n  width: 100%;\n  height: 100%;\n"]);return b=function(){return n},n}function w(){var n=Object(u.a)(["\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  max-width: 800px;\n  height: 70vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n"]);return w=function(){return n},n}function y(){var n=Object(u.a)(["\n  width: 100vw;\n  height: 100vh;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: radial-gradient(#F8F9FD, #2997F1);\n"]);return y=function(){return n},n}var j=s.a.div(y()),O=s.a.div(w()),k=s.a.div(b()),z=s.a.img(E()),F=s.a.div(g()),S=t(14),C=t.n(S),D=t(15),A=t.n(D);function B(){return i.a.createElement(j,null,i.a.createElement("audio",{autoPlay:!0},i.a.createElement("source",{src:A.a,type:"audio/mpeg"})),i.a.createElement(O,null,i.a.createElement(F,null,i.a.createElement("p",null,"the office")),i.a.createElement(x,null)),i.a.createElement(k,null,i.a.createElement(z,{src:C.a,alt:"si tito scott"})))}var N=function(){return i.a.createElement("div",null,i.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a09a8e6a.chunk.js.map