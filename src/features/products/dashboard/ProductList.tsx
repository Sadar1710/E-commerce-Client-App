import { observer } from 'mobx-react-lite';
import React, {SyntheticEvent, useState} from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { useStore } from '../../../app/stores/store';

export default observer( function ProductList(){

  const {productStore} = useStore();
  const {deleteProduct,products,loading} = productStore;
  const[target,setTarget]=useState('');
function handleProductDelete(e:SyntheticEvent<HTMLButtonElement>, id:string){
             setTarget(e.currentTarget.name);
             deleteProduct(id);
         }

    return (
        <>
               {products.map(p=>(
                    <Card key={p.id}>
                    <Card.Header>E-Commerce</Card.Header>
                    <Card.Body>
                       <Card.Title>{p.title}</Card.Title>
                        <Card.Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, ea.
                        </Card.Text>
                        <Button onClick={()=>productStore.selectProduct(p.id)} style={{float:'right',marginRight:'5px'}} variant="primary">View</Button>
                        <Button name={p.id} onClick={(e)=>handleProductDelete(e,p.id)} style={{float:'right'}} variant="danger">
                            {loading && target === p.id &&
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />}
                               Delete
                        </Button>
                    </Card.Body>
                    </Card>
              ))}
         </>
    );
})
