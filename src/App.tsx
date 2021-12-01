import { Suspense, useEffect } from "react";

import { shallowEqual } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import { useAppSelector } from "./redux/hook";
import routes from "./routes";

function App() {
  const { progress, connectWalletState, createPopupState, menuPopupState } =
    useAppSelector(
      ({ createData }) => ({
        progress: createData.progress,
        connectWalletState: createData.connectWalletState,
        menuPopupState: createData.menuPopupState,
        createPopupState: createData.createPopupState,
      }),
      shallowEqual
    );
  useEffect(() => {
    progress !== 0 || connectWalletState || createPopupState || menuPopupState
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [progress, connectWalletState, createPopupState, menuPopupState]);
  return (
    <div className="App">
      <Layout>
        <Suspense fallback={"loading..."}>
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
                exact={true}
              />
            ))}

            <Route path="/" exact component={Home} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
