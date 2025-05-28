# AJAX Exercises
---
## 1. Using the cd_catalog.xml file and the following code:
## cd_catalog.xml
## https://www.w3schools.com/js/cd_catalog.xml
## AJAX example
## https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_xml2

## The code must include information about country, company, price and year.
## Using a div element, show the same information.
## Hint: In order to create a table using “div” tags, you can use a table generator like this: https://divtable.com/generator/

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<style>

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 5px;
  text-align: left;
}

.divTable {
  display: table;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
  border: 1px solid black;
}
.divTableRow {
  display: table-row;
}
.divTableHeading {
  display: table-header-group;
  background-color: #f2f2f2;
  font-weight: bold;
}
.divTableCell, .divTableHead {
  display: table-cell;
  border: 1px solid black;
  padding: 5px 10px;
  vertical-align: middle;
}

.cdCard {
  border: 1px solid #333;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 500px;
  background: #fafafa;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
}
.cdCard h3 {
  margin: 0 0 5px 0;
}
.cdCard p {
  margin: 3px 0;
  font-size: 0.9em;
  color: #555;
}
</style>
<title>Catálogo de CDs</title>
</head>
<body>

<h2>Catálogo de CDs (tabla tradicional)</h2>
<button onclick="loadDoc()">Cargar colección de CDs</button>
<br><br>
<table id="demoTable"></table>

<h2>Catálogo de CDs (tabla con divs)</h2>
<div id="demoDivTable" class="divTable"></div>

<h2>Catálogo de CDs (lista en divs)</h2>
<div id="demoDivList"></div>

<script>
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    if (this.status === 200) {
      const xml = this.responseXML;
      if (xml) {
        displayTable(xml);
        displayDivTable(xml);
        displayDivList(xml);
      } else {
        alert("Error: No se pudo cargar el XML");
      }
    } else {
      alert("Error al cargar el archivo XML");
    }
  }
  xhttp.open("GET", "cd_catalog.xml", true);
  xhttp.send();
}

function displayTable(xmlDoc) {
  const cds = xmlDoc.getElementsByTagName("CD");
  let table = "<tr>" +
              "<th>Artista</th>" +
              "<th>Título</th>" +
              "<th>País</th>" +
              "<th>Compañía</th>" +
              "<th>Precio</th>" +
              "<th>Año</th>" +
              "</tr>";
  for (let i = 0; i < cds.length; i++) {
    table += "<tr>" +
      "<td>" + cds[i].getElementsByTagName("ARTIST")[0].textContent + "</td>" +
      "<td>" + cds[i].getElementsByTagName("TITLE")[0].textContent + "</td>" +
      "<td>" + cds[i].getElementsByTagName("COUNTRY")[0].textContent + "</td>" +
      "<td>" + cds[i].getElementsByTagName("COMPANY")[0].textContent + "</td>" +
      "<td>" + cds[i].getElementsByTagName("PRICE")[0].textContent + "</td>" +
      "<td>" + cds[i].getElementsByTagName("YEAR")[0].textContent + "</td>" +
      "</tr>";
  }
  document.getElementById("demoTable").innerHTML = table;
}

function displayDivTable(xmlDoc) {
  const cds = xmlDoc.getElementsByTagName("CD");
  let divTable = "";

  divTable += "<div class='divTableRow divTableHeading'>" +
              "<div class='divTableHead'>Artista</div>" +
              "<div class='divTableHead'>Título</div>" +
              "<div class='divTableHead'>País</div>" +
              "<div class='divTableHead'>Compañía</div>" +
              "<div class='divTableHead'>Precio</div>" +
              "<div class='divTableHead'>Año</div>" +
              "</div>";

  for (let i = 0; i < cds.length; i++) {
    divTable += "<div class='divTableRow'>" +
                "<div class='divTableCell'>" + cds[i].getElementsByTagName("ARTIST")[0].textContent + "</div>" +
                "<div class='divTableCell'>" + cds[i].getElementsByTagName("TITLE")[0].textContent + "</div>" +
                "<div class='divTableCell'>" + cds[i].getElementsByTagName("COUNTRY")[0].textContent + "</div>" +
                "<div class='divTableCell'>" + cds[i].getElementsByTagName("COMPANY")[0].textContent + "</div>" +
                "<div class='divTableCell'>" + cds[i].getElementsByTagName("PRICE")[0].textContent + "</div>" +
                "<div class='divTableCell'>" + cds[i].getElementsByTagName("YEAR")[0].textContent + "</div>" +
                "</div>";
  }
  document.getElementById("demoDivTable").innerHTML = divTable;
}

function displayDivList(xmlDoc) {
  const cds = xmlDoc.getElementsByTagName("CD");
  let html = "";
  for (let i = 0; i < cds.length; i++) {
    const artist = cds[i].getElementsByTagName("ARTIST")[0].textContent;
    const title = cds[i].getElementsByTagName("TITLE")[0].textContent;
    const country = cds[i].getElementsByTagName("COUNTRY")[0].textContent;
    const company = cds[i].getElementsByTagName("COMPANY")[0].textContent;
    const price = cds[i].getElementsByTagName("PRICE")[0].textContent;
    const year = cds[i].getElementsByTagName("YEAR")[0].textContent;

    html += `<div class="cdCard">
              <h3>${title} - ${artist}</h3>
              <p><strong>País:</strong> ${country}</p>
              <p><strong>Compañía:</strong> ${company}</p>
              <p><strong>Precio:</strong> $${price}</p>
              <p><strong>Año:</strong> ${year}</p>
             </div>`;
  }
  document.getElementById("demoDivList").innerHTML = html;
}
</script>

</body>
</html>

```
---
## 2. Escribe un programa que muestre información meteorológica de una localidad de Huelva (o cualquier otra provincia de tu elección): temperatura máxima y mínima, estado del cielo por tramo horario, dirección y velocidad del viento y humedad relativa).

### Para acceder a datos meteorológicas vamos a usar la siguiente url:

#### http://www.aemet.es/xml/municipios/localidad_21041.xml (Huelva capital)
#### http://www.aemet.es/xml/municipios/localidad_21002.xml (Aljaraque)
#### http://www.aemet.es/xml/municipios/localidad_21021.xml (Cartaya) ...

### Para mostrar datos de un municipio debe incluir en la url el còdigo INE de localidad.

### Nota: El código INE está accesible en la siguiente dirección:

#### https://www.ine.es/daco/daco42/codmun/codmunmapa.htm




### Nota adicional: La Aemet cuenta con un servicio de datos abiertos que puedes consultar en la siguiente dirección:

#### opendata aemet
#### http://www.aemet.es/es/datos_abiertos/AEMET_OpenData
