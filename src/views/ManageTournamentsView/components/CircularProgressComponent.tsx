import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  progressValue: number;
}

const classes = {
  container: {
    width: "100%",
    mt: 3,
    position: "relative",
    display: "inline-flex",
  },
  progressValueContainer: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const CircularProgressComponent = (props: Props): JSX.Element => {
  return (
    <Box sx={classes.container}>
      <CircularProgress
        variant="determinate"
        value={props.progressValue}
        color="success"
      />

      <Box sx={classes.progressValueContainer}>
        <Typography variant="caption" component="div" color="text.secondary">
          {`${props.progressValue}%`}
        </Typography>
      </Box>
    </Box>
  );
};
export default CircularProgressComponent;
