import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const SideBar = (): JSX.Element => {
  const classes = {
    container: {
      bgcolor: "backgroundColors.gray",
      width: "35vh",
      height: "100vh",
      pt: "30px",
      display: { xs: "none", sm: "inline" },
    },
    filterButton: {
      "&:hover": {
        bgcolor: "backgroundColors.lightGray",
        cursor: "pointer",
      },
    },
    filterText: {
      color: "textColors.white",
      fontWeight: "300",
      ml: 2,
      mb: 1,
    },
  };

  const [selectedFilter, setSelectedFiler] =
    useState<string>("All Tournaments");

  console.log(selectedFilter);

  return (
    <>
      <Box sx={classes.container}>
        <Box
          sx={{
            ...classes.filterButton,
          }}
        >
          <Typography
            variant="h6"
            sx={classes.filterText}
            onClick={() => {
              setSelectedFiler("All Tournaments");
            }}
          >
            All Tournaments
          </Typography>
        </Box>

        <Box sx={classes.filterButton}>
          <Typography
            variant="h6"
            sx={classes.filterText}
            onClick={() => {
              setSelectedFiler("In Progress");
            }}
          >
            In Progress
          </Typography>
        </Box>
        <Box sx={classes.filterButton}>
          <Typography
            variant="h6"
            sx={classes.filterText}
            onClick={() => {
              setSelectedFiler("Finished");
            }}
          >
            Finished
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
