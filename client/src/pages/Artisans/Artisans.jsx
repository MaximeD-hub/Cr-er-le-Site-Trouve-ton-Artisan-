import { useSearchParams } from "react-router-dom";
import ArtisanCard from "../../components/ArtisanCard/ArtisanCard";
import { artisans as allArtisans } from "../../data/artisans";
import "./Artisans.scss";

const Artisans = () => {
  const [searchParams] = useSearchParams();
  const categorie = searchParams.get("categorie") || "";
  const search = searchParams.get("search") || "";

  const filtered = allArtisans.filter((a) => {
    const matchCat = categorie ? a.categorie === categorie : true;
    const matchSearch = search
      ? a.nom.toLowerCase().includes(search.toLowerCase()) ||
        a.ville.toLowerCase().includes(search.toLowerCase()) ||
        a.specialite.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchCat && matchSearch;
  });

  const titre = categorie
    ? `Nos Artisans - ${categorie}`
    : search
    ? `Résultats pour "${search}"`
    : "Nos Artisans";

  return (
    <main className="artisans-page">
      <div className="container py-5">

        <h1 className="section-title">{titre}</h1>

        {filtered.length > 0 ? (
          <div className="row g-4" role="list" aria-label="Liste des artisans">
            {filtered.map((artisan) => (
              <div key={artisan.id} className="col-12 col-sm-6 col-lg-4" role="listitem">
                <ArtisanCard artisan={artisan} />
              </div>
            ))}
          </div>
        ) : (
          <p className="artisans-page__empty" role="status">
            Aucun artisan trouvé.
          </p>
        )}

      </div>
    </main>
  );
};

export default Artisans;