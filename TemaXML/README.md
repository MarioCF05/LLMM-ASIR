# Actividades XML - Corrección y Solución

---

## 1. Simple Questions

### a) Elemento con nombre `test_element` y contenido `"This is our first element!"`

<test_element>This is our first element!</test_element>
b) Jerarquía del elemento book con subelementos chapters y author.
author tiene los subelementos name y address.

xml
Copiar
Editar
<book>
  <chapters></chapters>
  <author>
    <name></name>
    <address></address>
  </author>
</book>
c) Elemento entry con dos atributos: no="24" y date="27.10.2004"
xml
Copiar
Editar
<entry no="24" date="27.10.2004"></entry>
2. Estructura árbol XML
Abrir el archivo Ex2.xml y analizar su estructura.
El XML describe una publicación con varios ítems de noticias, donde cada ítem incluye recursos aportados por la agencia, el editor, y la clase de artículo, junto con cabecera, texto y sumario.

3. Corrección de errores en XML
Solucionado en el archivo ex3-err.txt, donde se explican los errores originales y se muestra el XML corregido.

4. Marcado de mensaje de email
xml
Copiar
Editar
<email>
  <from>
    <name>Simon North</name>
    <address>north@synopsys.com</address>
  </from>
  <to>
    <name>Nick</name>
    <address>sintac@xs4all.nl</address>
  </to>
  <subject>Hi</subject>
  <body>
    Hi Nick, this is just a quick message to say I got the material. Thanks.
  </body>
</email>
5. Archivo XML con información de CDs
a) Solución ejercicio Ex5a.xml
xml
Copiar
Editar
<CDList>
  <CD>
    <recordName>VANITY</recordName>
    <artist>Bryant Barnes</artist>
    <category>Pop</category>
    <year>2024</year>
    <tracks>
      <track>
        <number>1</number>
        <title>Give Me A Sign</title>
        <duration>2:40</duration>
      </track>
      <track>
        <number>2</number>
        <title>Want You All The Time</title>
        <duration>2:22</duration>
      </track>
    </tracks>
  </CD>
</CDList>
b) Solución ejercicio Ex5b.xml
xml
Copiar
Editar
<CDList>
  <CD serial="X34B45" disc-length="18:29">
    <recordName>VANITY</recordName>
    <artist>Bryant Barnes</artist>
    <category>Pop</category>
    <year>2000</year>
    <tracks>
      <track number="1" duration="2:40">Give Me A Sign</track>
      <track number="2" duration="2:22">Want You All The Time</track>
    </tracks>
  </CD>
</CDList>
6. Plantilla XML para una carta
xml
Copiar
Editar
<letter>
  <sender>
    <name>Juan Pepito</name>
    <address>Av. Siempre Viva 123, Manzote</address>
  </sender>
  <receiver>
    <name>Manuel Gómez</name>
    <address>Calle Falsa 42, Sevilla</address>
  </receiver>
  <date>2025-05-12</date>
  <body>
    Estimado Manuel:
    Espero que estés bien. Solo quería saludarte y enviarte mis mejores deseos.
  </body>
  <signature>Juan</signature>
</letter>
7. Estándar XML
a) ¿Cómo se ven los comentarios en XML?
xml
Copiar
Editar
<!-- Esto es un comentario -->
b) ¿Puede repetirse un atributo dentro del mismo elemento?
No. Un atributo no puede repetirse dentro del mismo elemento. Cada atributo debe ser único.

c) ¿Dónde se indica que los nombres de etiquetas de apertura y cierre deben coincidir?
En la sección 3.1 del estándar XML se establece que los nombres de las etiquetas de apertura y cierre deben coincidir exactamente, incluyendo mayúsculas y minúsculas.
