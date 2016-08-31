import express from 'express';
import newsRouter from './router/news-router';
import routes from './routes';

import React from 'react'
import {match, RouterContext} from 'react-router';
import {renderToString} from 'react-dom/server';

import ContextWrapper from '../components/common/ContextWrapper';

//const router = express.Router()

/* ********************************
        EXPRESS CONFIGURATION
*******************************  */
const app = express();
const PATH = require('path');
const VIEW_FOLDER = PATH.resolve(__dirname, 'views');

app.set('view engine' ,'ejs');
app.set('views', VIEW_FOLDER);
app.use(express.static('public'));

/* *******************************
            API ROUTING
******************************* */
app.use('/api/news', newsRouter);

//var mongoose = require('mongoose');
//mongoose.createConnection('mongodb://127.0.0.1:27017', 'test');
//mongoose.connect('mongodb://localhost:27017/test');

app.get('*', (req, res) => {

    match({routes, location: req.originalUrl}, (err, redirectLocation, renderProps) => {
        console.log('react router match is called');
        const {promises, components} = mapComponentsToPromises(renderProps.components, renderProps.params);
        console.log(promises);

        Promise.all(promises).then((values) => {
            const data = prepareData(values, components);
            const html = render(renderProps, data);

            console.log('html');
            res.render('index', {
                content: html,
                context: JSON.stringify(data)
            });
        }).catch((err) => {
            console.log(err);
            console.log('aaaaa');
            res.status(500).send(err);
        });
    });
})


/***********************************************
        SERVER SIDE RENDERING FUNCTIONS
************************************************/
function mapComponentsToPromises(components, params) {

    const filteredComponents = components.filter((Component) => {
        console.log(Component);
        return (typeof Component.requestData === 'function');
    });

    const promises = filteredComponents.map(function(Component) {
        //return Component.requestData(params, nconf.get('domain'));
        console.log('hellooooo');
        return Component.requestData(params, 'http://localhost:3000');
    });
    return {promises, components: filteredComponents};
}

function prepareData(values, components) {
    const map = {};

    values.forEach((value, index) => {
        map[components[0].NAME] = value.data;
        console.log('value data');
        console.log(value.data);
    });

    return map;
}

function render(renderProps, data) {
    let html = renderToString(
        <ContextWrapper data={data}>
            <RouterContext {...renderProps}/>
        </ContextWrapper>
    );

    return html;
}


/* **************************************
the quieter you become, the more you hear
*************************************** */
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});
