function explorar() {
  document.getElementById("coleccion").scrollIntoView({
    behavior: "smooth"
  });
}

function enviarFormulario() {
  const nombre = document.getElementById("nombre").value;
  alert("Gracias, " + nombre + ". Te contactaremos pronto.");
  return false;
}
