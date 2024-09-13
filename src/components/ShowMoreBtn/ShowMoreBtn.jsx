import { Link } from "react-router-dom";
import clsx from "clsx";

import css from './ShowMoreBtn.module.css'

export default function ShowMore({ variant, children, to }) {
  return (
    <Link to={to} className={clsx(css.btn, css[variant])}>
      {children}
    </Link>
  );
}