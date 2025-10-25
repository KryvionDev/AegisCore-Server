import express from "express";
import { WebSocketServer } from "ws";
import dotenv from "dotenv";
import cors from "cors";
import { handleConnection } from "./handlers";
import dashboardRouter from "./dashboard/dashboard";
import { Matchmaker } from "./matchmaker";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 8080;
export const wss = new WebSocketServer({ port: Number(process.env.WS_PORT) || 8081 });
export const matchmaker = new Matchmaker();

app.use(cors());
app.use(express.json());
app.use("/dashboard", dashboardRouter);
app.use(express.static("src/dashboard"));

wss.on("connection", socket => handleConnection(socket, wss));

app.listen(PORT, () => {
  console.log(`HTTP server rodando na porta ${PORT}`);
  console.log(`Dashboard: http://localhost:${PORT}/index.html`);
  console.log(`WebSocket ativo na porta ${wss.options.port}`);
});
