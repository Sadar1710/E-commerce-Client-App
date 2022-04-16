import { action, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import {v4 as uuid} from 'uuid';
import agent from './../api/agent';
import { Product } from './../models/product';

export default class ProductStore{

  products:Product[]=[];
  selectedProduct:Product | undefined=undefined;
  editMode=false;
  loading=false;
  loadingInitial=true;

   constructor(){
       makeAutoObservable(this)
   }

   loadProduct = async ()=>{
       try {
            this.products = await agent.Products.list();
            this.setLoadingInitial(false);
       } catch (error) {
           console.log(error);
            this.setLoadingInitial(false);
       }
   }

   setLoadingInitial=(state:boolean)=>{
       this.loadingInitial=state;
   }
   
  selectProduct = (id:string) => {
      this.selectedProduct = this.products.find(a=>a.id === id);
  }

  cancelSelectedProduct = () => {
      this.selectedProduct = undefined;
  }

  openForm = (id?:string) => {
      id ? this.selectProduct(id) : this.cancelSelectedProduct();
      this.editMode = true;
  }

  closeForm=()=>{
      this.editMode = false;
  }

  createProduct = async (product:Product)=>{
    this.loading=true;
    product.id = uuid();
    try {
        await agent.Products.create(product);
        runInAction(()=>{
            this.products.push(product);
            this.selectedProduct = product;
            this.editMode=false;
            this.loading=false;
        })
    } catch (error) {
        console.log(error);
        runInAction(()=>{
            this.loading=false;
        })
    }
  } 

  updateProduct = async (product : Product)=>{
      this.loading = true;
      try {
          await agent.Products.update(product);
          runInAction(()=>{
             this.products = [...this.products.filter(a=>a.id !== product.id), product]
             this.selectedProduct=product;
             this.editMode=false;
             this.loading=false;
            })
      } catch (error) {
        console.log(error);
        runInAction(()=>{
            this.loading = false;
        })
      }
  }

  deleteProduct =async (id:string)=>{
       this.loading = true;
       try {
        await agent.Products.delete(id);
        runInAction(()=>{
            this.products = [...this.products.filter(a=>a.id !==id)];
            if(this.selectedProduct!.id === id) this.cancelSelectedProduct();
            this.loading=false;
        })
       } catch (error) {
        console.log(error);
        runInAction(()=>{
            this.loading=false;
        })
       }
  }

}