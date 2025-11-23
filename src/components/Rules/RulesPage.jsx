import React, { useState } from "react";
import { Link } from "react-router-dom";

const RulesPage = () => {
  const [expandedRule, setExpandedRule] = useState(null);

  const toggleRule = (id) => {
    setExpandedRule(expandedRule === id ? null : id);
  };

  const fundamentalRules = [
    {
      id: 1,
      title: "Artigo 1º - Respeitar as regras aqui descritas",
      content:
        "O descumprimento das regras abaixo resultará na punição do jogador, conforme a gravidade da infração.",
    },
    {
      id: 2,
      title: "Artigo 2º - Conteúdo Inadequado",
      content:
        "É expressamente proibido utilizar os meios de comunicação para disseminar conteúdos ilegais, de natureza adulta (+18), ou que promovam desrespeito, ofensas ou discriminação contra outros jogadores.",
    },
    {
      id: 3,
      title: "Artigo 3º - Spam/Flood/Marcações",
      content:
        "Proibido o uso irregular nos canais de comunicação, não será tolerado: spam, capslock, flood, marcações e sons exagerados nos canais de voz do servidor.",
    },
    {
      id: 4,
      title: "Artigo 4º - Conduta no Chat/Voice",
      content:
        "Durante o uso dos canais de comunicação (chat ou voz), é estritamente proibido ofender outros jogadores, especialmente aqueles com quem não se possui vínculo. Qualquer forma de discriminação, injúria, calúnia ou comportamento que provoque discussões, brigas ou tumultos será considerado desrespeitoso e estará sujeito às punições previstas, conforme a gravidade da infração.",
    },
    {
      id: 5,
      title: "Artigo 5º - Linguagem Inapropriada",
      content:
        'É terminantemente proibido o uso de termos ofensivos ou de baixo calão, incluindo a palavra "cú" e suas variações, como "ku", em qualquer comunicação dentro do servidor. O descumprimento desta norma poderá acarretar punições conforme a gravidade da infração.',
    },
    {
      id: 6,
      title: "Artigo 6º - Respeito à Equipe de Suporte",
      content:
        "É obrigatório respeitar as decisões da equipe de staff. Caso o jogador não concorde com alguma ação ou medida tomada, deverá abrir um ticket ou entrar em contato diretamente com o Gnomo por mensagem privada. Desrespeitar membros da staff ou qualquer outro jogador será considerado infração grave e poderá resultar em punições como prisão ou banimento, conforme a gravidade do caso.",
    },
    {
      id: 7,
      title: "Artigo 7º - Divulgação sem Autorização",
      content:
        "É estritamente proibida a divulgação de outros servidores em qualquer canal de comunicação. A divulgação de lives e vídeos é permitida somente quando estiverem relacionados ao Servidor Magnatas. Qualquer divulgação fora dessas condições estará sujeita a punições conforme a gravidade da infração.",
    },
    {
      id: 8,
      title: "Artigo 8º - Proibido Traps e PvP em Locais Protegidos",
      content:
        "É proibido atrair jogadores para armadilhas (traps) ou realizar PvP em áreas protegidas, como o Spawn. Essas ações violam as regras de convivência do servidor e estão sujeitas a punição conforme a gravidade da infração.",
    },
    {
      id: 9,
      title: "Artigo 9º - Proibido Dupe, Bugs e Glitches",
      content:
        "É proibido duplicar itens, explorar falhas do servidor (bugs/glitches) para benefício próprio, omitir erros encontrados ou destruir a base de outros jogadores. Essas práticas comprometem a integridade do jogo e serão punidas conforme a gravidade.",
    },
    {
      id: 10,
      title: "Artigo 10º - Perda de Itens",
      content:
        "A equipe não se responsabiliza pela perda de itens causada por bugs, falhas, rollbacks ou motivos naturais, como queda em lava. A reposição poderá ser feita, mas não é obrigatória, sendo permitida apenas mediante gravação ou print que comprove a posse do item.",
    },
    {
      id: 11,
      title: "Artigo 11º - Respeitar aos Seres Mágicos da Floresta",
      content:
        "É obrigatório manter o respeito por todos os jogadores e criaturas mágicas do servidor. A convivência harmoniosa é essencial para a experiência de todos.",
    },
    {
      id: 12,
      title: "Artigo 12º - Proibido Burlar o Sistema de AFK",
      content:
        "É proibido utilizar estruturas, autoclicks, macros ou qualquer outro método para burlar o sistema de AFK. Esse benefício é exclusivo para jogadores VIP no servidor.",
    },
    {
      id: 13,
      title:
        "Artigo 13º - Bases que Causam Lag, Farms Mal Feitas ou Exageradas",
      content:
        "Caso a base de um jogador seja identificada como causa de lag nas medições do servidor (as medições são feitas usando o mod Quark e Observable) os itens ou máquinas responsáveis poderão ser removidos pelos staffs sem aviso prévio. Essa medida visa preservar a jogabilidade coletiva, priorizando o desempenho do servidor em detrimento de interesses individuais.",
    },
    {
      id: 14,
      title: "Artigo 14º - Uso de Mods e Ferramentas Externas (mod client)",
      content:
        "É permitido o uso de mods que não ofereçam vantagem injusta. Mods de mapa, interface ou estética são liberados. Mods que revelem estruturas ou interfiram na jogabilidade serão punidos.",
    },
    {
      id: 15,
      title: "Artigo 15º - Proteção de Território",
      content:
        "É responsabilidade do jogador proteger sua área com claims ou barreiras adequadas. Reclamações sobre invasões em áreas não protegidas podem não ser atendidas. Para garantir a segurança da sua base, recomendamos a utilização do mod FTB Chunks juntamente com o mod Pylons.",
    },
  ];

  const commerceRules = [
    {
      id: 16,
      title: "Artigo 16º - Proibição de Doação de Itens",
      content:
        "Doar itens entre jogadores é proibido, pois compromete a economia do servidor e desequilibra a jogabilidade.",
    },
    {
      id: 17,
      title: "Artigo 17º - Transações Justas e Honestas",
      content:
        "Todas as negociações devem ser realizadas de forma justa e transparente. Golpes, fraudes ou qualquer tipo de sabotagem são proibidos e passíveis de punição.",
    },
    {
      id: 18,
      title: "Artigo 18º - Respeitar a Tabela de Preços",
      content:
        "É proibido vender itens por valores simbólicos ou abaixo da tabela com a intenção de burlar a regra de doação contido no Art. 14º. Todos os preços devem ser razoáveis e respeitar a tabela oficial. Negociações que desvalorizem o mercado serão punidas.",
    },
    {
      id: 19,
      title: "Artigo 19º - Respeito à Propriedade Alheia",
      content:
        "É proibido invadir, destruir ou modificar estruturas de outros jogadores, assim como realizar spawn de mobs agressivos em propriedades alheias. Atos de roubo ou sabotagem serão punidos conforme a gravidade da infração.",
    },
    {
      id: 20,
      title: "Artigo 20º - Publicidade de Lojas",
      content:
        "É permitido divulgar sua loja no chat do servidor, desde que com moderação. Spam ou excesso de mensagens será considerado infração e poderá ser punido conforme o Art. 3º.",
    },
    {
      id: 21,
      title: "Artigo 21º - Segurança nas Transações",
      content:
        "É responsabilidade do jogador registrar suas negociações por meio de print ou vídeo. Em caso de conflitos, apenas registros visuais serão aceitos como prova para análise e possível intervenção da staff.",
    },
    {
      id: 22,
      title: "Artigo 22º - Resolução de Conflitos",
      content:
        "Conflitos devem ser resolvidos de forma civilizada. Moderadores poderão intervir como mediadores quando necessário, visando manter a harmonia no servidor.",
    },
    {
      id: 23,
      title: "Artigo 23º - Itens e Recursos Proibidos",
      content:
        'Itens marcados como "Proibido" no JEI, com descrição indicando que não podem ser comercializados, estão vetados para venda.',
    },
  ];

  const RuleCard = ({ rule }) => (
    <div style={styles.ruleCard} onClick={() => toggleRule(rule.id)}>
      <div style={styles.ruleHeader}>
        <span style={styles.ruleNumber}>{rule.id}</span>
        <h3 style={styles.ruleTitle}>{rule.title}</h3>
        <span style={styles.expandIcon}>
          {expandedRule === rule.id ? "▼" : "▶"}
        </span>
      </div>
      {expandedRule === rule.id && (
        <div style={styles.ruleContent}>
          <p>{rule.content}</p>
        </div>
      )}
    </div>
  );

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
        <div style={styles.headerIcon}>📖</div>
        <h1 style={styles.title}>Regras do Servidor</h1>
        <p style={styles.subtitle}>Constituição da Floresta Mágica</p>
      </header>

      <div style={styles.warningBox}>
        <div style={styles.warningIcon}>⚠️</div>
        <div style={styles.warningContent}>
          <h3 style={styles.warningTitle}>Sobre as Punições</h3>
          <p style={styles.warningText}>
            As punições podem variar entre advertência, perda de itens,
            banimento temporário ou permanente, conforme a gravidade da infração
            e reincidência.
          </p>
          <p style={styles.warningText}>
            Nossa equipe é responsável por analisar e aplicar a punição de
            acordo com a necessidade dos fatos e qualquer decisão deverá ser
            respeitada de acordo com as regras aqui descritas.
          </p>
        </div>
      </div>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>📜 Capítulo Rúnico</h2>
          <h3 style={styles.sectionSubtitle}>
            Título I - Dos Princípios Fundamentais
          </h3>
        </div>

        <div style={styles.rulesGrid}>
          {fundamentalRules.map((rule) => (
            <RuleCard key={rule.id} rule={rule} />
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionSubtitle}>
            Título II - Direitos Individuais e Coletivos para o Livre Comércio
          </h3>
        </div>

        <div style={styles.rulesGrid}>
          {commerceRules.map((rule) => (
            <RuleCard key={rule.id} rule={rule} />
          ))}
        </div>
      </section>

      <div style={styles.footer}>
        <div style={styles.footerIcon}>⚖️</div>
        <p style={styles.footerText}>
          <strong>Lembre-se:</strong> O desconhecimento das regras não isenta de
          punição. Mantenha sempre o respeito e a civilidade para garantir uma
          experiência agradável para todos!
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
    border: "2px solid rgba(255, 255, 255, 0.1)",
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
    fontSize: "1.3em",
    color: "#b0b0b0", // Cinza claro
    opacity: 0.9,
  },
  warningBox: {
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
    border: "2px solid #FDB813",
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "40px",
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },
  warningIcon: {
    fontSize: "2.5em",
    flexShrink: 0,
  },
  warningContent: {
    flex: 1,
  },
  warningTitle: {
    fontSize: "1.5em",
    marginBottom: "10px",
    color: "#FDB813", // Amarelo
  },
  warningText: {
    lineHeight: "1.7",
    marginBottom: "10px",
    color: "#b0b0b0",
  },
  section: {
    marginBottom: "50px",
  },
  sectionHeader: {
    marginBottom: "30px",
    padding: "20px",
    background: "#1a1a1a",
    borderRadius: "10px",
    borderLeft: "4px solid #FDB813", // Borda amarela
  },
  sectionTitle: {
    fontSize: "2em",
    color: "#FDB813", // Amarelo
    marginBottom: "10px",
  },
  sectionSubtitle: {
    fontSize: "1.5em",
    color: "#b0b0b0",
    fontWeight: "500",
  },
  rulesGrid: {
    display: "grid",
    gap: "15px",
  },
  ruleCard: {
    background: "#2a2a2a", // Cinza médio
    borderRadius: "10px",
    padding: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  ruleHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  ruleNumber: {
    background: "#FDB813", // Amarelo
    color: "#000", // Texto preto
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.1em",
    flexShrink: 0,
  },
  ruleTitle: {
    flex: 1,
    margin: 0,
    fontSize: "1.1em",
    color: "#fff",
  },
  expandIcon: {
    fontSize: "1.2em",
    color: "#FDB813", // Amarelo
    transition: "transform 0.3s",
  },
  ruleContent: {
    marginTop: "15px",
    paddingTop: "15px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    lineHeight: "1.7",
    color: "#b0b0b0",
  },
  footer: {
    marginTop: "50px",
    padding: "30px",
    background: "rgba(253, 184, 19, 0.1)", // Amarelo transparente
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
    color: "#b0b0b0",
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

export default RulesPage;
