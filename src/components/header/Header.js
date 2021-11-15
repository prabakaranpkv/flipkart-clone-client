import {
  AppBar,
  Box,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

//components
import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";
import { Menu } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 54,
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    textDecoration: "none",
    color: "#fff",
  },
  logo: {
    width: 75,
  },
  symbol: {
    width: 10,
    marginLeft: 4,
    height: 10,
  },
  container: {
    display: "flex",
  },
  headText: {
    fontSize: 10,
    fontStyle: "italic",
  },
  list: {
    width: 250,
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  headerButton: {
    margin: "0 7% 0 auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

export default function Header() {
  const classes = useStyles();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box className={classes.list}>
      <List>
        <ListItem>
          <HeaderButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <IconButton
          color="inherit"
          className={classes.menuButton}
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Link to="/" className={classes.component}>
          <img src={logoURL} alt="flipkart" className={classes.logo} />
          <Box className={classes.container}>
            <Typography className={classes.headText}>
              Explore{" "}
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Typography>
            <img src={subURL} alt="symbol" className={classes.symbol} />
          </Box>
        </Link>
        <SearchBar />
        <span className={classes.headerButton}>
          <HeaderButton />
        </span>
      </ToolBar>
    </AppBar>
  );
}
