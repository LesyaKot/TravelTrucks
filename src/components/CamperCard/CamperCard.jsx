import { SuitHeart, StarFill, Map } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { chooseFavorite } from "../../redux/campers/slice.js";
import { selectCampers } from "../../redux/campers/selectors.js";
import Button from '../Button/Button.jsx';
import CamperCategories from '../CamperCategories/CamperCategories';
import css from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector(selectCampers);
  const isFavorite = favorites.some((item) => item.id === camper.id);

  const { gallery, name, price, rating, reviews, location, description, id } = camper;

  const [country, city] = location.split(", ");
  const myLocation = `${city}, ${country}`;

  const handleClick = () => {
    dispatch(chooseFavorite(camper.id));
  };
  console.log('Camper:', camper); 

  return (
    <div className={css.wrap}>
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
            <p>{myLocation}</p>
          </div>
        </div>
        <p className={css.description}>{description}</p>

        <CamperCategories 
  transmission={camper.transmission} 
  engine={camper.engine} 
  AC={camper.AC} 
  bathroom={camper.bathroom} 
  kitchen={camper.kitchen} 
  TV={camper.TV} 
  radio={camper.radio} 
  refrigerator={camper.refrigerator} 
  microwave={camper.microwave} 
  gas={camper.gas} 
  water={camper.water} 
/>

        <Button variant="small" to={`/catalog/${id}`}>        
          Show more
        </Button>
      </div>
    </div>
  );
}
