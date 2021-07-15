import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activateCategoryProduct, deleteCategory } from '../../../actions/category_product';
import { useForm } from '../../../hooks/useForm';

export const ModalDeleteCategoryProduct = () => {
    const dispatch = useDispatch();
    const { category_product } = useSelector(state => state.products);    
    const [ formValues, handleInputChange, reset ] = useForm( category_product );       

    const id_category_product = useRef( category_product.id );

    useEffect(() => {

        if ( category_product.id !== id_category_product.current ) {
            
            reset( category_product );
            id_category_product.current = category_product.id;
        
        }

    }, [category_product, reset])

    const handleDelete = (e) =>{
        e.preventDefault();  
        dispatch( deleteCategory( id_category_product ) );
    }

    return (
        <>
            <form onSubmit={ handleDelete }>
                <div className="modals-default-cl">
                    <div className="modal fade" id="modalDeleteCategory" role="dialog">
                        <div className="modal-dialog modals-default">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="">
                                    <h2>¿Desea eliminar la Categoria { category_product.description }?</h2>
                                </div>
                                <div className="modal-footer">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                    >
                                        CONFIRMAR ELIMINACION
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger" 
                                        data-dismiss="modal"
                                    >
                                        CANCELAR
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
