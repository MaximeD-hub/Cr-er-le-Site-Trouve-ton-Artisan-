import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/images/logo-artisan.png";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const categories = ["Bâtiment", "Services", "Fabrication", "Alimentation"];

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/artisans?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

  return (
    <nav className="navbar-site" role="navigation" aria-label="Navigation principale">
      <div className="container-fluid px-4">
        <div className="navbar-site__inner">

          <Link to="/">
            <img
              src={logo}
              alt="Trouve ton Artisan - Avec la région Auvergne-Rhône-Alpes"
              className="navbar-site__logo-img"
              />
          </Link>

          <button
            className="navbar-site__burger d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span/><span/><span/>
          </button>

          <div className={`navbar-site__right ${menuOpen ? "open" : ""}`}>
            <ul className="navbar-site__links">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/artisans?categorie=${encodeURIComponent(cat)}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>

            <form className="navbar-site__search" onSubmit={handleSearch} role="search">
              <input
                type="search"
                placeholder="Rechercher"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Rechercher un artisan"
              />
              <button type="submit" aria-label="Lancer la recherche"><FiSearch /></button>
            </form>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;