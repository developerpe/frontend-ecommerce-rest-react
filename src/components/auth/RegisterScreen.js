import React from 'react';
import {
    Link
} from "react-router-dom";

export const RegisterScreen = () => {
    
    return (
        <div className="login-content">
            <div className="nk-block toggled" id="l-register">
                <div className="nk-form">
                    <div className="input-group">
                        <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-support"></i></span>
                        <div className="nk-int-st">
                            <input type="text" className="form-control" placeholder="Nombre de Usuario" name="username" />
                        </div>
                    </div>

                    <div className="input-group mg-t-15">
                        <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-mail"></i></span>
                        <div className="nk-int-st">
                            <input type="text" className="form-control" placeholder="Correo Electrónico" name="email" />
                        </div>
                    </div>

                    <div className="input-group mg-t-15">
                        <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-edit"></i></span>
                        <div className="nk-int-st">
                            <input type="password" className="form-control" placeholder="Contraseña" name="password" />
                        </div>
                    </div>

                    <a href="#l-login" data-ma-action="nk-login-switch" data-ma-block="#l-login" className="btn btn-login btn-success btn-float">
                        <i className="notika-icon notika-right-arrow"></i>
                    </a>
                </div>

                <div className="nk-navigation rg-ic-stl">
                    <Link to="/auth/login" data-ma-action="nk-login-switch" data-ma-block="#l-login">
                        <i className="notika-icon notika-right-arrow"></i> <span>Iniciar Sesión</span>
                    </Link>
                    <Link to="/auth/forgot-password" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password">
                        <i>?</i> <span>Olvidé Contraseña</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
