const fs = require('fs');
const path = require ('path');
const crypto = require('crypto');

const csvFile = fs.createWriteStream(
    path.join(__dirname, 'big-file.csv')
);

csvFile.write('id; name; email; password\n');

for (let i = 0; i < 100000; i++) {
    const id = i;
    const name = crypto.randomBytes(10).toString('hex');
    const email = crypto.randomBytes(10).toString('hex') + '@gmail.com';
    const password = crypto.randomBytes(10).toString('hex');
    csvFile.write(`${id};${name};${email};${password}\n`);
}
csvFile.end();




