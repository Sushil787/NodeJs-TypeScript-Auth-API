import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import compression from "compression";
import http from 'http';
import { userRouter } from "./router/router";
import dotenv from 'dotenv'
import { mongooseConnection } from "./db/db.connection";

dotenv.config();
const app = express();

app.use(cors({
    credentials: true
}));
mongooseConnection(app);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(userRouter);
const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log("server is listeing at port 8080");
});


