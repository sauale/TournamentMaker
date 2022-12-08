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
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Navbar = (): JSX.Element => {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ bgcolor: "backgroundColors.lightBlack" }}>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>

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
    </>
  );
};

export default Navbar;
