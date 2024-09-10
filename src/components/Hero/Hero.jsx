import css from "./Hero.module.css";
export default function Hero() {
  return (
    <>
      <div className={css.background}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.text}>
          You can find everything you want in our catalog
        </h2>
        <button>View Now</button>
      </div>
    </>
  );
}
