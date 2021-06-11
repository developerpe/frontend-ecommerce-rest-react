import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Header } from './Header';
import { NavBar } from './NavBar';
import { NavBarMobile } from './NavBarMobile';
import { Footer } from './Footer';
import { CategoryScreen } from '../products/CategoryScreen';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { useSelector } from 'react-redux';

export const DasboardScreen = () => {

    const { token } = useSelector(state => state.auth);

    return (
        <>
            
            <Header />
            <NavBar />
            <NavBarMobile />
            
            <div className="notika-status-area">
                <div className="container">
                    <div className="row">
                        <div>
                            <Switch>
                                <Route exact path="/products"></Route>
                                <PrivateRoute 
                                    exact 
                                    path="/products/category-products" 
                                    component = { CategoryScreen } 
                                    isAuthenticated = { !!token }
                                />      
                                
                            </Switch>
                        </div>
                    </div>
                </div>
            </div> 
            
            <Footer />
        </>
    )
}
