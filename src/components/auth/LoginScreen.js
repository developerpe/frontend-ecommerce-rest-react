import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        username: '',
        password: ''
    });    

    const { username, password } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch( startLogin( username , password ) );
    }

    return (
        <>   
            <div className="login-content">
                <div className="nk-block toggled" id="l-login">
                    <form onSubmit={ handleLogin }>
                        <div className="nk-form">
                            <div className="input-group">
                                <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-support"></i></span>
                                <div className="nk-int-st">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Nombre de Usuario" 
                                        name="username" 
                                        value={ username }
                                        onChange={ handleInputChange }
                                    />
                                </div>
                            </div>
                            <div className="input-group mg-t-15">
                                <span className="input-group-addon nk-ic-st-pro"><i className="notika-icon notika-edit"></i></span>
                                <div className="nk-int-st">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Contraseña"
                                        name="password"
                                        value={ password } 
                                        onChange={ handleInputChange }
                                    />
                                </div>
                            </div>
                            <button type="submit" data-ma-action="nk-login-switch" data-ma-block="#l-register" className="btn btn-login btn-success btn-float">
                                <i className="notika-icon notika-right-arrow right-arrow-ant"></i>
                            </button>
                        </div>
                    </form>

                    <div className="nk-navigation nk-lg-ic">
                        <Link to="/auth/register" data-ma-action="nk-login-switch" data-ma-block="#l-register">
                            <i className="notika-icon notika-plus-symbol"></i> <span>Registrar</span>
                        </Link>
                        <Link to="/auth/forgot-password" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password">
                            <i>?</i> <span>Olvidé Contraseña</span>
                        </Link>
                    </div>
                </div> 
            </div>
        </>
    )
}
