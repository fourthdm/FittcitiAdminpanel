import { Component, OnInit, mergeApplicationConfig } from '@angular/core';

import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {


  Products: any[] = [];
  images: any[] = [];
  pp: any[] = [];
  // AddProductForm: FormGroup;
  // EditProductForm: FormGroup;
  // addproduct: FormGroup;
  Allproducts: any[] = [];
  AllCategory: any[] = [];
  prod: any[] = [];

  Editp: FormGroup;
  product_id: any;

  selectedproduct: any = null;


  productList: any[] = [];

  imagess: any[] = [];

  pro: any;
  constructor(private _rest: RestService, private _activeroute: ActivatedRoute) {
    this.Editp = new FormGroup({
      id: new FormControl(),
      Product_Name: new FormControl('', [Validators.required]),
      Weight: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.required]),
      Brand_id: new FormControl('', [Validators.required]),
      Category_id: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      benefits: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct() {
    const id = this._activeroute.snapshot.paramMap.get('id');
    console.log(id);
    id && this._rest.productwithmain(id).subscribe((data: any) => {
      this.productList = data.data;
    }, (err: any) => {
      console.log(err);
    })

  }

  getimages() {
    this._rest
  }

  addToCart(product: any) {
    // this._cart.addtoCart(product);
  }

  editproduct(i: number) {
    this.selectedproduct = 1;
    this.Editp.patchValue(this.pp[i - 1]);
  }

  editproducts() {
    this._rest.Editproducts(this.Editp.value).subscribe((data: any) => {
      console.log(data);
      this.selectedproduct = null;
      this.Editp.reset();
      this.ngOnInit();
    }, (err: any) => {
      console.log(err);
    })
  }



}
