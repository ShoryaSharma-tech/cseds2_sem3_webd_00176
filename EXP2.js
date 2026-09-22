const fs = require('fs');

fs.writeFile('example.txt', 'Hello World', (err) => {
    if (err) throw err;
    console.log('File Created');

    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File Content:', data);

        fs.appendFile('example.txt', '\nWelcome to Node.js', (err) => {
            if (err) throw err;
            console.log('File Updated');

            fs.unlink('example.txt', (err) => {
                if (err) throw err;
                console.log('File Deleted');
            });
        });
    });
});