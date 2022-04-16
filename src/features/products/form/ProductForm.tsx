import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Form, Button, ButtonGroup, Spinner } from 'react-bootstrap';
import { useStore } from '../../../app/stores/store';

export default observer( function ProductForm(){
  
  const {productStore}=useStore();
  const {selectedProduct,closeForm,createProduct,updateProduct,loading} = productStore;

   let initialState=null;
   if(selectedProduct)
   {
     initialState=selectedProduct;
   }
   else
   {
     initialState={
       id:'',
       title:''
     }
   }
   const[product,setProduct]=useState(initialState);

    const handleSubmit=(e:any)=>{
      e.preventDefault();
      product.id ? updateProduct(product) : createProduct(product);
   }

   function handleInputChange(event:ChangeEvent<HTMLInputElement>){
      const {name,value}=event.target;
      setProduct({...product,[name]:value})
   }

    return (
        <div>
            <Form onSubmit={handleSubmit} autoComplete='off'>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" value={product.title} name='title' 
                placeholder="Enter Product Name" onChange={handleInputChange} />
              </Form.Group>
              <ButtonGroup aria-label="Basic example">
                    <Button type='submit' variant="success" size="lg">
                   {loading &&
                    <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />}
                      <span className="visually">Add</span>
                      </Button>
                    <Button size="lg" onClick={closeForm} variant="secondary">Cancel</Button>
                 </ButtonGroup>
            </Form>
        </div>
    )
})
