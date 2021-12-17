import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//component
import CartItem from "./CartItem";
import { removeFromCart } from "../../redux/actions/CartActions";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from "../../service/Api";
import { post } from "../../utils/Paytm";

const useStyle = makeStyles((theme) => ({
  component: {
    // marginTop: 55,
    padding: "30px 135px ",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftcomponent: {
    // width: "67%",
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
    },
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  placeOrder: {
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 50,
    display: "flex",
    marginLeft: "auto",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 /10%)",
  },
}));

export default function Cart() {
  const classes = useStyle();

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cartItems);
  });

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "prabakaranpkv@gmail.com",
    });

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  return (
    <>
      {cartItems.length ? (
        <Grid container className={classes.component}>
          <Grid
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
            className={classes.leftcomponent}
          >
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box className={classes.bottom}>
              <Button
                onClick={() => buyNow()}
                className={classes.placeOrder}
                variant="contained"
              >
                Place Order
              </Button>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
