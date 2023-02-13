import React from "react";
import { Button } from "@mui/material";

interface CustomStyle {
  ml?: number;
}

interface Props {
  name: string;
  customStyle?: CustomStyle;
}

const classes = {
  button: {
    bgcolor: "#3498db",
    "&:hover": {
      bgcolor: "#2072a9",
    },
  },
};

const ButtonComponent = (props: Props): JSX.Element => {
  return (
    <>
      <Button
        variant="contained"
        sx={{ ...classes.button, ...props.customStyle }}
      >
        {props.name}
      </Button>
    </>
  );
};

export default ButtonComponent;
