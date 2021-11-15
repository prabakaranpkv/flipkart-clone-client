import axios from "axios";
import * as actionTypes from "../constants/CartConstant";

const url = "https://flipkartclone-server.herokuapp.com";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/product/${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (error) {
    console.log("Error in calling add to cart api");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
