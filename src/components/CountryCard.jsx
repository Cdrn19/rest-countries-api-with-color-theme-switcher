import "@styles/CountryCard.scss";

const countryCard = ({ country }) => {
  return (
    <div className="countryCard__container">
      <div className="countryCard__image">
        <img src={country.flags.svg} alt={"flag's " + country.name} />
      </div>
      <div className="countryCard__info">
        <h1 className="countryCard__info--title">{country.name}</h1>
        <p className="countryCard__info--population">
          <span>Population:&nbsp;</span>
          {Intl.NumberFormat().format(country.population)}
        </p>
        <p className="countryCard__info--region">
          <span>Region:&nbsp;</span>
          {country.region}
        </p>
        <p className="countryCard__info--capital">
          <span>Capital:&nbsp;</span>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default countryCard;
