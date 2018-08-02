import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './Main';
import Contact from './Contact';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/contact" component={Contact}/>
                        <Route path="" component={Main}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
