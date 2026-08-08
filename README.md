
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

U Hostinger File Manageru otvorite `public_html` domene i učitajte HTML datoteke te cijelu mapu `assets`. Početna datoteka je `index.html`, a ona automatski otvara `art-by-lilu.html`.
