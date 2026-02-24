import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import StarRating from "../StarRating/StarRating";
import "./ArtisanCard.scss";

const ArtisanCard = ({ artisan }) => {
  const { id, nom, specialite, note, ville } = artisan;

  return (
    <article className="artisan-card" aria-label={`Artisan : ${nom}`}>
      <h3 className="artisan-card__nom">{nom}</h3>
      <StarRating note={note} size="md" />
      <p className="artisan-card__specialite">{specialite}</p>
      <p className="artisan-card__ville">{ville}</p>
      <Link to={`/artisans/${id}`} className="btn-contacter" aria-label={`Contacter ${nom}`}>
        <MdEmail /> Contacter
      </Link>
    </article>
  );
};

export default ArtisanCard;