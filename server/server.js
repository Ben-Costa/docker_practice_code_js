const express = require('express')

const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/hi/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)    
})