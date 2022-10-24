import PropTypes from "prop-types";
import "@styles/RegionCountries.scss";

const RegionCountries = ({ search, select }) => {
  return (
    <div className="filter">
      <section className="filter__container">
        <div className="filter__list">
          <ul>
            {search.map((region, i) => (
              <li key={i}>
                <button
                  className="filter__list--button"
                  value={region}
                  onClick={() => select(region)}
                >
                  {region}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

RegionCountries.propTypes = {
  search: PropTypes.array,
  select: PropTypes.func,
};

export default RegionCountries;
