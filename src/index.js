import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import rootReducer from './store/reducer'
import Header from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
import Main from "./components/layout/main";
import Add from "./components/pages/add";
import Result from "./components/pages/result";
import "./index.css";

const store = createStore(rootReducer)

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <div class="container">
                    <Sidebar />
                    <Main>
                        <Switch>
                            <Route path="/result">
                                <Result />
                            </Route>
                            <Route path="/">
                                <Add />
                            </Route>
                        </Switch>
                    </Main>
                </div>
            </Router>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));