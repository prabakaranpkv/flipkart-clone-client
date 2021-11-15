import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//component
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Templateprovider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/product/DetailView";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Templateprovider>
      <ContextProvider>
        <Router>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/product/:id" element={<DetailView />} />
            </Routes>
          </Box>
        </Router>
      </ContextProvider>
    </Templateprovider>
  );
}

export default App;
