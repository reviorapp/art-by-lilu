// OVDJE MIJENJATE PODATKE, SLIKE, BOJE I TEKSTOVE.
// Slike stavite u assets/ i ovdje upišite njihovu putanju.
// Prazan telefon znači da je slanje upita isključeno.
// {name} i {city} automatski preuzimaju naziv i grad.
window.SITE_CONFIG = {
  "business": {
    "name": "Vaš studio",
    "city": "Vaš grad",
    "tagline": "Cvjetni studio",
    "description": "Buketi, dekoracije i detalji za posebne trenutke.",
    "phone": "",
    "email": "",
    "address": "",
    "instagram": "",
    "facebook": "",
    "logo": "",
    "whatsappMessage": "Pozdrav! Zanima me više informacija o vašoj ponudi."
  },
  "theme": {
    "ink": "#282a24",
    "forest": "#697463",
    "wine": "#68725f",
    "coral": "#b8947f",
    "paper": "#eadbd2",
    "white": "#fbf7f2"
  },
  "navigation": {
    "home": "Početna",
    "offers": "Ponuda",
    "weddings": "Usluge",
    "gallery": "Galerija",
    "contact": "Kontakt"
  },
  "services": [
    "Buketi za sve prigode",
    "Vjenčani buketi",
    "Dekoracija sala",
    "Cvjetni boxovi",
    "Dekoracija auta",
    "Dostava"
  ],
  "images": {
    "home_hero": {
      "src": "assets/640928472_17857543770615287_1567878988128943540_n.jpg",
      "alt": "Buket {name} u nježnim tonovima"
    },
    "home_image_2": {
      "src": "assets/756832933_17882217258615287_1813221415037102511_n.jpg",
      "alt": "Detalj ručno izrađenog buketa"
    },
    "home_image_3": {
      "src": "assets/643601140_17858220351615287_8730853391632610099_n.jpg",
      "alt": "Buket za posebnu prigodu"
    },
    "home_image_4": {
      "src": "assets/657712234_17863464348615287_4015554941459233943_n.jpg",
      "alt": "Vjenčani buket"
    },
    "home_image_5": {
      "src": "assets/729389807_17876770614615287_112049752949017759_n.jpg",
      "alt": "Cvjetna dekoracija za proslavu"
    },
    "offers_image_2": {
      "src": "assets/733471444_122115310287279903_2598081713192324660_n.jpg",
      "alt": "Cvjetni box {name}"
    },
    "gallery_image_5": {
      "src": "assets/729364231_17876768277615287_3202829515868382824_n.jpg",
      "alt": "Dekoracija automobila"
    },
    "gallery_image_6": {
      "src": "assets/748160703_17880542340615287_8290730988075415956_n.jpg",
      "alt": "Cvjetni box u pastelnim tonovima"
    },
    "gallery_image_8": {
      "src": "assets/755693696_17882217282615287_7770593053072083524_n.jpg",
      "alt": "Bijeli buket"
    }
  },
  "pages": {
    "home": {
      "title": "Početna | {name}",
      "content": {
        "hero_kicker_1": "Cvjetne dekoracije · {city}",
        "hero_h1_2": "Cvijeće za<br><em>vaš poseban dan.</em>",
        "hero_lead_3": "Buketi, vjenčani detalji i dekoracije oblikovane s pažnjom za svaki trenutak koji želite pamtiti.",
        "hero_button_4": "Pogledaj bukete",
        "hero_button_5": "Vjenčanja i dekoracije",
        "hero_scroll-note_6": "Otkrij atelier",
        "intro_kicker_7": "{name}",
        "intro_h2_8": "Cvijeće koje govori umjesto vas.",
        "intro_statement_9": "Svaka prigoda zaslužuje svoj cvjetni potpis.",
        "intro_p_10": "Od nježnog buketa do dekoracije cijele sale, svaki aranžman nastaje prema vašim željama, boji trenutka i detaljima koje volite.",
        "intro_text-link_11": "Pogledajte naše radove",
        "editorial-split_kicker_12": "Za svaki trenutak",
        "editorial-split_h2_13": "Cvijeće stvoreno baš za vas.",
        "editorial-split_p_14": "Recite nam prigodu, omiljene boje i osjećaj koji želite prenijeti. Mi ćemo oblikovati aranžman koji ostaje u sjećanju.",
        "editorial-split_text-link_15": "Pošaljite upit",
        "collections_kicker_16": "Naše usluge",
        "collections_h2_17": "Od malog znaka pažnje do velike proslave.",
        "collections_text-link_18": "Dogovorite dekoraciju",
        "collections_span_19": "01 · Za svaki dan",
        "collections_h3_20": "Buketi za sve prigode",
        "collections_span_21": "02 · Za vaše “da”",
        "collections_h3_22": "Vjenčani buketi",
        "collections_span_23": "03 · Prostor",
        "collections_h3_24": "Dekoracije i eventi",
        "quote-band_blockquote_25": "“Cvijeće za trenutke koji se pamte.”",
        "quote-band_cite_26": "{name} · {city}"
      }
    },
    "offers": {
      "title": "Ponuda | {name}",
      "content": {
        "page-hero_kicker_1": "Buketi · Boxovi · Dostava",
        "page-hero_h1_2": "Cvijeće za<br><em>svaku prigodu.</em>",
        "page-hero_lead_3": "Nježni, raskošni, šareni ili potpuno jednostavni — buket oblikujemo po vašoj želji.",
        "offer-section_kicker_4": "Naša ponuda",
        "offer-section_h2_5": "Za male i velike trenutke.",
        "offer-section_lead_6": "Naručite buket, cvjetni box ili aranžman s dostavom u {city} i okolici. Za točnu cijenu i termin pošaljite nam poruku.",
        "offer-section_tag_7": "01 · Za svaki dan",
        "offer-section_h3_8": "Buketi za sve prigode",
        "offer-section_p_9": "Buket izrađen prema prigodi, omiljenim bojama i budžetu. Savršen za rođendan, zahvalu ili samo zato.",
        "offer-section_price_10": "Po dogovoru",
        "offer-section_tag_11": "02 · Poklon s pažnjom",
        "offer-section_h3_12": "Cvjetni boxovi",
        "offer-section_p_13": "Cvijeće u kutiji koje ostaje lijep detalj doma i nakon što prođe poseban dan.",
        "offer-section_price_14": "Po dogovoru",
        "offer-section_tag_15": "03 · Tiha uspomena",
        "offer-section_h3_16": "Vijenci i aranžmani",
        "offer-section_p_17": "Dostojanstveni aranžmani za posljednji pozdrav, izrađeni pažljivo i s poštovanjem.",
        "offer-section_price_18": "Po dogovoru",
        "offer-section_tag_19": "04 · Dostava",
        "offer-section_h3_20": "Cvijeće na adresu",
        "offer-section_p_21": "Dogovorite buket, poruku i adresu, a mi ćemo se pobrinuti da cvijeće stigne na vrijeme.",
        "offer-section_price_22": "Po dogovoru",
        "image-story_kicker_23": "Kako naručiti",
        "image-story_h2_24": "Recite nam što zamišljate.",
        "image-story_p_25": "Pošaljite nam poruku s prigodom, željenom paletom, okvirnim budžetom i datumom dostave. Javljamo vam se s prijedlogom.",
        "image-story_button_26": "Pošalji poruku"
      }
    },
    "weddings": {
      "title": "Usluge | {name}",
      "content": {
        "page-hero_kicker_1": "Vjenčanja · Svečane sale · Auto",
        "page-hero_h1_2": "Detalji koji<br><em>čine razliku.</em>",
        "page-hero_lead_3": "Od vjenčanog buketa do dekoracije prostora — zajedno stvaramo cvjetnu priču za vaš dan.",
        "intro_kicker_4": "Naš pristup",
        "intro_h2_5": "Vaš dan, vaša priča, vaše cvijeće.",
        "intro_statement_6": "Svaki detalj usklađujemo s vašim stilom, prostorom i bojama koje volite.",
        "intro_p_7": "Izrađujemo vjenčane bukete, revere, dekoracije svečanih sala, stolova i automobila. Sve dogovaramo jasno i s puno pažnje prema vašoj viziji.",
        "intro_text-link_8": "Ispričajte nam svoju ideju",
        "image-story_kicker_9": "Vjenčanja",
        "image-story_h2_10": "Od buketa do cijelog slavlja.",
        "image-story_p_11": "Cvijeće za mladence, kumove, ceremoniju, stolove i ulaz u salu — povezano u jednu nježnu, skladnu cjelinu.",
        "image-story_text-link_12": "Pogledaj odabrane proslave",
        "process-section_kicker_13": "Od prve poruke do zadnjeg detalja",
        "process-section_h2_14": "Jednostavan dogovor za miran dan.",
        "process-section_b_15": "01",
        "process-section_h3_16": "Upoznajmo se",
        "process-section_p_17": "Datum, lokacija, boje i detalji koje zamišljate.",
        "process-section_b_18": "02",
        "process-section_h3_19": "Vaša paleta",
        "process-section_p_20": "Dogovaramo cvijeće, stil i okvirni budžet.",
        "process-section_b_21": "03",
        "process-section_h3_22": "Priprema",
        "process-section_p_23": "Izrađujemo svaki buket, rever i dekoraciju s pažnjom.",
        "process-section_b_24": "04",
        "process-section_h3_25": "Postavljanje",
        "process-section_p_26": "Dostavljamo i uređujemo prostor da vi možete samo uživati.",
        "editorial-split_kicker_27": "Dekoracije prostora",
        "editorial-split_h2_28": "Prostor u kojem cvijeće ima glavnu riječ.",
        "editorial-split_p_29": "Svečane sale, stolovi, automobili i male zone za fotografiranje — cvjetne detalje prilagođavamo baš vašoj proslavi.",
        "editorial-split_text-link_30": "Pošaljite upit"
      }
    },
    "gallery": {
      "title": "Galerija | {name}",
      "content": {
        "page-hero_kicker_1": "Galerija · Odabrani radovi",
        "page-hero_h1_2": "Cvijeće za<br><em>posebne trenutke.</em>",
        "gallery-section_span_3": "Buketi za prigode",
        "gallery-section_span_4": "Cvjetni boxovi",
        "gallery-section_span_5": "Vjenčanja",
        "gallery-section_span_6": "Nježni detalji",
        "gallery-section_span_7": "Dekoracija auta",
        "journal-intro_kicker_8": "{name}",
        "journal-intro_h2_9": "Buketi, proslave i detalji koje volimo stvarati.",
        "journal-intro_meta_10": "Buketi",
        "journal-intro_h3_11": "Cvijeće koje nosi poruku",
        "journal-intro_meta_12": "Vjenčanja",
        "journal-intro_h3_13": "Dekoracije za vaš najljepši dan",
        "journal-intro_meta_14": "Detalji",
        "journal-intro_h3_15": "Kombinacije boja koje volimo"
      }
    },
    "contact": {
      "title": "Kontakt | {name}",
      "content": {
        "page-hero_kicker_1": "Kontakt · Narudžbe · Dekoracije",
        "page-hero_h1_2": "Javite se za<br><em>svoj poseban trenutak.</em>",
        "page-hero_lead_3": "Za buket, dostavu ili dekoraciju vjenčanja pošaljite nam WhatsApp poruku.",
        "contact-section_kicker_4": "{name} · {city}",
        "contact-section_h2_5": "Krenimo od vaše ideje.",
        "contact-section_lead_6": "Napišite nam prigodu, datum i kakvo cvijeće volite. Javljamo vam se s prijedlogom i dogovorom.",
        "contact-section_label_7": "Ime i prezime",
        "contact-section_label_8": "E-mail",
        "contact-section_label_9": "Telefon",
        "contact-section_label_10": "Zanima me",
        "contact-section_label_11": "Željeni datum",
        "contact-section_label_12": "Okvirni budžet",
        "contact-section_option_13": "Do 70 €",
        "contact-section_option_14": "70–150 €",
        "contact-section_option_15": "150–500 €",
        "contact-section_option_16": "500–2.000 €",
        "contact-section_option_17": "2.000 € i više",
        "contact-section_label_18": "Recite nam malo više",
        "contact-section_form-note_19": "Klikom na “Pošalji upit” svi podaci iz obrasca automatski će se prenijeti u WhatsApp poruku.",
        "editorial-split_kicker_20": "Dogovorite svoj termin",
        "editorial-split_h2_21": "Cvijeće za svaki trenutak koji je vama važan.",
        "editorial-split_p_22": "Za manje bukete, dostavu i veće dekoracije najbolje nam je javiti se unaprijed kako bismo sve pripremili baš po vašoj želji.",
        "editorial-split_text-link_23": "Pošalji WhatsApp poruku"
      }
    }
  }
};
