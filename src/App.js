import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Service from "./components/Service/Service";
import Footer from "./components/Footer/Footer";
import AllPackage from "./components/AllPackage/AllPackage";


function App() {
  return (
    <div>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/allPackage">
              <AllPackage></AllPackage>
            </Route>
            <PrivateRoute exact path="/service/:id">
              <Service></Service>
            </PrivateRoute>
            <Route path="/service/:id"></Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
