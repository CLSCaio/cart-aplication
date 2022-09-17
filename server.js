const express = require('express')
const app = express()
const PORT = 9002

app.use(express.static('build'))
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))