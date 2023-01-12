import React from "react";
import { Box, Typography } from "@mui/material";

const SideBar = (): JSX.Element => {
  const classes = {
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
  return (
    <>
      <Box
        sx={{
          bgcolor: "backgroundColors.gray",
          width: "35vh",
          height: "100vh",
          pt: "30px",
          display: { xs: "none", sm: "inline" },
        }}
      >
        <Box
          sx={{
            ...classes.filterButton,
          }}
        >
          <Typography variant="h6" sx={classes.filterText}>
            All Tournaments
          </Typography>
        </Box>
        <Box sx={classes.filterButton}>
          <Typography variant="h6" sx={classes.filterText}>
            Pending
          </Typography>
        </Box>
        <Box sx={classes.filterButton}>
          <Typography variant="h6" sx={classes.filterText}>
            In Progress
          </Typography>
        </Box>
        <Box sx={classes.filterButton}>
          <Typography variant="h6" sx={classes.filterText}>
            Finished
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
