import React from "react";
import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";
import { CountryType } from "../../types/type";
import "./Navbar.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import { grey, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HouseIcon from "@mui/icons-material/House";
import { pink } from "@mui/material/colors";

type props = {
  fevItem: CountryType[];
};
export default function Navbar({ fevItem }: props) {
  const favItemlength = fevItem.length;

  const style = { textDecoration: "none" };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            // aria-label="open drawer"
            //  sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Country
          </Typography>
          <Box sx={{ flexGrow: 40 }} />
          <Box sx={{ display: { xs: "none", md: "flex", mt: 4 } }}>
            <Link style={style} to="">
              {" "}
              <HouseIcon className="homeIcon" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link style={style} to="/favorite">
              <Badge badgeContent={favItemlength} color="secondary">
                <IconButton />

                <FavoriteIcon
                  className="favIcon"
                  sx={{ color: favItemlength > 0 ? "pink[500]" : "white" }}
                />
              </Badge>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
