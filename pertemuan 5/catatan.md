# Modules

## Apa itu Modules di Sass?

> Modules itu merupakan teknik untuk code sass kita menjadi modular atau mudah dikelola.

## untuk menerapkan modules di sass

> Untuk menggunakan modules di sass kita butuh 2 keyword yaitu

- @import
- @use

## Modularasi File

> Ketika ingin melakukan modularisasi file diharapkan nama file nya diawali dengan \_. Contoh \_mixin.scss, untuk memberitahu sass kalo file ini bukan file utama.

## Kegunaan Modularisasi

> Modularisasi bisa juga digunakan untuk memisahkan antara mixin, pengaturan typografy, layout, dll.

## Kekurangan menggunakan @import

- Semua variable, mixin, function akan menjadi global yang mana akan mempersulit programmer pada saat project sudah besar.
- Susah ketika akan extends / pewarisan, karena bingung css yang mana.
- Kalo manggil import berulang kali, import nya akan semakin besar.

## Jika terlanjur menggunakan import sudah ada cara nya untuk migrasi dengan tool

## Kekurangan menggunakn @use

- Harus menggunakan dart sass
- Menjadi sangat ribet

> asli ribet pisan mun pake @use mah :(
