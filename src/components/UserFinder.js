import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function UserFinder(props) {
  // const USERS_API = 'http://localhost:8000/users/'
  // TODO: put this in env
  const BASE_URL = "https://aqueous-journey-63498.herokuapp.com";
  const USERS_API = `${BASE_URL}/users`;
  const [users, setUsers] = useState([]);

  const selectedUsername = props.selectedUsername;

  // fetch all users data
  useEffect(() => {
    fetch(USERS_API)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      });
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "background.paper",
        boxShadow: 1,
        position: "relative",
      }}
    >
      <Typography
        color="text.secondary"
        gutterBottom
        paddingLeft={2}
        paddingTop={2}
      >
        Select a user
      </Typography>
      {/* TODO: add key to each list element */}
      <List>
        {users.map((user) => (
          <ListItemButton
            onClick={() => props.setUsername(user.username)}
            selected={selectedUsername == user.username}
          >
            <Link href={user.html_url}>{user.username}</Link>
          </ListItemButton>
        ))}
      </List>
      <Box textAlign="center" sx={{ paddingTop: 5 }}>
        <Button
          variant="contained"
          disabled={selectedUsername === ""}
          onClick={() => props.setUsername("")}
        >
          Remove Selection
        </Button>
      </Box>
    </Box>
  );
}

export default UserFinder;
