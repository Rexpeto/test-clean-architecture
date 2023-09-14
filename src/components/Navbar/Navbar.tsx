import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { CustomDialog, FavoriteTable } from "..";
import { FavoriteBorder } from "@mui/icons-material";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

const Navbar = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Technical Test
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<FavoriteBorder />}
            size="small"
            onClick={handleClick}
          >
            Open Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
