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

function id_selecter(accounts_id_s) {
  count = 1;
  while(count < 100) {
  if(accountData[`id${count}`] == accounts_id_s) {
    console.log('success');
    far_away2(count);
   
    console.log(accounts_id_s)
    count_val = count;
    count = 101;
    k = 1;}
  else{
    console.log(count)
    count = count + 1;
  }
  
}}
function far_away(account_password_s) {
  accounts_password_t = account_password_s
}

function far_away2(v_acount) {
  var_acount = v_acount;
}



const accountFile = fs.readFileSync('accounts/accounts.json', 'utf8'); 
const accountData = JSON.parse(accountFile); 

app.get('/', (request, response) => {
  readFile('index.html', 'utf-8', (err, data) => {
    if(err) { response.send('No Such File of Directory') }
    response.send(data)
  })
})

app.get('/old_site', (request, response) => {
  readFile('old_site/index.html', 'utf-8', (err, data) => {
    if(err) { response.send('No Such File of Directory') }
    response.send(data)
  })
})

app.get('/functions_code.js', (request, response) => {
  readFile('functions_code.js', 'utf-8', (err, data) => {
    if(err) { response.send('No Such File of Directory') }
    response.send(data)
  
    })
  })

if(k = 1) {
app.get('/id/:id', (request, response) => {
  const accounts = request.params;
  console.log(accounts['id']);
  const accounts_id = accounts['id']
  response.send(accounts['id']);
  var accounts_id_v = accounts['id']
  id_selecter(accounts_id_v) 
})



app.get('/password/:password', (request, response) => {
  const accounts2 = request.params;
  console.log(accounts2['password']);
  const accounts_password = accounts2['password']
  var accounts_password_f = accounts2['password']
  far_away(accounts_password_f)
  if(accountData[`password${(count_val)}`] ==  accounts_password_f) {
    message_1 = 'access success'
  }
  else {
    message_1 = 'access denied'}
  response.send(message_1);
  console.log(message_1); 
  })}

    
console.log(accountData)  

app.listen(3000);