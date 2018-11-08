const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config/config');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'client', 'index.html')));
}

//api routes

app.listen(PORT, () => console.log(`Running on port ${PORT}`));