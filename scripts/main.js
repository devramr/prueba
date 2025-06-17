let miImage = document.querySelector("img");
miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "img/FEID.jpg") {
        miImage.setAttribute("src", "img/feid2.jpg");
    } else {
        miImage.setAttribute("src", "img/FEID.jpg");
    }
};
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
  let miNombre = prompt("Por favor, ingresa tu nombre.");
    if (!miNombre) {
    estableceNombreUsuario();
  } else {
  localStorage.setItem("nombre", miNombre);
  miTitulo.textContent = "Bienvenido Fan, " + miNombre;
}
}
if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Bienvenido Fan, " + nombreAlmacenado;
}

miBoton.onclick = function () {
  estableceNombreUsuario();
};



