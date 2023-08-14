import { Outlet, Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  Navbar,
  Footer,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  News,
  CryptoDetails,
  Menu
} from "./Components/Components";


const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>

        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
