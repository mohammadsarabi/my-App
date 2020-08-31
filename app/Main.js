import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from "react-router-dom";
//components
import Footer from './component/Footer';
import Header from './component/Header';
import HomeGuet from './component/homeGuet';
import About from './component/About';
import Terms from './component/Terms';

function ExampleComponent() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact >
                    <HomeGuet />
                </Route>
                <Route path='/about-us'>
                    <About />
                </Route>
                <Route path='/terms'>
                    <Terms />
                </Route >
            </Switch >

            <Footer />
        </BrowserRouter >
    )
}
ReactDOM.render(<ExampleComponent />, document.querySelector("#app"))
//this is new
if (module.hot) {
    module.hot.accept()
}