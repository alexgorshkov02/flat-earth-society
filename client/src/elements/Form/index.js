import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  login: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
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
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standart-email-input"
          label="E-mail"
          autoComplete="current-email"
          variant="standard"
        />
        <TextField
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
          variant="contained"
          color="primary"
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
