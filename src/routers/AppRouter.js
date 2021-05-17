import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { NoFoundScreen } from "../components/ui/NoFoundScreen";
import { DasboardScreen } from "../components/ui/DasboardScreen";
import { ForgotPasswordScreen } from "../components/auth/ForgotPasswordScreen";
import { startChecking } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";


export const AppRouter = () => {

  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    
    dispatch( startChecking() );
  
  }, [dispatch])

  return (
    <Router>
        <div>        
            <Switch>
                <PublicRoute 
                    exact 
                    path="/auth/login" 
                    component = { LoginScreen } 
                    isAuthenticated = { !!token }
                />
                <Route exact path="/auth/register" component = { RegisterScreen } />
                <Route exact path="/auth/forgot-password" component = { ForgotPasswordScreen } />
                <Route exact path="/no-found" component = { NoFoundScreen } />
                <PrivateRoute 
                    exact 
                    path="/dashboard" 
                    component = { DasboardScreen } 
                    isAuthenticated = { !!token }
                />  
                <Redirect to="/no-found" />
            </Switch>
        </div>
    </Router>
  );
}
