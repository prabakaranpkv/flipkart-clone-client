import axios from "axios";

const url = "https://flipkartclone-server.onrender.com";
//const url = "https://flipkartclone-server.herokuapp.com";

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("error in calling signup api", error);
  }
};

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("error in calling login api", error);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`${url}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error in calling paytm api", error);
  }
};
