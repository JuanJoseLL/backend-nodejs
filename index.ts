import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes';
import { db } from "./src/config/db"

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
routes(app);

db.then(() => {
    app.listen(port, () => {
                console.log(`Server is running on port ${port}`)
                }
    );
            }).catch((err) => console.error("Error connecting to MongoDB", err));
export default app;
