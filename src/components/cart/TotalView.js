import { Box, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyle = makeStyles({
  component: {
    // width: "30%",
  },
  header: {
    padding: "16px 24px",
    background: "#fff",
  },
  container: {
    "& > *": {
      marginTop: 20,
      fontSize: 14,
    },
  },
  greyColorText: {
    color: "#878787",
  },
  price: {
    float: "right",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #c0c0c0",
    padding: "20px 0",
    borderBottom: "1px dashed #c0c0c0",
  },
});

export default function TotalView({ cartItems }) {
  const classes = useStyle();

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography className={classes.greyColorText}>PRICE DETAILS</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>
          Price ({cartItems.length} item){" "}
          <span className={classes.price}>₹{price}</span>
        </Typography>
        <Typography>
          Discount <span className={classes.price}>-₹{discount}</span>
        </Typography>
        <Typography>
          Delivery Charge<span className={classes.price}>₹40</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          Total Amount
          <span className={classes.price}>₹{price - discount + 40}</span>
        </Typography>
        <Typography style={{ color: "green" }}>
          You will save ₹{discount - 40} on this Order{" "}
        </Typography>
      </Box>
    </Box>
  );
}
