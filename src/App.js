import { Outlet, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return <div className="App">
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}/>
      </Route>
    </Routes>
  </div>;
}

export default App;
