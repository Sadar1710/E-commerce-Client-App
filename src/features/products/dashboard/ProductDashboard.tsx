import { observer } from 'mobx-react-lite';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useStore } from '../../../app/stores/store';
import ProductDetails from '../details/ProductDetails';
import ProductForm from '../form/ProductForm';
import ProductList from './ProductList';

export default observer( function ProductDashboard(){

    const {productStore}=useStore();
    const {selectedProduct,editMode}=productStore;
  
    return (
       <>
       <Row>
         <Col xs={12} md={8}>
         <ProductList />
         </Col>
         <Col xs={6} md={4}>
           {selectedProduct && !editMode && 
              <ProductDetails />
              }

             {editMode && <ProductForm/>}
            
         </Col>
        </Row>
       </>
    );
})