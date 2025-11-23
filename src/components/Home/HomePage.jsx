import React, { useState } from "react";
import {
  Book,
  Code,
  Globe,
  ShoppingCart,
  DollarSign,
  AlertTriangle,
  Wifi,
  Monitor,
  Phone,
  Ban,
  Import,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const WikiServidorMagnatas = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Início", icon: Globe },
    { id: "comandos", label: "Comandos", icon: Code },
    { id: "precos", label: "Preços", icon: DollarSign },
    { id: "regras", label: "Regras", icon: Book },
    { id: "banidos", label: "Itens Banidos", icon: Ban },
    { id: "conexao", label: "Conexão", icon: Wifi },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      background: "#0a0a0a", // Fundo escuro do site oficial
      color: "#fff",
      padding: "20px",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    maxWidth: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      paddingTop: "40px",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#FFD700", // Amarelo dourado para títulos
      textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
    },
    subtitle: {
      fontSize: "1.25rem",
      color: "#b0b0b0", // Cinza claro
    },
    nav: {
      justifyContent: "center",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "30px",
      background: "#1a1a1a", // Cinza escuro
      padding: "15px",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    tabButton: (active) => ({
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 20px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      transition: "all 0.3s",
      background: active ? "#FDB813" : "#2a2a2a", // Amarelo quando ativo
      color: active ? "#000" : "#fff", // Texto preto quando ativo
      transform: active ? "scale(1.05)" : "scale(1)",
      boxShadow: active ? "0 4px 15px rgba(253, 184, 19, 0.4)" : "none",
    }),
    content: {
      background: "#1a1a1a",
      borderRadius: "15px",
      padding: "30px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    footer: {
      textAlign: "center",
      marginTop: "40px",
      color: "#b0b0b0",
    },
    link: {
      color: "#FDB813", // Amarelo para links
      textDecoration: "underline",
    },

    // Estilos para HomeContent
    callout: {
      background: "#2a2a2a",
      border: "2px solid #FDB813",
      borderLeft: "4px solid #FDB813",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "30px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      marginBottom: "30px",
    },
    card: () => ({
      background: "#2a2a2a",
      padding: "20px",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s",
    }),
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "#FFD700", // Amarelo dourado
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      padding: "8px 0",
      color: "#b0b0b0",
      transition: "color 0.3s",
    },

    // Estilos para outras seções
    commandItem: {
      background: "#2a2a2a",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "10px",
      transition: "all 0.3s",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    code: {
      color: "#FDB813",
      fontFamily: "monospace",
      fontSize: "14px",
    },
    desc: {
      color: "#b0b0b0",
      fontSize: "13px",
      marginTop: "5px",
    },
    
  };

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        <header style={styles.header}>
          <h1 style={styles.title}>🍄 Servidor Magnatas</h1>
          <p style={styles.subtitle}>Wiki Interativa - ATM10</p>
        </header>

        <nav style={styles.nav}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={styles.tabButton(activeTab === tab.id)}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.background = "rgba(255,255,255,0.2)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.background = "rgba(255,255,255,0.1)";
                  }
                }}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div style={styles.content}>
          {activeTab === "home" && <HomeContent />}
          {activeTab === "comandos" && <ComandosContent />}
          {activeTab === "precos" && <PrecosContent />}
          {activeTab === "regras" && <RegrasContent />}
          {activeTab === "banidos" && <BanidosContent />}
          {activeTab === "conexao" && <ConexaoContent />}
        </div>

        <footer style={styles.footer}>
          <p>
            🌐 Loja:{" "}
            <a href="https://servidormagnatas.com.br/" style={styles.link}>
              servidormagnatas.com.br
            </a>
          </p>
          <p>
            <img
              class="center"
              src="https://cdn-icons-png.flaticon.com/128/3670/3670325.png"
              alt="Discord Icon"
            />{" "}
            Discord:{" "}
            <a href="https://discord.gg/VewgTM2rNu" style={styles.link}>
              discord.gg/VewgTM2rNu
            </a>
          </p>
          <p>
            <img
              class="center"
              src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
              alt="Twitter Icon"
            />{" "}
            Twitter (X):{" "}
            <a href="https://twitter.com/ServidrMagnatas" style={styles.link}>
              @ServidrMagnatas
            </a>
          </p>
          <p>
            <img
              class="center"
              src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
              alt="Facebook Icon"
            />
            Facebook:{" "}
            <a
              href="https://www.facebook.com/servidormagnatas/"
              style={styles.link}
            >
              servidormagnatas
            </a>
          </p>
          <p>
            <img
              class="center"
              src="https://cdn-icons-png.flaticon.com/128/3670/3670209.png"
              alt="Youtube Icon"
            />{" "}
            Youtube:{" "}
            <a
              href="https://www.youtube.com/@GnomoMuitoLoco"
              style={styles.link}
            >
              @GnomoMuitoLoco
            </a>
          </p>
          <p>
            <img
              class="center"
              src="https://cdn-icons-png.flaticon.com/128/3046/3046121.png"
              alt="TikTok Icon"
            />{" "}
            TikTok:{" "}
            <a
              href=" https://www.tiktok.com/@servidormagnatas"
              style={styles.link}
            >
              @servidormagnatas
            </a>
          </p>
          <p>
            <img
              class="center"
              src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png"
              alt="Instagram Icon"
            />{" "}
            Instagram:{" "}
            <a href="" style={styles.link}>
              <i>Em breve......</i>
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

