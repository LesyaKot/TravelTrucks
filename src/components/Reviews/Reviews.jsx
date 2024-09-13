import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";
import css from "./Reviews.module.css";

export default function Reviews() {
  const { currentItem } = useSelector(selectCampers);
  const { reviews } = currentItem;
  return (
    <ul className={css.reviewList}>
      {reviews.map((item) => (
        <li key={nanoid()}>
          <ReviewItem review={item} />
        </li>
      ))}
    </ul>
  );
}
