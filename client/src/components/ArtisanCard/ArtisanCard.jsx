import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import StarRating from "../StarRating/StarRating";
import "./ArtisanCard.scss";

const ArtisanCard = ({ artisan }) => {
  const { id, nom, note, ville } = artisan;

  // Gère les deux formats (statique et API)
  const specialiteNom = artisan.specialite?.nom || artisan.specialite;

  return (
    <article className="artisan-card" aria-label={`Artisan : ${nom}`}>
      <h3 className="artisan-card__nom">{nom}</h3>
      <StarRating note={parseFloat(note)} size="md" />
      <p className="artisan-card__specialite">{specialiteNom}</p>
      <p className="artisan-card__ville">{ville}</p>
      <Link to={`/artisans/${id}`} className="btn-contacter" aria-label={`Contacter ${nom}`}>
        <MdEmail /> Contacter
      </Link>
    </article>
  );
};

export default ArtisanCard;