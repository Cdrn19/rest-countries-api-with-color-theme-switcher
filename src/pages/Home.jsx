import useGetCountries from "@hooks/useGetCountries";
import endPoints from "@api";
import CountriesList from "@containers/CountriesList";

const API = endPoints.countries.all;

const Home = () => {
  const response = useGetCountries(API);

  return (
    <>
      <CountriesList countriesList={response} />
    </>
  );
};

export default Home;
