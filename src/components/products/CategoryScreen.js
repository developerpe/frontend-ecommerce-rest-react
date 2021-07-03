import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../../helpers/loadCategories';
import { types } from '../../types/types';
import { Breadcomb } from '../ui/products/BreadcombCategory';
import { ModalCategoryEdition } from '../ui/products/ModalCategoryEdition';
import { Table } from '../ui/utils/CategoryProductTable';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';
import { activateCategoryProduct } from '../../actions/category_product';

export const CategoryScreen = () => {   
    
    const dispatch = useDispatch();

    const [modalInfo, setModalInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    var style = {};
    style.display = 'none';

    useEffect(() => {
        async function loadedCategories(){
            const categories = await loadCategories(); 
            dispatch( eventLoaded( categories ) ); 
        }       
        loadedCategories();
    }, [dispatch])
    
    const { rows } = useSelector(state => state.products );
    
    const columns = [
        { dataField: "id", text: "ID" },
        { dataField: "description", text: "Descripcion" }
    ]

    const rowEvents = {
        onClick: ( e, row ) => {
            setModalInfo(row);
            toggleTrueFalse();
            dispatch(
                activateCategoryProduct(row)
            )            
            document.getElementById("buttonHide").click();            
        }
    }

    const toggleTrueFalse = () => {
        setShowModal(handleShow);
    }

    const ModalContent = () => {
        return(
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return (
        <>
            <button 
                id="buttonHide"
                data-toggle="modal" 
                data-target="#modalCategoryEdition" 
                type="button" 
                className="btn btn-primary"
                style={ style }
            >
                Agregar Categoria
            </button>   
            
            <Breadcomb />
            <BootstrapTable 
                keyField="id"
                data={ rows }
                columns={ columns }
                pagination={ paginationFactory() }
                rowEvents={ rowEvents }
            />

            <ModalCategoryEdition />
        </>
    )

}

export const eventLoaded = ( categories ) => ({
    type: types.eventLoaded,
    payload: categories
});