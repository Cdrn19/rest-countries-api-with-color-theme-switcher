import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useGetCountry = (APIname, APIalpha) => {
  const { name } = useParams();
  const [Country, setCountry] = useState([]);
  const [Borders, setBorders] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let response, secondResponse;
      let code = "";

      try {
        response = await fetch(`${APIname}/${name}`);
        response = await response.json();
        setCountry(response);
        if (response[0]?.borders !== undefined && response.length > 0) {
          response[0]?.borders?.map(
            (border, i) => (code += i === 0 ? border : "," + border)
          );
          secondResponse = await fetch(`${APIalpha}${code}`);
          secondResponse = await secondResponse.json();
          setBorders(secondResponse);
        } else {
          secondResponse = [];
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchAPI();
  }, [name]);

  return {
    Country,
    Borders,
  };
};

export default useGetCountry;
