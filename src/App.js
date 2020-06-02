import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { AuthContext } from "./shared/context/auth-context";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Home from "./home/pages/Home";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Courses/Courses";
import Blog from "./posts/pages/Blog";
import Post from "./post/pages/Post";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import AddPost from "./components/Admin/pages/AddPost";
import Admin from "./components/Admin/pages/Admin";
import UpdatePost from "./components/Admin/pages/UpdatePost";
import Login from "./components/Admin/pages/Login";
import AddSlider from "./components/Admin/pages/AddSlider";
import CategoryList from "./components/Admin/pages/CategoryList";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (!isLoggedIn) {
    routes=(
      <Switch>
        <Route path='/admin/login' exact>
          <Login />
        </Route>
        <Route path='/post/new' exact>
          <AddPost />
        </Route>
        <Route path='/post/:pid' exact>
          <UpdatePost />
        </Route>
        <Route path='/admin' exact>
          <Admin />
        </Route>
        <Route path='/admin/categories' exact>
          <CategoryList/>
        </Route>
        <Route path='/slider/new' exact>
          <AddSlider/>
        </Route>
      </Switch>
    )
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
        <div>
          <MainNavigation />
          <main>
            <Switch>
              <Route path='/blog' exact>
                <Blog />
              </Route>
              <Route path='/blog/:postId' exact>
                <Post />
              </Route>
              <Route path='/courses' exact>
                <Courses />
              </Route>
              <Route path='/about' exact>
                <About />
              </Route>
              <Route path='/contact' exact>
                <Contact />
              </Route>
              <Route path='/admin/login' exact>
                <Login />
              </Route>
              {routes}
              <Redirect to='/' />
            </Switch>
          </main>
        </div>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
