import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./StarRating.scss";

const StarRating = ({ note, size = "md" }) => {
  const MAX = 5;
  const stars = Array.from({ length: MAX }, (_, i) => {
    const v = i + 1;
    if (note >= v) return "full";
    if (note >= v - 0.5) return "half";
    return "empty";
  });

  return (
    <div className={`star-rating star-rating--${size}`} aria-label={`Note : ${note} sur 5`}>
      {stars.map((type, i) => (
        <span key={i} aria-hidden="true">
          {type === "full"  && <FaStar />}
          {type === "half"  && <FaStarHalfAlt />}
          {type === "empty" && <FaRegStar />}
        </span>
      ))}
    </div>
  );
};

export default StarRating;