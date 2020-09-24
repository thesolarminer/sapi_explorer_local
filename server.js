require('dotenv').config();

const app = require('./app.js');

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
