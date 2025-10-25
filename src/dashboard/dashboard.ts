import { Router } from "express";
import type { Request, Response } from "express";
import { wss, matchmaker } from "../server"; // agora funciona porque exportamos lá

const router = Router();

router.get("/status", (_req: Request, res: Response) => {
  const wsClients = wss.clients.size;

  // calcular ping médio
  const pings: number[] = [];
  wss.clients.forEach((client: any) => {
    if (client.readyState === 1) pings.push(client.ping || 0);
  });
  const avgPing = pings.length ? Math.round(pings.reduce((a, b) => a + b, 0) / pings.length) : 0;

  res.json({
    players: matchmaker.getStats().players,
    maxPlayers: matchmaker.getStats().maxPlayers,
    queue: matchmaker.getStats().queue,
    ping: avgPing,
    online: true
  });
});

export default router;
