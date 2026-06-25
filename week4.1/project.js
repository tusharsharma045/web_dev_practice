// const fs = require('fs');

// function readFile(filename) {
//     fs.readFile(filename, 'utf8', function (err, data) {
//         if (err) {
//             console.error('Error reading file:', err);
//             return;
//         }

//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             if (data[i] === ' ') {
//                 total++;
//             }
//         }

//         console.log(total + 1);
//     });
// }

// readFile("./a.txt");

const fs = require('fs');
const Command = require('commander');
const program = new Command();

program
.name('word-count')
.description('Count the number of words in a file')
.version('1.0.0');


program.Command('count')
.description('Count the number of words in a file')
.argument('<file>', 'The file to count words in')
.action((file) => {
    fs.readFile(file, 'utf8', function(err, data) {
        let words = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === '\n') {
                words++;
            }
        }
        console.log(words + 1);
    });
})

program.parse();