const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    console.log(req)
    res.send('Aqui esta tu pagina, putito')    
})

app.listen(8080, () =>{
    console.log('Servidor funcionando')
})
