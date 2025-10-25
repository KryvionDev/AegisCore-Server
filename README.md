# AegisCore Server ⚡

<h1 align="center">AegisCore — Real-Time Multiplayer Engine & Dashboard</h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=20&duration=3000&pause=1000&color=00FFFF&center=true&vCenter=true&width=600&lines=Real-time+games+engine.;WebSocket+matchmaking+system.;Autonomous+dashboard+monitoring;">
</p>

---

## 🌌 Overview / Visão Geral

AegisCore is a **TypeScript-based real-time multiplayer engine** with:

- WebSocket server handling player connections.
- Matchmaking queue and player management.
- Live Dashboard with player stats, queue, ping, and server status.
- Modern SPA front-end (responsive + dark mode).
- Logs, monitoring, and heartbeat system for stable connections.

AegisCore é um **engine multiplayer em tempo real feito em TypeScript**, com:

- Servidor WebSocket gerenciando conexões de players.
- Sistema de matchmaking e gerenciamento de jogadores.
- Dashboard ao vivo mostrando stats, filas, ping e status do servidor.
- Frontend SPA moderno e responsivo, com dark mode.
- Logs e monitoramento para estabilidade.

---

## 📁 Estrutura de Pastas / Folder Structure

src/
├─ server.ts # Inicialização HTTP + WS
├─ app.ts # Configura Express, middlewares, rotas
├─ controllers/ # Lógica das rotas REST e dashboard
├─ services/ # Serviços de negócio: Matchmaker, WS Manager
├─ models/ # Player, Room, Game, etc.
├─ utils/ # Logger, helpers, monitoramento
├─ dashboard/ # Frontend SPA dashboard
└─ config/ # Variáveis de ambiente e configs

yaml
Copiar código

---

## 🚀 Funcionalidades Principais / Features

- **WebSocket Server**: aceita conexões, gerencia filas e pings.
- **Matchmaker**: controle dinâmico de slots, enqueue/dequeue de players.
- **Dashboard**: mostra players online, fila, ping médio, status do WS.
- **Logs Estruturados**: `[INFO]`, `[WARN]`, `[ERROR]` + monitoramento de memória e CPU.
- **Segurança e Resiliência**: tratamento de erros, limites anti-spam, reconexões controladas.
- **Deploy Ready**: Dockerfile opcional, compatível com VPS, Cloud ou Codespaces.

---

## ⚙️ Instalação / Installation

```bash

# Clone o repositório
git clone https://github.com/KryvionDev/AegisCore-Server.git
cd AegisCore-Server

# Instalar dependências
npm install

# Rodar em dev (hot reload)
npm run dev

# Build + Start (produção)
npm run build
npm run start
```


🧩 Dashboard & WebSocket
Dashboard SPA atualizado via REST API (/api/status) a cada 2s.

WebSocket envia mensagens de ping/pong, ações e fila de matchmaking.

Dashboard mostra:

Item	Detalhes
Players	Ativos / Máximo
Queue	Número de players aguardando
Average Ping	Calculado do ping dos players
WebSocket Status	Conexões ativas
Server Status	Online / Offline / Uptime

📝 Comandos de Commit Hoje / Today's Commit Commands
```bash
Copiar código
# Commit inicial com estrutura do servidor
git add .
git commit -m "v1.0.0: Initial setup of AegisCore server structure"

# Commit dashboard controller e API REST
git add src/controllers/dashboardController.ts
git commit -m "v1.0.1: Add dashboard controller and API endpoint"

# Commit WS manager integration
git add src/services/wsManager.ts
git commit -m "v1.0.2: Implement WebSocket manager with player heartbeat"

# Commit fixes e ajustes de tipos TypeScript
git add .
git commit -m "v1.0.3: Fix TS types and matchmaker integration"
Versioning today: v1.0.0 → v1.0.3 (incremental updates, dashboard + WS + TS fixes).
```

# 📊 Estatísticas & Monitoramento
Logs em tempo real.

Monitoramento de memória/CPU.

Debug de filas e slots do Matchmaker.

# 💻 Tecnologias / Tech Stack
Backend: Node.js, TypeScript, Express, WebSocket (ws)

Frontend Dashboard: Vanilla JS / SPA

Dev Tools: ts-node, nodemon, Docker (opcional)

Utilities: uuid, dotenv, cors

# ⚡ Visão / Vision
Construir sistemas que redefinem multiplayer, automatizando controle, monitoramento e comunicação em tempo real.
AegisCore é a base de projetos de jogos, IA e drones autônomos da Kryvion.

# 🧩 Contato
<p align="center"> <a href="https://discord.gg/"><img src="https://skillicons.dev/icons?i=discord" height="40"></a> <a href="mailto:"><img src="https://skillicons.dev/icons?i=gmail" height="40"></a> <a href="https://linkedin.com/"><img src="https://skillicons.dev/icons?i=linkedin" height="40"></a> </p>
