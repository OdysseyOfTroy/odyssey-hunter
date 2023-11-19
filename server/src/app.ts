import express, { Application, Request, Response } from 'express';
import routes from './routes';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.disable("x-powered-by");

app.get("/", async (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World"});
});

export default app;