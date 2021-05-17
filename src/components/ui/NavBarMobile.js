import React from 'react'

export const NavBarMobile = () => {
    return (
        <>
            <div className="mobile-menu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="mobile-menu">
                                <nav id="dropdown">
                                    <ul className="mobile-menu-nav">
                                        <li><a data-toggle="collapse" data-target="#Charts" href="#">Inicio</a>
                                            <ul className="collapse dropdown-header-top">
                                                <li><a href="index.html">Dashboard</a></li>
                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#Charts" href="#">Perfil de Usuario</a>
                                            <ul className="collapse dropdown-header-top">
                                                <li><a href="index.html">Perfil</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
