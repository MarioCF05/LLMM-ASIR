## Comandos usados:

## Conseguir el titulo

console.log("Título:", document.title);

![image](https://github.com/user-attachments/assets/02c58415-d97c-4ea2-a8a8-34a74303e338)


## Consegue las imagenes

console.log("Imágenes:");
[...document.images].forEach((img, i) => {
  console.log(`  ${i + 1}. ${img.src}`);
});

![image](https://github.com/user-attachments/assets/48908aab-7bce-46b5-be25-3064b8884f76)


## Consegue los enlaces

console.log("Enlaces:");
[...document.links].forEach((link, i) => {
  console.log(`  ${i + 1}. ${link.href}`);
});

![image](https://github.com/user-attachments/assets/60f04b9c-f924-44b0-924c-2bf3f2029ebd)

