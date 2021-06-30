import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../helpers/loadCategories';
import { types } from '../../types/types';
import { Breadcomb } from '../ui/products/BreadcombCategory';
import { Table } from '../ui/utils/CategoryProductTable';

export const CategoryScreen = () => {   
    
    const dispatch = useDispatch();
  
    useEffect(() => {
        async function loadedCategories(){
            const categories = await loadCategories(); 
            dispatch( eventLoaded( categories ) ); 
        }       
        loadedCategories();
    }, [dispatch])
    
    const { rows } = useSelector(state => state.products );
    const { columns } = useSelector(state => state.products );

    return (
        <>
            <Breadcomb />
            <Table 
                title = 'Listado de Categorías'
                optionalText = ' '
                columns = { columns }
                rows = { rows }
            />
        </>
    )

}

export const eventLoaded = ( categories ) => ({
    type: types.eventLoaded,
    payload: categories
});