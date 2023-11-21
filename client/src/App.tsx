
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";

import { themeSettings } from "./theme";


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <h1>ss</h1>

           




        </ThemeProvider>

    </div>
  );
}

export default App;
