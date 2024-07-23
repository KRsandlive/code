import express, { request, response } from 'express'
import {readFile} from "fs";
import fs from 'fs'
import cors, {} from 'cors'
import path, {} from 'path'
import { fileURLToPath } from "url";   

const __dirname = fileURLToPath(new URL(".", import.meta.url));   
const __filename = fileURLToPath(import.meta.url);

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));

var accounts_password_t;
var var_acount; 
var k;
var count = 0;
var count_val = 0;
var message_1 = "0";


const accountFile = fs.readFileSync('accounts/accounts.json', 'utf8'); 
const accountData = JSON.parse(accountFile); 

app.get('/', (request, response) => {
  readFile('index.html', 'utf-8', (err, data) => {
    if(err) { response.send('파일 또는 디렉터리가 잘못됨') }
    response.send(data)
  })
})

app.get('/old_site', (request, response) => {
  readFile('old_site/index.html', 'utf-8', (err, data) => {
    if(err) { response.send('파일 또는 디렉터리가 잘못됨') }
    response.send(data)
  })
})

app.get('/functions_code.js', (request, response) => {
  readFile('functions_code.js', 'utf-8', (err, data) => {
    if(err) { response.send('파일 또는 디렉터리가 잘못됨') }
    response.send(data)
  
    })
  })


app.get('/id/:id', (request, response) => {
var id_n = request.params;
let t = 1;
let response_id;
while (t != 0) {
  if(id_n['id'] == accountData[`id${t}`]) {
    response_id = 'id access'
    t = 0
  }
  else if(t = 10) {
    response_id = 'id denied'
  }
  else; {
    console.log(t)
    t = t + 1
  }
  response.send(response_id);
}})
  
app.get('/password/:password', (request, response) => {
  var password_n = request.params;
  let t = 1;
  let response_password;
  while (t != 0) {
    if(password_n['password'] == accountData[`password${t}`]) {
      response_password = 'password access'
      t = 0
    }
    else if(t = 10) {
      response_password = 'password denied'
    }
    else; {
      console.log(t)
      t = t + 1
    }
    response.send(response_password);
  }})

console.log(accountData)  

app.listen(3000);