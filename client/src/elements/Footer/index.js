import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toolbar: {
    justifyContent: "center",
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <Typography variant="body1" color="inherit">
            Footer
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
