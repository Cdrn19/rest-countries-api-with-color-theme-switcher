import { useState, useEffect } from "react";
import searchIcon from "@icons/search.svg";
import downIcon from "@icons/chevron-back-outline.svg";
import RegionCountries from "@components/RegionCountries";
import CountriesList from "@containers/CountriesList";
import "@styles/Search.scss";

const search = ({ countriesList }) => {
  const [q, setQ] = useState("");
  const [toggle, setToggle] = useState(false);
  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState([]);

  const handleToggle = () => {
    setToggle(!toggle);
    !toggle && setRegion([]);
  };

  useEffect(() => {
    const getRegions = () => {
      const regions = [];

      const regionList = countriesList.map((country) => {
        return country.region;
      });

      for (let i = 0; i < regionList.length; i++) {
        if (!regions.includes(regionList[i])) {
          regions.push(regionList[i]);
        }
      }
      setRegions(regions);
    };
    !!countriesList.length && getRegions();
  }, [countriesList]);

  const selectRegion = (region) => {
    setRegion(region);
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
              value={q}
            />
          </div>
        </section>
        <section className="filter__container">
          <div
            className={toggle ? "filter__button animation" : "filter__button"}
          >
            <button onClick={handleToggle}>
              {!region.length ? (
                <p>Filter&nbsp;by&nbsp;Region</p>
              ) : (
                <p>{region}</p>
              )}
              <object
                data={downIcon}
                type="image/svg+xml"
                aria-label="down icon"
              ></object>
            </button>
          </div>
          {toggle && (
            <RegionCountries
              search={regions}
              select={(region) => {
                selectRegion(region);
              }}
            />
          )}
        </section>
      </div>
      <CountriesList countriesList={countriesList} />
    </>
  );
};

export default search;
