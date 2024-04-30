import { Box } from "@mui/material";

export default function Page404() {
  return (
    <Box
      sx={{
        width: "100%",
        // bgcolor: "tomato",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: { xxs: "column", sm: "row" },
        gap: 1,
        pb: 8,
        pt: 10,
      }}
    >
      <div>Not found</div>
    </Box>
  );
}
