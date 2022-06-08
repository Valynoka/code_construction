import { Outlet, Route, Routes} from "react-router-dom";

import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
    const Layout = () => {
        return (
            <>
                <Navigation/>
                <main className={'main_content'}>
                    <Outlet/>
                </main>
            </>
        )
    }
  return (
      <>
          <Routes>
              <Route path={'/'} element = {<Layout/>}>
                  <Route path={'posts'} element = {<Posts/>}/>
                  <Route path={'comments'} element = {<Comments/>}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;
