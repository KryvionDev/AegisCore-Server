// src/server.ts
import express from "express";
import { WebSocketServer, WebSocket } from "ws";
import dotenv from "dotenv";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// ======= Rota principal =======
app.get("/", (_: express.Request, res: express.Response) => {
  res.json({ message: "AegisCore Server online ⚡" });
});

// ======= WebSocket =======
const wss = new WebSocketServer({ port: 8081 });
wss.on("connection", (socket: WebSocket) => {
  console.log("Novo jogador conectado");
  const id = uuidv4();

  socket.on("message", (msg: WebSocket.RawData) => {
    const data = JSON.parse(msg.toString());
    console.log(`[${id}] ->`, data);
  });

  socket.send(JSON.stringify({ type: "welcome", id }));
});

app.listen(PORT, () => {
  console.log(`HTTP server rodando na porta ${PORT}`);
  console.log("WebSocket ativo na porta 8081");
});
