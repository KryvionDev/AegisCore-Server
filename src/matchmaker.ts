import { Player } from "./player";

export class Matchmaker {
  private queue: Player[] = [];
  private players: Set<Player> = new Set();
  private MAX_PLAYERS = 600;

  addToQueue(player: Player) {
    if (this.players.size < this.MAX_PLAYERS) {
      this.players.add(player);
      player.send("joined", { status: "connected" });
    } else {
      this.queue.push(player);
      player.send("queued", { position: this.queue.length });
    }
  }

  removeFromQueue(player: Player) {
    if (this.players.has(player)) this.players.delete(player);
    const idx = this.queue.indexOf(player);
    if (idx > -1) this.queue.splice(idx, 1);
    this.checkQueue();
  }

  checkQueue() {
    while (this.players.size < this.MAX_PLAYERS && this.queue.length) {
      const next = this.queue.shift()!;
      this.players.add(next);
      next.send("joined", { status: "connected" });
    }
  }

  getStats() {
    return {
      players: this.players.size,
      maxPlayers: this.MAX_PLAYERS,
      queue: this.queue.length
    };
  }
}
