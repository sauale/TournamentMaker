import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import React from "react";

const Navbar = (): JSX.Element => {
  return (
    <>
      <Box sx={{ boxShadow: "0 0 10px rgb(0 0 0 / 80%)" }}>
        <AppBar position="static">
          <Toolbar sx={{ bgcolor: "backgroundColors.lightBlack" }}>
            <Stack flexDirection={"row"} alignItems={"center"} gap={0.3}>
              <EmojiEventsIcon fontSize="large" sx={{ color: "icons.gold" }} />
              <Typography variant="h5" fontWeight={500}>
                Tournament Creator
              </Typography>
            </Stack>

            <Box
              sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
            >
              <IconButton>
                <Avatar />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
