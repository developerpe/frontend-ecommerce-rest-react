import React from 'react'
import { Provider } from "react-redux";
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store';
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

export const EcommerceApp = () => {
    return (
        <Provider store={ store } >
            <AppRouter />
        </Provider>
        
    )
}