const HomeContent = () => {
  const styles = {
    callout: {
      background: "rgba(156, 39, 176, 0.3)",
      borderLeft: "4px solid #ab47bc",
      padding: "20px",
      borderRadius: "8px",
      marginBottom: "30px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      marginBottom: "30px",
    },
    card: (color) => ({
      background: `rgba(${color}, 0.2)`,
      padding: "20px",
      borderRadius: "10px",
      border: `1px solid rgba(${color}, 0.3)`,
    }),
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      padding: "8px 0",
      color: "rgba(255,255,255,0.9)",
    },
  };
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div style={styles.callout}>
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          ⚙️ Bem-vindo(a)!
        </h2>
        <p style={{ color: "#e1bee7" }}>
          Aqui está concentrado muitas informações importantes. O conteúdo foi
          separado cuidadosamente para facilitar a consulta.
        </p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card("176, 143, 62")}>
          <h3 style={styles.cardTitle}>
            <Monitor size={24} /> 📱 Tutoriais
          </h3>
          <ul style={styles.list}>
            <Link to="/how-to-play">
              <li style={styles.listItem}>• Como jogar (PC)</li>
            </Link>
            <Link to="/how-to-play">
              <li style={styles.listItem}>• Como jogar (Mobile)</li>
            </Link>
            <Link to="/getting-started">
              <li style={styles.listItem}>• Começando o jogo</li>
            </Link>
          </ul>
        </div>

        <div style={styles.grid}>
          <div style={styles.card("163, 16, 16")}>
            <h3 style={styles.cardTitle}>
              <Book size={24} /> 📑 Regras e Conduta
            </h3>
            <ul style={styles.list}>
              <Link to="/rules">
                <li style={styles.listItem}>• Regras</li>
              </Link>
              <Link to="/banned-items">
                <li style={styles.listItem}>• Itens Banidos</li>
              </Link>
            </ul>
          </div>
        </div>

        <div style={styles.card("33, 150, 243")}>
          <h3 style={styles.cardTitle}>
            <Info size={24} /> Informações
          </h3>
          <ul style={styles.list}>
            <Link to="/commands">
              <li style={styles.listItem}>• Lista de Comandos</li>
            </Link>
            <a
              href="https://www.modpackindex.com/modpack/76178/servidor-magnatas"
              target="_blank"
            >
              <li style={styles.listItem}>• Lista de Mods</li>
            </a>
            <Link to="/troubleshooting">
              <li style={styles.listItem}>• Problemas de conexão</li>
            </Link>
          </ul>
        </div>
        <div style={styles.grid}>
          <div style={styles.card("56, 128, 81")}>
            <h3 style={styles.cardTitle}>
              <Book size={24} /> 📑 Economia
            </h3>
            <ul style={styles.list}>
              <Link to="/price-table">
                <li style={styles.listItem}>• Tabela de Preços</li>
              </Link>

              <Link to="/players-shop">
                <li style={styles.listItem}>• Loja de jogadores</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div style={styles.card("255, 152, 0")}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          🖥️ Requisitos Mínimos
        </h3>
        <div style={styles.grid}>
          <div>
            <p>
              <strong>CPU:</strong> Intel Core i5 4ª gen / Ryzen 5 1400+
            </p>
            <p>
              <strong>RAM:</strong> 8 GB (6 GB dedicados)
            </p>
            <p>
              <strong>GPU:</strong> NVIDIA GTX 960 ou equivalente
            </p>
          </div>
          <div>
            <p>
              <strong>Armazenamento:</strong> SSD com 10 GB livres
            </p>
            <p>
              <strong>Java:</strong> Java 17
            </p>
            <p>
              <strong>SO:</strong> Windows 10/11, macOS, Linux
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComandosContent = () => {
  const comandos = [
    { cmd: "/sethome <nome>", desc: "Salva uma coordenada" },
    { cmd: "/delhome <nome>", desc: "Remove uma coordenada" },
    { cmd: "/home <nome>", desc: "Teleporta para coordenada salva" },
    { cmd: "/homes", desc: "Lista coordenadas salvas" },
    { cmd: "/rtp", desc: "Teleporte aleatório" },
    { cmd: "/spawn", desc: "Volta ao spawn" },
    { cmd: "/tpa <nick>", desc: "Solicita teleporte" },
    { cmd: "/tpaccept", desc: "Aceita teleporte" },
    { cmd: "/money", desc: "Ver saldo" },
    { cmd: "/baltop", desc: "Ranking de jogadores ricos" },
    { cmd: "/pay <nick> <valor>", desc: "Enviar dinheiro" },
    { cmd: "/kits", desc: "Ver kits disponíveis" },
  ];

  const ftbCommands = [
    { cmd: "/ftbchunks claim", desc: "Reivindica chunk atual" },
    { cmd: "/ftbchunks unclaim", desc: "Remove reivindicação" },
    { cmd: "/ftbteams party allies add <nick>", desc: "Adiciona aliado" },
    { cmd: "/ftbteams party allies remove <nick>", desc: "Remove aliado" },
  ];

  const styles = {
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#ffd54f",
    },
    subtitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginTop: "30px",
      marginBottom: "15px",
      color: "#ce93d8",
    },
    callout: {
      background: "rgba(255, 235, 59, 0.1)",
      borderLeft: "4px solid #ffd54f",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
      color: "#fff9c4",
    },
    commandItem: {
      background: "rgba(255,255,255,0.05)",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "10px",
      transition: "all 0.3s",
    },
    code: {
      color: "#76ff03",
      fontFamily: "monospace",
      fontSize: "14px",
    },
    desc: {
      color: "#bdbdbd",
      fontSize: "13px",
      marginTop: "5px",
    },
    alert: {
      background: "rgba(33, 150, 243, 0.2)",
      border: "1px solid rgba(33, 150, 243, 0.3)",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
  };

  return (
    <div>
      <h2 style={styles.title}>💡 Lista de Comandos</h2>

      <div style={styles.callout}>
        <p>
          Este é um recurso indispensável para extrair o máximo que o servidor
          pode oferecer!
        </p>
      </div>

      <div>
        <h3 style={styles.subtitle}>Comandos Gerais</h3>
        {comandos.map((c, i) => (
          <div
            key={i}
            style={styles.commandItem}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            <code style={styles.code}>{c.cmd}</code>
            <p style={styles.desc}>{c.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3 style={styles.subtitle}>Comandos FTB (Proteção)</h3>
        <div style={styles.alert}>
          <AlertTriangle size={20} />
          <p>
            <strong>Recomendação:</strong> Use o bloco{" "}
            <strong>Expulsion Pylon</strong> dentro da área reivindicada para
            proteção extra!
          </p>
        </div>
        {ftbCommands.map((c, i) => (
          <div
            key={i}
            style={styles.commandItem}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            <code style={{ ...styles.code, color: "#00e5ff" }}>{c.cmd}</code>
            <p style={styles.desc}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PrecosContent = () => {
  const precos = [
    { item: "1k Storage Cell", preco: "20", qtd: "1 unidade" },
    { item: "4k Storage Cell", preco: "50", qtd: "1 unidade" },
    { item: "16k Storage Cell", preco: "100", qtd: "1 unidade" },
    { item: "64k Storage Cell", preco: "400", qtd: "1 unidade" },
    { item: "Allthemodium Ingot", preco: "100", qtd: "64 unidades" },
    { item: "Vibranium Ingot", preco: "200", qtd: "64 unidades" },
    { item: "Unobtainium Ingot", preco: "300", qtd: "64 unidades" },
    { item: "Pack de Diamond", preco: "200", qtd: "64 unidades" },
    { item: "Pack de Emerald", preco: "100", qtd: "64 unidades" },
    { item: "Pack de Nether Star", preco: "500", qtd: "64 unidades" },
    { item: "Dragon Egg", preco: "250", qtd: "1 unidade" },
    { item: "Elitra", preco: "500", qtd: "1 unidade" },
    { item: "Draconic Core", preco: "2000", qtd: "1 unidade" },
    { item: "Ultimate Singularity", preco: "5000", qtd: "1 unidade" },
  ];

  const styles = {
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#ffd54f",
    },
    callout: {
      background: "rgba(156, 39, 176, 0.2)",
      borderLeft: "4px solid #ab47bc",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
      color: "#e1bee7",
    },
    tableWrapper: {
      overflowX: "auto",
      marginTop: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      background: "rgba(123, 31, 162, 0.5)",
      padding: "15px",
      textAlign: "left",
      fontWeight: "bold",
      borderBottom: "2px solid rgba(255,255,255,0.1)",
    },
    td: {
      padding: "12px 15px",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    tr: {
      transition: "background 0.3s",
    },
  };

  return (
    <div>
      <h2 style={styles.title}>💰 Tabela de Preços</h2>

      <div style={styles.callout}>
        <p>
          Boas práticas no comércio! Respeite a tabela oficial de preços (Artigo
          18º das Regras).
        </p>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Nome do Item</th>
              <th style={styles.th}>Valor (MGT Coins)</th>
              <th style={styles.th}>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {precos.map((p, i) => (
              <tr
                key={i}
                style={styles.tr}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <td style={styles.td}>{p.item}</td>
                <td
                  style={{ ...styles.td, color: "#ffd54f", fontWeight: "bold" }}
                >
                  {p.preco}
                </td>
                <td style={{ ...styles.td, color: "#bdbdbd" }}>{p.qtd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          background: "rgba(255, 152, 0, 0.2)",
          border: "1px solid rgba(255, 152, 0, 0.3)",
          padding: "15px",
          borderRadius: "8px",
          marginTop: "20px",
          fontSize: "14px",
          color: "#ffcc80",
        }}
      >
        <p>
          <strong>Nota:</strong> Esta é uma amostra. A tabela completa contém
          mais de 70 itens!
        </p>
      </div>
    </div>
  );
};

const RegrasContent = () => {
  const [openDetails, setOpenDetails] = useState({});

  const styles = {
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#ef5350",
    },
    callout: {
      background: "rgba(244, 67, 54, 0.2)",
      borderLeft: "4px solid #ef5350",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
    },
    details: {
      background: "rgba(255,255,255,0.05)",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "10px",
      cursor: "pointer",
    },
    summary: {
      fontWeight: "bold",
      listStyle: "none",
      cursor: "pointer",
    },
    content: {
      marginTop: "10px",
      color: "#bdbdbd",
    },
  };

  const regras = [
    {
      id: 1,
      titulo: "Artigo 1º - Respeitar as regras",
      desc: "O descumprimento das regras resultará na punição do jogador, conforme a gravidade.",
    },
    {
      id: 2,
      titulo: "Artigo 2º - Conteúdo Inadequado",
      desc: "É proibido disseminar conteúdos ilegais, adultos (+18), ou que promovam desrespeito, ofensas ou discriminação.",
    },
    {
      id: 9,
      titulo: "Artigo 9º - Proibido Dupe, Bugs e Glitches",
      desc: "É proibido duplicar itens, explorar falhas do servidor ou destruir base de outros jogadores.",
    },
    {
      id: 16,
      titulo: "Artigo 16º - Proibição de Doação",
      desc: "Doar itens é proibido, pois compromete a economia do servidor e desequilibra a jogabilidade.",
    },
    {
      id: 18,
      titulo: "Artigo 18º - Respeitar Tabela de Preços",
      desc: "É proibido vender itens por valores simbólicos ou abaixo da tabela para burlar regras.",
    },
  ];

  return (
    <div>
      <h2 style={styles.title}>📖 Constituição da Floresta Mágica</h2>

      <div style={styles.callout}>
        <p style={{ fontWeight: "bold", color: "#ffcdd2" }}>
          ⚠️ Sobre as Punições
        </p>
        <p style={{ fontSize: "14px", marginTop: "10px", color: "#ffcdd2" }}>
          As punições podem variar entre advertência, perda de itens, banimento
          temporário ou permanente, conforme a gravidade.
        </p>
      </div>

      {regras.map((regra) => (
        <div
          key={regra.id}
          style={styles.details}
          onClick={() =>
            setOpenDetails({
              ...openDetails,
              [regra.id]: !openDetails[regra.id],
            })
          }
        >
          <div style={styles.summary}>
            {openDetails[regra.id] ? "▼" : "▶"} {regra.titulo}
          </div>
          {openDetails[regra.id] && <p style={styles.content}>{regra.desc}</p>}
        </div>
      ))}

      <div
        style={{
          background: "rgba(33, 150, 243, 0.2)",
          padding: "15px",
          borderRadius: "8px",
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
        <p>
          📋 <strong>Total:</strong> 23 artigos na constituição completa.
          Consulte a wiki para ver todas as regras!
        </p>
      </div>
    </div>
  );
};

const BanidosContent = () => {
  const styles = {
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#ef5350",
    },
    callout: {
      background: "rgba(244, 67, 54, 0.2)",
      borderLeft: "4px solid #ef5350",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
      color: "#ffcdd2",
    },
    infoBox: {
      background: "rgba(255, 152, 0, 0.2)",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginTop: "20px",
    },
    card: {
      background: "rgba(255,255,255,0.05)",
      padding: "20px",
      borderRadius: "10px",
    },
    list: {
      fontSize: "14px",
      lineHeight: "1.8",
      color: "#bdbdbd",
    },
  };

  return (
    <div>
      <h2 style={styles.title}>🚫 Itens Banidos</h2>

      <div style={styles.callout}>
        <p>
          Itens marcados como <strong>"Proibido"</strong> no JEI não podem ser
          comercializados.
        </p>
      </div>

      <div style={styles.infoBox}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          ⚠️ Verificação no JEI
        </h3>
        <p style={{ color: "#ffcc80" }}>
          Antes de comercializar qualquer item, verifique a descrição no JEI
          (Just Enough Items). Se houver indicação de proibição, NÃO
          comercialize!
        </p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#76ff03",
            }}
          >
            ✅ Permitidos
          </h4>
          <ul style={styles.list}>
            <li>• Storage Cells (AE2)</li>
            <li>• Recursos básicos</li>
            <li>• Equipamentos craftados</li>
            <li>• Itens de mods principais</li>
          </ul>
        </div>
        <div style={styles.card}>
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#ef5350",
            }}
          >
            ❌ Proibidos
          </h4>
          <ul style={styles.list}>
            <li>• Itens marcados "Proibido" no JEI</li>
            <li>• Itens duplicados por exploits</li>
            <li>• Itens obtidos por bugs</li>
            <li>• Checar sempre no JEI!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ConexaoContent = () => {
  const styles = {
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#29b6f6",
    },
    callout: {
      background: "rgba(255, 152, 0, 0.2)",
      borderLeft: "4px solid #ff9800",
      padding: "15px",
      borderRadius: "8px",
      marginBottom: "20px",
      color: "#ffcc80",
    },
    card: {
      background: "rgba(255,255,255,0.05)",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    cardTitle: (color) => ({
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "10px",
      color: color,
    }),
    code: {
      display: "block",
      background: "rgba(0,0,0,0.5)",
      padding: "15px",
      borderRadius: "8px",
      color: "#76ff03",
      fontFamily: "monospace",
      marginTop: "10px",
    },
    link: {
      color: "#29b6f6",
      textDecoration: "underline",
    },
  };

  return (
    <div>
      <h2 style={styles.title}>🌐 Problemas de Conexão</h2>

      <div style={styles.callout}>
        <p>
          ⚠️ Este conteúdo vai te ajudar a corrigir a maioria dos problemas
          relacionados à conexão.
        </p>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle("#76ff03")}>1. Instalação Limpa</h3>
        <p style={{ color: "#bdbdbd" }}>
          Certifique-se de que colocou <strong>todos os arquivos</strong>{" "}
          corretamente. Cada arquivo da .minecraft tem sua função!
        </p>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle("#00e5ff")}>2. VPN Warp CloudFlare</h3>
        <p style={{ color: "#bdbdbd", marginBottom: "10px" }}>
          Recomendado para jogadores com ping alto ou desconexões frequentes.
        </p>
        <a
          href="https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/download-warp/"
          style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          → Baixar Warp CloudFlare
        </a>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle("#ab47bc")}>3. Limpar Cache DNS</h3>
        <p style={{ color: "#bdbdbd", marginBottom: "10px" }}>
          No Windows, abra o CMD como administrador e execute:
        </p>
        <code style={styles.code}>ipconfig /flushdns</code>
      </div>

      <div style={styles.card}>
        <h3 style={styles.cardTitle("#ffd54f")}>4. Comandos Úteis de Rede</h3>
        <code style={styles.code}>ipconfig /release</code>
        <code style={styles.code}>ipconfig /renew</code>
        <code style={styles.code}>netsh winsock reset</code>
        <p style={{ color: "#9e9e9e", fontSize: "14px", marginTop: "10px" }}>
          Após executar, reinicie o computador.
        </p>
      </div>
    </div>
  );
};

export default WikiServidorMagnatas;
