(() => {
  const facebook = 'https://www.facebook.com/profile.php?id=61588397104480';
  const phone = '+385992443678';
  const whatsapp = `https://wa.me/385992443678?text=${encodeURIComponent('Pozdrav! Javljam se za cvjetnu dekoraciju / buket. Zanima me više informacija.')}`;
  const email = 'liluartosijek@gmail.com';
  const instagram = 'https://www.instagram.com/artby.lilu/';
  const icons = {
    whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.2.3 11.7c0 2.1.5 4.1 1.6 5.9L0 24l6.6-1.7a11.7 11.7 0 0 0 5.5 1.4h.1c6.5 0 11.7-5.2 11.7-11.7 0-3.1-1.2-6.1-3.4-8.5Zm-8.4 18.2a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 7 2.9a9.7 9.7 0 0 1 2.9 7c0 5.4-4.4 9.8-9.7 9.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.3-.6.1-.3-.2-1.2-.5-2.3-1.5a8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.3c-.2-.5-.5-.4-.7-.4H8c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.3 1.3 3.5c.2.2 2.3 3.6 5.7 5 .8.4 1.5.6 2 .8.8.2 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.1-.3-.2-.6-.4Z" fill="currentColor"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.4 0h9.2C20.7 0 24 3.3 24 7.4v9.2c0 4.1-3.3 7.4-7.4 7.4H7.4A7.4 7.4 0 0 1 0 16.6V7.4C0 3.3 3.3 0 7.4 0Zm-.3 2.4a4.7 4.7 0 0 0-4.7 4.7v9.8a4.7 4.7 0 0 0 4.7 4.7h9.8a4.7 4.7 0 0 0 4.7-4.7V7.1a4.7 4.7 0 0 0-4.7-4.7H7.1Zm9.9 1.8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 5.8A6.2 6.2 0 1 1 12 18.2 6.2 6.2 0 0 1 12 5.8Zm0 2.4a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" fill="currentColor"/></svg>'
  };
  const pages = {
    home: 'cvjecarna-elegant.html',
    offers: 'cvjecarna-elegant-ponuda.html',
    weddings: 'cvjecarna-elegant-eventi.html',
    gallery: 'cvjecarna-elegant-galerija.html',
    contact: 'cvjecarna-elegant-kontakt.html'
  };
  const photos = {
    hero: 'assets/640928472_17857543770615287_1567878988128943540_n.jpg',
    redBouquet: 'assets/643601140_17858220351615287_8730853391632610099_n.jpg',
    bridal: 'assets/657712234_17863464348615287_4015554941459233943_n.jpg',
    car: 'assets/729364231_17876768277615287_3202829515868382824_n.jpg',
    whiteEvent: 'assets/729389807_17876770614615287_112049752949017759_n.jpg',
    box: 'assets/733471444_122115310287279903_2598081713192324660_n.jpg',
    logo: 'assets/art-by-lilu-logo.png',
    pastel: 'assets/748160703_17880542340615287_8290730988075415956_n.jpg',
    whiteBouquet: 'assets/755693696_17882217282615287_7770593053072083524_n.jpg',
    floral: 'assets/756832933_17882217258615287_1813221415037102511_n.jpg'
  };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const set = (selector, value, root = document) => {
    const element = $(selector, root);
    if (element) element.innerHTML = value;
  };
  const setImages = (items) => {
    $$('main img').forEach((image, index) => {
      if (!items[index]) return;
      image.src = items[index].src;
      image.alt = items[index].alt;
    });
  };

  document.documentElement.lang = 'hr';
  $('.topline').textContent = 'Cvjetne dekoracije za vaše posebne trenutke';
  const brand = $('.brand');
  brand.innerHTML = `<img class="brand-logo" src="${photos.logo}" alt="Art by Lilu">`;
  brand.setAttribute('aria-label', 'Art by Lilu — početna');
  set('.footer-brand', `<img class="footer-logo" src="${photos.logo}" alt="Art by Lilu"><span>Cvjetni studio — Osijek</span>`);
  const footerNavs = $$('.footer-nav');
  if (footerNavs[0]) footerNavs[0].innerHTML = `<strong>Izbornik</strong><a href="${pages.home}">Početna</a><a href="${pages.offers}">Buketi</a><a href="${pages.weddings}">Vjenčanja</a><a href="${pages.gallery}">Galerija</a><a href="${pages.contact}">Kontakt</a>`;
  if (footerNavs[1]) footerNavs[1].innerHTML = `<strong>Kontakt</strong><a href="tel:${phone}">${phone.replace('+385', '+385 ')}</a><a href="mailto:${email}">${email}</a><span>Ulica Josipa Hutlera 39, Osijek</span><div class="footer-socials"><a class="social-icon" href="${whatsapp}" target="_blank" rel="noopener" aria-label="Pošaljite WhatsApp poruku">${icons.whatsapp}</a><a class="social-icon" href="${instagram}" target="_blank" rel="noopener" aria-label="Instagram Art by Lilu">${icons.instagram}</a></div>`;
  set('.footer-bottom', '<span>© 2026 Art by Lilu.</span><a class="made-by" href="https://localcraftmedia.com/" target="_blank" rel="noopener">Made by LocalCraftMedia</a><a href="' + instagram + '" target="_blank" rel="noopener">@artby.lilu</a>');

  $$('.nav-left .nav-link').forEach((link, index) => link.textContent = ['Početna', 'Buketi', 'Vjenčanja'][index]);
  $$('.nav-right .nav-link').forEach((link, index) => link.textContent = ['Galerija', 'Kontakt'][index]);
  $$('.mobile-drawer a').forEach((link, index) => link.textContent = ['Početna', 'Buketi', 'Vjenčanja', 'Galerija', 'Kontakt'][index]);
  $$('.site-header .button').forEach((link) => {
    link.textContent = 'Pošalji upit';
    link.href = whatsapp;
    link.target = '_blank';
    link.rel = 'noopener';
  });

  const header = $('.site-header');
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const file = location.pathname.split('/').pop() || pages.home;
  if (file === pages.home) {
    document.title = 'Art by Lilu | Cvjetne dekoracije Osijek';
    set('meta[name="description"]', '');
    const hero = $('.hero');
    set('.kicker', 'Cvjetne dekoracije · Osijek', hero);
    set('h1', 'Cvijeće za<br><em>vaš poseban dan.</em>', hero);
    set('.lead', 'Buketi, vjenčani detalji i dekoracije oblikovane s pažnjom za svaki trenutak koji želite pamtiti.', hero);
    const heroButtons = $$('.hero .button');
    heroButtons[0].textContent = 'Pogledaj bukete';
    heroButtons[0].href = pages.offers;
    heroButtons[1].textContent = 'Vjenčanja i dekoracije';
    heroButtons[1].href = pages.weddings;
    $$('.marquee-track span').forEach((item, index) => item.textContent = ['Buketi za sve prigode', 'Vjenčani buketi', 'Dekoracija sala', 'Cvjetni boxovi', 'Dekoracija auta', 'Dostava'][index % 6]);
    const intro = $('.intro');
    set('.kicker', 'Art by Lilu', intro);
    set('h2', 'Cvijeće koje govori umjesto vas.', intro);
    set('.statement', 'Svaka prigoda zaslužuje svoj cvjetni potpis.', intro);
    const introParagraphs = $$('p', $('.intro-copy'));
    if (introParagraphs[1]) introParagraphs[1].textContent = 'Od nježnog buketa do dekoracije cijele sale, svaki aranžman nastaje prema vašim željama, boji trenutka i detaljima koje volite.';
    set('.text-link', 'Pogledajte naše radove', intro);
    set('.signature', 'Art by Lilu');
    const editorial = $('.editorial-split');
    set('.kicker', 'Za svaki trenutak', editorial);
    set('h2', 'Cvijeće stvoreno baš za vas.', editorial);
    set('p:not(.kicker)', 'Recite nam prigodu, omiljene boje i osjećaj koji želite prenijeti. Mi ćemo oblikovati aranžman koji ostaje u sjećanju.', $('.editorial-copy'));
    set('.text-link', 'Pošaljite upit', $('.editorial-copy'));
    set('.section-head .kicker', 'Naše usluge');
    set('.section-head h2', 'Od malog znaka pažnje do velike proslave.');
    set('.section-head .text-link', 'Dogovorite dekoraciju');
    $$('.collection-caption').forEach((caption, index) => {
      const content = [
        ['01 · Za svaki dan', 'Buketi za sve prigode'],
        ['02 · Za vaše “da”', 'Vjenčani buketi'],
        ['03 · Prostor', 'Dekoracije i eventi']
      ][index];
      set('span', content[0], caption);
      set('h3', content[1], caption);
    });
    set('blockquote', '“Cvijeće za trenutke koji se pamte.”');
    set('cite', 'Art by Lilu · Osijek');
    setImages([
      { src: photos.hero, alt: 'Buket Art by Lilu u nježnim tonovima' },
      { src: photos.floral, alt: 'Detalj ručno izrađenog buketa' },
      { src: photos.redBouquet, alt: 'Buket za posebnu prigodu' },
      { src: photos.bridal, alt: 'Vjenčani buket' },
      { src: photos.whiteEvent, alt: 'Cvjetna dekoracija za proslavu' }
    ]);
  }

  if (file === pages.offers) {
    document.title = 'Buketi | Art by Lilu';
    const hero = $('.page-hero');
    set('.kicker', 'Buketi · Boxovi · Dostava', hero);
    set('h1', 'Cvijeće za<br><em>svaku prigodu.</em>', hero);
    set('.lead', 'Nježni, raskošni, šareni ili potpuno jednostavni — buket oblikujemo po vašoj želji.', hero);
    set('.section-head .kicker', 'Naša ponuda');
    set('.section-head h2', 'Za male i velike trenutke.');
    set('.section-head .lead', 'Naručite buket, cvjetni box ili aranžman s dostavom u Osijeku i okolici. Za točnu cijenu i termin pošaljite nam poruku.');
    const offers = [
      ['01 · Za svaki dan', 'Buketi za sve prigode', 'Buket izrađen prema prigodi, omiljenim bojama i budžetu. Savršen za rođendan, zahvalu ili samo zato.', 'Po dogovoru'],
      ['02 · Poklon s pažnjom', 'Cvjetni boxovi', 'Cvijeće u kutiji koje ostaje lijep detalj doma i nakon što prođe poseban dan.', 'Po dogovoru'],
      ['03 · Tiha uspomena', 'Vijenci i aranžmani', 'Dostojanstveni aranžmani za posljednji pozdrav, izrađeni pažljivo i s poštovanjem.', 'Po dogovoru'],
      ['04 · Dostava', 'Cvijeće na adresu', 'Dogovorite buket, poruku i adresu, a mi ćemo se pobrinuti da cvijeće stigne na vrijeme.', 'Po dogovoru']
    ];
    $$('.offer-row').forEach((row, index) => {
      const item = offers[index];
      set('.tag', item[0], row); set('h3', item[1], row); set('p', item[2], row); set('.price', item[3], row);
    });
    set('.image-story-copy .kicker', 'Kako naručiti');
    set('.image-story-copy h2', 'Recite nam što zamišljate.');
    set('.image-story-copy p:not(.kicker)', 'Pošaljite nam poruku s prigodom, željenom paletom, okvirnim budžetom i datumom dostave. Javljamo vam se s prijedlogom.');
    const button = $('.image-story-copy .button');
    button.textContent = 'Pošalji poruku'; button.href = whatsapp; button.target = '_blank'; button.rel = 'noopener';
    setImages([{ src: photos.redBouquet, alt: 'Buket Art by Lilu' }, { src: photos.box, alt: 'Cvjetni box Art by Lilu' }]);
  }

  if (file === pages.weddings) {
    document.title = 'Vjenčanja i dekoracije | Art by Lilu';
    const hero = $('.page-hero');
    set('.kicker', 'Vjenčanja · Svečane sale · Auto', hero);
    set('h1', 'Detalji koji<br><em>čine razliku.</em>', hero);
    set('.lead', 'Od vjenčanog buketa do dekoracije prostora — zajedno stvaramo cvjetnu priču za vaš dan.', hero);
    const intro = $('.intro');
    set('.kicker', 'Naš pristup', intro);
    set('h2', 'Vaš dan, vaša priča, vaše cvijeće.', intro);
    set('.statement', 'Svaki detalj usklađujemo s vašim stilom, prostorom i bojama koje volite.', intro);
    const introP = $$('p', $('.intro-copy'));
    if (introP[1]) introP[1].textContent = 'Izrađujemo vjenčane bukete, revere, dekoracije svečanih sala, stolova i automobila. Sve dogovaramo jasno i s puno pažnje prema vašoj viziji.';
    set('.image-story-copy .kicker', 'Vjenčanja');
    set('.image-story-copy h2', 'Od buketa do cijelog slavlja.');
    set('.image-story-copy p:not(.kicker)', 'Cvijeće za mladence, kumove, ceremoniju, stolove i ulaz u salu — povezano u jednu nježnu, skladnu cjelinu.');
    set('.section-head .kicker', 'Od prve poruke do zadnjeg detalja');
    set('.section-head h2', 'Jednostavan dogovor za miran dan.');
    const steps = [
      ['Upoznajmo se', 'Datum, lokacija, boje i detalji koje zamišljate.'],
      ['Vaša paleta', 'Dogovaramo cvijeće, stil i okvirni budžet.'],
      ['Priprema', 'Izrađujemo svaki buket, rever i dekoraciju s pažnjom.'],
      ['Postavljanje', 'Dostavljamo i uređujemo prostor da vi možete samo uživati.']
    ];
    $$('.process-step').forEach((step, index) => { set('h3', steps[index][0], step); set('p', steps[index][1], step); });
    const editorial = $('.editorial-split');
    set('.kicker', 'Dekoracije prostora', editorial);
    set('h2', 'Prostor u kojem cvijeće ima glavnu riječ.', editorial);
    set('p:not(.kicker)', 'Svečane sale, stolovi, automobili i male zone za fotografiranje — cvjetne detalje prilagođavamo baš vašoj proslavi.', $('.editorial-copy'));
    set('.text-link', 'Pošaljite upit', $('.editorial-copy'));
    setImages([
      { src: photos.whiteEvent, alt: 'Dekoracija svečane sale' },
      { src: photos.bridal, alt: 'Vjenčani buket Art by Lilu' },
      { src: photos.whiteEvent, alt: 'Dekoracija vjenčanja' },
      { src: photos.car, alt: 'Dekoracija automobila za vjenčanje' }
    ]);
  }

  if (file === pages.gallery) {
    document.title = 'Galerija | Art by Lilu';
    const hero = $('.page-hero');
    set('.kicker', 'Galerija · Odabrani radovi', hero);
    set('h1', 'Cvijeće za<br><em>posebne trenutke.</em>', hero);
    set('.journal-intro .kicker', 'Art by Lilu');
    set('.journal-intro h2', 'Buketi, proslave i detalji koje volimo stvarati.');
    setImages([
      { src: photos.redBouquet, alt: 'Raskošni buket' },
      { src: photos.box, alt: 'Cvjetni box' },
      { src: photos.whiteEvent, alt: 'Dekoracija svadbene sale' },
      { src: photos.floral, alt: 'Cvjetni detalj' },
      { src: photos.car, alt: 'Dekoracija automobila' },
      { src: photos.pastel, alt: 'Cvjetni box u pastelnim tonovima' },
      { src: photos.bridal, alt: 'Vjenčani buket' },
      { src: photos.whiteBouquet, alt: 'Bijeli buket' }
    ]);
    $$('.gallery-label').forEach((label, index) => set('span:first-child', ['Buketi za prigode', 'Cvjetni boxovi', 'Dekoracije sala', 'Nježni detalji', 'Vjenčanja'][index] || 'Art by Lilu', label));
    $$('.journal-card').forEach((card, index) => {
      set('.meta', ['Buketi', 'Vjenčanja', 'Detalji'][index], card);
      set('h3', ['Cvijeće koje nosi poruku', 'Dekoracije za vaš najljepši dan', 'Kombinacije boja koje volimo'][index], card);
    });
  }

  if (file === pages.contact) {
    document.title = 'Kontakt | Art by Lilu';
    const hero = $('.page-hero');
    set('.kicker', 'Kontakt · Narudžbe · Dekoracije', hero);
    set('h1', 'Javite se za<br><em>svoj poseban trenutak.</em>', hero);
    set('.lead', 'Za buket, dostavu ili dekoraciju vjenčanja pošaljite nam WhatsApp poruku.', hero);
    const details = $('.contact-details');
    set('.kicker', 'Art by Lilu · Osijek', details);
    set('h2', 'Krenimo od vaše ideje.', details);
    set('.lead', 'Napišite nam prigodu, datum i kakvo cvijeće volite. Javljamo vam se s prijedlogom i dogovorom.', details);
    set('.contact-list', `<li><span>Telefon</span><a href="tel:${phone}">${phone.replace('+385', '+385 ')}</a></li><li><span>E-mail</span><a href="mailto:${email}">${email}</a></li><li><span>Adresa</span><strong>Ulica Josipa Hutlera 39, Osijek</strong></li><li><span>Instagram</span><a href="${instagram}" target="_blank" rel="noopener">@artby.lilu</a></li>`, details);
    const form = $('.contact-form');
    form.action = whatsapp; form.method = 'get'; form.target = '_blank';
    set('.field:nth-child(4) select', '<option>Buket za prigodu</option><option>Vjenčani buket i reveri</option><option>Dekoracija svečane sale</option><option>Dekoracija auta</option><option>Vijenac ili aranžman</option><option>Usluga dostave</option>', form);
    set('.form-note', 'Klikom na “Pošalji upit” svi podaci iz obrasca automatski će se prenijeti u WhatsApp poruku.', form);
    set('.button', 'Pošalji upit na WhatsApp', form);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const date = data.get('datum');
      const formattedDate = date ? new Intl.DateTimeFormat('hr-HR').format(new Date(`${date}T12:00:00`)) : 'Nije naveden';
      const message = [
        'Pozdrav! Šaljem upit preko web-stranice Art by Lilu.',
        '',
        `Ime i prezime: ${data.get('ime') || 'Nije navedeno'}`,
        `E-mail: ${data.get('email') || 'Nije naveden'}`,
        `Telefon: ${data.get('telefon') || 'Nije naveden'}`,
        `Zanima me: ${data.get('usluga') || 'Nije odabrano'}`,
        `Željeni datum: ${formattedDate}`,
        `Okvirni budžet: ${data.get('budzet') || 'Nije naveden'}`,
        `Poruka: ${data.get('poruka') || 'Nema dodatne poruke'}`
      ].join('\n');
      window.open(`https://wa.me/385992443678?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    });
    const editorial = $('.editorial-split');
    set('.kicker', 'Dogovorite svoj termin', editorial);
    set('h2', 'Cvijeće za svaki trenutak koji je vama važan.', editorial);
    set('p:not(.kicker)', 'Za manje bukete, dostavu i veće dekoracije najbolje nam je javiti se unaprijed kako bismo sve pripremili baš po vašoj želji.', $('.editorial-copy'));
    const link = $('.editorial-copy .text-link'); link.textContent = 'Pošalji WhatsApp poruku'; link.href = whatsapp; link.target = '_blank'; link.rel = 'noopener';
    setImages([{ src: photos.whiteEvent, alt: 'Dekoracija Art by Lilu' }]);
  }
})();
