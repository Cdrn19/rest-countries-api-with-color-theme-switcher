import { Link } from "react-router-dom";
import useGetCountry from "@hooks/useGetCountry";
import endPoints from "@api";
import arrowLeft from "@icons/arrow-left.svg";
import "@styles/CountrySelect.scss";

const API = {
  name: `${endPoints.country.name}`,
  alpha: `${endPoints.listOfCode.alpha}`,
};

const countrySelect = () => {
  const { Country, Borders } = useGetCountry(API.name, API.alpha);

  return (
    <>
      <div className="countrySelect__back--container">
        <Link to=".." className="countrySelect__content--button ">
          <button className="countrySelect__back--button">
            <object data={arrowLeft} type="image/svg+xml"></object>
            Back
          </button>
        </Link>
      </div>
      {Country.length > 0 ? (
        <div className="countrySelect__container">
          <div className="countrySelect__image">
            <img
              src={Country[0]?.flags.svg}
              alt={"flag's " + Country[0]?.name}
            />
          </div>
          <div className="countrySelect__detail">
            <div className="countrySelect__detail--title">
              <h1>{Country[0]?.name}</h1>
            </div>
            <div className="countrySelect__detail--section">
              <div className="countrySelect__detail--general">
                <p>
                  <span>Native&nbsp;Name:&nbsp;</span>
                  {Country[0]?.nativeName}
                </p>
                <p>
                  <span>Population:&nbsp;</span>
                  {Intl.NumberFormat().format(Country[0]?.population)}
                </p>
                <p>
                  <span>Region:&nbsp;</span>
                  {Country[0]?.region}
                </p>
                <p>
                  <span>Sub&nbsp;Region:&nbsp;</span>
                  {Country[0]?.subregion}
                </p>
                <p>
                  <span>Capital:&nbsp;</span>
                  {Country[0]?.capital}
                </p>
              </div>
              <div className="countrySelect__detail--int">
                <p>
                  <span>Top&nbsp;Level&nbsp;Domain:&nbsp;</span>
                  {Country[0]?.topLevelDomain.map((Domain, i) =>
                    i === 0 ? Domain : ", " + Domain
                  )}
                </p>
                <p>
                  <span>Currencies:&nbsp;</span>
                  {Country[0]?.currencies?.map((currency, i) =>
                    i === 0 ? currency.name : ", " + currency.name
                  )}
                </p>
                <p>
                  <span>Languages:&nbsp;</span>
                  {Country[0]?.languages?.map((language, i) =>
                    i === 0 ? language.name : ", " + language.name
                  )}
                </p>
              </div>
            </div>
            <div className="countrySelect__detail--border">
              <h2>Border&nbsp;Country:&nbsp;</h2>
            </div>
            <div className="countrySelect__detail--button">
              {Borders.length === 0 ? (
                <button>Not Borders</button>
              ) : (
                Borders?.map((border, i) => (
                  <Link
                    key={i}
                    to={"/Country/" + encodeURIComponent(border.name)}
                  >
                    <button>
                      {border.name.replace(/\s\(([^()][^()]*)\)/g, "")}
                    </button>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default countrySelect;
