// App.jsx - Routing principal
// Layout : Navbar fixe + Contenu + Footer
//
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <NotFoundStyle />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artisans" element={<Artisans />} />
      <Route path="/artisans/:id" element={<ArtisanDetail />} />
      {/* Page 404 pour les liens légaux et toute route inconnue */}
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);



export default App
