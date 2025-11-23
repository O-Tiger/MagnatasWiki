import React from "react";
import { Link } from "react-router-dom";

const GettingStartedPage = () => {
  const steps = [
    {
      number: "1",
      title: "Entre no Servidor",
      description: "Conecte-se usando o IP: servidor.magnatas.com.br",
    },
    {
      number: "2",
      title: "Leia as Regras",
      description:
        "Familiarize-se com as regras do servidor na página de Regras",
    },
    {
      number: "3",
      title: "Escolha um Local",
      description:
        "Encontre um lugar para construir sua base. Use /rtp para teletransporte aleatório",
    },
    {
      number: "4",
      title: "Proteja sua Base",
      description:
        "Use o sistema de proteção para garantir a segurança da sua construção",
    },
    {
      number: "5",
      title: "Comece a Jogar!",
      description: "Explore, construa, faça amigos e divirta-se!",
    },
  ];

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
      <h1 style={styles.title}>🚀 Como Começar</h1>
      <p style={styles.intro}>
        Bem-vindo ao Servidor Magnatas! Siga este guia para começar sua jornada.
      </p>

      <div style={styles.steps}>
        {steps.map((step) => (
          <div key={step.number} style={styles.stepCard}>
            <div style={styles.stepNumber}>{step.number}</div>
            <div style={styles.stepContent}>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.tipsSection}>
        <h2 style={styles.tipsTitle}>💡 Dicas Importantes</h2>
        <ul style={styles.tipsList}>
          <li>Sempre faça backup dos seus itens importantes</li>
          <li>Seja educado com outros jogadores</li>
          <li>Participe dos eventos do servidor para ganhar recompensas</li>
          <li>Use o chat para pedir ajuda se precisar</li>
          <li>Não confie seus itens a desconhecidos</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    background: "#0a0a0a", // Fundo escuro oficial
    minHeight: "100vh",
    color: "#fff",
  },
  title: {
    fontSize: "2.5em",
    marginBottom: "10px",
    color: "#FDB813", // Amarelo oficial
    textAlign: "center",
    textShadow: "0 0 20px rgba(253, 184, 19, 0.5)",
  },
  intro: {
    fontSize: "1.2em",
    color: "#b0b0b0", // Cinza claro
    marginBottom: "50px",
    textAlign: "center",
  },
  steps: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "60px",
  },
  stepCard: {
    display: "flex",
    gap: "20px",
    padding: "25px",
    background: "#2a2a2a", // Cinza médio
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    alignItems: "flex-start",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s",
  },
  stepNumber: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#000", // Texto preto
    background: "#FDB813", // Amarelo
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: "1.5em",
    color: "#fff",
    marginBottom: "8px",
  },
  stepDescription: {
    color: "#b0b0b0", // Cinza claro
    lineHeight: "1.6",
    fontSize: "1.1em",
  },
  tipsSection: {
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
    padding: "30px",
    borderRadius: "12px",
    border: "2px solid #FDB813",
  },
  tipsTitle: {
    fontSize: "1.8em",
    color: "#FDB813", // Amarelo
    marginBottom: "20px",
  },
  tipsList: {
    listStyle: "none",
    padding: 0,
    color: "#b0b0b0",
    lineHeight: "2",
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
};

export default GettingStartedPage;
