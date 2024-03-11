import express, {Express, Request, Response} from 'express'; // importamos los tipos - los objetos, ya traducimos a TS
import dotenv from 'dotenv';

import routes from './routes';

// MONGODB CONNECTION //
// entre llaves porque no lo exportamos como default
import { db } from './config/db';

db.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}).catch( (err) => console.error("Error connecting to DB", err))
// MONGODB CONNECTION //

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// const app = require('express')();

const port = process.env.PORT || 3000;

routes(app);

/*
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
}); // cuando venga la ruta '/' ejecute el callback, que es la función que definimos al lado
    // allí recibimos dos parámetros, usamos solo a res. Es por método GET.

app.get('/about', (req: Request, res: Response) => {
    res.send('About Us');
});

app.post('/about', (req: Request, res: Response) => {
    res.send(`name: ${req.body.name}`);
})

app.delete('/about', (req: Request, res: Response) => {
    del(req.body.id);
    res.status(200);
    res.send();
});

const del = (id: String) => {
    console.log(id)
};

// app.listen(port, () => {
//    console.log(`Server is running on port ${port}`);
// }) // escuche por el puerto 3000
*/