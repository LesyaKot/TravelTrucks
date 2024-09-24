import CamperCategoriesItem from "../CamperCategoriesItem/CamperCategoriesItem";
import css from "./CamperCategories.module.css";
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

export default function CamperCategories({ camper }) {
  if (!camper) {
    return null;
  }

  const { transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water } = camper;

  const categories = {
    transmission,
    engine,
    kitchen,
    AC,
    bathroom,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  };

  const iconMap = {
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
    <ul className={css.list}>
      {data.map(([key, value]) => {
        const IconComponent = iconMap[key];
        const title = key === "transmission" || key === "engine" ? value : key;

        return (
          IconComponent && (
            <li key={key}>
              <CamperCategoriesItem icon={IconComponent} title={title} />
            </li>
          )
        );
      })}
    </ul>
  );
}