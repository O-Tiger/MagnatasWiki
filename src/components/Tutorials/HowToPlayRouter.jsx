import React, { useState } from "react";
import { Link } from "react-router-dom";

// Componente: Como Jogar PC
export const HowToPlayPC = () => {
  const [openLauncher, setOpenLauncher] = useState(null);

  const launchers = [
    { id: "manual", name: "Instalação manual (.minecraft)", icon: "🔧" },
    { id: "curseforge", name: "Curse Forge", icon: "🔥" },
    { id: "technic", name: "Technic", icon: "⚙️" },
    { id: "tlauncher", name: "Tlauncher", icon: "🚀" },
    { id: "sklauncher", name: "SkLauncher", icon: "💎" },
    { id: "atlauncher", name: "ATLauncher", icon: "🎮" },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.iconLarge}>💻</div>
        <h1 style={styles.title}>Como Jogar (PC)</h1>
        <p style={styles.subtitle}>Escolha seu launcher e siga o tutorial</p>
      </header>

      <div style={styles.warningBox}>
        <div style={styles.warningIcon}>⚠️</div>
        <div>
          <h3 style={styles.warningTitle}>🔧 Instalação Limpa Recomendada</h3>
          <p style={styles.warningText}>
            Para evitar conflitos ou erros de compatibilidade,{" "}
            <strong>
              recomendamos fortemente que você faça uma instalação limpa.
            </strong>{" "}
            Siga cada etapa do tutorial com atenção - Pular partes pode
            comprometer o funcionamento do modpack dentro do servidor.
          </p>
        </div>
      </div>

      <div style={styles.cleanInstallSection}>
        <h3 style={styles.sectionTitle}>🧹 Passos para Instalação Limpa</h3>
        <ol style={styles.stepsList}>
          <li>
            Pressione a tecla <strong>Windows + R</strong>, digite{" "}
            <code>%appdata%</code> e pressione Enter.
          </li>
          <li>
            Exclua ou faça um Backup de todas as pastas relacionadas ao
            Minecraft (.minecraft, .technic, etc…)
          </li>
          <li>Agora, basta prosseguir com a instalação, boa sorte.</li>
        </ol>
      </div>

      <div style={styles.infoBox}>
        <div style={styles.infoIcon}>📢</div>
        <p>
          <strong>Importante:</strong> Cada arquivo incluído tem uma função
          específica. <strong>Não adianta copiar apenas a pasta mods</strong> -
          isso pode causar falhas ou impedir a conexão com o servidor. Instale
          tudo conforme orientados nos tutoriais abaixo para uma experiência
          completa e sem dores de cabeça.
        </p>
      </div>

      <div style={styles.launchersSection}>
        <h2 style={styles.sectionTitle}>📦 Tutoriais por Launcher</h2>
        <div style={styles.launchersGrid}>
          {launchers.map((launcher) => (
            <div
              key={launcher.id}
              style={styles.launcherCard}
              onClick={() =>
                setOpenLauncher(
                  openLauncher === launcher.id ? null : launcher.id
                )
              }
            >
              <div style={styles.launcherHeader}>
                <span style={styles.launcherIcon}>{launcher.icon}</span>
                <span style={styles.launcherName}>{launcher.name}</span>
              </div>
              {openLauncher === launcher.id && (
                <div style={styles.launcherContent}>
                  <p style={styles.comingSoon}>📝 Tutorial em construção...</p>
                  <p style={styles.helpText}>
                    Em breve disponível! Enquanto isso, entre em contato no
                    Discord.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente: Como Jogar Mobile
export const HowToPlayMobile = () => {
  const [openLauncher, setOpenLauncher] = useState(null);

  const mobileLaunchers = [
    {
      id: "amethyst",
      name: "Amethyst Launcher",
      rank: "1º",
      desc: "Considerado o melhor em desempenho e recursos. Porém, você precisa ter conta original (Mojang/Microsoft).",
      icon: "💎",
      needsOriginal: true,
    },
    {
      id: "zalith",
      name: "Zalith Launcher",
      rank: "2º",
      desc: "Ótima alternativa, com boa compatibilidade e interface moderna.",
      icon: "⚡",
      needsOriginal: false,
    },
    {
      id: "mojo",
      name: "Mojo Launcher",
      rank: "3º",
      desc: "Simples, funcional e o mais acessível de todos, já que está disponível diretamente na Play Store.",
      icon: "📱",
      needsOriginal: false,
      highlight: true,
    },
    {
      id: "pojav",
      name: "PojavLauncher",
      rank: "4º",
      desc: "Fica em quarto lugar, mas ainda é uma opção sólida, especialmente para quem quer jogar no celular com mais controle técnico.",
      icon: "🎮",
      needsOriginal: false,
    },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.iconLarge}>📱</div>
        <h1 style={styles.title}>Como Jogar (Mobile)</h1>
        <p style={styles.subtitle}>Guia completo para Android</p>
      </header>

      <div style={styles.highlightBox}>
        <h3 style={styles.highlightTitle}>
          📢 Melhores launchers para Minecraft Mobile atualmente:
        </h3>
        <div style={styles.rankingNote}>
          <strong>📱 Destaque de acessibilidade:</strong>
          <br />O <strong>Mojo Launcher</strong> se destaca por estar disponível
          na Play Store, facilitando o download e instalação para qualquer
          usuário Android, pirata e original.
        </div>
      </div>

      <div style={styles.introSection}>
        <h3 style={styles.sectionTitle}>📋 Introdução</h3>
        <p style={styles.introText}>
          Antes de começar, você precisa ter algum aplicativo de gerenciamento
          de arquivos, para manusear e extrair as pastas, recomendação:{" "}
          <a
            href="https://play.google.com/store/apps/details?id=ru.zdevs.zarchiver"
            style={styles.link}
          >
            ZArchiver
          </a>
          .
        </p>
        <p style={styles.introText}>
          Após baixar vá até as configurações em 'explorador' e{" "}
          <strong>habilite a opção de visualizar arquivos ocultos</strong>.
        </p>
      </div>

      <div style={styles.launchersSection}>
        <h2 style={styles.sectionTitle}>🚀 Launchers Disponíveis</h2>
        <div style={styles.mobileGrid}>
          {mobileLaunchers.map((launcher) => (
            <div
              key={launcher.id}
              style={{
                ...styles.mobileLauncherCard,
                ...(launcher.highlight ? styles.highlightCard : {}),
              }}
              onClick={() =>
                setOpenLauncher(
                  openLauncher === launcher.id ? null : launcher.id
                )
              }
            >
              <div style={styles.launcherRank}>{launcher.rank}</div>
              <div style={styles.launcherHeader}>
                <span style={styles.launcherIcon}>{launcher.icon}</span>
                <span style={styles.launcherName}>{launcher.name}</span>
              </div>
              {launcher.needsOriginal && (
                <div style={styles.originalBadge}>🔒 Requer conta original</div>
              )}
              <p style={styles.launcherDesc}>{launcher.desc}</p>
              {openLauncher === launcher.id && (
                <div style={styles.launcherContent}>
                  <p style={styles.comingSoon}>📝 Tutorial em construção...</p>
                  <p style={styles.helpText}>Em breve disponível!</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//MARK: STYLES
const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    background: "#0a0a0a", // Fundo escuro oficial
    minHeight: "100vh",
    color: "#fff",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
    padding: "40px",
    background: "#1a1a1a", // Cinza escuro
    borderRadius: "15px",
  },
  iconLarge: {
    fontSize: "4em",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5em",
    marginBottom: "10px",
    color: "#FDB813", // Amarelo oficial
    textShadow: "0 0 20px rgba(253, 184, 19, 0.5)",
  },
  subtitle: {
    fontSize: "1.2em",
    opacity: 0.9,
  },
  warningBox: {
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "30px",
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },
  warningIcon: {
    fontSize: "2em",
  },
  warningTitle: {
    marginBottom: "10px",
    fontSize: "1.3em",
    color: "#FDB813", // Amarelo
  },
  warningText: {
    lineHeight: "1.6",
    fontSize: "1em",
  },
  cleanInstallSection: {
    background: "rgba(253, 184, 19, 0.15)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "1.5em",
    marginBottom: "20px",
    color: "#FDB813", // Amarelo
  },
  stepsList: {
    lineHeight: "2",
    paddingLeft: "25px",
    color: "#b0b0b0",
  },
  infoBox: {
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "30px",
    display: "flex",
    gap: "15px",
  },
  infoIcon: {
    fontSize: "1.5em",
  },
  launchersSection: {
    marginTop: "40px",
  },
  launchersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  launcherCard: {
    background: "#2a2a2a", // Cinza médio
    borderRadius: "12px",
    padding: "25px",
    cursor: "pointer",
    transition: "all 0.3s",
    border: "2px solid transparent",
  },
  launcherHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px",
  },
  launcherIcon: {
    fontSize: "2em",
  },
  launcherName: {
    fontSize: "1.3em",
    fontWeight: "bold",
  },
  launcherContent: {
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  },
  comingSoon: {
    fontSize: "1.1em",
    color: "#FDB813", // Amarelo
    marginBottom: "10px",
  },
  helpText: {
    opacity: 0.8,
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
    background: "#FDB813", // Amarelo
    color: "#000", // Texto preto
    transform: "scale(1)",
    boxShadow: "0px 4px 15px rgba(253, 184, 19, 0.4)",
    width: "fit-content",
    marginBottom: "0.5rem",
  },

  // Mobile specific
  highlightBox: {
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "30px",
  },
  highlightTitle: {
    fontSize: "1.3em",
    marginBottom: "15px",
    color: "#FDB813", // Amarelo
  },
  rankingNote: {
    background: "#2a2a2a", // Cinza médio
    padding: "15px",
    borderRadius: "8px",
    marginTop: "15px",
    lineHeight: "1.6",
  },
  introSection: {
    background: "#1a1a1a", // Cinza escuro
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "30px",
  },
  introText: {
    lineHeight: "1.8",
    marginBottom: "15px",
  },
  link: {
    color: "#FDB813", // Amarelo
    textDecoration: "underline",
  },
  mobileGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  mobileLauncherCard: {
    background: "#2a2a2a", // Cinza médio
    borderRadius: "12px",
    padding: "25px",
    cursor: "pointer",
    transition: "all 0.3s",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    position: "relative",
  },
  highlightCard: {
    border: "2px solid #FDB813",
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
  },
  launcherRank: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#FDB813", // Amarelo
    color: "#000", // Texto preto
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "0.9em",
    fontWeight: "bold",
  },
  launcherDesc: {
    lineHeight: "1.6",
    opacity: 0.9,
    fontSize: "0.95em",
  },
  originalBadge: {
    display: "inline-block",
    background: "rgba(253, 184, 19, 0.3)", // Amarelo transparente
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "0.85em",
    marginBottom: "10px",
  },

  // Navigation buttons
  navBtn: {
    padding: "12px 30px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    background: "#2a2a2a", // Cinza médio
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1em",
    fontWeight: "bold",
    transition: "all 0.3s",
  },
  navBtnActive: {
    background: "#FDB813", // Amarelo quando ativo
    borderColor: "#FDB813",
    color: "#000", // Texto preto quando ativo
  },
};

// Exportação padrão com navegação entre páginas
const HowToPlayRouter = () => {
  const [currentPage, setCurrentPage] = useState("pc");

  return (
    <div>
      ,
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <button
          onClick={() => setCurrentPage("pc")}
          style={{
            ...styles.navBtn,
            ...(currentPage === "pc" ? styles.navBtnActive : {}),
          }}
        >
          💻 PC
        </button>
        <button
          onClick={() => setCurrentPage("mobile")}
          style={{
            ...styles.navBtn,
            ...(currentPage === "mobile" ? styles.navBtnActive : {}),
          }}
        >
          📱 Mobile
        </button>
      </div>
      {currentPage === "pc" ? <HowToPlayPC /> : <HowToPlayMobile />}
    </div>
  );
};

styles.navBtn = {
  padding: "12px 30px",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  background: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1.1em",
  fontWeight: "bold",
  transition: "all 0.3s",
};

styles.navBtnActive = {
  background: "rgba(255, 255, 255, 0.3)",
  borderColor: "#fff",
};

export default HowToPlayRouter;
