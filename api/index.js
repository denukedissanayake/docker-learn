const express = require('express');

const app = express();
const PORT = 3005;

app.get('/', (req, res) => {
    res.json("Docker Index...").status(200);
})


app.listen(PORT, () => console.log(`Listning to PORT ${PORT}`))