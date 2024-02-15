import DialogsSearch from "./DialogsSearch/DialogsSearch";
import Stack from "@mui/material/Stack";

export default function Header() {
  return (
    <Stack
      sx={{
        bgcolor: "primary.main",
        boxSizing:"border-box",
        borderBottom: "2px solid black",
        height: 1/11 
      }}
      direction="row"
      spacing={5}
      alignItems="center"
    >
    <img width="60px" height="60px" src="logo192.png" alt="Ошибка" />
      <DialogsSearch />
    </Stack>
  );
}
