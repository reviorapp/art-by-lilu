# Vaš predložak

Otvorite **site-config.js**. To je jedina datoteka za personalizaciju sadržaja.

1. `business`: naziv (`name`), grad (`city`), kratki opis, telefon, e-mail, adresa i društvene mreže. Prazan `logo` prikazuje naziv tekstom; za logo upišite npr. `assets/moj-logo.png`.
2. `images`: kopirajte svoje fotografije u mapu `assets`, pa promijenite `src` i opis slike `alt`. `home_hero` je velika početna slika. Jedna fotografija može se koristiti na više stranica; promjena se primjenjuje svugdje.
3. `theme`: glavne boje u obliku `#697463`.
4. `navigation`: nazivi stavki izbornika.
5. `services`: usluge za pokretnu traku i izbor u kontaktnom obrascu.
6. `pages`: tekstovi svake stranice. `home` je početna, `offers` ponuda, `weddings` usluge, `gallery` galerija, `contact` kontakt. Ovdje mijenjate i opise/naslove kartica ponude. Ne mijenjajte nazive polja, nego vrijednosti desno od njih. `<br>` označava novi red, a `<em>tekst</em>` naglašeni dio naslova.

`{name}` i `{city}` automatski preuzimaju naziv i grad iz `business`.

Spremite datoteku i osvježite stranicu. Otvorite `index.html` dvostrukim klikom ili u ovoj mapi pokrenite `npm run dev` za lokalni pregled. Nije potrebna izgradnja projekta.

Telefon unesite s međunarodnim prefiksom, npr. `+385...`. Bez telefona obrazac je isključen. S telefonom otvara sastavljeni upit u WhatsAppu, gdje ga posjetitelj sam šalje. Nema slanja e-maila ni baze podataka.

Fotografije su ostavljene kao primjeri iz prethodnog projekta. Zamijenite ih za konkretnog klijenta. Ovo je i dalje cvjetni/lifestyle raspored; za drugu djelatnost prilagodite tekstove svih stranica, uključujući ponudu.

Za novog potencijalnog klijenta kopirajte cijelu mapu predloška i uredite njegov `site-config.js`. Nazivi HTML datoteka zadržani su radi postojećih poveznica.

`site.json` više ne sadrži poslovne podatke. Aktivna konfiguracija je `site-config.js`.

Napomena: podaci za prikaz učitavaju se JavaScriptom. Prije javne objave zasebno pripremite statičke SEO i društvene metapodatke za odabranog klijenta; ovaj predložak služi brzom pregledu.
