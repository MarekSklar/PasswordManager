# Password Manager
Node.js based application to keep your passwords safe.

## Usage
npm run dev - starts application in developing node

npm run build - translate ts code into js code

npm run dev-b - starts application in developing mode with build (npm run build) before

npm run style - auto translating tailwind classes, needs to be run in separate console

## References
### AES
* [PDF: Withdrawn NIST Technical Series Publication](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf)
* [Youtube: AES Explained - Computerphile](https://www.youtube.com/watch?v=O4xNJsjtN6E)
* [Youtube: AES Explained (extra bits) - Computerphile](https://www.youtube.com/watch?v=9TYfiO__m2A)
* [Youtube: How to Design Secure Encryption - Spanning Tree](https://www.youtube.com/watch?v=C4ATDMIz5wc)
* [Youtube: AES Key Expansion - Neso Academy](https://www.youtube.com/watch?v=0RxLUf4fxs8)
* [Youtube: AES Mix Column Transformation - SK Page](https://www.youtube.com/watch?v=JWJXCWt-fJo)
* [Youtube: AES Inverse Mix Column - Chirag Bhalodia](https://www.youtube.com/watch?v=SDrzMyqi2Sc)
* [Wikipedia: Advanced Encryption Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
* [Wikipedia: Rijndael MixColumns](https://en.wikipedia.org/wiki/Rijndael_MixColumns)
* [Wikipedia: Rijndael S-box](https://en.wikipedia.org/wiki/Rijndael_S-box)

### AES - SP networks & GFs
* [Youtube: SP Networks - Computerphile](https://www.youtube.com/watch?v=DLjzI5dX8jc)
* [Youtube: Reed Solomon Encoding - Computerphile](https://www.youtube.com/watch?v=fBRMaEAFLE0)
* [Wikipedia: Finite field](https://en.wikipedia.org/wiki/Finite_field)
* [Wikipedia: Substitution–permutation network](https://en.wikipedia.org/wiki/Substitution%E2%80%93permutation_network)

### Argon2(id) & hashing
* [PDF: Argon2 hashing](https://www.cryptolux.org/images/0/0d/Argon2.pdf)
* [Wikipedia: Argon2](https://en.wikipedia.org/wiki/Argon2)
* [Wikipedia: Salt (cryptography)](https://en.wikipedia.org/wiki/Salt_(cryptography))

### Char set
* [Fileformat: complete UTF-8 list](https://www.fileformat.info/info/charset/UTF-8/list.htm)
* [Wikipedia: Hiragana](https://en.wikipedia.org/wiki/Hiragana)
* [altcodeunicode.com: Windows Alt Codes for Special Characters, Signs & Symbols](https://altcodeunicode.com/)

### Other
* [asciitable.com: ASCII table](https://www.asciitable.com/)

### Archived chatGPT chats
* [Hash Functions for Key Generation](https://chatgpt.com/share/5e6e8ac7-c2fa-4f4d-8069-957b771f13c4)
* [Argon2i vs Argon2id](https://chatgpt.com/share/17e18f54-2115-4cfe-a16f-281fc552ee05)

## Used libraries & frameworks (&1 language)
* [Typescript](https://www.typescriptlang.org/)
* [Electron](https://www.electronjs.org/)
* [Electron forge](https://www.electronforge.io/)
* [tailwindcss](https://tailwindcss.com/)
* [npmjs: argon2-browser](https://www.npmjs.com/package/argon2-browser)