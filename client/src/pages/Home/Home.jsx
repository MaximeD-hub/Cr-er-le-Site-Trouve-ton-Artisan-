import { Link } from "react-router-dom";
import ArtisanCard from "../../components/ArtisanCard/ArtisanCard";
import { artisans } from "../../data/artisans";
import { MdCategory } from "react-icons/md";        // 1. Choisir la catégorie
import { FaSearch } from "react-icons/fa";           // 2. Choisir un artisan
import { MdEmail } from "react-icons/md";            // 3. Le contacter
import { MdAccessTime } from "react-icons/md";       // 4. Réponse sous 48h
import "./Home.scss";

const ETAPES = [
  { num: "1.", label: "Choisir la catégorie intéressé",          icon: <MdCategory /> },
  { num: "2.", label: "Choisir un artisan",                       icon: <FaSearch /> },
  { num: "3.", label: "Le Contacter via le formulaire de contact", icon: <MdEmail /> },
  { num: "4.", label: "Une réponse sera apportée sous 48h",       icon: <MdAccessTime /> },
];

const Home = () => {
  const topArtisans = artisans.filter((a) => a.top).slice(0, 3);

  return (
    <main className="home-page">
      <div className="container py-5">

        {/* Section 1 : Comment trouver mon artisan */}
        <section aria-labelledby="how-title">
          <h2 id="how-title" className="section-title">
            Comment trouver mon artisan ?
          </h2>
          <div className="row g-3 mb-5">
            {ETAPES.map((etape) => (
              <div key={etape.num} className="col-12 col-sm-6 col-lg-3">
                <div className="etape-card">
                  <div className="etape-card__text">
                    <span className="etape-card__num">{etape.num}</span>
                    <span className="etape-card__label">{etape.label}</span>
                  </div>
                  <div className="etape-card__icon">{etape.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 : Les Artisans du mois */}
        <section aria-labelledby="top-title">
          <h2 id="top-title" className="section-title">
            Les Artisans du mois
          </h2>
          <div className="row g-4">
            {topArtisans.map((artisan) => (
              <div key={artisan.id} className="col-12 col-md-4">
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;