"use strict";
import 'dotenv/config';
import cors from 'cors';

import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT;
 
// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());
 
app.get('/products/:id', function (req: Request, res: Response, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(port, function () {
  console.log('CORS-enabled web server listening on port 80')
})

