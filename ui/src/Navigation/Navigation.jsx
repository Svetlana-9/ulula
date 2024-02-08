import Header from "./Header/Header";
import ListWithDialogs from "./ListWithDialogs/ListWithDialogs";
import Box from "@mui/system/Box";

export default function DialogsList() {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        width: 1/4,
        boxSizing: "border-box",
        borderRight: "2px solid white",
        height: "100vh",
      }}
    >
      <Header />
      <ListWithDialogs />
    </Box>
  );
}
