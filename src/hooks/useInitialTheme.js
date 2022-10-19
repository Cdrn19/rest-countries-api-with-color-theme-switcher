import { useState } from "react";

const initialState = "light";

const useInitialTheme = () => {
  const [theme, setTheme] = useState(initialState);

  const modeTheme = (mode) => {
    setTheme(mode);

    return theme;
  };

  return { theme, modeTheme };
};

export default useInitialTheme;
