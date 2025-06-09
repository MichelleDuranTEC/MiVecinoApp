function toggleAccessibility() {
  document.body.classList.toggle('accessible');
}

function publicarAviso() {
  const titulo = document.getElementById('titulo').value;
  const descripcion = document.getElementById('descripcion').value;
  firebase.firestore().collection('avisos').add({
    titulo,
    descripcion,
    autor: firebase.auth().currentUser.email,
    fecha: new Date()
  }).then(() => alert("Aviso publicado"));
}

function reportar() {
  const tipo = document.getElementById('tipo').value;
  const detalle = document.getElementById('detalle').value;
  firebase.firestore().collection('incidentes').add({
    tipo,
    detalle,
    autor: firebase.auth().currentUser.email,
    fecha: new Date(),
    estado: 'nuevo'
  }).then(() => alert("Incidente reportado"));
}