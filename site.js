const bg=document.getElementById('bg'),mn=document.getElementById('mn');
const tog=o=>{mn.classList.toggle('open',o);bg.setAttribute('aria-expanded',o)};
bg.onclick=()=>tog(!mn.classList.contains('open'));mn.querySelectorAll('a').forEach(a=>a.onclick=()=>tog(false));
