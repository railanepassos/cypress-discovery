
// Simulando uma API
var avengers = ['Tony Star', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers']

function listaVingadores() {

    var ul = document.getElementById('avengers');
    ul.innerHTML = '';

    avengers.forEach(function (avenger) {
        var li = document.createElement('li');
        var text = document.createTextNode(avenger);
        li.appendChild(text);
        ul.appendChild(li);

    })

}


