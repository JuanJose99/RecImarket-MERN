import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div>
      <span>
        {rating >= 1 ? <FaStar /> : rating >= 0.5 ? <FaStarHalfAlt /> : null}
      </span>
      <span>
        {rating >= 2 ? <FaStar /> : rating >= 1.5 ? <FaStarHalfAlt /> : null}
      </span>
      <span>
        {rating >= 3 ? <FaStar /> : rating >= 2.5 ? <FaStarHalfAlt /> : null}
      </span>
      <span>
        {rating >= 4 ? <FaStar /> : rating >= 3.5 ? <FaStarHalfAlt /> : null}
      </span>
      <span>
        {rating >= 5 ? <FaStar /> : rating >= 4.5 ? <FaStarHalfAlt /> : null}
      </span>
      <span> {numReviews} Visitas </span>
    </div>
  );
}

export default Rating;
