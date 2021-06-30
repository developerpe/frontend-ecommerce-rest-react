import React from 'react';
import { useDispatch } from 'react-redux';
import { activateCategoryProduct } from '../../../actions/category_product';
import { ModalCategoryEdition } from '../products/ModalCategoryEdition';




export const Table = ( { id, title, optionalText, columns, rows } ) => {

    const dispatch = useDispatch();

    const getCategoryProduct = (e, id) => {
        console.log(id);
    }

    return (
        <>

            <ModalCategoryEdition />

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
                                                        onClick={ getCategoryProduct(item) }
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