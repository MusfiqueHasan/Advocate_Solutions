import Sidebar from "./newsComponents/Sidebar";
import Feed from "./newsComponents/Feed";
import Rightbar from "./newsComponents/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./newsComponents/Navbar";
import Add from "./newsComponents/Add";
import { useState } from "react";

function NewsFeed() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
       
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>

  );
}

export default NewsFeed;