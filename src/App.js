import "./App.css";
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
// import  HomeTemplate  from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
// import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import Checkout from "./pages/Checkout/Checkout";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import Showtime from "./pages/Showtime/Showtime";
// import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Films from "./pages/Films/Films";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Addnew from "./pages/Films/AddNew/AddNew";
import Edit from "./pages/Films/Edit/Edit";

const CheckoutTemplate = lazy(() =>
  import("./templates/CheckoutTemplate/CheckoutTemplate")
);
const HomeTemplateLazy = lazy(() =>
  import("./templates/HomeTemplate/HomeTemplate")
);
const LoginLazy = lazy(() => import("./pages/Login/Login"));
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Suspense fallback={<Loading />}>
          <HomeTemplateLazy path="/" exact Component={Home} />
          <HomeTemplateLazy path="/home" exact Component={Home} />
          <HomeTemplateLazy path="/contact" exact Component={Contact} />
          <HomeTemplateLazy path="/news" exact Component={News} />
          <HomeTemplateLazy path="/detail/:id" exact Component={Detail} />
          <HomeTemplateLazy path="/profile" exact Component={Profile} />
          <Route path="/register" component={Register} />
          <UserTemplate path="/login" exact Component={LoginLazy} />
          <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />
          {/* <Route path="/login" component={LoginLazy} /> */}

          <AdminTemplate path="/admin" exact Component={Dashboard} />
          <AdminTemplate path="/admin/films" exact Component={Films} />
          <AdminTemplate path="/admin/films/addnew" exact Component={Addnew} />
          <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
          <AdminTemplate path="/admin/users" exact Component={Dashboard} />
          <AdminTemplate path="/admin/showtimes" exact Component={Showtime} />
          {/* <AdminTemplate path="/admin/showtimes" exact Component={ShowTime} /> */}
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
