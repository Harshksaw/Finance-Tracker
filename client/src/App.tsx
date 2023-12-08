
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";

import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navbar from "@/scenes/navbar/index"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  
  return (
    <div className="app">
      <BrowserRouter>

        <ThemeProvider theme={theme}>
          {/* //reset mui css */}
          <CssBaseline /> 
            <Box width="100%" height="100%" padding = "1rem 2rem 4rem 2rem">
              <Navbar/>
              
              <Routes>
                <Route path ="/" element={<div>Dasdhboardi</div>} />
                <Route path ="/predictions" element={<div>PRedictions</div>} />

              </Routes>



            </Box>
            

           




        </ThemeProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
