const glow=document.querySelector(".cursor-glow");
window.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".skill").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left, y=e.clientY-r.top;
    card.style.transform=`perspective(700px) rotateX(${(y-r.height/2)/-35}deg) rotateY(${(x-r.width/2)/35}deg)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
});
