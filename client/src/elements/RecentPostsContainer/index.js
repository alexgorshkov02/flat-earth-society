import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RecentPostCard from "../RecentPostCard";
import {useQuery} from '@apollo/client';
import {QUERY_POSTS} from "../../utils/queries.js";

export default function RecentPostsContainer() {
    const {loading, data, error} = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    console.log("TestData", posts);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      {posts.map((post, index) => (
            <RecentPostCard key= {index} {...post}/>
          ))}
          </Container>
    </React.Fragment>
  );
}