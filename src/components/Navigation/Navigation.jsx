import clsx from "clsx";
import { NavLink, Link } from "react-router-dom";
// import { useAuth } from "../../redux/auth/selectors";
import Logo from "../Logo/Logo";
import css from "./Navigation.module.css";

const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Navigation() {

  return (
    <div>
      <nav className={css.nav}>
        <Link to="/">
          <Logo />
        </Link>
        <ul>
          <li>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/catalog">
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
