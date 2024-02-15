import { Avatar, Box } from "@mui/material";
import Message from "./Message";
import emulator from "../emulator";
import { Stack } from "@mui/material";

export default function Dialoge({ dialoge, contact }) {
  const logo = emulator.getLogo();
  return (
    <Box
      sx={{
        pt: 2,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {dialoge.map((message) => (
        <Stack sx={{
          m:2,
          mb:1,
          mt:1,
          typography:"message",
          boxSizing: "border-box"
        }}direction="row" alignItems="center" spacing={2}>
          <Avatar
            sx={{
              boxSizing: "border-box",
              m: 1,
              width: 50,
              height: 50,
            }}
            src={
              message.who === emulator.getProfile().alias
                ? logo
                : contact.avatar
            }
          />
          <Message message={message} />
        </Stack>
      ))}
      
    </Box>
  );
}
