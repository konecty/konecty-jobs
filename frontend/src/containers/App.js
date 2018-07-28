import React, {Component} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Contact from '../views/Contact';
import Home from '../views/Home';
import NotFound from '../views/404';

export default class App extends Component
{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" name="Home" component={Home}/>
                    <Route path="/contact" name="About Us" component={Contact}/>
                    <Route path="*" component={NotFound}/>
                </Switch>
            </HashRouter>
        );
    }
}