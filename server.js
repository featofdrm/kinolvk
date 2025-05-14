const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

// Раздача статики (ваши HTML/CSS/JS)
app.use(express.static('public'));

// Добавление HSTS-заголовка
app.use((req, res, next) => {
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  next();
});

// HTTPS-сервер
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

https.createServer(options, app).listen(443, () => {
  console.log('Сайт работает на https://localhost');
});