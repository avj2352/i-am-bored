(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo.dacc842a.png"},22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),c=a(19),o=a.n(c),m=(a(27),a(9)),s=a(20),i=function(e){var t,a=e.theme,n=e.children,r=Object(s.a)((t={},Object(m.a)(t,"content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen",!0),Object(m.a)(t,"theme-light","theme-light"===a),Object(m.a)(t,"theme-dark","theme-dark"===a),t));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:r},n))},u=a(6),f=a(13);!function(e){e[e.THEME_TOGGLE=0]="THEME_TOGGLE",e[e.SET_VERSION=1]="SET_VERSION"}(n||(n={}));var h={theme:"theme-light",version:"1.0.0"},E=Object(r.createContext)(h),d=Object(r.createContext)({}),g=function(e,t){var a=t.type,r=t.payload;switch(a){case n.THEME_TOGGLE:return r?Object(f.a)({},e,{theme:"theme-dark"}):Object(f.a)({},e,{theme:"theme-light"});case n.SET_VERSION:return Object(f.a)({},e,{version:r});default:throw new Error("Unhandled action type: ".concat(a))}},p=function(e){var t=e.children,a=Object(r.useReducer)(g,h),n=Object(u.a)(a,2),c=n[0],o=n[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.Provider,{value:c},l.a.createElement(d.Provider,{value:o},t)))},b=function(){return Object(r.useContext)(E)},x=a(8),w=a(1),v=a(12),y=a(11),j=a.n(y),N=function(e){var t=e.status,a=Object(r.useState)(l.a.createElement(l.a.Fragment,null)),n=Object(u.a)(a,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){o(t?l.a.createElement("svg",{name:"moon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-moon"},l.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})):l.a.createElement("svg",{name:"sun",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-sun"},l.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),l.a.createElement("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})))}),[t]),l.a.createElement(l.a.Fragment,null,c)},O=function(e){var t=Object(r.useContext)(d),a=Object(r.useState)(!1),c=Object(u.a)(a,2),o=c[0],m=c[1];return Object(r.useEffect)((function(){t({type:n.THEME_TOGGLE,payload:o})}),[o,t]),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"border-t-14 border-green-600"},l.a.createElement("nav",{className:"container mx-auto flex flex-wrap justify-end items-center py-8"},l.a.createElement("button",{className:"outline-none focus:outline-none text-copy-primary hover:text-gray-700",onClick:function(){m((function(e){return!e}))}},l.a.createElement(N,{status:o})))))},k=function(e){var t=b();return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"fixed bottom-0 w-full bg-green-600 text-white"},l.a.createElement("div",{className:"container mx-auto flex flex-col lg:flex-row items-center justify-between py-4"},l.a.createElement("div",{className:"mb-4 lg:mb-0"},l.a.createElement("div",null,"version ",t.version),l.a.createElement("div",{className:"flex flex-row justify-center items-center"},l.a.createElement(v.b,{className:"mr-2 text-orange-200"})," from KL - Malaysia, 2020.")),l.a.createElement("ul",{className:"flex items-center space-x-8"},l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",href:"mailto:pramod.jingade@gmail.com",className:"text-white hover:text-gray-400"},l.a.createElement("svg",{width:"25",height:"20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M2.5 0h20A2.5 2.5 0 0 1 25 2.5v15a2.5 2.5 0 0 1-2.5 2.5h-20A2.5 2.5 0 0 1 0 17.5v-15C0 1.125 1.125 0 2.5 0zm20 4.225V2.5h-20v1.725l10 5 10-5zm0 2.8l-9.438 4.713a1.25 1.25 0 0 1-1.124 0L2.5 7.025V17.5h20V7.025z",fillRule:"nonzero"})))),l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/avj2352/",target:"_blank",className:"text-white hover:text-gray-400"},l.a.createElement("svg",{width:"20",height:"19",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10 0c1.814 0 3.487.435 5.02 1.306a9.827 9.827 0 0 1 3.639 3.542A9.33 9.33 0 0 1 20 9.734c0 2.121-.636 4.03-1.908 5.723a9.783 9.783 0 0 1-4.928 3.518c-.234.042-.408.012-.52-.09a.49.49 0 0 1-.17-.38l.006-.969c.005-.621.007-1.19.007-1.705 0-.82-.226-1.42-.677-1.8.495-.05.94-.126 1.335-.228a5.4 5.4 0 0 0 1.223-.494 3.62 3.62 0 0 0 1.055-.843c.282-.334.512-.777.69-1.33.178-.554.267-1.19.267-1.909a3.7 3.7 0 0 0-1.028-2.61c.32-.77.286-1.631-.105-2.586-.243-.076-.594-.03-1.054.14-.46.168-.86.354-1.198.557l-.495.304a9.478 9.478 0 0 0-2.5-.33c-.86 0-1.693.11-2.5.33a11.6 11.6 0 0 0-.553-.342c-.23-.135-.593-.298-1.088-.488-.494-.19-.863-.247-1.106-.171-.391.955-.426 1.816-.105 2.585A3.7 3.7 0 0 0 3.62 9.227c0 .719.089 1.352.267 1.902.178.549.406.993.683 1.33.278.339.627.622 1.048.85a5.4 5.4 0 0 0 1.224.494c.395.102.84.178 1.335.228-.338.305-.551.74-.638 1.306a2.631 2.631 0 0 1-.586.19 3.782 3.782 0 0 1-.742.063c-.287 0-.57-.09-.853-.272a2.256 2.256 0 0 1-.723-.792 2.068 2.068 0 0 0-.631-.66c-.256-.168-.471-.27-.645-.304l-.26-.038c-.182 0-.308.02-.378.057-.07.038-.09.087-.065.146.026.06.065.118.117.178.053.059.109.11.17.152l.09.063c.192.085.38.245.567.482.187.236.324.452.41.646l.13.292c.113.32.304.58.574.78.269.198.56.325.872.38.312.054.614.084.905.088.29.004.532-.01.723-.044l.299-.05c0 .32.002.694.007 1.12l.006.692a.49.49 0 0 1-.17.38c-.112.101-.286.13-.52.089a9.783 9.783 0 0 1-4.928-3.518C.636 13.763 0 11.855 0 9.734a9.33 9.33 0 0 1 1.341-4.886 9.827 9.827 0 0 1 3.64-3.542C6.512.436 8.185 0 10 0zM3.79 13.98c.025-.058-.005-.11-.092-.151-.087-.026-.143-.017-.17.025-.025.06.005.11.092.152.078.05.134.042.17-.025zm.403.432c.06-.043.052-.11-.026-.203-.087-.076-.157-.089-.209-.038-.06.042-.052.11.026.203.087.084.157.097.209.038zm.39.57c.078-.06.078-.14 0-.24-.07-.11-.143-.136-.221-.077-.078.042-.078.118 0 .228.078.11.152.14.221.089zm.547.532c.07-.067.052-.148-.052-.24-.104-.102-.19-.115-.26-.039-.078.068-.061.148.052.241.104.102.19.114.26.038zm.742.317c.026-.093-.03-.16-.169-.203-.13-.033-.213-.004-.247.09-.035.092.021.155.169.19.13.05.213.025.247-.077zm.82.064c0-.11-.073-.157-.22-.14-.14 0-.209.047-.209.14 0 .11.074.156.221.139.14 0 .209-.046.209-.14zm.756-.127c-.017-.093-.096-.131-.234-.114-.14.025-.2.088-.183.19.018.101.096.135.235.101.139-.034.2-.093.182-.177z",fillRule:"nonzero"})))),l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",href:"https://twitter.com/avj2352",target:"_blank",className:"text-white hover:text-gray-400"},l.a.createElement("svg",{width:"20",height:"17",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z",fillRule:"nonzero"}))))))))},M=function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),n=a[0],c=a[1],o=Object(r.useRef)(document.createElement("div"));return Object(r.useEffect)((function(){o.current.style.opacity=n?"1":"0"}),[n]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"newsletter bg-background-tertiary h-screen"},l.a.createElement(O,null),l.a.createElement("div",{ref:o,className:"opacity-0 transition-opacity duration-1000 ease-in-out container-inner mx-auto py-16 pb-8 text-center text-xl"},l.a.createElement("div",{className:"flex flex-col justify-center items-center w-4/5 mx-auto mb-8"},l.a.createElement("img",{src:j.a,onLoad:function(){c(!0)},alt:"logo",className:"w-2/3 md:w-1/2 h-auto rounded-lg shadow mb-4"}),l.a.createElement("p",{className:"mb-2 text-lg"},"Book \u25aa Of \u25aa Recipes \u25aa Easily \u25aa Done "),l.a.createElement("p",{className:"uppercase font-bold text-lg"},"Login to your Account"),l.a.createElement("div",{className:"w-full md:w-1/2 flex flex-col justify-center"},l.a.createElement("button",{className:"w-full rounded\r shadow uppercase bg-gray-400\r text-black\r text-lg py-3 px-4 tracking-wide shadow\r focus:outline-none hover:bg-gray-500 focus:bg-gray-500 z-10 mt-4"},l.a.createElement("span",{className:"flex flex-row justify-center items-center"},"Continue with",l.a.createElement(v.a,{className:"ml-2"}))),l.a.createElement(x.b,{to:"/about",className:"mt-4 text-sm no-underline\r font-normal hover:text-orange-300\r focus:text-orange-300"},"About B.O.R.E.D")))),l.a.createElement(k,null)))},z=function(e){return l.a.createElement(l.a.Fragment,null,"DashboardLayout")},C=function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),n=a[0],c=a[1],o=Object(r.useRef)(document.createElement("div"));return Object(r.useEffect)((function(){o.current.style.opacity=n?"1":"0"}),[n]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"newsletter bg-background-tertiary h-screen"},l.a.createElement(O,null),l.a.createElement("div",{ref:o,className:"opacity-0 transition-opacity\r duration-1000 ease-in-out container-inner mx-auto pb-8 text-center text-xl"},l.a.createElement("div",{className:"flex flex-col justify-start items-center w-full mx-auto mb-8"},l.a.createElement("img",{src:j.a,onLoad:function(){c(!0)},alt:"logo",className:"w-1/3 h-auto rounded-lg shadow mb-4"}),l.a.createElement("p",{className:"uppercase font-bold text-lg"},"About B.O.R.E.D"),l.a.createElement("div",{className:"flex flex-col justify-start mb-4"},l.a.createElement("span",{className:"text-left text-sm md:text-lg"},"A Progressive Web Application ",l.a.createElement("strong",null,"(PWA)")," which comes handy for any one who would like to -",l.a.createElement("ul",{className:"pl-4 list-decimal"},l.a.createElement("li",null,"Create and Store their own recipe in their required format,"),l.a.createElement("li",null,"Share their created recipe with friends,"),l.a.createElement("li",null,"Maintain their shopping list of groceries...and more"))," ",l.a.createElement("br",null),"It requires no-installation, you can use it completely for free so please share this app!"),l.a.createElement(x.b,{to:"/login",className:"mt-8 text-sm no-underline\r font-normal hover:text-orange-300 focus:text-orange-300"},"Back to Login")))),l.a.createElement(k,null)))},L=function(){return l.a.createElement(x.a,null,l.a.createElement(w.d,null,l.a.createElement(w.b,{path:"/login",component:M}),l.a.createElement(w.b,{path:"/about",component:C}),l.a.createElement(w.b,{path:"/app",component:z}),l.a.createElement(w.a,{exact:!0,from:"/",to:"/login"})))},S=function(){var e=b();return l.a.createElement(i,{theme:e.theme},l.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null,l.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.5d132781.chunk.js.map