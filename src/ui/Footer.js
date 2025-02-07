import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#0B72B9",
    width: "100%",
    zIndex: 1302,
    position: "relative",
    height: "15.5em",
    [theme.breakpoints.down("md")]: {
      height: "11.5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "9.5em",
    },
  },
  adornment: {
    width: "25em",
    height: "15.5em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-1rem",
      width: "21em",
      height: "11.5em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
      height: "9.5em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        alt="black decorative slash"
        src="assets/footerAdornment.svg"
        className={classes.adornment}
      />
    </footer>
  );
}
