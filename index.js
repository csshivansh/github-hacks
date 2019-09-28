const git = require('simple-git');
const moment = require('moment');
const fs = require('fs');
const random = require('random');

let date;
function writeToFile() {

    return new Promise((resolve, reject) => {
        var writeStream = fs.createWriteStream('./data.txt', { 'flags': 'a' });
        writeStream.write(`\n Last Modified: ${date}`);
        resolve(1);
    });
}

function makeCommit() {
    return new Promise((resolve, reject) => {
        git().add('data.txt').commit('Another Commit!!', { '--date': date }).push();
        resolve(1);  
    });
}

function run(n, x, y) {
    return new Promise((resolve, reject) => {
        if(n==0)
        resolve(1);
        else {
            date = moment().subtract(6, 'd').subtract(1, 'y').add(x, 'w').add(y, 'd').format();
            writeToFile()
                .then(() => {
                    makeCommit()
                        .then(() => {run(n-1,random.int(0, 53), random.int(0, 6))});
                });
        }
    })
}

run(3, random.int(0, 53), random.int(0, 6));
