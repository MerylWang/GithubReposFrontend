import "./App.css";
import React, { useState } from "react";

import UserFinder from "./components/UserFinder";
import RepoBoard from "./components/RepoBoard";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { blueGrey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// TODO: add light/dark mode
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: blueGrey.A100,
        main: blueGrey.A400,
        dark: blueGrey.A700,
        contrastText: "#fff",
      },
      secondary: {
        light: red[50],
        main: red[100],
        dark: red[900],
        contrastText: "#000",
      },
    },
  });

  const [selectedUsername, setSelectedUsername] = useState("");

  const setUsername = (username) => {
    console.log("calling setUsername");
    setSelectedUsername(username);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "background.default",
        flexGrow: 1,
      }}
    >
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Github Repo Explorer
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spaing={2}
        padding={5}
        sx={{
          height: "auto",
          maxHeight: "75%",
          overflow: "scroll",
        }}
      >
        <Grid
          item
          xs={4}
          padding={2}
          sx={{
            height: "auto",
            minHeight: 500,
            maxHeight: 700,
            overflow: "scroll",
          }}
        >
          <UserFinder
            selectedUsername={selectedUsername}
            setUsername={setUsername}
          />
        </Grid>

        <Grid
          item
          xs={8}
          padding={2}
          sx={{
            height: "auto",
            maxHeight: 700,
            overflow: "scroll",
          }}
        >
          <RepoBoard selectedUsername={selectedUsername} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
