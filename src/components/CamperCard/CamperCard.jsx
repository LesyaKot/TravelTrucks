import { SuitHeart, StarFill, Map } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { chooseFavorite } from "../../redux/campers/slice.js";
import { selectCampers } from "../../redux/campers/selectors.js";
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import CamperCategories from '../CamperCategories/CamperCategories';
import css from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const { favorite } = useSelector(selectCampers);
  const isFavorite = favorite.some((item) => item.id === camper.id);

  const { gallery, name, price, rating, reviews, location, description, id } = camper;

  const [country, city] = location.split(", ");
  const myLocation = `${city}, ${country}`;

  const handleClick = () => {
    dispatch(chooseFavorite(camper.id));
  };

  return (
    <div className={css.wrapper}>
      <img className={css.image} src={gallery[0].original} alt={name} width="292px" height="320px" />
      <div>
        <div className={css.title}>
          <h2 className={css.name}>{name}</h2>
          <div className={css.priceWrap}>
            <p className={css.price}>&#8364;{price.toFixed(2)}</p>
            <button className={css.isFavoriteBtn} onClick={handleClick}>
              <SuitHeart className={isFavorite ? css.isFavoriteIconRed : css.isFavoriteIcon} size={24} />
            </button>
          </div>
        </div>
        <div className={css.ratingLocationWrap}>
          <div className={css.ratingWrap}>
            <StarFill className={css.starIcon} size={16} />
            <p>
              {rating}({reviews.length})Reviews
            </p>
          </div>
          <div className={css.locationWrap}>
            <Map className={css.mapIcon} size={16} />
            <p>{swappedLocation}</p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <CamperCategories camper={camper} />
        <ShowMoreBtn variant="small" to={`/catalog/${id}`}>
          Show more
        </ShowMoreBtn>
      </div>
    </div>
  );
}
