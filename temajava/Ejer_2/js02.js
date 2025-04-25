window.onload = function () {
  const boton = document.createElement("button");
  boton.textContent = "Mostrar mensaje";
  boton.onclick = function () {
    document.getElementById("demo").innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis saepe, quam quod fugiat tenetur tempore, accusamus eum optio blanditiis laudantium esse natus cum dolore odio. Saepe debitis veniam ullam porro.';
  };

  document.body.appendChild(boton);
};
