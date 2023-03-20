import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForkRightIcon from '@mui/icons-material/ForkRight';

function RepoCard(props) {
    const repo = props.repo; 
    // TODO: pass in stargazers and forks urls (need to change model, serializer & seed data again)
    return (
        <Box sx={{ }}>
            <Card variant="outlined" 
            sx={{
                height:200, 
                width:'auto', 
                maxWidth:500, 
                overflow:'scroll', 
                '&:hover': {
                    boxShadow:2
                },
            }}
            >
                <CardContent>
                    <Typography variant="h5" component="div">
                        {repo.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {repo.language}
                    </Typography>
                    <Typography variant="body2">
                        {repo.description}
                    </Typography>

                    {/* TODO: align these better */}
                    <StarBorderIcon />{repo.stargazers_count} stars
                
                    <ForkRightIcon />{repo.forks_count} forks

                    <CardActions sx={{paddingLeft:0}}>
                        {/* hello */}
                        <Button 
                            size='small' 
                            href={repo.html_url}
                            sx={{paddingLeft:0}}
                        >
                            Visit Repo
                        </Button>
                        
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    )
}

export default RepoCard