import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import RepoCard from "./RepoCard";

function RepoBoard(props) {
  const [repos, setRepos] = useState([]);
  const selectedUsername = props.selectedUsername;

  // TODO: put this in ENV
  const BASE_URL = "https://aqueous-journey-63498.herokuapp.com";
  // const BASE_URL = "http://localhost:8000";

  // fetch data of repos to be displayed
  useEffect(() => {
    if (selectedUsername) {
      const REPOS_API = `${BASE_URL}/users/${selectedUsername}/repos`;
      fetch(REPOS_API)
        .then((res) => res.json())
        .then((json) => {
          setRepos(json);
        });
    } else {
      // reset board if username selection removed
      setRepos([]);
    }
  }, [selectedUsername]);

  return (
    <Box
      sx={{
        width: "auto",
        height: "auto",
        maxWidth: "100%",
        maxHeight: "100%",
        bgcolor: "background.default",
        boxShadow: 1,
        overflow: "scroll",
      }}
    >
      <Typography
        color="text.secondary"
        gutterBottom
        paddingLeft={2}
        paddingTop={2}
      >
        Repos
      </Typography>
      <Grid container spaing={2}>
        {repos.map((repo) => (
          <Grid item xs={6} padding={2}>
            <RepoCard repo={repo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RepoBoard;
