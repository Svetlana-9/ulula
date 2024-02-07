import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { groups } from "../../../emulator";
import { teal } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./Button.module.css"

let theme = createTheme({
  palette: {
    primary: {
      main: teal[800],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          width: "150px",
          border: "1.7px solid",
        },
      },
    },
  },
});

export default function VariantButtonGroup() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        {groups.map((group, index) => (
          <Button key = {index} className={styles.button}>{group}</Button>
        ))}
      </ButtonGroup>
    </ThemeProvider>
  );
}
