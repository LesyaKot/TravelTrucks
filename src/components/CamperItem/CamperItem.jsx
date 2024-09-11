// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const CamperItem = () => {
//   const [camper, setCamper] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
//       .then((response) => {
//         setCamper(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching camper details:", error);
//       });
//   }, [id]);
// };

// if (!camper) {
//   return <div>Loading...</div>;
// }
// return (
//   <div>
//     <h2>{camper.name}</h2>
//     <p>€{camper.price}</p>
//     <p>
//       {camper.rating} ({camper.reviews.length} Reviews)
//     </p>
//     <p>{camper.location}</p>

//     <div>
//       {camper.gallery &&
//         camper.gallery.map((image, index) => (
//           <img
//             key={index}
//             src={image.thumb}
//             alt={`Camper image ${index + 1}`}
//           />
//         ))}
//     </div>

//     <p>{camper.description}</p>

//     <div>
//       <h3>Features</h3>
//       {/* сюди підтягнути свгешки ФІЛЬТРИ  */}

//       <div>
//         <h3>Vehicle details</h3>
//         <p>{camper.form}</p>
//         <p>{camper.length}</p>
//         <p>{camper.width}</p>
//         <p>{camper.height}</p>
//         <p>{camper.tank}</p>
//         <p>{camper.consumption}</p>
//         <p>{camper.transmission}</p>
//         <p>{camper.engine}</p>
//         <p>{camper.AC}</p>
//         <p>{camper.bathroom}</p>
//         <p>{camper.kitchen}</p>
//         <p>{camper.TV}</p>
//         <p>{camper.radio}</p>
//         <p>{camper.refrigerator}</p>
//         <p>{camper.microwave}</p>
//         <p>{camper.gas}</p>
//         <p>{camper.water}</p>
//       </div>
//     </div>

//     <h3>Reviews</h3>
//     {camper.reviews && camper.reviews.length > 0 ? (
//       <div className="reviews">
//         {camper.reviews.map((review, index) => (
//           <div key={index}>
//             <h4>{review.reviewer_name}</h4>
//             <p>Rating: {review.reviewer_rating}</p>
//             <p>{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     ) : (
//       <p>No reviews available.</p>
//     )}
//   </div>
// );
// export default CamperItem;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Не забудь імпортувати axios

const CamperItem = () => {
  const [camper, setCamper] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
      .then((response) => {
        setCamper(response.data);
      })
      .catch((error) => {
        console.error("Error fetching camper details:", error);
      });
  }, [id]);

  if (!camper) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{camper.name}</h2>
      <p>€{camper.price}</p>
      <p>
        {camper.rating} ({camper.reviews.length} Reviews)
      </p>
      <p>{camper.location}</p>

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

      <p>{camper.description}</p>

      <div>
        <h3>Features</h3>
        {/* сюди підтягнути свгешки ФІЛЬТРИ */}

        <div>
          <h3>Vehicle details</h3>
          <p>{camper.form}</p>
          <p>{camper.length}</p>
          <p>{camper.width}</p>
          <p>{camper.height}</p>
          <p>{camper.tank}</p>
          <p>{camper.consumption}</p>
          <p>{camper.transmission}</p>
          <p>{camper.engine}</p>
          <p>{camper.AC}</p>
          <p>{camper.bathroom}</p>
          <p>{camper.kitchen}</p>
          <p>{camper.TV}</p>
          <p>{camper.radio}</p>
          <p>{camper.refrigerator}</p>
          <p>{camper.microwave}</p>
          <p>{camper.gas}</p>
          <p>{camper.water}</p>
        </div>
      </div>

      <h3>Reviews</h3>
      {camper.reviews && camper.reviews.length > 0 ? (
        <div className="reviews">
          {camper.reviews.map((review, index) => (
            <div key={index}>
              <h4>{review.reviewer_name}</h4>
              <p>Rating: {review.reviewer_rating}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default CamperItem;