import Navigation from "./Navigation/Navigation";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00695c",
    },
    secondary: {
      main: "#80cbc4",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ffa726",
    },
    success: {
      main: "#66bb6a",
    },
  },
  typography: {
    massege :{
    fontFamily: 'Nunito Sans',
    fontSize: 15,
    }
  }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
