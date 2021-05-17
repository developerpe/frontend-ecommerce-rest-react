import React from 'react';
import {
    Link
} from "react-router-dom";

export const NoFoundScreen = () => {
    return (
        <>
            <div className="error-page-area">
                <div className="error-page-wrap">
                    <i className="notika-icon notika-close"></i>
                    <h2>ERROR <span className="counter">404</span></h2>
                    <p>Sorry, but the page you are looking for has note been found. Try checking the URL for an error, then hit the refresh button on your browser or try found something else in our app.</p>
                    <Link to="/dashboard" className="btn">Dashboard.</Link>
                    <Link to="" className="btn error-btn-mg">Reportar un Problema.</Link>
                </div>
            </div>
        </>
    )
}
