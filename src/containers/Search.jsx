import { useState } from "react";
import searchIcon from "@icons/search.svg";
import downIcon from "@icons/chevron-back-outline.svg";
import "@styles/Search.scss";

const search = () => {
  const [q, setQ] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="search">
        <section className="search__container">
          <div className="search__bar">
            <object
              data={searchIcon}
              type="image/svg+xml"
              aria-label="search icon"
            ></object>
            <input
              className="search__input"
              type="text"
              placeholder="Search&nbsp;for&nbsp;a&nbsp;country..."
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </section>
        <section className="filter__container">
          <div
            className={toggle ? "filter__button animation" : "filter__button"}
          >
            <button onClick={handleToggle}>
              <p>Filter&nbsp;by&nbsp;Region</p>
              <object
                data={downIcon}
                type="image/svg+xml"
                aria-label="down icon"
              ></object>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default search;
