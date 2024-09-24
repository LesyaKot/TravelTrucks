import { StarFill, Map } from "react-bootstrap-icons";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./CamperItem.module.css";

export default function CamperItem({ camper, onClick }) {
  if (!camper) {
    return <div></div>; 
  }
  const { name, price, rating, reviews, location, gallery, description } =
    camper;
  const [country, city] = location.split(", ");
  const myLocation = `${city}, ${country} `;

  return (
    <div className={css.wrap}>
      <h2 className={css.name}>{name}</h2>
     

      <div className={css.ratingLocationWrap}>
        <div className={css.rating}>
        <StarFill className={css.starIcon} size={16} />
        <p>
          {rating}({reviews.length})Reviews
        </p>
      </div>
      <div className={css.location}>
        <Map className={css.mapIcon} size={16} />
        <p>{myLocation}</p>
      </div>    
      </div>
      <p className={css.price}>€{price.toFixed(2)}</p>
    
      <ImageGallery gallery={gallery} onClick={onClick} />

      <p>{description}</p>
     
    </div>
  );
}
