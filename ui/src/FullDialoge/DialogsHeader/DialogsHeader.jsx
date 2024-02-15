import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Avatar } from "@mui/material";

export default function DialogsHeader({contact}) {
  return (
    <Stack
    alignItems={"center"}
      direction={"row"}
      spacing={2}
      sx={{
        typography: "massege",
        borderBottom: "2px solid black",
        height: 1/11,
        boxSizing: "border-box",
      }}
    >
      <Box sx={{
        pl:3
      }}>
      <Avatar
        sx={{
          boxSizing: "border-box",
          width: 60,
          height: 60,
        }}
        src={contact.avatar}
      />
      </Box>
      <h2 >{contact.alias}</h2>
    </Stack>
  );
}
