import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-mngt',
  templateUrl: './product-mngt.component.html',
  styleUrl: './product-mngt.component.css'
})
export class ProductMngtComponent {
  isFetching=false;
  allProducts:product[]=[];
  constructor(private http:HttpClient, private productService:ProductsService){
  }
  ngOnInit(){
    this.fetchProducts()
  }
  
  onFetchProducts(){
    this.fetchProducts()
  }
  onProductCreate(products:{pname:string,desc:string,price:string}){
      this.productService.createProduct(products)
  }

  fetchProducts(){
    this.isFetching=true;
    this.productService.FetchProduct()
    .subscribe((product)=>{
      this.allProducts=product;
      this.isFetching=false;
    })
  }

  onDeleteProduct(id:string){
    this.productService.deleteProduct(id)
  }

  onDeleteAllProduct(){
   this.productService.deleteAllProduct()
  }
}

