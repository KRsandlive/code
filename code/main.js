import express from 'express'
import fs from 'fs'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app = express()

app.use(cors())
// 정적 파일 제공 (public 폴더 안에 있으면 자동으로 불러옴)
app.use(express.static(path.join(__dirname, 'public')));

// 서버 켤 때 계정 파일 딱 한 번 읽어오기
const accountFile = fs.readFileSync(path.join(__dirname, 'accounts/accounts.json'), 'utf8');
const accountData = JSON.parse(accountFile);

// 메인 페이지
app.get('/', (request, response) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
        if (err) return response.send('파일 또는 디렉터리가 잘못됨');
        response.send(data);
    });
});

// 옛날 사이트
app.get('/old_site', (request, response) => {
    fs.readFile(path.join(__dirname, 'old_site/index.html'), 'utf-8', (err, data) => {
        if (err) return response.send('파일 또는 디렉터리가 잘못됨');
        response.send(data);
    });
});

// 자바스크립트 파일 직접 서빙
app.get('/functions_code.js', (request, response) => {
    fs.readFile(path.join(__dirname, 'functions_code.js'), 'utf-8', (err, data) => {
        if (err) return response.send('파일 또는 디렉터리가 잘못됨');
        response.send(data);
    });
});

// ID 체크 로직 (수정본)
app.get('/id/:id', (request, response) => {
    const { id } = request.params;
    let response_id = 'id denied';

    for (let t = 1; t <= 10; t++) {
        if (id === accountData[`id${t}`]) {
            response_id = 'id access';
            break; 
        }
    }
    response.send(response_id);
});

// Password 체크 로직 (수정본)
app.get('/password/:password', (request, response) => {
    const { password } = request.params;
    let response_password = 'password denied';

    for (let t = 1; t <= 10; t++) {
        if (password === accountData[`password${t}`]) {
            response_password = 'password access';
            break;
        }
    }
    response.send(response_password);
});

// 데이터 잘 들어왔나 확인용
console.log("로드된 계정 데이터:", accountData);

app.listen(3000, () => {
    console.log('서버 돌아가는 중: http://localhost:3000');
});
