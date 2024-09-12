import { StarFill, Map } from "react-bootstrap-icons";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./CamperItem.module.css";

export default function CamperItem({ camper, onClick }) {
  const { name, price, rating, reviews, location, gallery, description } =
    camper;
  const [country, city] = location.split(", ");
  const myLocation = `${city}, ${country} `;

  return (
    <div>
      <h2>{name}</h2>
      <p>€{price}</p>

      <div>
        <StarFill size={16} />
        <p>
          {rating}({reviews.length})Reviews
        </p>
      </div>

      <div>
        <Map size={16} />
        <p>{swappedLocation}</p>
      </div>

      <div>
        {camper.gallery &&
          camper.gallery.map((image, index) => (
            <img
              key={index}
              src={image.thumb}
              alt={`Camper image ${index + 1}`}
            />
          ))}
      </div>

      {/* <p className={css.priceValue}>&#8364;{price.toFixed(2)}</p> */}
      <ImageGallery gallery={gallery} onClick={onClick} />

      <p>{description}</p>
    </div>
  );
}
