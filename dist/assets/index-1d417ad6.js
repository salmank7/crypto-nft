(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=document.querySelector(".toggleMenu"),i=document.getElementById("links");a.addEventListener("click",s=>{i.classList.toggle("top-[-10rem]"),i.classList.toggle("top-12")});const n=document.querySelectorAll(".faq__question");n.forEach(s=>{s.addEventListener("click",()=>{const c=s.nextElementSibling;n.forEach(r=>{const e=r.nextElementSibling;r!==s&&(r.classList.remove("active"),e.classList.remove("show"),r.querySelector("i").classList.replace("fa-minus","fa-plus"))}),s.classList.toggle("active"),c.classList.toggle("show");const o=s.querySelector("i");o.classList.contains("fa-plus")?o.classList.replace("fa-plus","fa-minus"):o.classList.replace("fa-minus","fa-plus")})});