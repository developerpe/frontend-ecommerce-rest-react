import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Header } from './Header';
import { NavBar } from './NavBar';
import { NavBarMobile } from './NavBarMobile';
import { Body } from './Body';
import { Footer } from './Footer';

export const DasboardScreen = () => {
    return (
        <>
            
            <Header />
            <NavBar />
            <NavBarMobile />
            <Body />
            <Footer />

            <div>
                <Switch>
                    <Route exact path="/products"></Route>
                    <Route exact path="/products/category-products" />      
                      
                </Switch>
            </div>

        </>
    )
}
