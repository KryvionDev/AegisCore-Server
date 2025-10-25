"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// ======= Rota principal =======
app.get("/", (_, res) => {
    res.json({ message: "AegisCore Server online ⚡" });
});
// ======= WebSocket =======
const wss = new ws_1.WebSocketServer({ port: 8081 });
wss.on("connection", (socket) => {
    console.log("Novo jogador conectado");
    const id = (0, uuid_1.v4)();
    socket.on("message", (msg) => {
        const data = JSON.parse(msg.toString());
        console.log(`[${id}] ->`, data);
    });
    socket.send(JSON.stringify({ type: "welcome", id }));
});
app.listen(PORT, () => {
    console.log(`HTTP server rodando na porta ${PORT}`);
    console.log("WebSocket ativo na porta 8081");
});
