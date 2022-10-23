import useGetCountries from "@hooks/useGetCountries";
import endPoints from "@api";
import CountriesList from "@containers/CountriesList";
import Search from "@containers/Search";

const API = endPoints.countries.all;

const Home = () => {
  const response = useGetCountries(API);

  return (
    <>
      <Search />
      <CountriesList countriesList={response} />
    </>
  );
};

export default Home;
