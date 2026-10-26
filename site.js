'use strict';
const themeButton=document.getElementById('theme-toggle');themeButton.hidden=false;
function themeLabel(){themeButton.setAttribute('aria-label',document.documentElement.dataset.theme==='dark'?'Switch to light mode':'Switch to dark mode');}themeLabel();
themeButton.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('theme',theme)}catch(e){}themeLabel();});
const menuButton=document.getElementById('menu-toggle'),menu=document.getElementById('nav-links');menuButton.hidden=false;menu.classList.add('enhanced');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.addEventListener('click',event=>{if(!event.target.closest('.nav'))closeMenu();});
document.getElementById('year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)menu.querySelectorAll('a[href^="#"]').forEach(link=>link.classList.toggle('active',link.hash==='#'+entry.target.id));},{rootMargin:'-10% 0px -65% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}
