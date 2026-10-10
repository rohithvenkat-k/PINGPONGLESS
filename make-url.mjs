import fs from "node:fs";
import { minify } from "html-minifier-terser";
const source = fs.readFileSync("index.html", "utf8");
const html = await minify(source, {
  collapseWhitespace: true,
  removeComments: true,
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeOptionalTags: true,
  removeEmptyAttributes: true
});
const replacements = {
  "%3A":":","%2F":"/","%3D":"=","%22":'"',
  "%3C":"<","%3E":">","%7B":"{","%7D":"}",
  "%3B":";","%2C":",","%28":"(","%29":")",
  "%2B":"+","%5B":"[","%5D":"]","%26":"&",
  "%3F":"?","%40":"@","%21":"!","%27":"' ",
  "%2A":"*","%7E":"~","%24":"$"
};
const encoded = encodeURIComponent(html).replace(
  /%(3A|2F|3D|22|3C|3E|7B|7D|3B|2C|28|29|2B|5B|5D|26|3F|40|21|27|2A|7E|24)/gi,
  m => replacements[m.toUpperCase()].trim()
);
const url = "data:text/html," + encoded;
fs.writeFileSync("game-url.txt", url);
console.log("Original HTML:", Buffer.byteLength(source), "bytes");
console.log("Minified HTML:", Buffer.byteLength(html), "bytes");
console.log("URL length:", url.length, "characters");
console.log("Target met:", url.length < 3000);
console.log("Saved to game-url.txt");
