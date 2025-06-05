function mostrarSeccion(seccionId) {
  const secciones = ["agregar", "buscar", "listar"];
  secciones.forEach(id => {
    document.getElementById(id).className = id === seccionId ? "visible" : "hidden";
  });
}

document.getElementById("formAgregar").addEventListener("submit", function (e) {
  e.preventDefault();

  const persona = {
    id: document.getElementById("id").value.trim(),
    nombres: document.getElementById("nombres").value.trim(),
    apellidos: document.getElementById("apellidos").value.trim(),
    direccion: document.getElementById("direccion").value.trim(),
    telefono: document.getElementById("telefono").value.trim(),
  };

  let personas = JSON.parse(localStorage.getItem("personas")) || [];
  personas.push(persona);
  localStorage.setItem("personas", JSON.stringify(personas));

  alert("Persona guardada con éxito.");
  this.reset();
});

function buscarPersona() {
  const criterio = document.getElementById("criterio").value;
  const valor = document.getElementById("valorBusqueda").value.trim().toLowerCase();
  const personas = JSON.parse(localStorage.getItem("personas")) || [];
  const resultados = personas.filter(p => p[criterio].toLowerCase().includes(valor));

  const contenedor = document.getElementById("resultadoBusqueda");
  contenedor.innerHTML = resultados.length
    ? crearTabla(resultados)
    : "<p>No se encontraron resultados.</p>";
}

function listarPersonas() {
  const personas = JSON.parse(localStorage.getItem("personas")) || [];
  document.getElementById("listaPersonas").innerHTML = crearTabla(personas);
}

function crearTabla(data) {
  let html = "<table border='1'><tr><th>Documento</th><th>Nombres</th><th>Apellidos</th><th>Dirección</th><th>Teléfono</th></tr>";
  data.forEach(p => {
    html += `<tr><td>${p.id}</td><td>${p.nombres}</td><td>${p.apellidos}</td><td>${p.direccion}</td><td>${p.telefono}</td></tr>`;
  });
  html += "</table>";
  return html;
}