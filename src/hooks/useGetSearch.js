import { useEffect, useState } from "react";

const useGetSearch = ([q, region], countriesList) => {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountrySearch] = useState([]);
  const [filter, setFilter] = useState([]);

  const searchParams = {
    country: ["name", "capital"],
    region: ["region"],
  };

  useEffect(() => {
    setCountries(countriesList);
    setCountrySearch(countriesList);
  }, [countriesList.length]);

  useEffect(() => {
    const getFilter = () => {
      return countries.filter((country) => {
        return searchParams.region.some((capital) => {
          return (
            country[capital]
              ?.toString()
              .toLowerCase()
              .indexOf(region?.toString().toLowerCase()) > -1
          );
        });
      });
    };
    setFilter(getFilter());
    setCountrySearch(getFilter());
  }, [!!countries.length && region.toString()]);

  useEffect(() => {
    const getCountry = () => {
      return (filter.length > 0 ? filter : countries).filter((country) => {
        return searchParams.country.some((capital) => {
          return (
            country[capital]
              ?.toString()
              .toLowerCase()
              .indexOf(q?.toString().toLowerCase()) > -1
          );
        });
      });
    };

    setCountrySearch(getCountry());
  }, [
    !!countries.length && (region.toString().length & q.toString().length) === 0
      ? q.toString()
      : filter,
    q.toString(),
  ]);

  return countrySearch;
};

export default useGetSearch;
