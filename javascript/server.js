const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json({ message: 'Hello World' })
})

app.get('/avengers', function (req, res) {
    var avengers = ['Tony Stark', 'Bruce Banner', 'Thor Odinson', 'Wanda Maximoff', 'TChalla']

    res.json({ data: avengers })

})

app.get('/cnh', function (req, res) {

    const idade = req.query.idade;

    if (!idade) {
        return res.json({ message: 'O campo idade é obrigatório.' }); 

    } else if (idade >= 18) {
        return res.json({ message: 'Você está liberada para tirar CNH' });

    } else if (idade <= 4) {
        return res.json({ message: 'Melhor você tomar leite.'})

    } else {
        return res.json({ message: 'Melhor você andar de bike.' })

    }

})

app.listen(3000)