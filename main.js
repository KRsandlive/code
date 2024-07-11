import express from 'express'
import { readFile } from 'fs'

const app = express()

app.get('/', (request, response) => {
  readFile('a.html', 'utf-8', (err, data) => {
    if(err) { response.send('No Such File of Directory') }
    response.send(data)
  })
})

app.listen(3000)