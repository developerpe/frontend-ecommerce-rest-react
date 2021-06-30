import React from 'react';
import { ModalCegoryEdition } from '../products/ModalCegoryEdition';

export const Table = ( { title, optionalText, columns, rows } ) => {

    return (
        <>

            <ModalCegoryEdition />

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="normal-table-list">
                    <div className="basic-tb-hd">
                        <h2>{ title }</h2> 
                        <p>{ optionalText }</p>
                    </div>
                    <div className="bsc-tbl">
                    {       
                        rows &&                 
                        <table className="table table-sc-ex">
                                <thead>
                                    <tr>
                                        {
                                            columns.map((column) =>
                                                <th>{ column }</th>
                                            )
                                        }
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        rows.map((item) => (
                                            <tr key={ item.id }>
                                                <td>{ item.id }</td>
                                                <td>{ item.name }</td>
                                                <td>
                                                    <button 
                                                        className="btn btn-primary"
                                                        data-toggle="modal" 
                                                        data-target="#modalCategoryEdition"
                                                    >
                                                        EDITAR
                                                    </button>
                                                    <button 
                                                        className="btn btn-danger"
                                                    >
                                                        ELIMINAR
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}