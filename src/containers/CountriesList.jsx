import { Link } from "react-router-dom";
import CountryCard from "@components/CountryCard";
import "@styles/CountriesList.scss";

const countriesList = ({ countriesList }) => {
  return (
    <section className="countries__container">
      <div className="contries__list">
        {countriesList?.map((country, i) => (
          <Link key={i} to={"/country/" + country.name.toLowerCase()}>
            <CountryCard country={country} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default countriesList;
