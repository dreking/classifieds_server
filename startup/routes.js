const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const error = require('../middlewares/error');
const apiRoutes = require('../routes/index');

module.exports = (app) => {
    const { ENVIRONMENT } = process.env;

    app.use(cors());
    app.use(helmet());
    if (ENVIRONMENT !== 'PROD') app.use(morgan('dev'));

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(express.static('uploads'));

    app.use(apiRoutes);

    app.get('/', (req, res) => {
        return res.status(200).send('This is Classifieds Server');
    });

    app.use((req, res) => {
        return res.status(404).json({ status: false, message: 'Page not found' });
    });

    app.use(error);
};
