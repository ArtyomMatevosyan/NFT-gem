import { Suspense, useEffect } from "react";

import AnimatedCursor from "react-animated-cursor";
import { useMoralis } from "react-moralis";
import { shallowEqual } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Loader from "./components/loader/Loader";
import NotFound from "./components/notFound/NotFound";
import { useAppSelector } from "./redux/hook";
import routes from "./routes";

function App() {
  const { progress, connectWalletState, createPopupState, menuPopupState } =
    useAppSelector(
      ({ createData }) => ({
        progress: createData.data.progress,
        connectWalletState: createData.data.connectWalletState,
        menuPopupState: createData.data.menuPopupState,
        createPopupState: createData.data.createPopupState,
      }),
      shallowEqual
    );
  useEffect(() => {
    progress !== 0 || connectWalletState || createPopupState || menuPopupState
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [progress, connectWalletState, createPopupState, menuPopupState]);
  const { user } = useMoralis();
  console.log("moralis", user);

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<Loader />}>
          <AnimatedCursor
            innerSize={10}
            outerSize={20}
            color="255,255,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={1.5}
          />
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
                exact={true}
              />
            ))}
            <Route path="/" exact={true} component={Home} />
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
