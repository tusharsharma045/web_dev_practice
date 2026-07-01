// const fs = require('fs');

// fs.readFile('data.json', 'utf8', (err, data) => {
// console.log(data);
// });

const express = require('express');

const app = express();

app.use(express.json());

let todos = {
1: {
    todos : []
},
2: {
    todos : []
}
};


app.post('/', (req, res) => {
    todos.push({  
        id,
        tittle

        // create a random id for the todo
        // extract the todo tittle from the body
    })
});

app.delete('/', (req, res) => {

    // exxtract the todo id 
    // remove the todo tittle from the body

});

app.get('/', (req, res) => {
    res.json(todos);
});



app.listen(3000);