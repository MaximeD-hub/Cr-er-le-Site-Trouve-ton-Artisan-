// App.jsx - Routing principal
// Layout : Navbar fixe + Contenu + Footer
//
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Artisans from "./pages/Artisans/Artisans";
import ArtisanDetail from "./pages/ArtisanDetail/ArtisanDetail";
import "./styles/main.scss";

// Page 404
const NotFound = () => (
  <main className="not-found-page" role="main">
    <div className="not-found-page__content">
      <h1 className="not-found-page__code">404</h1>
      <h2 className="not-found-page__msg">Page non trouvée</h2>
    </div>
  </main>
);

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artisans" element={<Artisans />} />
      <Route path="/artisans/:id" element={<ArtisanDetail />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;