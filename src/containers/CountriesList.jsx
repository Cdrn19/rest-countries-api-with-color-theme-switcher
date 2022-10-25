import { Link } from "react-router-dom";
import CountryCard from "@components/CountryCard";
import "@styles/CountriesList.scss";

const countriesList = ({ countriesList }) => {
  return (
    <div className="countries__container">
      <div className="contries__list">
        {countriesList?.map((country, i) => (
          <Link key={i} to={"/country/" + encodeURIComponent(country.name)}>
            <CountryCard country={country} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default countriesList;
