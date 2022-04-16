import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';


export default function ProductDetails()  {
   
   const {productStore}=useStore();
   const {selectedProduct,openForm,cancelSelectedProduct} = productStore;

//   if(!product) <LoadingComponent></LoadingComponent>;

    return (
        <>
            <Card>
            <Card.Img variant="top" src={`/assets/images/fruits.jpg`} />
            <Card.Body>
                <Card.Title>{selectedProduct!.title}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, deserunt!
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button onClick={()=>openForm(selectedProduct!.id)} variant="primary">Edit</Button>
                    <Button onClick={cancelSelectedProduct} variant="secondary">Cancel</Button>
                 </ButtonGroup>
            </Card.Body>
            </Card>
        </>
    );
}
