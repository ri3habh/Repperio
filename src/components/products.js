import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import theme from "../themes";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Book } from "@material-ui/icons";
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4em",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        }
    },
    blogContainer: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
    },
    card: {
        maxWidth: "100%"
    },
    media: {
        height: 240
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    },
    paginationDisplay: {
        display: "flex",
        justifyContent: "center"
    }
}));

function Products() {
    const classes = useStyles();
    return(
        <div className="App">
        <Box className={classes.hero}> 
            <Box>
                Articles
            </Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
                Articles 
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Article Name
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Words Words Words
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                        <Box className={classes.author}>
                            <Avatar src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"/>
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    John Doe
                                </Typography>
                                <Typography variant="subtitle2" component="p" color="textSecondary">
                                    Enter Date here
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <BookmarkBorderIcon/>
                        </Box>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Article Name
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Words Words Words
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                        <Box className={classes.author}>
                            <Avatar src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"/>
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    John Doe
                                </Typography>
                                <Typography variant="subtitle2" component="p" color="textSecondary">
                                    Enter Date here
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <BookmarkBorderIcon/>
                        </Box>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Article Name
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Words Words Words
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                        <Box className={classes.author}>
                            <Avatar src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"/>
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    John Doe
                                </Typography>
                                <Typography variant="subtitle2" component="p" color="textSecondary">
                                    Enter Date here
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <BookmarkBorderIcon/>
                        </Box>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Article Name
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Words Words Words
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                        <Box className={classes.author}>
                            <Avatar src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"/>
                            <Box ml={2}>
                                <Typography variant="subtitle2" component="p">
                                    John Doe
                                </Typography>
                                <Typography variant="subtitle2" component="p" color="textSecondary">
                                    Enter Date here
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <BookmarkBorderIcon/>
                        </Box>
                    </CardActions>
                    </Card>
                </Grid>
            </Grid>
            <Box my={4} className={classes.paginationDisplay}>
                <Pagination count={10} />
            </Box>
        </Container>
        </div>
    )
}

export default Products; 

{/*"Box" is the Material-UI equivalent to "div"*/}
{/*Add more entries with adding more "grids"*/}
