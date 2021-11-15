import { makeStyles, Menu, MenuItem, Typography } from "@material-ui/core";
import { useState } from "react";
import { PowerSettingsNew } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    marginLeft: 10,
    fontSize: 14,
  },
});

export default function Profile({ account, setAccount }) {
  const [open, setOpen] = useState(false);

  const classes = useStyle();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const logout = () => {
    setAccount("");
  };

  return (
    <>
      <Link to="">
        <Typography onClick={handleClick} style={{ marginTop: 4 }}>
          {account}
        </Typography>
      </Link>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew fontSize="small" color="secondary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
