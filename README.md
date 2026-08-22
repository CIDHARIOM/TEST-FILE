# Projector Viewer

यह एक छोटा, upload-safe static project है। इसमें artwork को local relative path से दिखाया गया है—किसी external CDN, encoded string या encrypted source की जरूरत नहीं है।

## समस्या क्या थी?

- `assets/images/file.png` **PNG image** है, source-code file नहीं। PNG binary format में होती है, इसलिए GitHub का code view उसे text की तरह नहीं दिखा सकता। यह encryption नहीं है।
- `assets/images/Y` केवल एक खाली line वाली file थी। उसमें कोई code या useful content नहीं था, इसलिए उसे हटाया गया।
- Repository में पहले कोई `index.html`, stylesheet या application code नहीं था। केवल image upload करने से website अपने-आप नहीं बनती।

## क्या समाधान किया गया?

- `index.html`, `styles.css` और `script.js` जोड़े गए।
- Image को इस एक reliable local path से जोड़ा गया:

  ```html
  <img src="assets/images/file.png" alt="..." />
  ```

- Original image खोलने के लिए direct relative link भी दिया गया है।
- **Projector mode** जोड़ा गया है: page पर button दबाएँ या keyboard से `F` दबाएँ। `Esc` से fullscreen बंद किया जा सकता है।
- कोई code obfuscation, encryption, base64 embedding या external image dependency इस्तेमाल नहीं की गई।

## चलाने का तरीका

किसी local static server से project खोलें, जैसे:

```bash
python3 -m http.server 8000
```

फिर browser में `http://localhost:8000` खोलें। `index.html` को सीधे double-click करके भी अक्सर page खुलेगा, लेकिन static server relative paths और GitHub Pages के व्यवहार को ठीक तरह से test करने का बेहतर तरीका है।

## GitHub पर publish करना

1. इस branch के files GitHub पर push करें।
2. Repository में **Settings → Pages** खोलें।
3. **Deploy from a branch** चुनें, branch में अपनी publish branch और folder में `/ (root)` चुनें।
4. कुछ समय बाद GitHub Pages URL पर `index.html` खुलेगा और image local path से load होगी।

ध्यान रखें: GitHub पर PNG को खोलने पर preview दिखना सामान्य है; PNG के अंदर readable source code होना अपेक्षित नहीं है। Readable code अब `index.html`, `styles.css` और `script.js` में है।
