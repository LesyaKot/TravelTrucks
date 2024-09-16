import { StarFill, Map } from "react-bootstrap-icons";
import ImageGallery from "../ImageGallery/ImageGallery";
import css from "./CamperItem.module.css";

export default function CamperItem({ camper, onClick }) {
  if (!camper) {
    return <div>Loading...</div>; 
  }
  const { name, price, rating, reviews, location, gallery, description } =
    camper;
  const [country, city] = location.split(", ");
  const myLocation = `${city}, ${country} `;

  return (
    <div>
      <h2>{name}</h2>
      <p>€{price}</p>
      <p>€{price.toFixed(2)}</p>

      <div>
        <StarFill size={16} />
        <p>
          {rating}({reviews.length})Reviews
        </p>
      </div>

      <div>
        <Map size={16} />
        <p>{myLocation}</p>
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

     
      <ImageGallery gallery={gallery} onClick={onClick} />

      <p>{description}</p>
    </div>
  );
}
