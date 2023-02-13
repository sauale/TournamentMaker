import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import {
  Tournament,
  TournamentStatus,
} from "../../../shared/models/Tournament";
import TournamentCard from "./TournamentCard";

const classes = {
  container: {
    m: 4,
    height: "100px",
    alignItems: "center",
  },
};

const mockData: Tournament[] = [
  {
    name: "WorldCup",
    status: TournamentStatus.InProgress,
  },
  {
    name: "ShitCup",
    status: TournamentStatus.InProgress,
  },
  {
    name: "lelCup",
    status: TournamentStatus.Finished,
  },
];

const TournamentListComponent = (): JSX.Element => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 1, color: "backgroundColors.lightBlack" }}
        >
          {" "}
          All Tournaments
        </Typography>

        <Grid container gap={2} sx={classes.container}>
          {mockData.map((element: Tournament, key) => {
            return (
              <Grid key={key} gridArea={"main"}>
                <TournamentCard
                  name={element.name}
                  status={element.status}
                ></TournamentCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default TournamentListComponent;
