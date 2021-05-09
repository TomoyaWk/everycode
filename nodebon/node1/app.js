const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

const indexPage = fs.readFileSync('./view/index.ejs', 'UTF-8');
const style = fs.readFileSync('./css/style.css', 'UTF-8');
const otherPage = fs.readFileSync('./view/other.ejs', 'UTF-8');


const getFromClient = (req, res) => {
  let urlStr = url.parse(req.url);
  let content = '';

  switch (urlStr.pathname) {
    
    case '/':
      content = ejs.render(indexPage, {
        title : 'Index',
        content: 'これはテンプレートを使ったインデックスページです！'
      })
      res.writeHead(200, { 'Content-Type' : 'text/html'});
      res.write(content);
      res.end();
      break;

    case '/other':
      content = ejs.render(otherPage, {
        title : 'Other',
        content: 'これはテンプレートを使ったその他ページです！'
      })
      res.writeHead(200, { 'Content-Type' : 'text/html'});
      res.write(content);
      res.end();
      break;
    
    case '/css/style.css':
      res.writeHead(200, { 'Content-Type' : 'text/css'});
      res.write(style);
      res.end();
      break;
  
    default:
      res.writeHead(200, { 'Content-Type' : 'text/css'});
      res.end('No page.....');
      break;
  }
}

let server = http.createServer(getFromClient);
server.listen(3000);
console.log('Server Start at http://localhost;3000');