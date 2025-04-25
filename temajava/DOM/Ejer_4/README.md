## Comandos usados:

## Conseguir el titulo

console.log("Título:", document.title);

## Consegue las imagenes

console.log("Imágenes:");
[...document.images].forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.src}`);
});


## Consegue los enlaces

console.log("Enlaces:");
[...document.links].forEach((link, i) => {
  console.log(`  ${i + 1}. ${link.href}`);
});
