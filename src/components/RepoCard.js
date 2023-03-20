import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForkRightIcon from "@mui/icons-material/ForkRight";

// TODO: pass in stargazers and forks urls (need to change model, serializer & seed data again)

function RepoCard(props) {
  const repo = props.repo;
  return (
    <Box sx={{}}>
      <Card
        variant="outlined"
        sx={{
          height: 200,
          width: "auto",
          maxWidth: 500,
          overflow: "scroll",
          "&:hover": {
            boxShadow: 2,
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" sx={{ paddingLeft: 0.5 }}>
            {repo.name}
          </Typography>
          <Typography sx={{ mb: 1.5, paddingLeft: 0.5 }} color="text.secondary">
            {repo.language}
          </Typography>
          <Typography variant="body2" sx={{ paddingLeft: 0.5 }}>
            {repo.description}
          </Typography>
          <Box sx={{ paddingTop: 1 }}>
            {/* TODO: change to filled star on hover - if add functionality to let user star repos */}
            <StarBorderIcon />
            {repo.stargazers_count} stars
            <ForkRightIcon />
            {repo.forks_count} forks
          </Box>
          <CardActions sx={{ paddingLeft: 0.5 }}>
            <Button size="small" href={repo.html_url} sx={{ paddingLeft: 0 }}>
              Visit Repo
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
}

export default RepoCard;
