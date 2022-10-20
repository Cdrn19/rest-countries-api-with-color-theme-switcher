import { useEffect, useState } from "react";

const useGetCountries = (API) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let response;

      try {
        response = await fetch(API);
        response = await response.json();
        setCountries(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAPI();
  }, []);

  return countries;
};

export default useGetCountries;
