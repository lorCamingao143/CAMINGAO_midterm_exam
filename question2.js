
const express = require('express');
const app = express();
const PgitORT = 3000;

app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Write your full name' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});