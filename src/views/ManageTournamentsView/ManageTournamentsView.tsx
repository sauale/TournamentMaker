import { Box } from "@mui/material";
import React from "react";
import SideBar from "../../shared/layouts/Sidebar";
import TournamentListComponent from "./components/TournamentListComponent";

const ManageTournamentsView = (): JSX.Element => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <TournamentListComponent />
      </Box>
    </>
  );
};

export default ManageTournamentsView;
