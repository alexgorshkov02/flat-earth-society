import * as React from "react";
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import { makeStyles } from "@material-ui/core/styles";
// import Typography from '@material-ui/core/Typography';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Form from "../elements/Form";
import About from "../elements/About";

const useStyles = makeStyles({});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={8}>
        <Item>
          <About />
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Form />
        </Item>
      </Grid>
    </Grid>
  );
}
