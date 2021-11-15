import { Grid, makeStyles } from "@material-ui/core";
//components
import { ImageURL } from "../../constants/data";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
  },
  adv: {
    width: "100%",
    marginTop: 20,
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: 120,
    },
  },
}));

export default function MidSection() {
  const classes = useStyle();
  const coronaURL =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <>
      <Grid
        lg={12}
        sm={12}
        md={12}
        xs={12}
        container
        className={classes.wrapper}
      >
        {ImageURL.map((image) => (
          <Grid item lg={4} sm={12} md={4} xs={12}>
            <img src={image} alt="adimg" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>
      <img src={coronaURL} className={classes.adv} alt="coronoad" />
    </>
  );
}
