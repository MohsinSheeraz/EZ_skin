import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import ProfileModal from "./profilemodal";

type Props = {
  user: string;
};

export default function AccountSetting({ user }: Props) {
  const handleLogout = () => {
    localStorage.removeItem("steamID64");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
    setSteamID64("");
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    setAnchorEl(null); // Close the dropdown
    setIsProfileModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsProfileModalOpen(false); // Close the modal
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {user}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleProfileClick}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>

          <span className="font-[Poppins]">My Profile</span>
=======
          <a href="https://test123-six-kappa.vercel.app/trade-url">
            Trade URL
          </a>

        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <span className="font-[Poppins]">Settings</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <button
            className="font-[Poppins]"
            id="logoutButton"
            onClick={handleClose}
          >
            Logout
          </button>
        </MenuItem>
      </Menu>
      <ProfileModal open={isProfileModalOpen} onClose={handleModalClose} />
    </React.Fragment>
  );
}

function setIsLoggedIn(arg0: boolean) {
  throw new Error("Function not implemented.");
}

function setUsername(arg0: string) {
  throw new Error("Function not implemented.");
}

function setSteamID64(arg0: string) {
  throw new Error("Function not implemented.");
}
