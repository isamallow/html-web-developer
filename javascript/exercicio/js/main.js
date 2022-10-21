// function clicou() {
//   alert("Obrigada por clicar!")
// }

function clicou () {
  document.getElementById("agradecimento").innerHTML = "<em>Obrigada por clicar!</em>"
}

function redirecionar() {
  window.open("https://www.dio.me/")
  // window.location.href = "https://www.dio.me/";
}

function trocar(elemento) {
  elemento.innerHTML = "Obrigada por passar o mouse!"
  // document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse!"
  // alert("trocar texto")
}

function voltar(elemento) {
  elemento.innerHTML = "Passe o mouse aqui!"
  // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
}

function load() {
  alert("página carregada!")
}

function funcaoChange(elemento) {
  console.log(elemento.value)
}