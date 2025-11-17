import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./BannedItemsPage.css";

const BannedItemsPage = () => {
  const [selectedMod, setSelectedMod] = useState("all");
  const [currentView, setCurrentView] = useState("grouped");

  const bannedItems = [
    "utilitarian:no_raider_block",
    "justdirethings:time_wand",
    "transfer_labels:itemstack_insert_transfer_label",
    "transfer_labels:fluidstack_extract_transfer_label",
    "transfer_labels:fluidstack_insert_transfer_label",
    "transfer_labels:itemstack_extract_transfer_label",
    "refinedstorage:disk_interface",
    "the_bumblezone:essence_life",
    "rootsclassic:crystal_staff",
    "mahoutsukai:scroll_selective_displacement",
    "mahoutsukai:scroll_protective_displacement",
    "mahoutsukai:scroll_boundary_displacement",
    "mahoutsukai:scroll_projectile_displacement",
    "mahoutsukai:scroll_mental_displacement",
    "mahoutsukai:staff_emrys",
    "securitycraft:security_camera",
    "justdirethings:paradoxmachine",
    "naturesaura:pickup_stopper",
    "bibliocraft:oak_fancy_crafter",
    "ars_controle:portable_brazier_relay",
    "utilitarian:sound_muffler",
    "utilitarian:no_soliciting_banner",
    "ae2:spatial_anchor",
    "ae2:matter_cannon",
    "eternal_starlight:sonar_bomb",
    "eternal_starlight:frozen_bomb",
    "supplementaries:bomb_blue",
    "supplementaries:bomb",
    "ae2:crystal_resonance_generator",
    "railcraft:personal_world_spike",
    "sophisticatedbackpacks:crafting_upgrade",
    "sophisticatedstorage:crafting_upgrade",
    "rftoolsstorage:storage_scanner",
    "pipez:universal_pipe",
    "immersiveengineering:cloche",
    "railcraft:world_spike",
    "railcraft:world_spike_minecart",
    "justdirethings:portalgun_v2",
    "justdirethings:portalgun",
    "ars_nouveau:storage_lectern",
    "securitycraft:inventory_scanner",
    "pneumaticcraft:crop_support",
    "pneumaticcraft:spawner_agitator",
    "integratedtunnels:part_player_simulator",
    "integrateddynamics:part_world_reader",
    "oritech:portable_laser",
    "securitycraft:briefcase",
    "ae2:spatial_pylon",
    "modular_machinery_reborn:chunkloader",
    "refinedstorage:cable",
    "pipez:infinity_upgrade",
    "sophisticatedstorage:hopper_upgrade",
    "sophisticatedstorage:advanced_hopper_upgrade",
    "industrialforegoingsouls:soul_surge",
    "ae2:spatial_io_port",
    "forbidden_arcanus:spectral_eye_amulet",
    "pylons:expulsion_pylon",
    "pneumaticcraft:chunkloader_upgrade",
    "mekanism:upgrade_anchor",
    "mekanism:dimensional_stabilizer",
    "mob_grinding_utils:fan",
    "create:clipboard",
    "justdirethings:fluidplacert1",
    "justdirethings:blockplacert2",
    "justdirethings:blockplacert1",
    "mininggadgets:upgrade_light_placer",
    "actuallyadditions:atomic_reconstructor",
    "actuallyadditions:phantom_placer",
    "quarryplus:placer_plus",
    "quarryplus:remote_placer",
    "industrialforegoing:block_placer",
    "industrialforegoing:fluid_placer",
    "industrialforegoing:infinity_nuke",
    "stevescarts:module_chunk_loader",
    "stevescarts:module_torch_placer",
    "oritech:placer_block",
    "actuallyadditions:fluid_placer",
    "actuallyadditions:placer",
    "mekanism:fluidic_plenisher",
    "enderio:basic_item_filter",
    "enderio:advanced_item_filter",
    "enderio:big_item_filter",
    "enderio:redstone_filter_base",
    "enderio:big_advanced_item_filter",
    "actuallyadditions:player_interface",
    "modularrouters:modular_router",
    "oritech:black_hole_block",
  ];

  const itemsByMod = useMemo(() => {
    const grouped = {};
    bannedItems.forEach((item) => {
      const mod = item.split(":")[0];
      if (!grouped[mod]) {
        grouped[mod] = [];
      }
      grouped[mod].push(item);
    });
    return grouped;
  }, []);

  const modList = useMemo(() => {
    return Object.keys(itemsByMod).sort();
  }, [itemsByMod]);

  const formatModName = (modId) => {
    return modId
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formatItemName = (itemId) => {
    const name = itemId.split(":")[1];
    return name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getImageUrl = (itemId) => {
    const [mod, item] = itemId.split(":");
    return `https://raw.githubusercontent.com/misode/mcmeta/${mod}-assets/assets/${mod}/textures/item/${item}.png`;
  };

  const filteredItems = useMemo(() => {
    if (selectedMod === "all") {
      return bannedItems;
    }
    return bannedItems.filter((item) => item.startsWith(selectedMod + ":"));
  }, [selectedMod]);

  const filteredItemsByMod = useMemo(() => {
    if (selectedMod === "all") {
      return Object.entries(itemsByMod).sort(
        (a, b) => b[1].length - a[1].length
      );
    }

    const filtered = {};
    if (itemsByMod[selectedMod]) {
      filtered[selectedMod] = itemsByMod[selectedMod];
    }
    return Object.entries(filtered);
  }, [selectedMod, itemsByMod]);

  const ItemCard = ({ itemId }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div className="item-card">
        <div
          className={`item-image ${
            !imageLoaded && !imageError ? "loading" : ""
          } ${imageError ? "error" : ""}`}
        >
          {!imageError && (
            <img
              src={getImageUrl(itemId)}
              alt={formatItemName(itemId)}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              style={{ display: imageError ? "none" : "block" }}
            />
          )}
        </div>
        <div className="item-name">{formatItemName(itemId)}</div>
        <div className="item-id">{itemId}</div>
      </div>
    );
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
         <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Link to="/" style={styles.button}>
          Início
        </Link>
      </div>
        <header style={styles.header}>
          <h1 style={styles.h1}>⛔ Itens Banidos</h1>
          <p style={styles.subtitle}>
            Lista de itens e blocos proibidos no servidor
          </p>
        </header>

        <div style={styles.viewToggle}>
          <button
            style={{
              ...styles.toggleBtn,
              ...(currentView === "grouped" ? styles.toggleBtnActive : {}),
            }}
            onClick={() => setCurrentView("grouped")}
          >
            📦 Por Mod
          </button>
          <button
            style={{
              ...styles.toggleBtn,
              ...(currentView === "all" ? styles.toggleBtnActive : {}),
            }}
            onClick={() => setCurrentView("all")}
          >
            📋 Todos os Itens
          </button>
        </div>

        <div style={styles.searchBox}>
          <select
            style={styles.selectInput}
            value={selectedMod}
            onChange={(e) => setSelectedMod(e.target.value)}
          >
            <option value="all">
              📦 Todos os Mods ({bannedItems.length} itens)
            </option>
            {modList.map((mod) => (
              <option key={mod} value={mod}>
                {formatModName(mod)} ({itemsByMod[mod].length}{" "}
                {itemsByMod[mod].length === 1 ? "item" : "itens"})
              </option>
            ))}
          </select>
        </div>

        <div>
          {currentView === "grouped" ? (
            filteredItemsByMod.map(([mod, items]) => (
              <div key={mod} style={styles.modSection}>
                <div style={styles.modHeader}>
                  <div style={styles.modName}>{formatModName(mod)}</div>
                  <div style={styles.modCount}>
                    {items.length} {items.length === 1 ? "item" : "itens"}
                  </div>
                </div>
                <div style={styles.grid}>
                  {items.map((item) => (
                    <ItemCard key={item} itemId={item} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div style={styles.grid}>
              {filteredItems.map((item) => (
                <ItemCard key={item} itemId={item} />
              ))}
            </div>
          )}
        </div>

        <div style={styles.stats}>
          Total de itens banidos:{" "}
          <span style={styles.statsSpan}>
            {currentView === "grouped"
              ? filteredItemsByMod.reduce(
                  (acc, [, items]) => acc + items.length,
                  0
                )
              : filteredItems.length}
          </span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
    padding: "30px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  h1: {
    fontSize: "2.5em",
    marginBottom: "10px",
    color: "#ff4757",
    textShadow: "0 0 20px rgba(255, 71, 87, 0.5)",
  },
  subtitle: {
    color: "#a8a8a8",
    fontSize: "1.1em",
  },
  viewToggle: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "30px",
  },
  toggleBtn: {
    padding: "10px 25px",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.05)",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s",
    fontSize: "1em",
  },
  toggleBtnActive: {
    background: "#ff4757",
    borderColor: "#ff4757",
  },
  searchBox: {
    marginBottom: "30px",
    position: "relative",
  },
  selectInput: {
    width: "100%",
    padding: "15px 20px",
    fontSize: "1em",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.05)",
    color: "#fff",
    transition: "all 0.3s",
    boxSizing: "border-box",
    cursor: "pointer",
  },
  modSection: {
    marginBottom: "40px",
  },
  modHeader: {
    background: "rgba(255, 255, 255, 0.08)",
    padding: "15px 20px",
    borderRadius: "10px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderLeft: "4px solid #ff4757",
  },
  modName: {
    fontSize: "1.3em",
    fontWeight: "bold",
    color: "#fff",
  },
  modCount: {
    background: "#ff4757",
    padding: "5px 15px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "0.9em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  stats: {
    textAlign: "center",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "10px",
    marginTop: "20px",
  },
  statsSpan: {
    color: "#ff4757",
    fontWeight: "bold",
    fontSize: "1.2em",
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

export default BannedItemsPage;
