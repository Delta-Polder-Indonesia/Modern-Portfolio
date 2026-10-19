# Laporan Review & Audit — Modern Portfolio

Tanggal: 19 Oktober 2026
Cakupan: seluruh halaman (`/`, `/about`, `/services`, `/work`, `/testimonials`, `/contact`, 404), komponen, CSS, API kontak, konfigurasi build/deploy.

## Ringkasan

Audit menemukan **1 bug fatal** (form kontak tidak pernah bisa mengirim pesan), **beberapa bug logika/UX**, **masalah responsif di layar kecil & landscape**, serta **pelanggaran aksesibilitas**. Semua poin di bawah sudah diperbaiki dan diverifikasi ulang dengan browser headless (Chromium) pada 6+ ukuran viewport, axe-core (WCAG 2.1 AA), serta uji interaksi otomatis.

| Status verifikasi | Hasil |
| --- | --- |
| `tsc --noEmit` | ✅ 0 error |
| `eslint .` | ✅ 0 error / 0 warning |
| `next build` (server) | ✅ sukses, `/api/contact` terdaftar sebagai route dinamis |
| `next build` (static export + basePath) | ✅ sukses, semua aset & navigasi benar di `/Modern-Portfolio/` |
| axe-core WCAG 2.1 A/AA | ✅ 0 violation di 7 halaman × 2 viewport |
| Uji interaksi (klik semua nav, tab About, slider, pagination, arrow, validasi form) | ✅ lulus |
| Horizontal overflow di semua halaman | ✅ tidak ada (termasuk 360 px & landscape) |

---

## Bug kritis & logika yang diperbaiki

1. **API kontak tidak pernah aktif (fatal).**
   Route berada di `app/_api/contact/route.ts`. Folder berawalan garis bawah adalah *private folder* di Next.js App Router, sehingga endpoint tidak dibuat. Form memanggil `/api/contact` → 404, jadi pesan tidak pernah terkirim.
   → Dipindah ke `app/api/contact/route.ts`, dan URL-nya kini mengikuti base path.

2. **Build gagal saat offline / tanpa akses Google Fonts.**
   `next/font/google` (Sora) membutuhkan jaringan saat build.
   → Diganti dengan `@fontsource-variable/sora` (self-hosted, variable font 100–800, tanpa request eksternal, tanpa layout shift).

3. **Kontak "diam-diam rusak" pada static export (GitHub Pages).**
   Static export tidak punya API route; form akan selalu gagal, halaman hanya menampilkan "Contact form is currently unavailable".
   → Sekarang: mode server memakai `/api/contact`; mode static export menampilkan fallback ramah dengan `mailto:` (atau `NEXT_PUBLIC_CONTACT_ENDPOINT` bila diset). `NEXT_PUBLIC_STATIC_EXPORT=1` mengaktifkannya.

4. **Navigasi `<Link>` tidak jalan pada build static (Next.js 16.4).**
   Terverifikasi lewat uji klik: URL tidak berubah walau sudah ter-hydrate, dan hanya muncul error `net::ERR_ABORTED`. Ini regresi router-cache pada `output: "export"` saat prefetch aktif.
   → Prefetch dimatikan khusus deployment statis (`SHOULD_PREFETCH`), normal di dev/server. Semua link (nav, logo, CTA, kartu layanan, 404) diuji ulang: navigasi + tombol back/forward bekerja.

5. **Lebar viewport "bocor" di halaman About (mobile).**
   Gambar `Circles` (posisi `-right-16`) memperlebar layout menjadi 455 px pada layar 390 px sehingga nav bottom dihitung dari viewport yang salah dan elemen dekoratif memicu scroll horizontal.
   → Dekorasi dibungkus kontainer `fixed inset-0 overflow-hidden` (tidak memengaruhi layout), animasi slide About diberi klip horizontal. Lebar viewport kini tepat 100%.

6. **Konten terpotong / tidak bisa di-scroll di layar kecil.**
   `body` memakai `overflow-hidden`, beberapa halaman mengandalkan `py` besar, `absolute` + transform, dan tinggi tetap (`h-120`).
   → `.page` menjadi `h-dvh` + scroll vertikal; konten memakai `pt/pb` yang sadar header & nav; `justify-center-safe`/`items-center-safe` mencegah konten jatuh keluar layar saat ruang sempit; tinggi tetap diganti `min-h`.

7. **Halaman About tidak bisa dicapai di layar pendek & landscape.**
   Header dua baris + nav bottom + padding besar membuat konten bergeser ke atas/bawah.
   → Padding responsif, header dirapatkan pada `max-height: 520px` landscape, dan area konten memakai safe centering.

8. **Tidak ada dukungan `prefers-reduced-motion`.**
   → `MotionConfig reducedMotion="user"` + CSS media query; animasi dekoratif dinonaktifkan untuk pengguna yang memintanya.

