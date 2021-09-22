import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  login: {
    display: "block",
    background: 'linear-gradient(45deg, #1b4591 30%, #2358b8 90%)',
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  loginButton: {
    backgroundColor: "#fbc22f",
    '&:hover': {
      backgroundColor: '#FBC22F'
    },
    color: "black",
    fontWeight: "bold"
  },
  textField: {
    backgroundColor: "white",
    display: "block",
  },
  loginHeader: {
    color: "white",
  }
  
});

function handleButtonPress() {
  console.log("button pressed");
}

export default function Form() {
  const classes = useStyles();

  return (
    <Box
      className={classes.login}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 4, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h3 className={classes.loginHeader}>Sign in</h3>
        <TextField
          className={classes.textField}
          id="standart-email-input"
          label="E-mail"
          autoComplete="current-email"
          variant="standard"
        />
        <TextField
          className={classes.textField}
          id="standart-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        {/* <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        /> */}
        <Button
          className={classes.loginButton}
          variant="contained"
          color="primary"
          backgroundColor="#FBC22F"
          onClick={() => {
            handleButtonPress();
          }}
        >
          Log In
        </Button>
      </div>
    </Box>
  );
}
