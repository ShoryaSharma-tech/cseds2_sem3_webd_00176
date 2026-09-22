// const http = require('http')
// let item = ['apple','banana'];
// const server = http.createServer((requestAnimationFrame.res)=>{
//     res.setHeader('Content-Type','application/json');

//     if(requestAnimationFrame.method == 'GET'){
//         res.end(JSON.stringify(items));
//     }
//     else if(requestAnimationFrame.method == 'POST'){
//         let body ='';
//         requestAnimationFrame.on('data'.chunk => body += chunk);
//         requestAnimationFrame.on('end',()=>{
//             items.psuh(body);
//             res.end('item added: ' + body);
//         }
//     )
//     };
// }
// else if(requestAnimationFrame.method = 'Put'){
//     items[0]='Updated time';
//     res.end('First item updated');

// }
// else if(requestAnimationFrame.method == 'DElete')
// items.pop();
// res.end('last item removed '))
const http = require('http');

let items = ['apple', 'banana'];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.method == 'GET') {
        res.end(JSON.stringify(items));
    }
    else if (req.method == 'POST') {
        let body = '';

        req.on('data', chunk => body += chunk);

        req.on('end', () => {
            items.push(body);
            res.end('Item added: ' + body);
        });
    }
    else if (req.method == 'PUT') {
        items[0] = 'Updated item';
        res.end('First item updated');
    }
    else if (req.method == 'DELETE') {
        items.pop();
        res.end('Last item removed');
    }
});

server.listen(3010, () => {
    console.log('Server running at http://localhost:3010');
});