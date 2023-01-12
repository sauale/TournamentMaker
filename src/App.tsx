import React, { useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { URLMAP } from "./data/Const";
import ManageTournamentsView from "./views/ManageTournamentsView/ManageTournamentsView";
import HomepageView from "./views/HomepageView/HomepageView";
import { Box } from "@mui/material";
import Navbar from "./shared/layouts/Navbar";
declare module "@mui/material/styles" {
  // allow configuration using `createTheme`
  interface PaletteOptions {
    icons?: unknown;
    backgroundColors?: unknown;
    textColors?: unknown;
  }
}

function App(): JSX.Element {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          icons: {
            white: "white",
            gold: "gold",
          },
          backgroundColors: {
            lightBlack: "#353535",
            gray: "#545454",
            lightGray: "#9c9c9c",
          },
          textColors: {
            white: "white",
          },
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Router>
          <Navbar />
          <Routes>
            <Route path={URLMAP.HOME} element={<HomepageView />}></Route>
            <Route
              path={URLMAP.MANAGE_TOURNAMENTS}
              element={<ManageTournamentsView />}
            ></Route>
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
