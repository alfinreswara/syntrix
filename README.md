# Syntrix

Landing page statis untuk **Syntrix** — platform otomatisasi workflow berbasis AI.

Dibangun dengan HTML, CSS, dan JavaScript murni (tanpa framework atau build step),
sehingga bisa langsung di-host di GitHub Pages.

## Struktur

```
.
├── index.html               # Halaman utama
├── tentang.html             # Tentang Kami
├── kontak.html              # Kontak
├── kebijakan-privasi.html   # Kebijakan Privasi
├── syarat-ketentuan.html    # Syarat & Ketentuan
├── style.css                # Styling seluruh situs
├── site.js                  # Script navigasi mobile
└── fonts/                   # DM Sans & Plus Jakarta Sans (self-hosted .ttf)
```

## Menjalankan secara lokal

```bash
python3 -m http.server 8080
```

Lalu buka <http://localhost:8080>.

## Deploy

Situs ini memakai GitHub Pages dari branch `main` (root repository).

```bash
git add .
git commit -m "Deploy Syntrix landing page"
git push origin main
```

Live URL: <https://alfinreswara.github.io/syntrix/>

## Credit

Dibuat oleh **Lanexora Market**.
