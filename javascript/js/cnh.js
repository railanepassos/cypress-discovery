
function verificarIdade() {
    var nome = document.querySelector('input[name=nome]');
    nome = nome.value
    var idade = document.querySelector('input[name=idade]');

    if (idade.value.length == 0) {
        alert('O campo idade é obrigatórios.');
        return
    }

    idade = parseInt(idade.value);
    var anosRestantes = 18 - idade;

    if (idade >= 18) {
        alert(nome + ', você está liberada para tirar CNH');

    } else {

        alert(nome + ', faltam ' + anosRestantes + ' ano(os) restantes para que possa tirar sua CNH.')

    }

}