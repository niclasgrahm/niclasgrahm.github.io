import{d as a,r as d,o as m,a as u,c as f,b as e,u as r,n as h,e as p,F as _,f as x}from"./vendor.3b00832c.js";const y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}};y();const v=e("div",{class:"text-white text-lg"},"Propell Analytics",-1),g=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1),w=[g],b=e("li",null,[e("a",{href:"#",class:"text-white"},"Home")],-1),k=e("li",null,[e("a",{href:"#",class:"text-white"},"Features")],-1),j=e("li",null,[e("a",{href:"#",class:"text-white"},"About")],-1),M=e("li",null,[e("a",{href:"#",class:"text-white"},"Contact")],-1),A=[b,k,j,M],C=a({setup(c){let n=d(!1),l=()=>{n.value=!n.value},o=d(!0);return m(()=>{document.addEventListener("scroll",()=>{o.value=window.scrollY==0})}),(t,s)=>(u(),f("div",{class:h(["bg-sky-600 fixed w-full flex justify-between items-center px-4 md:px-12 h-20 transition-all duration-200",{"h-24":r(o),"h-12":!r(o)}])},[v,e("nav",null,[e("button",{class:"md:hidden",onClick:s[0]||(s[0]=(...i)=>r(l)&&r(l)(...i))},w),e("ul",{class:h(["fixed bg-sky-600 left-0 right-0 min-h-screen px-4 pt-8 space-y-4 text-white transform transition duration-300 translate-x-full md:relative md:flex md:space-x-10 md:min-h-0 md:px-0 md:py-0 md:space-y-0 md:translate-x-0",{"translate-x-full":!r(n),"translate-x-0":r(n)}])},A,2)])],2))}}),L=e("div",{class:"h-screen flex justify-center items-center"},"Home",-1),N=e("div",{class:"h-screen flex justify-center items-center bg-sky-600"},"Features",-1),F=e("div",{class:"h-screen flex justify-center items-center bg-sky-600"},"About",-1),O=e("div",{class:"h-screen flex justify-center items-center"},"Contact",-1),$=a({setup(c){return(n,l)=>(u(),f(_,null,[p(C),L,N,F,O],64))}});x($).mount("#app");
