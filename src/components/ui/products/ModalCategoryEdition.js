import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../../hooks/useForm';

export const ModalCategoryEdition = ({ id, name }) => {
    
    const dispatch = useDispatch();
    
    const [ formValues, handleInputChange ] = useForm({
        description: ''
    });    

    const { description } = formValues;

    const handleCreate = (e) =>{
        e.preventDefault();
        dispatch(  );
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
                                    <h2>Edicion de Categoria { name }</h2>
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
