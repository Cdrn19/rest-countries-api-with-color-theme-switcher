import Layout from "@containers/Layout";
import AppContext from "@context/AppContext";
import useInitialTheme from "@hooks/useInitialTheme";
import "@styles/global.scss";

const App = () => {
  const initialState = useInitialTheme();

  return (
    <AppContext.Provider value={initialState}>
      <Layout />
    </AppContext.Provider>
  );
};

export default App;
