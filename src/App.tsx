import "./App.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import React, { useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { PageType } from "./page/type";
import { NewCards } from "./page/newCreditCard";
import { MyCards } from "./page/MyCards";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
export const AppContext = React.createContext({
  activePage: "classes" as PageType,
  SetActivePage: (page: PageType) => {},
  toggleTheme: () => {},
});

function App() {
  const [activePage, SetActivePage] = useState<PageType>("NewCards");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return (
    <AppContext.Provider value={{ activePage, SetActivePage, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {activePage === "NewCards" && <NewCards />}
        {activePage === "MyCards" && <MyCards />}
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
