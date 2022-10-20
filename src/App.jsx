import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import AppContext from "@context/AppContext";
import useInitialTheme from "@hooks/useInitialTheme";
import "@styles/global.scss";

const App = () => {
  const initialState = useInitialTheme();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
