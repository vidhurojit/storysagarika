const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
var path = require('path');
const snippets = require('./routes/api/snippets');
const app = express();
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build','index.html'));
});

app.use('/api',snippets);
//app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));