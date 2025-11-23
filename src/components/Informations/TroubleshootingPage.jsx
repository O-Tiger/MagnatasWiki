import React, { useState } from "react";
import { Link } from "react-router-dom";

const TroubleshootingPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const dnsCommands = [
    { cmd: "ipconfig /flushdns", desc: "Limpa o cache DNS local" },
    { cmd: "ipconfig /release", desc: "Libera o endereço de IP atual" },
    {
      cmd: "ipconfig /renew",
      desc: "Solicita um novo endereço IP do servidor DHCP",
    },
    {
      cmd: "ipconfig /registerdns",
      desc: "Atualiza as configurações DNS e registra novamente no servidor DNS",
    },
    {
      cmd: "ipconfig /displaydns",
      desc: "Mostra o conteúdo atual do cache DNS",
    },
    {
      cmd: "netsh winsock reset",
      desc: "Restaura o catálogo Winsock (útil para problemas de conexão)",
    },
    { cmd: "netsh int ip reset", desc: "Reseta as configurações de TCP/IP" },
  ];

  const Section = ({ id, title, children, icon }) => (
    <div style={styles.section}>
      <div style={styles.sectionHeader} onClick={() => toggleSection(id)}>
        <div style={styles.sectionTitleWrapper}>
          <span style={styles.sectionIcon}>{icon}</span>
          <h3 style={styles.sectionTitle}>{title}</h3>
        </div>
        <span style={styles.expandIcon}>
          {expandedSection === id ? "▼" : "▶"}
        </span>
      </div>
      {expandedSection === id && (
        <div style={styles.sectionContent}>{children}</div>
      )}
    </div>
  );

  return (
    <div style={styles.container}>
      {" "}
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
        <div style={styles.headerIcon}>☁️</div>
        <h1 style={styles.title}>Problemas de Conexão</h1>
        <p style={styles.subtitle}>
          Soluções para conectar ao Servidor Magnatas
        </p>
      </header>
      <div style={styles.warningBox}>
        <div style={styles.warningIcon}>⚠️</div>
        <p style={styles.warningText}>
          O conteúdo dessa página vai te ajudar a corrigir a maioria dos
          problemas relacionados à conexão com o Servidor Magnatas. Leia
          atentamente, se possível, faça todos os procedimentos.
        </p>
      </div>
      <Section id="modpack" title="Modpack não abre ou não conecta" icon="🎮">
        <div style={styles.contentBox}>
          <p style={styles.paragraph}>
            Antes de qualquer coisa, certifique-se de que colocou{" "}
            <strong>todos os arquivos</strong> ou que fez a instalação de forma
            correta.{" "}
            <strong>
              Cada arquivo da .minecraft tem sua função e não deve ser deixado
              de lado
            </strong>
            , colocar apenas a pasta mods pode causar problemas como Time Out,
            problemas de conexão em geral e crash.
          </p>
          <p style={styles.paragraph}>
            Veja na wiki o tutorial como jogar e siga as instruções de{" "}
            <strong>instalação limpa</strong>.
          </p>
          <div style={styles.linkBox}>
            <span style={styles.linkIcon}>📚</span>
            <span>Consulte o guia "Como Jogar" na wiki</span>
          </div>
        </div>
      </Section>
      <Section id="vpn" title="Túnel de Conexão (usando VPN)" icon="🔒">
        <div style={styles.contentBox}>
          <p style={styles.paragraph}>
            Esta é a opção principal para quem está enfrentando problemas com
            ping alto, ou está sendo desconectado do servidor sem motivo
            aparente.{" "}
            <strong>
              Recomendamos o uso da Vpn Warp CloudFlare principalmente para
              jogadores de outros países, ou longe do estado de São Paulo
            </strong>
            .
          </p>
          <div style={styles.highlightBox}>
            <h4 style={styles.highlightTitle}>💡 Solução Recomendada</h4>
            <p style={styles.paragraph}>
              Baixe o aplicativo do Warp Cloudflare para melhorar sua conexão:
            </p>
            <a
              href="https://developers.cloudflare.com/cloudflare-one/connections/connect-devices/warp/download-warp/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.downloadButton}
            >
              🔗 Download Warp Cloudflare
            </a>
          </div>
        </div>
      </Section>
      <Section id="dns" title="Limpar o cache DNS no Windows" icon="🔧">
        <div style={styles.contentBox}>
          <h4 style={styles.subsectionTitle}>O que isso faz?</h4>
          <p style={styles.paragraph}>
            Limpar o cache DNS remove registros antigos de sites que seu
            computador armazenou. Isso pode ajudar a resolver problemas de
            conexão e redirecionamentos errados.
          </p>

          <div style={styles.stepsBox}>
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <div style={styles.stepContent}>
                <h5 style={styles.stepTitle}>
                  Abra o Prompt de Comando como Administrador
                </h5>
                <ul style={styles.list}>
                  <li>
                    Pressione <strong>Win + R</strong> para abrir o Executar
                  </li>
                  <li>
                    Digite <strong>cmd</strong>
                  </li>
                  <li>
                    Pressione <strong>Ctrl + Shift + Enter</strong> para abrir
                    como <strong>Administrador</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <div style={styles.stepContent}>
                <h5 style={styles.stepTitle}>Execute o comando de limpeza</h5>
                <ul style={styles.list}>
                  <li>
                    No cmd digite o seguinte comando:{" "}
                    <code style={styles.inlineCode}>ipconfig /flushdns</code>
                  </li>
                  <li>Pressione Enter</li>
                </ul>
              </div>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <div style={styles.stepContent}>
                <h5 style={styles.stepTitle}>Confirmação</h5>
                <p>Se tudo deu certo, você verá algo como:</p>
                <div style={styles.codeBlock}>
                  <code>"Successfully flushed the DNS Resolver Cache."</code>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.commandsSection}>
            <h4 style={styles.subsectionTitle}>
              📋 Comandos úteis para rede e DNS no Windows
            </h4>
            <div style={styles.commandsGrid}>
              {dnsCommands.map((cmd, index) => (
                <div key={index} style={styles.commandCard}>
                  <code style={styles.commandCode}>{cmd.cmd}</code>
                  <p style={styles.commandDesc}>{cmd.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.sequenceBox}>
            <h4 style={styles.subsectionTitle}>
              🔄 Exemplo de sequência para resolver problemas de rede
            </h4>
            <p style={styles.paragraph}>
              Se você estiver com problemas de conexão, pode executar esses
              comandos em ordem:
            </p>
            <div style={styles.codeBlock}>
              <pre style={styles.preCode}>
                {`1. ipconfig /flushdns
2. ipconfig /release
3. ipconfig /renew
4. netsh winsock reset
5. netsh int ip reset`}
              </pre>
            </div>
            <div style={styles.noteBox}>
              <span style={styles.noteIcon}>💡</span>
              <span>
                Quando terminar de executar os comandos, é indicado que{" "}
                <strong>reinicie o computador</strong>.
              </span>
            </div>
          </div>
        </div>
      </Section>
      <Section id="firewall" title="Firewall do Windows" icon="🛡️">
        <div style={styles.contentBox}>
          <h4 style={styles.subsectionTitle}>Desligar o Firewall do Windows</h4>
          <p style={styles.paragraph}>
            Em alguns casos o Firewall do Windows pode interceptar e barrar a
            conexão com o Servidor, isso é incomum, mas pode acontecer, tente
            desligá-lo para testar.
          </p>
          <div style={styles.alertBox}>
            <span style={styles.alertIcon}>⚠️</span>
            <div>
              <p style={styles.alertText}>
                <strong>Atenção:</strong> Não é recomendado deixar o Firewall
                desligado, pois ele protege a sua rede contra ataques externos.
                Recomendamos que faça o teste, se não for a causa principal,
                ligue novamente para manter sua segurança.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <div style={styles.footer}>
        <div style={styles.footerIcon}>💬</div>
        <p style={styles.footerText}>
          <strong>Ainda com problemas?</strong>
          <br />
          Entre em contato com nossa equipe no Discord para suporte
          personalizado!
        </p>
      </div>
    </div>
  );
};

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
  headerIcon: {
    fontSize: "4em",
    marginBottom: "15px",
  },
  title: {
    fontSize: "2.8em",
    marginBottom: "10px",
    color: "#FDB813", // Amarelo oficial
    textShadow: "0 0 20px rgba(253, 184, 19, 0.5)",
  },
  subtitle: {
    fontSize: "1.2em",
    color: "#b0b0b0", // Cinza claro
  },
  warningBox: {
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "40px",
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  warningIcon: {
    fontSize: "2.5em",
    flexShrink: 0,
  },
  warningText: {
    lineHeight: "1.7",
    fontSize: "1.05em",
  },
  section: {
    marginBottom: "25px",
    background: "#1a1a1a",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  sectionHeader: {
    padding: "20px 25px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#2a2a2a", // Cinza médio
    transition: "background 0.3s",
  },
  sectionTitleWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flex: 1,
  },
  sectionIcon: {
    fontSize: "2em",
  },
  sectionTitle: {
    margin: 0,
    fontSize: "1.5em",
    color: "#FDB813", // Amarelo
  },
  expandIcon: {
    fontSize: "1.5em",
    color: "#FDB813", // Amarelo
  },
  sectionContent: {
    padding: "25px",
  },
  contentBox: {
    color: "#b0b0b0", // Cinza claro
  },
  paragraph: {
    lineHeight: "1.8",
    marginBottom: "20px",
    fontSize: "1.05em",
  },
  linkBox: {
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "8px",
    padding: "15px 20px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginTop: "20px",
  },
  linkIcon: {
    fontSize: "1.5em",
  },
  highlightBox: {
    background: "rgba(253, 184, 19, 0.15)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "10px",
    padding: "25px",
    marginTop: "20px",
  },
  highlightTitle: {
    color: "#FDB813", // Amarelo
    marginBottom: "15px",
    fontSize: "1.3em",
  },
  downloadButton: {
    display: "inline-block",
    background: "#FDB813", // Amarelo
    color: "#000", // Texto preto
    padding: "12px 30px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "15px",
    transition: "all 0.3s",
  },
  subsectionTitle: {
    color: "#FDB813", // Amarelo
    marginBottom: "15px",
    marginTop: "25px",
    fontSize: "1.4em",
  },
  stepsBox: {
    marginTop: "25px",
  },
  step: {
    display: "flex",
    gap: "20px",
    marginBottom: "25px",
    alignItems: "flex-start",
  },
  stepNumber: {
    background: "#FDB813", // Amarelo
    color: "#000", // Texto preto
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.3em",
    flexShrink: 0,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    marginBottom: "10px",
    color: "#FDB813", // Amarelo
  },
  list: {
    paddingLeft: "25px",
    lineHeight: "2",
  },
  inlineCode: {
    background: "rgba(253, 184, 19, 0.2)", // Amarelo transparente
    padding: "3px 8px",
    borderRadius: "4px",
    color: "#FDB813", // Amarelo
    fontFamily: "monospace",
  },
  codeBlock: {
    background: "#2a2a2a", // Cinza médio
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "15px",
    fontFamily: "monospace",
    color: "#FDB813", // Amarelo
  },
  preCode: {
    margin: 0,
    whiteSpace: "pre-wrap",
    lineHeight: "1.8",
  },
  commandsSection: {
    marginTop: "30px",
  },
  commandsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },
  commandCard: {
    background: "#2a2a2a", // Cinza médio
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "15px",
    transition: "all 0.3s",
  },
  commandCode: {
    display: "block",
    background: "rgba(253, 184, 19, 0.2)", // Amarelo transparente
    padding: "10px",
    borderRadius: "5px",
    color: "#FDB813", // Amarelo
    fontFamily: "monospace",
    marginBottom: "10px",
    fontSize: "0.95em",
  },
  commandDesc: {
    margin: 0,
    fontSize: "0.95em",
    color: "#b0b0b0",
  },
  sequenceBox: {
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "10px",
    padding: "25px",
    marginTop: "30px",
  },
  noteBox: {
    background: "rgba(253, 184, 19, 0.2)", // Amarelo transparente
    border: "1px solid #FDB813",
    borderRadius: "8px",
    padding: "15px",
    marginTop: "20px",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  noteIcon: {
    fontSize: "1.5em",
  },
  alertBox: {
    background: "rgba(253, 184, 19, 0.15)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "10px",
    padding: "20px",
    marginTop: "20px",
    display: "flex",
    gap: "15px",
  },
  alertIcon: {
    fontSize: "2em",
    flexShrink: 0,
  },
  alertText: {
    lineHeight: "1.7",
    margin: 0,
  },
  footer: {
    marginTop: "50px",
    padding: "30px",
    background: "rgba(253, 184, 19, 0.15)", // Amarelo transparente
    borderRadius: "12px",
    border: "2px solid #FDB813",
    textAlign: "center",
  },
  footerIcon: {
    fontSize: "3em",
    marginBottom: "15px",
  },
  footerText: {
    fontSize: "1.1em",
    lineHeight: "1.8",
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

export default TroubleshootingPage;
