import "./index.css";
import { Route, Switch } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import FavouritesPage from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";
import Layout from "./components/layout/Layout";

function App() {
  return (
    // path="/" means this is the default or home page.

    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetUps />
        </Route>
        <Route path="/favorites">
          <FavouritesPage />
        </Route>
        <Route path="/newmeetups">
          <NewMeetUp />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
