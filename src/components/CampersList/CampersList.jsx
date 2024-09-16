import { useDispatch, useSelector } from "react-redux";
import { selectCampers, selectError } from "../../redux/campers/selectors.js";
import { fetchCampers } from "../../redux/campers/operations.js";
import { useEffect } from "react";
import CamperCard from "../CamperCard/CamperCard.jsx";
import css from './CampersList.module.css';

export default function CamperList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);

  
  const { items = [] } = campers;

  useEffect(() => {
    dispatch(fetchCampers()); 
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {items.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {error && <p>Error loading campers: {error}</p>}
    </div>
  );
}
