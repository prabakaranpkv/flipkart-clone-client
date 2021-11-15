import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { LocalOffer as Badge } from "@material-ui/icons";
import clsx from "clsx";

//components
import { getProductDetails } from "../../redux/actions/ProductActions";
import Actionitems from "./Actionitems";

const useStyle = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    // margin: "0 80px",
    background: "#fff",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  rightContainer: {
    marginTop: 50,
    "& > * ": {
      marginTop: 10,
    },
  },
  smallText: {
    fontSize: 14,
    verticalAlign: "baseline",
    "& > *": {
      fontSize: 14,
      marginTop: 10,
    },
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: 28,
  },
  badge: {
    fontSize: 14,
    marginRight: 10,
    color: "#00CC00",
  },
}));

const DetailView = () => {
  const classes = useStyle();
  const assured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const sellerURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const { product } = useSelector((state) => state.getProductDetails);
  const { id } = useParams();

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Grid container className={classes.container}>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Actionitems product={product} />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={8}
            xs={12}
            className={classes.rightContainer}
          >
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.smallText, classes.greyTextColor)}
            >
              8 Ratings & 1 Review
              <span>
                <img
                  src={assured}
                  style={{ width: 77, marginLeft: 20 }}
                  alt="assured"
                />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>₹{product.price.mrp}</strike>
              </span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <Typography style={{ marginTop: 20, fontWeight: 600 }}>
              Available Offers
            </Typography>
            <Box className={classes.smallText}>
              <Typography>
                <Badge className={classes.badge} />
                Special PriceGet extra 30% off (price inclusive of discount)
              </Typography>
              <Typography>
                <Badge className={classes.badge} />
                Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit
                Card{" "}
              </Typography>
              <Typography>
                <Badge className={classes.badge} />
                Bank OfferFlat ₹100 off on first Flipkart Pay Later of ₹500 and
                above
              </Typography>
              <Typography>
                <Badge className={classes.badge} />
                Combo OfferBuy 2 items save 5%; Buy 3 or more save 10%See all
                products
              </Typography>
            </Box>
            <Table>
              <TableBody>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Delivery
                  </TableCell>
                  <TableCell style={{ fontWeight: 600 }}>
                    {date.toDateString()} | ₹40
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Warranty
                  </TableCell>
                  <TableCell>No Warranty</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Seller
                  </TableCell>
                  <TableCell className={classes.smallText}>
                    <span style={{ color: "#2874f0" }}>PkComNet</span>
                    <Typography>GST invoice Available</Typography>
                    <Typography>14 Days Return Policy</Typography>
                    <Typography>
                      View more sellers starting from ₹300{" "}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <img src={sellerURL} style={{ width: 390 }} alt="offer" />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Description
                  </TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DetailView;
