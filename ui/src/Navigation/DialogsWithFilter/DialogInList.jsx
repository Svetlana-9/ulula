import Avatar from "@mui/material/Avatar";
import Box from "@mui/system/Box";
import Stack from "@mui/system/Stack";

export default function DialogInList({ contact, dialoge }) {
  return (
    <Box
      sx={{
        height: 70,
        borderBottom: 1,
        mr: 1,
        ml: 1,
        borderColor: "primary.light",
        display: "flex",
        "&:hover": {
          bgcolor: "secondary.light",
        },
      }}
    >
      <Avatar
        sx={{
          boxSizing: "border-box",
          m: 0.5,
          width: 60,
          height: 60,
        }}
        src={contact.avatar}
      />
      <Stack
        spacing={0.4}
        sx={{
          typography: "massege",
        }}
      >
        <h3>{contact.alias}</h3>
        <p>{dialoge[dialoge.length - 1].message}</p>
      </Stack>
    </Box>
  );
}
