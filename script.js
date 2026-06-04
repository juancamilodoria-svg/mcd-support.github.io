// Inicio AOS (animaciones al hacer scroll)
AOS.init({ once: true }); // instrucción/expresión JavaScript
// línea en blanco para legibilidad
// Mostrar año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear(); // acceso/manipulación del DOM
// línea en blanco para legibilidad
// Menú móvil
const btnMenu = document.getElementById('btn-menu'); // declaración de variable/constante 'btnMenu'
const menu = document.getElementById('menu'); // declaración de variable/constante 'menu'
btnMenu.addEventListener('click', () => { // declaración/definición de función o callback
  menu.classList.toggle('open'); // instrucción/expresión JavaScript
  btnMenu.setAttribute('aria-expanded', menu.classList.contains('open')); // instrucción/expresión JavaScript
}); // cierre de bloque o función
// línea en blanco para legibilidad
// Validación sencilla del formulario de contacto
const form = document.getElementById('contact-form'); // declaración de variable/constante 'form'
const fields = ['name', 'email', 'message']; // declaración de variable/constante 'fields'
// línea en blanco para legibilidad
function showError(id, msg){ // declaración/definición de función o callback
  const el = document.getElementById(id); // declaración de variable/constante 'el'
  el.parentElement.querySelector('.error').textContent = msg; // acceso/manipulación del DOM
} // cierre de bloque o función
// línea en blanco para legibilidad
function clearError(id){ // declaración/definición de función o callback
  const el = document.getElementById(id); // declaración de variable/constante 'el'
  el.parentElement.querySelector('.error').textContent = ''; // acceso/manipulación del DOM
} // cierre de bloque o función
// línea en blanco para legibilidad
function isEmail(v){ // declaración/definición de función o callback
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // retorno de valor desde una función
} // cierre de bloque o función
// línea en blanco para legibilidad
form.addEventListener('submit', (e) => { // declaración/definición de función o callback
  e.preventDefault(); // instrucción/expresión JavaScript
  let ok = true; // declaración de variable/constante 'ok'
// línea en blanco para legibilidad
  const name = form.name.value.trim(); // declaración de variable/constante 'name'
  const email = form.email.value.trim(); // declaración de variable/constante 'email'
  const message = form.message.value.trim(); // declaración de variable/constante 'message'
// línea en blanco para legibilidad
  if(name.length < 2){ showError('name','Ingresa tu nombre.'); ok = false; } else { clearError('name'); } // cierre de bloque o función
  if(!isEmail(email)){ showError('email','Ingresa un email válido.'); ok = false; } else { clearError('email'); } // cierre de bloque o función
  if(message.length < 10){ showError('message','Escribe un mensaje más descriptivo.'); ok = false; } else { clearError('message'); } // cierre de bloque o función
// línea en blanco para legibilidad
  if(ok){ // instrucción/expresión JavaScript
    // Aquí podrías integrar un servicio real (Formspree, EmailJS, backend propio, etc.)
    document.getElementById('success-message').textContent = '¡Mensaje enviado correctamente!';
    form.reset(); // instrucción/expresión JavaScript
  } // cierre de bloque o función
}); // cierre de bloque o función
// línea en blanco para legibilidad
// Botón de descarga de CV (refuerza comportamiento del atributo download)
const btnCv = document.getElementById('btn-cv'); // declaración de variable/constante 'btnCv'
btnCv.addEventListener('click', (e) => { // declaración/definición de función o callback
  // Si quisieras registrar métricas, podrías hacerlo aquí.
  // El atributo 'download' en el <a> ya fuerza la descarga en la mayoría de navegadores.
}); // cierre de bloque o función
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const mensaje = document.getElementById("success-message");

    mensaje.textContent = "¡Mensaje enviado correctamente!";

    mensaje.style.display = "block";

    form.reset();

});
