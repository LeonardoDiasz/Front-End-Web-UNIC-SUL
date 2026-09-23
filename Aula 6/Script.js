//Localizar o botão
let botao = document.getElementById("Botão");
let mensagem = document.getElementById("mensagem");
//Criar um evento
botao.addEventListener("ckick",
function(){
    mensagem.innerHTML = "Você clicou no botão";
});