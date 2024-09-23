import clsx from "clsx";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Navigation() {

  return (
    <div className={css.wrap}>
      <nav className={css.nav}>
        <Link to="/">
          <Logo />
        </Link>
        <ul className={css.list}>
          <li className={css.link}>
            <NavLink className={getNavLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClass} to="/catalog">
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
