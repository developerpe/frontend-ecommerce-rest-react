import { types } from "../types/types";

const initialState = {
    columns: [],
    rows: [],
    category_product: {

    }
}


export const productsReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.eventLoaded:
            return {
                ...state,
                rows: [ ...action.payload.data ]
            }
        
            case types.activateCategoryProduct:
                console.log(action);
                return {
                    ...state,
                    category_product: action.payload
                }

        default:
            return state;
    }

}