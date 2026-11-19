"use strict";
(function(){
  const menuButton=document.querySelector(".menu-toggle");
  const menu=document.getElementById("menu");
  if(menuButton&&menu){
    menuButton.addEventListener("click",()=>{
      const opened=menu.classList.toggle("open");
      menuButton.setAttribute("aria-expanded",String(opened));
      menuButton.setAttribute("aria-label",opened?"Fechar menu":"Abrir menu");
    });
    menu.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
      menu.classList.remove("open");
      menuButton.setAttribute("aria-expanded","false");
      menuButton.setAttribute("aria-label","Abrir menu");
    }));
    document.addEventListener("keydown",event=>{
      if(event.key==="Escape"){menu.classList.remove("open");menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Abrir menu");}
    });
  }
  const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());
  // Preencher apenas após confirmação dos canais oficiais pelo cliente.
  const contacts={whatsapp:"",instagram:""};
  const target=document.getElementById("contact-links");
  if(target){
    const phone=contacts.whatsapp.replace(/\D/g,"");
    const channels=[];
    if(/^55\d{10,11}$/.test(phone))channels.push({name:"WhatsApp",href:"https://wa.me/"+phone});
    if(/^https:\/\/www\.instagram\.com\/[a-zA-Z0-9._]+\/?$/.test(contacts.instagram))channels.push({name:"Instagram",href:contacts.instagram});
    channels.forEach(({name,href})=>{const a=document.createElement("a");a.textContent=name;a.href=href;a.target="_blank";a.rel="noopener noreferrer";target.appendChild(a);});
    if(channels.length)target.hidden=false;
  }
})();