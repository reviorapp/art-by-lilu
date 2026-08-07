# Flora Nocturna

Statična HTML stranica spremna za GitHub i Hostinger.

## Lokalno uređivanje

- HTML stranice su u korijenu projekta.
- Stilovi i slike nalaze se u mapi `assets/`.
- Osnovni podaci o brendu i kontaktu nalaze se u `site.json`.

Za lokalni pregled dovoljno je otvoriti `cvjecarna-elegant.html` u pregledniku. Ako koristite VS Code, proširenje Live Server omogućuje automatsko osvježavanje pri izmjenama.

## GitHub

Repozitorij je inicijaliziran lokalno. Nakon što kreirate prazan GitHub repozitorij, povežite ga i pošaljite datoteke:

```bash
git add .
git commit -m "Initial static website"
git branch -M main
git remote add origin https://github.com/KORISNIK/NAZIV-REPOZITORIJA.git
git push -u origin main
```

## Hostinger

U Hostinger File Manageru otvorite `public_html` domene i učitajte HTML datoteke te cijelu mapu `assets`. Početna datoteka trenutačno je `cvjecarna-elegant.html`; za standardnu početnu stranicu na domeni preimenujte je u `index.html` prije učitavanja.
