// src/player.ts
import { WebSocket } from "ws";
import { v4 as uuidv4 } from "uuid";

export interface OutgoingMessage<T = any> {
  event: string;
  data: T;
}

export class Player {
  public readonly id: string;
  public readonly socket: WebSocket;
  public roomId: string | null = null;
  public isAlive: boolean = true;

  constructor(socket: WebSocket) {
    this.id = uuidv4();
    this.socket = socket;
    this.attachListeners();
  }

  send<T>(event: string, data: T): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      try {
        const payload: OutgoingMessage<T> = { event, data };
        this.socket.send(JSON.stringify(payload));
      } catch (err: any) {
        console.error(`[Player ${this.id}] Falha ao enviar mensagem:`, err);
      }
    }
  }

  private attachListeners(): void {
    this.socket.on("close", () => {
      this.isAlive = false;
      console.log(`[-] Player desconectado: ${this.id}`);
    });

    this.socket.on("error", (err: any) => {
      console.error(`[Player ${this.id}] Erro no socket:`, err);
    });
  }

  terminate(): void {
    try {
      this.socket.close();
      this.isAlive = false;
      console.log(`[x] Player ${this.id} desconectado manualmente`);
    } catch (err: any) {
      console.error(`[Player ${this.id}] Erro ao encerrar conexão:`, err);
    }
  }
}
