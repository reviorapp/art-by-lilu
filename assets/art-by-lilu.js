(() => {
  'use strict';
  const config = window.SITE_CONFIG;
  if (!config) throw new Error('Nedostaje site-config.js');
  const business = config.business;
  const pageKey = document.body.dataset.page;
  const pages = {home:'art-by-lilu.html',offers:'art-by-lilu-buketi.html',weddings:'art-by-lilu-vjecanja.html',gallery:'art-by-lilu-galerija.html',contact:'art-by-lilu-kontakt.html'};
  const interpolate = value => String(value ?? '').replaceAll('{name}',business.name).replaceAll('{city}',business.city);
  const text = (element,value) => { if(element) element.textContent=interpolate(value); };
  const safeCopy = (element,value) => {
    // Copy supports line breaks and emphasis; all other markup becomes plain text.
    const template=document.createElement('template');template.innerHTML=interpolate(value);
    const append=(parent,node)=>{
      if(node.nodeType===3)parent.append(document.createTextNode(node.textContent));
      else if(node.nodeType===1){
        if(['BR','EM'].includes(node.tagName)){const child=document.createElement(node.tagName);parent.append(child);node.childNodes.forEach(n=>append(child,n));}
        else parent.append(document.createTextNode(node.textContent));
      }
    };
    element.replaceChildren();template.content.childNodes.forEach(n=>append(element,n));
  };
  const link = (label,href) => {const a=document.createElement('a');a.textContent=label;a.href=href;return a;};
  const phone=business.phone.replace(/[^\d+]/g,'');
  const whatsapp=phone ? 'https://wa.me/'+phone.replace(/\D/g,'')+'?text='+encodeURIComponent(business.whatsappMessage) : '';
  for(const [key,value] of Object.entries(config.theme))document.documentElement.style.setProperty('--'+key,value);
  document.querySelectorAll('[data-copy]').forEach(el=>safeCopy(el,config.pages[pageKey].content[el.dataset.copy]));
  document.querySelectorAll('[data-image]').forEach(el=>{const img=config.images[el.dataset.image];if(img){el.src=img.src;el.alt=interpolate(img.alt);}});
  document.title=interpolate(config.pages[pageKey].title);
  document.querySelector('meta[name="description"]').content=interpolate(business.description);
  const meta=(property,content)=>{const el=document.createElement('meta');el.setAttribute('property',property);el.content=content;document.head.append(el);};
  meta('og:title',document.title);meta('og:description',interpolate(business.description));meta('og:site_name',business.name);meta('og:type','website');
  if(config.images.home_hero)meta('og:image',new URL(config.images.home_hero.src,location.href).href);
  text(document.querySelector('.topline'),'Demo predložak · {name} · {city}');
  text(document.querySelector('.signature'),business.name);
  document.querySelectorAll('.brand,.footer-brand').forEach(el=>{
    el.replaceChildren();el.href=pages.home;el.setAttribute('aria-label',business.name+' — početna');
    if(business.logo){const img=document.createElement('img');img.src=business.logo;img.alt=business.name;img.className=el.matches('.brand')?'brand-logo':'footer-logo';el.append(img);}
    else {const strong=document.createElement('strong');strong.textContent=business.name;el.append(strong);}
    const span=document.createElement('span');span.textContent=business.tagline+' · '+business.city;el.append(span);
  });
  const pageForHref=href=>Object.keys(pages).find(key=>pages[key]===href);
  document.querySelectorAll('.nav-link,.mobile-drawer a').forEach(a=>{const key=pageForHref(a.getAttribute('href'));if(key){text(a,config.navigation[key]);a.classList.toggle('active',key===pageKey);}});
  const nav=document.querySelector('[data-footer-navigation]');
  for(const [key,label] of Object.entries(config.navigation))nav.append(link(label,pages[key]));
  const contacts=document.querySelector('[data-footer-contact]');
  const contactList=document.querySelector('.contact-list');
  const contact=(label,value,href)=>{
    if(!value)return;
    const item=href?link(value,href):document.createElement('span');item.textContent=value;contacts.append(item);
    if(contactList){const li=document.createElement('li'),caption=document.createElement('span');caption.textContent=label;li.append(caption,item.cloneNode(true));contactList.append(li);}
  };
  contact('Telefon',business.phone,'tel:'+phone);contact('E-mail',business.email,'mailto:'+business.email);contact('Adresa',business.address);contact('Instagram',business.instagram,business.instagram);contact('Facebook',business.facebook,business.facebook);
  text(document.querySelector('.footer-bottom'),'© '+new Date().getFullYear()+' '+business.name+' · Demo predložak');
  document.querySelectorAll('[data-contact-link],.site-header .button').forEach(a=>{a.href=whatsapp||pages.contact+'#upit';if(!whatsapp){a.removeAttribute('target');a.removeAttribute('rel');}});
  document.querySelectorAll('.marquee-track span').forEach((el,i)=>text(el,config.services[i%config.services.length]||''));
  const form=document.querySelector('.contact-form');
  if(form){
    const select=form.querySelector('[name="usluga"]');select.replaceChildren();
    config.services.forEach(service=>{const option=document.createElement('option');option.textContent=service;select.append(option);});
    form.querySelector('button').disabled=!phone;
    text(form.querySelector('.form-note'),phone?'Upit se otvara u WhatsAppu. Poruku šaljete sami.':'Demo obrazac — dodajte telefon u site-config.js kako biste omogućili WhatsApp upite.');
    form.addEventListener('submit',event=>{
      event.preventDefault();if(!phone)return;
      const data=new FormData(form);
      const labels={ime:'Ime i prezime',email:'E-mail',telefon:'Telefon',usluga:'Usluga',datum:'Datum',budzet:'Budžet',poruka:'Poruka'};
      const message=['Pozdrav! Šaljem upit preko web-stranice '+business.name+'.',...Object.entries(labels).map(([key,label])=>label+': '+(data.get(key)||'Nije navedeno'))].join('\n');
      window.open('https://wa.me/'+phone.replace(/\D/g,'')+'?text='+encodeURIComponent(message),'_blank','noopener');
    });
  }
  const trigger=document.querySelector('.mobile-trigger'),drawer=document.querySelector('.mobile-drawer');
  trigger?.addEventListener('click',()=>{const open=drawer.classList.toggle('open');trigger.setAttribute('aria-expanded',String(open));trigger.textContent=open?'×':'☰';document.body.classList.toggle('menu-open',open);});
  const header=document.querySelector('.site-header');
  const scroll=()=>header.classList.toggle('is-scrolled',window.scrollY>24);scroll();window.addEventListener('scroll',scroll,{passive:true});
})();
