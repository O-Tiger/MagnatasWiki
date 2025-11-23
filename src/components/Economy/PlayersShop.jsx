import React from "react";
import { Link } from "react-router-dom";

export default function LojaJogadores() {
  return (
    <>
      <div style={styles.container}>
        <Link to="/" style={styles.button}>
          Início
        </Link>
        <header style={styles.header}>
          <div style={styles.headerIcon}>
            <span style={styles.icon}>🏪</span>
          </div>
          <h1 style={styles.pageTitle}>Loja de jogadores</h1>
        </header>

        <div style={styles.body}>
          <div style={styles.callout}>
            <div style={styles.calloutIcon}>
              <span>⚙</span>
            </div>
            <div style={styles.calloutContent}>
              <p style={styles.calloutText}>
                <strong>Em construção…</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2em auto",
    maxWidth: "900px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    color: "#fff", // Texto branco
    lineHeight: "1.5",
    padding: "0 20px",
    background: "#0a0a0a", // Fundo escuro oficial
    minHeight: "100vh",
  },
  header: {
    marginBottom: "1.5em",
    textAlign: "center",
  },
  headerIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pageTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginTop: "0",
    marginBottom: "0.75em",
    letterSpacing: "-0.01em",
    lineHeight: "1.2",
    color: "#FDB813", // Amarelo oficial
    textShadow: "0 0 20px rgba(253, 184, 19, 0.5)",
  },
  body: {
    marginTop: "2em",
    width: "100%",
  },
  callout: {
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "10px",
    padding: "1rem",
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
  },
  calloutIcon: {
    fontSize: "1.5em",
    flexShrink: 0,
  },
  calloutContent: {
    width: "100%",
  },
  calloutText: {
    margin: "0",
    color: "#FDB813", // Amarelo
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 25px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "500",
    transition: "0.3s",
    background: "#FDB813", // Amarelo
    color: "#000", // Texto preto
    transform: "scale(1)",
    boxShadow: "0px 4px 15px rgba(253, 184, 19, 0.4)",
    width: "fit-content",
    marginBottom: "2rem",
    textDecoration: "none",
  },
};
