import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activateCategoryProduct } from '../../../actions/category_product';
import { useForm } from '../../../hooks/useForm';

export const ModalCategoryEdition = () => {
    
    const dispatch = useDispatch();
    const { category_product } = useSelector(state => state.products);    
    const [ formValues, handleInputChange, reset ] = useForm( category_product );       

    const id_category_product = useRef( category_product.id );
    const { description } = formValues;

    useEffect(() => {

        if ( category_product.id !== id_category_product.current ) {
            
            reset( category_product );
            id_category_product.current = category_product.id;
        
        }

    }, [category_product, reset])

    useEffect(() => {

        dispatch( activateCategoryProduct( formValues ) );

    }, [formValues, dispatch])

    const handleCreate = (e) =>{
        e.preventDefault();        
    }

    return (
        <>
            <form onSubmit={ handleCreate }>
                <div className="modals-default-cl">
                    <div className="modal fade" id="modalCategoryEdition" role="dialog">
                        <div className="modal-dialog modals-default">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <h2>Edicion de Categoria { category_product.description }</h2>
                                    <p>Ingrese la nueva informacion de la Categoria de Productos.</p>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12">
                                                <label className="hrzn-fm">Nombre de la Categoria</label>
                                            </div>
                                            <div className="col-lg-8 col-md-7 col-sm-7 col-xs-12">
                                                <div className="nk-int-st">
                                                    <input 
                                                        type="text" 
                                                        name = "description" 
                                                        className="form-control input-sm" 
                                                        placeholder="Ingrese el nombre de la Categoria"
                                                        onChange={ handleInputChange }
                                                        value = { description }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                    >
                                        Guardar
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        data-dismiss="modal"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
