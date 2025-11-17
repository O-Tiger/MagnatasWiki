import React, { useState } from "react";
import { Link } from "react-router-dom";

const CommandsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const memberCommands = [
    {
      cmd: "/register <senha>",
      aliases: "/registrar",
      desc: "Registra sua conta no servidor",
    },
    {
      cmd: "/login <senha>",
      aliases: "/logar",
      desc: "Faz login em sua conta",
    },
    {
      cmd: "/changepassword <antiga> <nova>",
      aliases: "/mudarsenha, /trocarsenha",
      desc: "Altera sua senha",
    },
    { cmd: "/spawn", aliases: "-", desc: "Teleporta para o spawn" },
    { cmd: "/home <nome>", aliases: "-", desc: "Teleporta para uma home" },
    {
      cmd: "/sethome <nome>",
      aliases: "-",
      desc: "Define uma home (limite: 2)",
    },
    { cmd: "/delhome <nome>", aliases: "-", desc: "Deleta uma home" },
    { cmd: "/homes", aliases: "-", desc: "Lista suas homes" },
    {
      cmd: "/warp <nome>",
      aliases: "-",
      desc: "Teleporta para um warp público",
    },
    { cmd: "/warps", aliases: "-", desc: "Lista warps públicos" },
    {
      cmd: "/tpa <jogador>",
      aliases: "-",
      desc: "Solicita teleporte para jogador",
    },
    { cmd: "/tpaccept", aliases: "/tpyes", desc: "Aceita pedido de teleporte" },
    { cmd: "/tpadeny", aliases: "/tpno", desc: "Nega pedido de teleporte" },
    { cmd: "/tpacancel", aliases: "-", desc: "Cancela pedido de teleporte" },
    {
      cmd: "/tpahere <jogador>",
      aliases: "-",
      desc: "Solicita jogador vir até você",
    },
    {
      cmd: "/rtp",
      aliases: "-",
      desc: "Teleporte aleatório (cooldown: 10min)",
    },
    {
      cmd: "/local <mensagem>",
      aliases: "/l",
      desc: "Chat local (100 blocos)",
    },
    {
      cmd: "/global <mensagem>",
      aliases: "/g",
      desc: "Chat global (todo servidor)",
    },
    {
      cmd: "/tell <jogador> <msg>",
      aliases: "/msg, /w",
      desc: "Mensagem privada",
    },
    {
      cmd: "/reply <mensagem>",
      aliases: "/r",
      desc: "Responde última mensagem privada",
    },
    {
      cmd: "/ignore <jogador>",
      aliases: "/ignorar",
      desc: "Ignora mensagens de um jogador",
    },
    { cmd: "/ouvir <jogador>", aliases: "-", desc: "Para de ignorar jogador" },
    { cmd: "/viptime", aliases: "-", desc: "Mostra tempo de VIP restante" },
    { cmd: "/trocarvip", aliases: "-", desc: "Troca entre VIPs que possui" },
    { cmd: "/kits", aliases: "-", desc: "Abre menu de kits" },
    { cmd: "/claimkit <kit>", aliases: "-", desc: "Pega um kit específico" },
    { cmd: "/suicide", aliases: "-", desc: "Mata seu personagem" },
    { cmd: "/afk", aliases: "-", desc: "Marca como AFK" },
    { cmd: "/playtime", aliases: "-", desc: "Mostra tempo jogado" },
    { cmd: "/item", aliases: "-", desc: "Mostra item no chat" },
  ];

  const vipCommands = [
    { cmd: "/back", aliases: "-", desc: "Volta para localização anterior" },
    { cmd: "/dback", aliases: "-", desc: "Volta ao local da última morte" },
    { cmd: "/ec", aliases: "-", desc: "Abre enderchest remotamente" },
    { cmd: "/workbench", aliases: "/craft", desc: "Abre bancada virtual" },
    { cmd: "/anvil", aliases: "-", desc: "Abre bigorna virtual" },
    {
      cmd: "/smithingtable",
      aliases: "-",
      desc: "Abre mesa de ferraria virtual",
    },
    {
      cmd: "/stonecutter",
      aliases: "-",
      desc: "Abre cortador de pedra virtual",
    },
    { cmd: "/loom", aliases: "-", desc: "Abre tear virtual" },
    {
      cmd: "/cartographytable",
      aliases: "-",
      desc: "Abre mesa de cartografia virtual",
    },
    { cmd: "/fly", aliases: "/voar", desc: "Ativa/desativa voo" },
    { cmd: "/flyspeed <0-10>", aliases: "-", desc: "Ajusta velocidade do voo" },
    { cmd: "/god", aliases: "-", desc: "Ativa/desativa invencibilidade" },
    { cmd: "/skull <jogador>", aliases: "-", desc: "Obtém cabeça de jogador" },
    { cmd: "/itemname <nome>", aliases: "-", desc: "Renomeia item na mão" },
    {
      cmd: "/itemlore <texto>",
      aliases: "-",
      desc: "Define descrição do item",
    },
    { cmd: "/feed", aliases: "-", desc: "Restaura fome" },
    {
      cmd: "/nick <novo_nick>",
      aliases: "-",
      desc: "Define nick personalizado",
    },
    { cmd: "/nickoff", aliases: "-", desc: "Remove nick personalizado" },
    {
      cmd: "/gamemode survival",
      aliases: "/gm 0, /gms",
      desc: "Modo sobrevivência",
    },
    {
      cmd: "/gamemode spectator",
      aliases: "/gm 3, /gmsp",
      desc: "Modo espectador",
    },
  ];

  const filteredCommands =
    selectedCategory === "all"
      ? [...memberCommands, ...vipCommands]
      : selectedCategory === "member"
      ? memberCommands
      : vipCommands;

  return (
    <div style={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/" style={styles.button}>
          Início
        </Link>
      </div>
      <header style={styles.header}>
        <h1 style={styles.title}>🎮 Guia de Comandos</h1>
        <p style={styles.subtitle}>Servidor Magnatas Network - ATM10</p>
      </header>

      <div style={styles.filterSection}>
        <button
          style={{
            ...styles.filterBtn,
            ...(selectedCategory === "all" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setSelectedCategory("all")}
        >
          Todos ({memberCommands.length + vipCommands.length})
        </button>
        <button
          style={{
            ...styles.filterBtn,
            ...(selectedCategory === "member" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setSelectedCategory("member")}
        >
          👤 Membros ({memberCommands.length})
        </button>
        <button
          style={{
            ...styles.filterBtn,
            ...(selectedCategory === "vip" ? styles.filterBtnActive : {}),
          }}
          onClick={() => setSelectedCategory("vip")}
        >
          💎 VIP ({vipCommands.length})
        </button>
      </div>

      <div style={styles.commandsGrid}>
        {filteredCommands.map((command, index) => (
          <div key={index} style={styles.commandCard}>
            <div style={styles.commandHeader}>
              <code style={styles.commandCode}>{command.cmd}</code>
            </div>
            {command.aliases !== "-" && (
              <div style={styles.aliases}>
                <strong>Aliases:</strong> <code>{command.aliases}</code>
              </div>
            )}
            <div style={styles.commandDesc}>{command.desc}</div>
          </div>
        ))}
      </div>

      <div style={styles.infoBox}>
        <h3 style={styles.infoTitle}>💡 Dicas Úteis</h3>
        <ul style={styles.tipsList}>
          <li>Use códigos de cor com &amp; (ex: &amp;c para vermelho)</li>
          <li>Jogadores padrão têm limite de 2 homes</li>
          <li>VIPs possuem comandos exclusivos e cooldowns reduzidos</li>
          <li>Use /ajuda no jogo para assistência adicional</li>
        </ul>
      </div>

      <div style={styles.footer}>
        <p>
          <strong>Última atualização:</strong> 02/11/2025
        </p>
        <p>
          <strong>Versão:</strong> 1.0.1
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1400px",
    margin: "0 auto",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    minHeight: "100vh",
    color: "#fff",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
    padding: "40px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  title: {
    fontSize: "2.5em",
    marginBottom: "10px",
    color: "#4CAF50",
    textShadow: "0 0 20px rgba(76, 175, 80, 0.5)",
  },
  subtitle: {
    color: "#a8a8a8",
    fontSize: "1.1em",
  },
  filterSection: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  filterBtn: {
    padding: "12px 30px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.05)",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s",
    fontSize: "1em",
    fontWeight: "600",
  },
  filterBtnActive: {
    background: "#4CAF50",
    borderColor: "#4CAF50",
  },
  commandsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  commandCard: {
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    padding: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s",
  },
  commandHeader: {
    marginBottom: "10px",
  },
  commandCode: {
    background: "rgba(76, 175, 80, 0.2)",
    padding: "8px 12px",
    borderRadius: "6px",
    color: "#4CAF50",
    fontSize: "0.95em",
    fontFamily: "monospace",
    display: "inline-block",
  },
  aliases: {
    fontSize: "0.85em",
    color: "#888",
    marginBottom: "10px",
    fontFamily: "monospace",
  },
  commandDesc: {
    color: "#ccc",
    lineHeight: "1.6",
  },
  infoBox: {
    background: "rgba(76, 175, 80, 0.1)",
    padding: "30px",
    borderRadius: "12px",
    border: "1px solid rgba(76, 175, 80, 0.3)",
    marginBottom: "30px",
  },
  infoTitle: {
    color: "#4CAF50",
    marginBottom: "15px",
    fontSize: "1.5em",
  },
  tipsList: {
    color: "#ccc",
    lineHeight: "2",
    paddingLeft: "20px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    color: "#666",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  button: {
    display: "flex",
    alignItems: "center",
    padding: "12px 25px",
    borderRadius: "8px",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "22px",
    fontWeight: "520",
    transition: "0.3s",
    background: "rgba(255, 255, 255, 0.09)",
    color: "rgb(255, 255, 255)",
    transform: "scale(1)",
    color: "rgb(255, 255, 255)",
    boxShadow: " rgba(123, 31, 162, 0.4) 0px 4px 15px",
    width: "fit-content",
    marginBottom: "0.5rem",
  },
};

export default CommandsPage;
