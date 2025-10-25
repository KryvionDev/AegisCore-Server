# AegisCore-Server
Base server para um hero shooter mobile — arquitetura modular, performance e integração.

# ⚔️ AegisCore Server

Servidor base em **TypeScript** para um *Hero Shooter Mobile* capaz de suportar **600 CCU no beta**.  
Projetado para escalabilidade, modularidade e integração com clientes Unity, Godot ou Unreal.

---

## 🚀 Recursos Principais

- **Servidor WebSocket + HTTP**
- **Fila de matchmaking automática**
- **Gerenciamento de jogadores e salas**
- **Eventos básicos (ação, conexão, desconexão)**
- **Código limpo e modular**
- **Escalável horizontalmente (com load balancer)**

---

## 🧩 Estrutura do Projeto

| Arquivo | Função |
|----------|--------|
| `server.ts` | Inicia servidor HTTP + WebSocket |
| `handlers.ts` | Gerencia conexões e eventos dos jogadores |
| `matchmaker.ts` | Cria partidas e organiza filas |
| `player.ts` | Estrutura base de jogador |
| `utils.ts` | Logs e helpers globais |

---

## 🧱 Setup

```bash
npm install
npx ts-node src/server.ts

```

**Testar conexão manual:**

Abra o console e rode:
```
const ws = new WebSocket("ws://localhost:8080");
ws.onopen = ()=>console.log("Conectado");
ws.send(JSON.stringify({ type: "join_queue" }));
```
🧠 Integrações Planejadas

Integração	Descrição

Unity SDK	Wrapper para comunicação WebSocket com reconexão automática
Firebase Auth	Login JWT + autenticação segura
Redis Cache	Controle de estado e fila escalável
Match Analytics	Métricas em tempo real (Elastic, Grafana)
Dedicated Rooms	Migração para instâncias separadas por match


# 📈 Escalabilidade

Suporte a ~600 CCU no beta (testado localmente com WebSocket load test)

Sistema pronto para sharding com múltiplos processos (cluster)

Estrutura ideal para subir na AWS EC2 ou Render


# 🛠️ Roadmap Futuro

**✅ Matchmaking básico**

🚧 Persistência de progresso do jogador

🚧 Sistema de ranking global

🚧 RPC de servidor → cliente para eventos de combate

🚧 Painel de administração (dashboard)

# ⚡ Licença
**MIT — livre para uso, modificação e expansão.**

**💬 Créditos**

> **Criado por Tauã / KryvionDev
Visão: criar a base de um shooter competitivo, leve e escalável.**
