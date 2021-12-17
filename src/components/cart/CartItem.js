import { Box, Button, Card, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";

//components
import GroupButton from "./GroupButton";

const useStyle = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
    borderTop: "1px solid #f0f0f0",
  },
  leftCompoent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  rightComponent: {
    margin: 20,
  },
  smallText: {
    fontSize: 14,
  },
  greyColorText: {
    color: "#878787",
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  image: {
    height: 110,
    width: 110,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default function CartItem({ item, removeItemFromCart }) {
  const classes = useStyle();
  const assured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const [prodCount, setProdCount] = useState(1);

  const counter = (params) => {
    setProdCount(+Object.values(params).toString());
  };

  return (
    <Card className={classes.component}>
      <Box className={classes.leftCompoent}>
        <img src={item.url} className={classes.image} alt="productimg" />
        <GroupButton sendData={counter} />
      </Box>
      <Box className={classes.rightComponent}>
        <Typography>{item.title.longTitle}</Typography>
        <Typography
          className={clsx(classes.smallText, classes.greyColorText)}
          style={{ marginTop: 10 }}
        >
          Seller:PkComNet
          <span>
            <img
              src={assured}
              style={{ width: 50, marginLeft: 10 }}
              alt="assured"
            />
          </span>
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <span className={classes.price}>₹{item.price.cost * prodCount}</span>{" "}
          &nbsp;&nbsp;&nbsp;
          <span className={classes.greyColorText}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>₹{item.price.discount} off</span>
        </Typography>
        <Button
          className={classes.remove}
          color="secondary"
          onClick={() => removeItemFromCart(item.id)}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
}
