import { types } from "../types/types";

const initialState = {
    columns: [],
    rows: []
}


export const productsReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.eventLoaded:
            return {
                ...state,
                columns: [ ...action.payload.columns ],
                rows: [ ...action.payload.data ]
            }

        default:
            return state;
    }

}