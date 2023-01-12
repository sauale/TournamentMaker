import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Logo from "../../../assets/images/Trophy.svg";
import GroupIcon from "@mui/icons-material/Group";
import CircularProgressComponent from "./CircularProgressComponent";
import { TournamentStatus } from "../../../shared/models/Tournament";

interface Props {
  name: string;
  status: TournamentStatus;
}

const classes = {
  container: {
    display: "flex",
    flexDirection: "row",
    bgcolor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 2px -2px gray",
    cursor: "pointer",
    height: "100px",
  },
};

const TournamentCard = (props: Props): JSX.Element => {
  return (
    <>
      <Box sx={classes.container}>
        <Box
          component="img"
          src={Logo}
          sx={{ width: "100px", height: "100px" }}
        ></Box>

        <Grid container gap={2} sx={{ mr: 1 }}>
          <Grid sx={{ width: "150px" }}>
            <Typography sx={{ mt: 2.5, fontWeight: 600 }}>
              {props.name}
            </Typography>
            <Typography sx={{ mt: 1 }}>{props.status}</Typography>
          </Grid>

          <Grid>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              gap={0.3}
              sx={{ mt: 2.5 }}
            >
              <Typography>16</Typography>
              <GroupIcon></GroupIcon>
            </Stack>

            <Typography sx={{ mt: 1 }}>Football</Typography>
          </Grid>

          <Grid>
            <CircularProgressComponent
              progressValue={64}
            ></CircularProgressComponent>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TournamentCard;
