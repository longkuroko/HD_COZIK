
import Express from 'express';
import { createConnection } from 'typeorm';
import initialRouter from './route';
import { PORT } from './util/constants';
import { dbConfig } from './util/db';
import cors from "cors";
import bodyParser = require('body-parser'); 
import morgan from "morgan";
import "reflect-metadata";

const app = Express();
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
initialRouter(app);
createConnection(dbConfig).then(() => {
    app.listen(PORT, () =>
      console.log(`app listenning on http://localhost:${PORT} `)
    );
  });