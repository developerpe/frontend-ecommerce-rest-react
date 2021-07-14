import React from 'react'

import { notification } from "../helpers/alert";
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

            notification("Felicidades",body.message,'success');

        }else{

            notification("ERROR",body.error.description,'error');
        
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
            
            dispatch( eventLoaded( await loadCategories() ) ); 
            document.getElementById("buttonHide").click();  
            notification("Felicidades",body.message,'success');
        
        }else{
            
            notification("ERROR",body.error.description,'error');
        
        }

    }
}

export const activateCategoryProduct = ( category ) => ({
    type: types.activateCategoryProduct,
    payload: category
});