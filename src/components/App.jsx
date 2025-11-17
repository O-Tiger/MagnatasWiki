import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//MARK: HOME
import HomePage from "./Home/HomePage";

//MARK: TUTORIALS
import BannedItemsPage from "./Rules/BannedItemsPage";
import RulesPage from "./Rules/RulesPage";

//MARK: TUTORIALS
import GettingStartedPage from "./Tutorials/GettingStartedPage";
import HowToPlayRouter from "./Tutorials/HowToPlayRouter";

//MARK: INFORMATIONS
import CommandsPage from "./Informations/CommandsPage";
import TroubleshootingPage from "./Informations/TroubleshootingPage";

//MARK: ECONOMY
import PriceTablePage from "./Economy/PriceTablePage";
import PlayersShop from "./Economy/PlayersShop"
function App() {
  return (
    <BrowserRouter basename="/MagnatasWiki">
     
       

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getting-started" element={<GettingStartedPage />} />
          <Route path="/banned-items" element={<BannedItemsPage />} />
          <Route path="/rules" element={<RulesPage />} />

          <Route path="/commands" element={<CommandsPage />} />
          <Route path="/how-to-play" element={<HowToPlayRouter />} />
          <Route path="/troubleshooting" element={<TroubleshootingPage />} />
          <Route path="/price-table" element={<PriceTablePage />} />
          <Route path="/players-shop" element={<PlayersShop />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
