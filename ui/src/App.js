import FullDialoge from "./FullDialoge/FullDialoge";
import Navigation from "./Navigation/Navigation";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d2f7f4",
    },
    secondary: {
      main: "#ffffff",
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
    maesage: {
      fontFamily: "Palatino, URW Palladio L, serif",
      fontSize: 17,
    },
  },
});
function App() {
  const [FullDialog, setFullDialoge] = useState([]);
  function handleClick(contact) {
    setFullDialoge(<FullDialoge contact={contact} />);
  }
  return (
    <ThemeProvider theme={theme}>
      <Stack direction={"row"} sx={{
        bgcolor: "primary.main"
      }}>
        <Navigation funcOnClick = {handleClick} />
        {FullDialog}
        </Stack>
    </ThemeProvider>
  );
}

export default App;
