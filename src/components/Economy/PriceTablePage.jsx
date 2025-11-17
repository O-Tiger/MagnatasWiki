import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const PriceTablePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name"); // name, price, quantity

  const priceData = [
    { name: "16k Storage Cell", price: 100, quantity: "1 unidade" },
    { name: "16m Mega Storage Component", price: 1500, quantity: "1 unidade" },
    { name: "1k Storage Cell", price: 20, quantity: "1 unidade" },
    { name: "1m Mega Storage Component", price: 1000, quantity: "1 unidade" },
    { name: "256k Storage Cell", price: 800, quantity: "1 unidade" },
    { name: "265m Mega Storage Component", price: 5000, quantity: "1 unidade" },
    { name: "32k Storage Cell", price: 250, quantity: "1 unidade" },
    { name: "32m Mega Storage Component", price: 2500, quantity: "1 unidade" },
    { name: "4k Storage Cell", price: 50, quantity: "1 unidade" },
    { name: "4m Mega Storage Component", price: 1200, quantity: "1 unidade" },
    { name: "64k Storage Cell", price: 400, quantity: "1 unidade" },
    { name: "64m Mega Storage Component", price: 3200, quantity: "1 unidade" },
    { name: "Allthemodium Ingot", price: 100, quantity: "64 unidades" },
    { name: "Draconic Core", price: 2000, quantity: "1 unidade" },
    { name: "Draconium Core", price: 500, quantity: "1 unidade" },
    { name: "Dragon Egg", price: 250, quantity: "1 unidade" },
    { name: "Elitra", price: 500, quantity: "1 unidade" },
    { name: "Infused Dragon's Breath", price: 300, quantity: "8 unidades" },
    { name: "Mana Tablet", price: 150, quantity: "1" },
    { name: "Mjölnir", price: 2000, quantity: "1 unidade" },
    { name: "Netherite scrap", price: 300, quantity: "64 unidades" },
    { name: "Pack Arcane Sands", price: 300, quantity: "64 unidades" },
    { name: "Pack de Alloy Atomic", price: 900, quantity: "16 unidades" },
    { name: "Pack de Alloy Infused", price: 500, quantity: "32 unidades" },
    { name: "Pack de Alloy Reiforced", price: 700, quantity: "32 unidades" },
    { name: "Pack de Ancient Dust", price: 500, quantity: "64 unidades" },
    { name: "Pack de Blizz Powder", price: 1000, quantity: "64 unidades" },
    { name: "Pack de Clay", price: 50, quantity: "64 unidades" },
    { name: "Pack de Diamond", price: 200, quantity: "64 unidades" },
    { name: "Pack de Draconian Stone", price: 400, quantity: "64 unidades" },
    { name: "Pack de Dragon Breath", price: 200, quantity: "64 unidades" },
    { name: "Pack de Dust Lithium", price: 150, quantity: "64 unidades" },
    { name: "Pack de Elementium Ingot", price: 300, quantity: "64 unidades" },
    { name: "Pack de Emerald", price: 100, quantity: "64 unidades" },
    { name: "Pack de Ender Pearl", price: 150, quantity: "16 unidades" },
    {
      name: "Pack de Essence Mystical em geral",
      price: 200,
      quantity: "64 unidades",
    },
    { name: "Pack de Experience Droplet", price: 100, quantity: "64 unidades" },
    { name: "Pack de Flux Dust", price: 100, quantity: "64 unidades" },
    { name: "Pack de Gem Dust", price: 100, quantity: "64 unidades" },
    { name: "Pack de Ghast Tear", price: 200, quantity: "64 unidades" },
    { name: "Pack de Glowstone Dust", price: 100, quantity: "64 unidades" },
    { name: "Pack de Gold", price: 100, quantity: "64 unidades" },
    { name: "Pack de Ink Sac", price: 50, quantity: "64 unidades" },
    { name: "Pack de Iron", price: 120, quantity: "64 unidades" },
    { name: "Pack de Lapis", price: 80, quantity: "64 unidades" },
    { name: "Pack de Mana Diamond", price: 150, quantity: "64 unidades" },
    { name: "Pack de Mana Ingot", price: 200, quantity: "64 unidades" },
    { name: "Pack de Mana Pearl", price: 150, quantity: "64 unidades" },
    { name: "Pack de Mana Powder", price: 150, quantity: "64 unidades" },
    { name: "Pack de Nether Star", price: 500, quantity: "64 unidades" },
    { name: "Pack de Nether wart", price: 100, quantity: "64 unidades" },
    { name: "Pack de Pixel Dust", price: 350, quantity: "64 unidades" },
    { name: "Pack de Pó de Basalz", price: 1000, quantity: "64 unidades" },
    { name: "Pack de Quartz Block", price: 200, quantity: "64 unidades" },
    { name: "Pack de Redstone", price: 150, quantity: "64 unidades" },
    { name: "Pack de Skeleton Skull", price: 400, quantity: "12 unidades" },
    { name: "Pack de Slime Block", price: 100, quantity: "64 unidades" },
    { name: "Pack de Terra Ingot", price: 150, quantity: "64 unidades" },
    {
      name: "Pack Pearl forged by the gods",
      price: 500,
      quantity: "20 unidades",
    },
    { name: "Stella Eterna", price: 200, quantity: "1 unidade" },
    { name: "Ultimate Singularity", price: 5000, quantity: "1 unidade" },
    { name: "Unobtainium Ingot", price: 300, quantity: "64 unidades" },
    {
      name: "Upgrade Allthemodium template",
      price: 500,
      quantity: "1 unidade",
    },
    { name: "Upgrade Smith template", price: 200, quantity: "1 unidade" },
    {
      name: "Upgrade Unobtainium template",
      price: 2000,
      quantity: "1 unidade",
    },
    { name: "Upgrade Vibranium template", price: 1000, quantity: "1 unidade" },
    { name: "Vibranium Ingot", price: 200, quantity: "64 unidades" },
    { name: "Wind Generator", price: 50, quantity: "1 unidade" },
    { name: "Wyvern Core", price: 1000, quantity: "1 unidade" },
  ];

  const filteredAndSortedData = useMemo(() => {
    let filtered = priceData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "price") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [searchTerm, sortBy]);

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
        <div style={styles.headerIcon}>💰</div>
        <h1 style={styles.title}>Tabela de Preços</h1>
        <p style={styles.subtitle}>Boas práticas no comércio!</p>
      </header>

      <div style={styles.infoBox}>
        <div style={styles.infoIcon}>📢</div>
        <div>
          <p style={styles.infoText}>
            <strong>Importante:</strong> Esta tabela serve como referência para
            garantir transações justas no servidor. Respeite os valores
            indicados para manter a economia equilibrada!
          </p>
        </div>
      </div>

      <div style={styles.controlsBar}>
        <div style={styles.searchBox}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Buscar item..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        <div style={styles.sortBox}>
          <label style={styles.sortLabel}>Ordenar por:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={styles.sortSelect}
          >
            <option value="name">Nome (A-Z)</option>
            <option value="price">Preço (Maior)</option>
          </select>
        </div>
      </div>

      <div style={styles.statsBar}>
        <div style={styles.statItem}>
          <span style={styles.statIcon}>📦</span>
          <span style={styles.statText}>
            <strong>{filteredAndSortedData.length}</strong> itens encontrados
          </span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statIcon}>💎</span>
          <span style={styles.statText}>
            Moeda: <strong>MGT Coins</strong>
          </span>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeaderRow}>
              <th style={styles.tableHeader}>Nome do Item</th>
              <th style={styles.tableHeader}>Valor em MGT Coins</th>
              <th style={styles.tableHeader}>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedData.map((item, index) => (
              <tr
                key={index}
                style={{
                  ...styles.tableRow,
                  ...(index % 2 === 0 ? styles.tableRowEven : {}),
                }}
              >
                <td style={styles.tableCell}>
                  <span style={styles.itemName}>{item.name}</span>
                </td>
                <td style={styles.tableCell}>
                  <span style={styles.priceTag}>
                    💰 {item.price.toLocaleString()}
                  </span>
                </td>
                <td style={styles.tableCell}>
                  <span style={styles.quantity}>{item.quantity}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredAndSortedData.length === 0 && (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>🔍</div>
          <p style={styles.emptyText}>
            Nenhum item encontrado com "{searchTerm}"
          </p>
        </div>
      )}

      <div style={styles.footer}>
        <div style={styles.footerIcon}>⚖️</div>
        <p style={styles.footerText}>
          <strong>Lembre-se:</strong> Respeitar a tabela de preços é fundamental
          para manter a economia saudável e equilibrada no servidor!
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
    background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
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
  },
  headerIcon: {
    fontSize: "4em",
    marginBottom: "15px",
  },
  title: {
    fontSize: "2.8em",
    marginBottom: "10px",
    color: "#FFD700",
    textShadow: "0 0 20px rgba(255, 215, 0, 0.5)",
  },
  subtitle: {
    fontSize: "1.2em",
    color: "#ecf0f1",
  },
  infoBox: {
    background: "rgba(52, 152, 219, 0.2)",
    border: "2px solid #3498db",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "30px",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  infoIcon: {
    fontSize: "2em",
    flexShrink: 0,
  },
  infoText: {
    lineHeight: "1.6",
    margin: 0,
  },
  controlsBar: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  searchBox: {
    flex: 1,
    minWidth: "250px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    padding: "0 15px",
  },
  searchIcon: {
    fontSize: "1.3em",
    marginRight: "10px",
  },
  searchInput: {
    flex: 1,
    padding: "12px",
    border: "none",
    background: "transparent",
    color: "#fff",
    fontSize: "1em",
    outline: "none",
  },
  sortBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  sortLabel: {
    fontSize: "1em",
    whiteSpace: "nowrap",
  },
  sortSelect: {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    fontSize: "1em",
    cursor: "pointer",
  },
  statsBar: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  statItem: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "15px 25px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  statIcon: {
    fontSize: "1.5em",
  },
  statText: {
    fontSize: "1em",
  },
  tableContainer: {
    overflowX: "auto",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    marginBottom: "30px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeaderRow: {
    background: "rgba(255, 215, 0, 0.2)",
    borderBottom: "2px solid #FFD700",
  },
  tableHeader: {
    padding: "20px",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "1.1em",
    color: "#FFD700",
  },
  tableRow: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    transition: "background 0.3s",
  },
  tableRowEven: {
    background: "rgba(255, 255, 255, 0.03)",
  },
  tableCell: {
    padding: "15px 20px",
  },
  itemName: {
    fontSize: "1em",
    color: "#ecf0f1",
  },
  priceTag: {
    background: "rgba(255, 215, 0, 0.2)",
    padding: "5px 12px",
    borderRadius: "20px",
    color: "#FFD700",
    fontWeight: "bold",
    display: "inline-block",
  },
  quantity: {
    color: "#bdc3c7",
    fontSize: "0.95em",
  },
  emptyState: {
    textAlign: "center",
    padding: "60px 20px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    marginBottom: "30px",
  },
  emptyIcon: {
    fontSize: "4em",
    marginBottom: "20px",
  },
  emptyText: {
    fontSize: "1.2em",
    color: "#bdc3c7",
  },
  footer: {
    padding: "30px",
    background: "rgba(255, 215, 0, 0.15)",
    borderRadius: "12px",
    border: "2px solid #FFD700",
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
    background: "rgba(255, 255, 255, 0.09)",
    color: "rgb(255, 255, 255)",
    transform: "scale(1)",
    color: "rgb(255, 255, 255)",
    boxShadow: " rgba(123, 31, 162, 0.4) 0px 4px 15px",
    width: "fit-content",
    marginBottom: "0.5rem",
  },
};

export default PriceTablePage;
