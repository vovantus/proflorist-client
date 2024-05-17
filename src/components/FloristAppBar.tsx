import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { useGetFloristInfo } from "../hooks/useGetFloristInfo";
import { Link } from "react-router-dom";
import { FLORIST_URLS } from "../routes/routes";

const pages = [
  { text: "About", to: FLORIST_URLS.ABOUT },
  { text: "Contacts", to: FLORIST_URLS.CONTACTS },
  { text: "Delivery", to: FLORIST_URLS.DELIVERY },
];

function FloristAppBar() {
  const { floristInfo } = useGetFloristInfo();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleGoToPlatform = () => {
    setAnchorElUser(null);
    const hostArray = window.location.host.split(".");
    hostArray.shift();
    window.location.href = `//${hostArray.join(".")}`;
  };

  const settings = [{ text: "Back to platform", func: handleGoToPlatform }];

  return (
    <AppBar
      position="fixed"
      color="secondary"
      sx={{
        backgroundColor: "rgba(118, 202, 254, 0.5)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalFloristOutlinedIcon
            sx={{ display: { xxs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xxs: "none", md: "flex" },
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {floristInfo?.name}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xxs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              disableScrollLock
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              variant="menu"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xxs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  to={page.to}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#ffffff",
                    },
                  }}
                >
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalFloristOutlinedIcon
            sx={{ display: { xxs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xxs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {floristInfo?.name}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xxs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                component={Link}
                to={page.to}
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 1, bgcolor: "#cfd8dc", color: "#ffffff" }}
                aria-label="delete"
              >
                <PersonIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              disableScrollLock
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.text} onClick={setting.func}>
                  <Typography textAlign="center">{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default FloristAppBar;
