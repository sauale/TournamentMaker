import { Grid } from "@mui/material";
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
    justifyItems: "center",
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
      <Grid container gap={2} sx={classes.container}>
        {mockData.map((element: Tournament, key) => {
          return (
            <Grid key={key}>
              <TournamentCard
                name={element.name}
                status={element.status}
              ></TournamentCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default TournamentListComponent;
