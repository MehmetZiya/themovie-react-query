
import { Route, Switch} from "react-router-dom";
import { Redirect } from "react-router";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import PopularFilms from "./pages/PopularFilms";
import NowPlaying from "./pages/NowPlaying";
import TopList from "./pages/TopList";
import NotFound from "./pages/NotFound";
import MovieDetails from "./pages/MovieDetails";
import ActorsDetails from "./pages/ActorsDetails";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
        <Route exact path="/">
            <Redirect to ="/home"/>
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route path="/popular" exact>
            <PopularFilms />
          </Route>
          <Route path="/now_playing" exact>
            <NowPlaying />
          </Route>
          <Route path="/top_rated" exact>
            <TopList />
          </Route>
          <Route path="/movies/:movieId" >
            <MovieDetails />
          </Route>
          <Route path="/actors/:actorId" >
            <ActorsDetails />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
