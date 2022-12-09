const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile("index.html")
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));