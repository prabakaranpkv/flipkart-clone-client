import { InputBase, List, ListItem, makeStyles } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import { getProducts as listProducts } from "../../redux/actions/ProductActions";

const useStyle = makeStyles((theme) => ({
  search: {
    borderRadius: 2,
    marginLeft: 10,
    width: "38%",
    backgroundColor: "#fff",
    display: "flex",
  },
  searchIcon: {
    marginLeft: "auto",
    padding: 5,
    display: "flex",
    color: "blue",
  },
  inputRoot: {
    fontSize: "unset",
    width: "100%",
  },
  inputInput: {
    paddingLeft: 20,
    width: "100%",
  },
  list: {
    position: "absolute",
    color: "#000",
    background: "#FFFFFF",
    marginTop: 36,
  },
}));

export default function SearchBar() {
  const classes = useStyle();

  const [text, setText] = useState();
  const [open, setOpen] = useState(true);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more.."
        classes={{ root: classes.inputRoot, input: classes.inputInput }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => getText(e.target.value)}
      />
      <div className={classes.searchIcon}>
        <Search />
      </div>
      {text && (
        <List className={classes.list} hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(true)}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </List>
      )}
    </div>
  );
}
