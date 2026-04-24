const burger = document.getElementById('burger');
const cerrar = document.getElementById('cerrar');
const menu   = document.getElementById('menu');

burger.addEventListener('click', function () {
  menu.classList.add('abierto');
});

cerrar.addEventListener('click', function () {
  menu.classList.remove('abierto');
});