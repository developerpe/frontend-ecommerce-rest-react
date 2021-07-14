import React from 'react'
import { eventLoaded } from '../components/products/CategoryScreen';
import { fetchWithToken } from '../helpers/fetch';
import { loadCategories } from '../helpers/loadCategories';
import { types } from '../types/types';

export const registerCategory = ( { description } ) => {
    
    return async(dispatch) =>{
        
        const response = await fetchWithToken( 
                                    'products/category-products/',
                                    { description }, 
                                    'POST' );
        const body = await response.json();
        

        if ( response.status === 201 ){

            console.log(body);

        }else{
            console.log(body);
        }

    }
}

export const updateCategory = ( formValues ) => {
    
    return async(dispatch) =>{

        const response = await fetchWithToken( 
                                    `products/category-products/${ formValues.id }/`,
                                    {'description': formValues.description}, 
                                    'PUT' );
        
        const body = await response.json();
        

        if ( response.status === 200 ){
            const categories = await loadCategories(); 
            dispatch( eventLoaded( categories ) ); 
            document.getElementById("buttonHide").click();  
        }else{
            console.log(body);
        }

    }
}

export const activateCategoryProduct = ( category ) => ({
    type: types.activateCategoryProduct,
    payload: category
});