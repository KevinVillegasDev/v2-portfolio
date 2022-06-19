import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

export default function MediaCard() {
    return (
        <div className="cards">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Recipe's Galore
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Full stack recipe application that lets users interact
                        with a database of 600k ingredients and recipes, helping
                        them make recipe decisions.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        href="https://github.com/KevinVillegasDev/CapstoneFrontend"
                    >
                        Github
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image="/Val SS.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Valorant Guide
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        A small Valorant beginners guide built in React. You can
                        search for agent and weapon info and display stats
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        href="https://github.com/KevinVillegasDev/ValorantGuide"
                    >
                        Github
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}