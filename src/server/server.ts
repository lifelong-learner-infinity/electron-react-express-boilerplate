import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.get('/hello', (_req: Request, res: Response) => {
    res.send("Hello from Express");
})

const server = app.listen(4000, () => {
   console.log("Express server running on port 4000");
});

export default app;