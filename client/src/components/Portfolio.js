import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { useMutation } from '@apollo/client'
import { ADD_COMMENT } from '../utils/mutations'
import { QUERY_ME, QUERY_POSTS } from '../utils/queries'


const useStyles = makeStyles({
    containContent: {
        backgroundColor: "gainsboro",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        width: "100%"
    },
    portfolioCard: {
        backgroundColor: "white",
        minWidth: "300px",
        maxHeight: "300px",
        paddingRight: "15px",
    },
    portfolioName: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        fontSize: 25
    },
    gridRow: {
        display: "inline-flex",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor: "gainsboro",
    },
    postFeed: {
        minWidth: "450px",
        minHeight: "800px",
        marginLeft: "55px",
    },
    postHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        fontSize: 25,
    },
   
})

export default function Portfolio() {
    const classes = useStyles();
    const CommentForm =() => {
        const [addComment, {error}] = useMutation(ADD_COMMENT, {
            update(cache, {data: {addComment}}) {
                try{
                    const {comments} = cache.readyQuery({query: QUERY_POSTS})

                    cache.writeQuery({
                        query: QUERY_POSTS,
                        data: {comments: [addComment, ...comments]}
                    })
                }catch(e){
                    console.error(e)
                }
                const {me} = cache.readQuery({query: QUERY_ME})
                cache.writeQuery({
                    query: QUERY_ME,
                    data: {me: {...me, comments: [...me.comments, addComment]}}
                })
            }
        })
    }
    return(
        
        <Container className={classes.containContent}>
            <Grid className={classes.gridRow}>
                <Card className={classes.portfolioCard}>
                    <Typography className={classes.portfolioName}>Name Here</Typography>
                    <Avatar className={classes.profPic} alt="Tanner Smith" src="" />
                </Card>
                <Card className={classes.postFeed}>
                    <Typography className={classes.postHeader}>Feed</Typography>
                    <div>
                        <p className={`m-0  ${characterCount === 280 ? 'text-error': ''}`}>
                            Character Count: {characterCount}/280
                            {error && <span className="ml-2">Something went wrong</span>}
                        </p>
                        <form className="flex-row justify-center justify-space-between-md align-stretch"
                            onSubmit={handleFormSubmit}>
                            <textarea
                                placeholder="Comment..."
                                value={commentText}
                                className="form-input col-12 col-md-9"
                                onChange={handleChange}
                            ></textarea>
                            <button className="btn col-12 col-md-3" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </Card>
            </Grid>
        </Container>
    )
}