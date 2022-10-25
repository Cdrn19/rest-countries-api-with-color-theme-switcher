import { useContext } from "react";
import AppContext from "@context/AppContext";
import moonDark from "@icons/moon-stroke.svg";
import moonLight from "@icons/full-moon.svg";
import "@styles/Header.scss";

const Header = () => {
  const { modeTheme, theme } = useContext(AppContext);

  const handleClick = () => {
    const changeMode = theme === "light" ? "dark" : "light";
    modeTheme(changeMode);
  };
  document.body.dataset.theme = theme;

  return (
    <header className="header__container">
      <a href="/">
        <h1>Where in the world?</h1>
      </a>
      <button className="header__button" onClick={handleClick}>
        <img
          className="header__button--image"
          src={theme === "light" ? moonDark : moonLight}
          alt={"mode " + theme}
        />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
