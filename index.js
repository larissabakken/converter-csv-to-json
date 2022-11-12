const fs = require('fs');
const path = require ('path');
const csv = require('csvtojson');

const csvFilePath = fs.createReadStream(
    path.join(__dirname, 'big-file.csv')
);

const handleData = (json) => {
    console.log(json);
};

const handleError = (err) => {
    console.error('Error:', err.message);
};

const handleEnd = () => {
    console.log('Done!');
};


csv({delimiter: ';'}).fromStream(csvFilePath).subscribe(
    handleData,
    handleError,
    handleEnd
);