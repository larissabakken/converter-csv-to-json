const fs = require('fs');
const path = require ('path');
const csv = require('csvtojson');
const { setTimeout } = require('timers/promises');

const csvFilePath = fs.createReadStream(
    path.join(__dirname, 'big-file.csv')
);

const handleData = async (json) => {
    await setTimeout(50);
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