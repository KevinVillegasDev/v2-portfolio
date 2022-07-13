import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export default function MediaCard() {
    return (
        <div className="cards">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422.jpg"
                    alt="cooking"
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
                        href="https://kevinvillegasdev.github.io/CapstoneFrontend/"
                    >
                        <Avatar
                            className="avatar"
                            src={process.env.PUBLIC_URL + "/git.png"}
                        ></Avatar>
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={process.env.PUBLIC_URL + "/Val SS.png"}
                    alt="val"
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
                        href="https://kevinvillegasdev.github.io/ValorantGuide/"
                    >
                        <Avatar
                            className="avatar"
                            src={process.env.PUBLIC_URL + "/git.png"}
                        ></Avatar>
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={process.env.PUBLIC_URL + "/game.png"}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Naruto Street Fighter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        My spin on street fighter, using pygame and having you
                        battle on classic naruto battlefields! You can head to
                        the frontend link to download the zip file that holds
                        the game
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        href="https://kevinvillegasdev.github.io/Streetfighter-frontend/"
                    >
                        <Avatar
                            className="avatar"
                            src={process.env.PUBLIC_URL + "/git.png"}
                        ></Avatar>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
