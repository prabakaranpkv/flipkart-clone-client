import { Box, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyle = makeStyles({
  component: {
    width: "30%",
  },
  header: {
    textAlign: "center",
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

export default function TotalView() {
  const classes = useStyle();

  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography className={classes.greyColorText}>PRICE DETAILS</Typography>
      </Box>
      <Box className={classes.container}>
        <Typography>
          Price ( item) <span className={classes.price}>₹</span>
        </Typography>
        <Typography>
          Discount <span className={classes.price}>-₹</span>
        </Typography>
        <Typography>
          Delivery Charge<span className={classes.price}>₹40</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          Total Amount
          <span className={classes.price}>₹</span>
        </Typography>
        <Typography style={{ color: "green" }}>
          You will save ₹ on this Order{" "}
        </Typography>
      </Box>
    </Box>
  );
}
