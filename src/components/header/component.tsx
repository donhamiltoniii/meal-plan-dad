import Link from "next/link";

import css from "./styles.module.scss";

export const Header = () => (
  <header className={css["header"]}>
    <Link className={css["header__link"]} href="/">
      <h1 className={css["header__title"]}>Pops Meal Plan</h1>
    </Link>
  </header>
);
