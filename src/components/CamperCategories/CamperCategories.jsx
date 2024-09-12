import {
  Wind,
  CupHot,
  Diagram3,
  Display,
  Droplet,
  Water,
  Fire,
  Snow,
  FuelPump,
  UiRadios,
} from "react-bootstrap-icons";
import CamperCategoriesItem from "../CamperCategoriesItem/CamperCategoriesItem";
import css from "./CamperCategories.module.css";
import CamperItem from "../CamperItem/CamperItem";


export default function CamperCategories({
  camper: transmission,
  engine,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
}) {
  const categories = {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  };

  const icons = {
    transmission: Diagram3,
    engine: FuelPump,
    kitchen: CupHot,
    AC: Wind,
    bathroom: Droplet,
    TV: Display,
    radio: UiRadios,
    refrigerator: Snow,
    microwave: Water,
    gas: Fire,
    water: Droplet,
  };

  const data = Object.entries(categories).filter(([key, value]) => value);
  return (
    <ul>
      {data.map(([key, value]) => {
        const CategoryIcon = icons[key];
        const title = key === "transmission" || key === "engine" ? value : key;

        return (
          CategoryIcon && (
            <li key={key}>
              <CamperItem icon={CategoryIcon} title={title} />
            </li>
          )
        );
      })}
    </ul>
  );
}