9. **Form kontak: pengalaman submit kurang jelas.**
   Tombol tidak punya state fokus terlihat, `autocomplete` dimatikan seluruhnya, dan tidak ada indikator disabled.
   → `autoComplete` per-field, ring fokus, `disabled:opacity-60`, serta animasi tombol juga dipicu keyboard (`group-focus-visible`).

10. **Textarea tidak menyesuaikan tinggi dengan benar.**
    Perhitungan `max-height` dari CSS bisa `NaN` pada beberapa browser.
    → Dijaga dengan `Number.isFinite`, tinggi dibatasi dan `overflow-y: auto` saat mencapai maksimum.

11. **Konten salah ketik & metadata.**
    "I begin" → "I began", "collabrated" → "collaborated"; metadata Open Graph, `theme-color`, manifest, sitemap, robots, dan favicon sadar base path ditambahkan.

---

## Perbaikan responsif

- Nav bawah: `pointer-events-none` pada pembungkus (tidak lagi memblokir klik konten di belakangnya), item 40×40 px (target sentuh memadai), `pb-[env(safe-area-inset-bottom)]` untuk iPhone, indikator halaman aktif memakai `aria-current`.
- Header: logo & sosial menyesuaikan lebar, padding mengecil di layar kecil, tidak menumpuk konten.
- Hero: CTA "My Projects" tetap terlihat di portrait, avatar/partikel hanya dimuat di `xl` (mobile tidak lagi memuat gambar 1,6 MB yang tak terlihat).
- Kartu Work: overlay gradasi dibuat dari bawah pada mobile sehingga label "LIVE PROJECT" terbaca; pada desktop tetap efek hover.
- Slider Service & Work: layout kartu, jarak, dan tipografi disesuaikan untuk 320–1920 px; link kartu kini benar-benar bisa diklik (sebelumnya hanya `cursor-pointer`).
- Testimonial: panah navigasi diberi latar & ukuran tetap, padding slide dikurangi di mobile agar teks tidak sempit.
- Halaman Contact: input Name/E-mail tetap berdampingan dengan `min-w-0`, fallback e-mail rapi, dan tidak ada nested scroll container.
- Dekorasi (Bulb/Circles/TopLeft) disembunyikan di bawah `md` agar tidak menutupi konten dan tidak memicu overflow.
- 404 & error boundary baru dengan bahasa desain yang sama.

---

## Aksesibilitas (axe-core: 0 violation)

- `lang="en"`, landmark `main`, skip-link "Skip to content".
- Semua ikon dinamis diberi `aria-hidden`; social link punya `sr-only` + `title`.
- Tab About kini `<button role="tab">` dengan `aria-selected`, `aria-controls`, roving `tabIndex`, dan navigasi panah kiri/kanan.
- Slider: tautan kartu tidak lagi memakai `aria-label` yang menimpa teks terlihat (menghilangkan `label-content-name-mismatch`).
- Fokus keyboard terlihat di semua kontrol (`focus-visible` ring).
- `prefers-reduced-motion` dihormati.
- Teks putih di atas background gelap tetap memenuhi kontras AA.

---

## Pengujian yang dijalankan

- Viewport: 360×640, 375×667, 390×844, 844×390 (landscape), 768×1024, 1024×768, 1280×720, 1440×900, 1920×1080.
- Semua rute dibuka, dicek: heading, scroll width/height, posisi nav, dan overflow elemen.
- Klik berurutan semua item nav, logo, CTA projects; back/forward browser.
- Tab About diklik satu per satu + keyboard ArrowRight/ArrowLeft.
- Slider Service (pagination), Work (pagination), Testimonial (arrow) — slide aktif berubah.
- Form kontak: submit kosong → 4 pesan validasi; submit valid → payload benar (name/email/subject/message/recaptchaToken) dan field direset; respons 502 → toast error dan isi form tetap ada; state loading mengunci input & tombol.
- API: body invalid → 400, token hilang → 400, field invalid → 400, error server → 500 dengan pesan JSON.
- Static export: diuji di server statis dengan base path `/Modern-Portfolio`, semua aset 200, navigasi dan fallback kontak bekerja.
- `pnpm audit --prod`: 0 known vulnerabilities.

---

## Catatan konfigurasi untuk produksi

- Server (Netlify/Vercel): isi `RESEND_*`, `CONTACT_TO_EMAIL`, `CONTACT_SITE_URL`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY` → form aktif otomatis.
- GitHub Pages: workflow kini memakai `pnpm` + `NEXT_STATIC_EXPORT=1`; set `NEXT_PUBLIC_CONTACT_EMAIL` (repository variable `CONTACT_EMAIL`) agar fallback e-mail tampil, atau `NEXT_PUBLIC_CONTACT_ENDPOINT` ke API eksternal.
- `NEXT_PUBLIC_BASE_PATH` wajib diisi bila situs dilayani dari sub-path.
- Saat ini konten (nama, proyek, testimoni, tautan sosial) masih placeholder dari template; ganti di `app/*/page.tsx`, `components/WorkSlider.tsx`, `components/TestimonialSlider.tsx`, dan `components/Socials.tsx`.
