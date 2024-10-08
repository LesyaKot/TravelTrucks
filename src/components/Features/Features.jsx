import { useSelector } from "react-redux";
import {selectCampers} from "../../redux/campers/selectors.js";
import CampersCategories from "../CamperCategories/CamperCategories.jsx";
import css from "./Features.module.css";

export default function Features() {
  const { currentItem } = useSelector(selectCampers);
  const { form, length, width, height, tank, consumption } = currentItem;
  const formatted = `${form.charAt(0).toUpperCase()}${form.slice(1)}`;

  function modifiedString(string) {
    return string.replace(/(\d)([a-zA-Z])$/, "$1 $2");
  }
  const modifiedLength = modifiedString(length);
  const modifiedWidth = modifiedString(width);
  const modifiedHeight = modifiedString(height);
  const modifiedTank = modifiedString(tank);

  return (
    <div className={css.wrap}>
      <CampersCategories camper={currentItem} />
   
        <h3 className={css.title}>Vehicle details</h3>

        <div className={css.wrapCateg}>
        <ul className={css.listCateg}>
          <li>Form</li>
          <li>Length</li>
          <li>Width</li>
          <li>Height</li>
          <li>Tank</li>
          <li>Consumption</li>
        </ul>
        <ul className={css.listMean}>
          <li>{formatted}</li>
          <li>{modifiedLength}</li>
          <li>{modifiedWidth}</li>
          <li>{modifiedHeight}</li>
          <li>{modifiedTank}</li>
          <li>{consumption}</li>
        </ul>
      </div>
   
    </div>
  );
}
