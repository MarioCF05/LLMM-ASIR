## Comandos usados:

Comando | Uso
'console.log("Título:", document.title);' | Conseguir el titulo
'console.log("Imágenes:");
[...document.images].forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.src}`);
});' | Consegue las imagenes
'console.log("Enlaces:");
[...document.links].forEach((link, i) => {
  console.log(`  ${i + 1}. ${link.href}`);
});' | Consegue los enlaces
