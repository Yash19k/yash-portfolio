# Self-hosted fonts

Variable WOFF2 files downloaded from Google Fonts (latin and latin-ext subsets only).
The `@font-face` rules live in `src/styles/fonts.css`.

| Family         | Weights | License                                                        |
| -------------- | ------- | -------------------------------------------------------------- |
| Geist          | 100–900 | [SIL OFL 1.1](https://github.com/vercel/geist-font/blob/main/OFL.txt) |
| Space Grotesk  | 300–700 | [SIL OFL 1.1](https://github.com/floriankarsten/space-grotesk/blob/master/OFL.txt) |
| JetBrains Mono | 400–700 | [SIL OFL 1.1](https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt) |

No font is preloaded: in a throttled mobile test, preloading `geist-latin.woff2` competed with the
render-blocking CSS and delayed first paint by about 160 ms.
