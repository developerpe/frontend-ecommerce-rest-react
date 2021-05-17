import React from 'react';
import {
    Link
} from "react-router-dom";

export const ForgotPasswordScreen = () => {
    return (
        <div className="login-content">
            <div className="nk-block toggled" id="l-forget-password">
                <div className="nk-form">
                    <p className="text-left">Para poder recuperar sus datos de acceso, por favor ingrese su Correo Electrónico.</p>

                    <div className="input-group">
                        <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-mail"></i></span>
                        <div className="nk-int-st">
                            <input type="text" className="form-control" placeholder="Correo Electrónico" name="email" />
                        </div>
                    </div>

                    <a href="#l-login" data-ma-action="nk-login-switch" data-ma-block="#l-login" className="btn btn-login btn-success btn-float">
                        <i className="notika-icon notika-right-arrow"></i>
                    </a>
                </div>

                <div className="nk-navigation nk-lg-ic rg-ic-stl">
                    <Link to="/auth/login" data-ma-action="nk-login-switch" data-ma-block="#l-login">
                        <i className="notika-icon notika-right-arrow"></i> <span>Iniciar Sesión</span>
                    </Link>
                    <Link to="/auth/register" data-ma-action="nk-login-switch" data-ma-block="#l-register">
                        <i className="notika-icon notika-plus-symbol"></i> <span>Registrar</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
