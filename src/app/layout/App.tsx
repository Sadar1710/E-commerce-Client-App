import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import ProductDashboard from '../../features/products/dashboard/ProductDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {

const {productStore}=useStore();

useEffect(()=>{
  productStore.loadProduct();
},[productStore])
    
if(productStore.loadingInitial) return <LoadingComponent content={'Loading'} />

  return (
    <>
     <NavBar />
      <Container style={{marginTop:'2em'}}> 
        <ProductDashboard />
      </Container>
    </>
  );
}

export default observer( App );
