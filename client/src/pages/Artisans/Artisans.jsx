import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ArtisanCard from "../../components/ArtisanCard/ArtisanCard";
import { getArtisans, getCategories } from "../../services/api";
import "./Artisans.scss";

const Artisans = () => {
  const [searchParams] = useSearchParams();
  const categorie = searchParams.get("categorie") || "";
  const search = searchParams.get("search") || "";

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchArtisans = async () => {
      try {
        let categorieId = null;

        // Si une catégorie est sélectionnée, on récupère son id
        if (categorie) {
          const resCat = await getCategories();
          const found = resCat.data.data.find((c) => c.nom === categorie);
          if (found) categorieId = found.id;
        }

        const params = {};
        if (search) params.search = search;
        if (categorieId) params.categorieId = categorieId;

        const res = await getArtisans(params);
        setArtisans(res.data.data);
      } catch {
        setError("Impossible de charger les artisans.");
      } finally {
        setLoading(false);
      }
    };

    fetchArtisans();
  }, [search, categorie]);

  const titre = categorie
    ? `Nos Artisans - ${categorie}`
    : search
    ? `Résultats pour "${search}"`
    : "Nos Artisans";

  return (
    <main className="artisans-page">
      <div className="container py-5">

        <h1 className="section-title">{titre}</h1>

        {loading && <p>Chargement...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && artisans.length === 0 && (
          <p className="artisans-page__empty">Aucun artisan trouvé.</p>
        )}

        <div className="row g-4" role="list">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="col-12 col-sm-6 col-lg-4" role="listitem">
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Artisans;