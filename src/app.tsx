import * as React from "react";

import { HashRouter, Switch, Route, Link } from "react-router-dom";
import { PageA } from "./pages/pageA";
import { PageB } from "./pages/pageB";
import {LoginPage} from './pages/loginPage'
import {Header} from './Header'
import {DrawserIcon} from './model/imagesPath'

const classNames = require("./model/styles.css");

export const App = () => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <>
    <Header state={isVisible}/>
      <div className={classNames.headers}>
        <img alt='logo' style={{ width: 25 }} src={String(DrawserIcon)} onClick={() => setVisible(!isVisible)} />
        <div  className={classNames.headersTxt}>
       <h2>Showwcase</h2>
      </div>
      </div>
      
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LoginPage} />
          <Route path="/pageB" component={PageB} />
        </Switch>
      </HashRouter>
    </>
  );
};
