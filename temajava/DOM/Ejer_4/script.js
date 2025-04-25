console.log("Título:", document.title);

console.log("Imágenes:");
[...document.images].forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.src}`);
});

console.log("Enlaces:");
[...document.links].forEach((link, i) => {
  console.log(`  ${i + 1}. ${link.href}`);
});
