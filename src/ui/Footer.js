import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
    height: "15.5em",
  },
  adornment: {
    width: "25em",
    height: "15.5em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
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
