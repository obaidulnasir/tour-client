import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Service from "./components/Service/Service";


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
            <Route path="about">
              <About></About>
            </Route>
            <PrivateRoute path="/blog">
              <Blog></Blog>
            </PrivateRoute>
            <PrivateRoute exact path="/service/:id">
              <Service></Service>
            </PrivateRoute>
            <Route path="/service/:id"></Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
