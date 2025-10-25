// src/handlers.ts
import { WebSocket, WebSocketServer } from "ws";
import { Player } from "./player";
import { Matchmaker } from "./matchmaker";

const matchmaker = new Matchmaker();

interface ClientMessage {
  type: "join_queue" | "action" | "disconnect";
  action?: string;
  [key: string]: any;
}

export function log(message: string) {
  console.log(`[AegisCore] ${message}`);
}

export function handleConnection(socket: WebSocket, wss: WebSocketServer) {
  const player = new Player(socket);
  log(`🔗 Player conectado: ${player.id}`);

  socket.on("message", (msg: Buffer) => {
    let data: ClientMessage | null = null;

    try {
      data = JSON.parse(msg.toString());
    } catch (err: any) {
      log(`⚠️ Erro ao parsear mensagem do ${player.id}: ${err}`);
      return;
    }

    if (!data?.type) {
      log(`⚠️ Payload inválido recebido de ${player.id}`);
      return;
    }

    switch (data.type) {
      case "join_queue":
        log(`🎯 Player ${player.id} entrou na fila`);
        matchmaker.addToQueue(player);
        break;

      case "action":
        log(`🎮 [${player.id}] ação: ${data.action || "desconhecida"}`);
        break;

      case "disconnect":
        log(`❌ Player ${player.id} solicitou desconexão`);
        socket.close();
        break;

      default:
        log(`⚠️ Tipo de mensagem desconhecido de ${player.id}: ${data.type}`);
        break;
    }
  });

  socket.on("close", () => {
    matchmaker.removeFromQueue(player);
    log(`🔚 Player desconectado: ${player.id}`);
  });

  socket.on("error", (err: any) => {
    log(`💥 Erro no socket do ${player.id}: ${err}`);
  });
}
