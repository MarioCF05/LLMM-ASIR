# Ejercicios XML_DOM
---

## 1. Escribe el código necesario para obtener los siguientes datos:

### 1 Título del primer libro
```javascript
console.log("Título del primer libro:");
console.log(document.getElementsByTagName("title")[0].childNodes[0].nodeValue);
```
### 2 Año del primer libro
```javascript
console.log("Año del primer libro:");
console.log(document.getElementsByTagName("year")[0].childNodes[0].nodeValue);

```
### 3 Precio del segundo libro
```javascript
console.log("Precio del segundo libro:");
console.log(document.getElementsByTagName("price")[1].childNodes[0].nodeValue);
```
### 4 Autor del primer libro
```javascript
console.log("Autor del primer libro (forma 1):");
console.log(document.getElementsByTagName("author")[0].childNodes[0].nodeValue);
```
### 5 Primer autor del tercer libro
```javascript
console.log("Primer autor del tercer libro:");
console.log(document.getElementsByTagName("book")[2].getElementsByTagName('author')[0].childNodes[0].nodeValue);
```
### 6 Segundo autor del tercer libro
```javascript
console.log("Segundo autor del tercer libro:");
console.log(document.getElementsByTagName("book")[2].getElementsByTagName('author')[1].childNodes[0].nodeValue);
```
### 7 Nombre del primer atributo del primer libro
```javascript
console.log("Nombre del primer atributo del primer libro:");
console.log(document.getElementsByTagName("book")[0].attributes[0].nodeName);
```
### 8 Valor del primer atributo del primer libro
```javascript
console.log("Valor del primer atributo del primer libro:");
console.log(document.getElementsByTagName("book")[0].attributes[0].nodeValue);
```
### 9 Número de autores del tercer libro
```javascript
console.log("Número de autores del tercer libro:");
console.log(document.getElementsByTagName("book")[2].getElementsByTagName('author').length);
```
### 10 Mostrar todos los autores del tercer libro
```javascript
console.log("Autores del tercer libro:");
let l = document.getElementsByTagName("book")[2].getElementsByTagName('author').length;
let a = document.getElementsByTagName("book")[2].getElementsByTagName('author');
for(let i = 0; i < l; i++) {
  console.log(a[i].childNodes[0].nodeValue);
}
```
### 11 Mostrar el número de atributos del cuarto libro
```javascript
console.log("Número de atributos del cuarto libro:");
console.log(document.getElementsByTagName("book")[3].attributes.length);
```
### 12 Mostrar el valor de los atributos del cuarto libro
```javascript
console.log("Valores de los atributos del cuarto libro:");
l = document.getElementsByTagName("book")[3].attributes.length;
a = document.getElementsByTagName("book")[3].attributes;
for(let i = 0; i < l; i++) {
  console.log(a[i].nodeValue);
}
```
---

## 2. Escribe el código necesario para obtener los siguientes datos:
## Haz las modificaciones necesarias para mostrar lo que se pide:
### 1 Muestra el título de los CD
### 2 Muestra el precio
### 3 Muestra la compañía
```html
<!DOCTYPE html>
<html>
<body>

<h2>Lista de CDs: Título, Precio y Compañía</h2>
<div id="demo"></div>

<script>
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
  const xmlDoc = this.responseXML;
  const cds = xmlDoc.getElementsByTagName("CD");
  let salida = "";
  
  for (let i = 0; i < cds.length; i++) {
    const titulo = cds[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
    const precio = cds[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
    const compania = cds[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue;
    
    salida += `<b>Título:</b> ${titulo} <br> <b>Precio:</b> ${precio}€ <br> <b>Compañía:</b> ${compania} <br><br>`;
  }
  
  document.getElementById("demo").innerHTML = salida;
}

xhttp.open("GET", "cd_catalog.xml", true);
xhttp.send();
</script>

</body>
</html>
```

