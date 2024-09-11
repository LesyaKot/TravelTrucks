import { useState, useEffect } from "react";
import axios from "axios";

const CamperList = () => {
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    axios
      .get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers')
      .then(response => {
        
        if (response.data && Array.isArray(response.data.items)) {
          setCampers(response.data.items); 
        } else {
          console.error('Unexpected data format:', response.data);
          setCampers([]); 
        }
      })
      .catch(error => {
        console.error('Error fetching campers:', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {campers.length > 0 ? (
          campers.map((camper) => <li key={camper.id}>{camper.name}</li>)
        ) : (
          <li>No campers available</li>
        )}
      </ul>
    </div>
  );
}

export default CamperList;