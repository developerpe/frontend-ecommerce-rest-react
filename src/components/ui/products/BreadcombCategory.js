import React from 'react'
import { ModalCategory } from './ModalCategory'

export const Breadcomb = () => {

    const customStyle = {
        'background-color': '#337ab7 !important'
    }

    return (
        <>
            <div className="breadcomb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="breadcomb-list">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="breadcomb-wp">
                                            <div className="breadcomb-report">
                                                <h2>Acciones para Categorias</h2>                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="breadcomb-report" style = {{ background: '#337ab7 !important' }}>
                                            <button data-toggle="modal" data-target="#myModalone" type = "button" className="btn btn-primary">Agregar Categoria</button>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <ModalCategory />
        </>
    )
}
