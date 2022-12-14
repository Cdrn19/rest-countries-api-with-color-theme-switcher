import useGetCountries from "@hooks/useGetCountries";
import endPoints from "@api";
import Search from "@containers/Search";

const API = endPoints.countries.all;

const Home = () => {
  const response = useGetCountries(API);

  return (
    <main>
      <Search countriesList={response} />
    </main>
  );
};

export default Home;
