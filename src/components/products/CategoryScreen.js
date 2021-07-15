import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../helpers/loadCategories';
import { types } from '../../types/types';
import { Breadcomb } from '../ui/products/BreadcombCategory';
import { ModalCategoryEdition } from '../ui/products/ModalCategoryEdition';
import { Table } from '../ui/utils/CategoryProductTable';


export const CategoryScreen = () => {   
    
    var style = {};
    style.display = 'none';

    const dispatch = useDispatch();

    useEffect(() => {
        async function loadedCategories(){
            const categories = await loadCategories(); 
            dispatch( eventLoaded( categories ) ); 
        }       
        loadedCategories();
    }, [dispatch])
    
    const { rows } = useSelector(state => state.products );
    
    const columns = ['ID', 'Description']

    return (
        <>            
            <Breadcomb />

            <button 
                id="buttonUpdate"
                data-toggle="modal" 
                data-target="#modalCategoryEdition" 
                type="button" 
                className="btn btn-primary"
                style={ style }
            >
                
            </button>  

            <button 
                id="buttonDelete"
                data-toggle="modal" 
                data-target="#modalDeleteCategory" 
                type="button" 
                className="btn btn-primary"
                style={ style }
            >
                
            </button>  

            <Table 
                title="Listado de Categorias de Productos"
                optionalText=""
                columns={ columns } 
                rows={ rows } 
            />

            <ModalCategoryEdition />
        </>
    )

}

export const eventLoaded = ( categories ) => ({
    type: types.eventLoaded,
    payload: categories
});