import React from 'react'
import { fetchWithToken } from '../helpers/fetch';

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
