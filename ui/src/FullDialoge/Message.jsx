import { Box } from "@mui/material";

export default function Message({ message }) {
  return (
    <Box
      sx={{
        typography:"message",
        bgcolor: "secondary.main",
        width: "fit-content",
        height: "auto",
        border: "1px solid #429e8c",
        mb: 3,
        ml: 1,
        p: 1,
        borderRadius: 3,
        alignItems:"center",
      }}
    >
      {message.message}
    </Box>
  );
}
