import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./CatalogItemNav.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active, css.default);
};

export default function CatalogItemNav() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink to="features" className={getNavLinkClass}>
          Features
        </NavLink>
      </li>
      <li>
        <NavLink to="reviews" className={getNavLinkClass}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}