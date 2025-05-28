# Ejercicios XML - Soluciones Completas

Este repositorio contiene las soluciones completas para los ejercicios de XML, incluyendo todos los ejemplos y estructuras corregidas.

---

## 1. Simple questions:

### a) How should an element with the name test element and the content "This is our first element!" look?

```xml
<test_element>This is our first element!</test_element>
```

### b) Please show (in xml-syntax) the hierarchy of the element book with the subelements chapters and author.  author has the further subelements name and address.

```xml
<book>
  <chapters></chapters>
  <author>
    <name></name>
    <address></address>
  </author>
</book>
```

### c) How does an element with the name entry which has got 2 attributes: no with the value 24 and date with the value 27.10.2004 look?

```xml
<entry no="24" date="27.10.2004">
</entry>
```

## 2. XML tree structures
### Analyse the XML file below
```xml
<?xml version='1.0' encoding='UTF-8' standalone='yes'?>
<publication>
 <newsitem>
  <source>
   <agency>STT</agency>
   <editor>Miller</editor>
  </source>
  <class>local</class>
  <article>
   <heading>Snowstorms in Lappland</heading>
   <text>snow.html</text>
   <summary>snowx.html</summary>
  </article>
 </newsitem>
</publication>
```

### Create the file and save as Ex2.xml. Open the file with a web browser

![IMG_0147](https://github.com/user-attachments/assets/3ef2bbf5-0119-496f-a599-66509d45795d)

## 3. XML structure
### Analyse the following XML file. Correct errors in design.
```xml
<?xml version='1.0' encoding='UTF-8'?>
<phonebook>
 <company>
  <cname>Microsoft</cname>
  <exchange>09-999000</exchange>
 </company>
 <president>Bill Gates
 <extension>09-9990011</president></extension>
 <secretary>Katharine Finch <extension>09-9990012</secretary></extension>
 <company>
  <cname>Oracle</cname>
  <exchange>09-888000</exchange>
 </company>
 <president>Larry Ellison
 <extension>09-8880011</president></extension>
 <secretary>Helen Calhoun
 <extension>09-8880012</secretary></extension>
</phonebook>
```
### Create a file called ex3-err.txt and write down every mistake and correction.

#### CORREGIDO
```xml
<?xml version='1.0' encoding='UTF-8'?>
<phonebook>
  <company>
    <cname>Microsoft</cname>
    <exchange>09-999000</exchange>
    <president>
      <name>Bill Gates</name>
      <extension>09-9990011</extension>
    </president>
    <secretary>
      <name>Katharine Finch</name>
      <extension>09-9990012</extension>
    </secretary>
  </company>
  <company>
    <cname>Oracle</cname>
    <exchange>09-888000</exchange>
    <president>
      <name>Larry Ellison</name>
      <extension>09-8880011</extension>
    </president>
    <secretary>
      <name>Helen Calhoun</name>
      <extension>09-8880012</extension>
    </secretary>
  </company>
</phonebook>
```
#### Errores

El XML original tiene errores de diseño porque las etiquetas están mal anidadas, cerrando elementos en un orden incorrecto, además los elementos president y secretary están fuera de la estructura lógica del company al que pertenecen. También mezcla texto con subelementos sin delimitar claramente la información, lo que dificulta su interpretación y validación. Para corregirlo, es necesario respetar la jerarquía correcta, anidar bien las etiquetas cerrándolas en orden inverso, y separar claramente el nombre y la extensión en elementos distintos dentro del company.

##### Ejemplo mal anidado
```xml
<president>Bill Gates
  <extension>09-9990011</president></extension>
```
##### Correccion
```xml
<president>
  <name>Bill Gates</name>
  <extension>09-9990011</extension>
</president>
```
## 4. Mark up the following email message to identify its information content.

From: Simon North <north@synopsys.com>
To: Nick <sintac@xs4all.nl>
Subject: Hi
Hi Nick, this is just a quick message
to say I got the material. Thanks.

### Create an xml file (ex4.xml) to store the necessary information
```xml
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
```
## 5. XML file, CD information

### Plan an XML description for a music CD. You could use a root element called <CDList>. Information about the contents should include at least name of the record, artists, songs, publishing year, and music category. You can add more information e.g. about each track (number, duration, name, etc.) Plan first the tree structure of your XML data, and then find some data from the Web. Save as Ex5a.xml and test with your browser .
```xml
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
```
### Next, add some information as attributes, like below <CD serial=B6B41B disc-length='36:55'> Save as Ex5b.xml and test. Fix errors. Add the following comment: <!-- This CD has more tracks
```xml
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
```
## 6. XML: a letter template

### Create a letter structure in XML, including sender and receiver information, date, text body and a signature. Make a document instance with contents. Save your file as Ex6.xml.
```xml
<letter>
  <sender>
    <name>Ignacio</name>
    <address>Av. inventada 123, huelva</address>
  </sender>
  <receiver>
    <name>Mario</name>
    <address>Calle Falsa 42, huelva</address>
  </receiver>
  <date>2025-05-12</date>
  <body>
    Estimado Mario:
    Espero que estés bien. Solo quería confirmar el dia del ultimo examen.
  </body>
  <signature>Ignacio</signature>
</letter>
```
## 7. The XML standard

### How XML should look is described in the XML 1.0 W3C Recommendation. The language of the standard is somewhat technical and formal, but being able to read the standard yourself is quite useful. Look into the standard and answer the following questions:

#### a) What do comments look like in XML? (section 2.5)
```xml
<!-- Asin son lo comentarios -->
```
#### b) Can an attribute be repeated in the same element? (section 3.1)

No. Un atributo no puede repetirse dentro del mismo elemento. Cada atributo debe ser único.

#### c) Where is it stated that the element names in opening and closing tags must match?

En la sección 3.1 del estándar XML, que establece que los nombres de etiquetas de apertura y cierre deben coincidir exactamente, incluyendo mayúsculas y minúsculas.
