import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Technical Test
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
