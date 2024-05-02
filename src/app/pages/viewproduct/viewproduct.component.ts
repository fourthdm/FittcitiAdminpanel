import { Component, OnInit, mergeApplicationConfig } from '@angular/core';

import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LightGallery } from 'lightgallery/lightgallery';

import { OwlOptions } from 'ngx-owl-carousel-o';
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
  selectedImage: string = '';
  imageSize = 430;

  productList: any;
  mainImages: any[] = [];
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
    // this.getimages();

    // this._activeroute.params.subscribe(params => {
    //   const id = params['id'];
    //   this._rest.productwithmain(id).subscribe((data:any) => {

    //     if (data.success) {
    //       this.productList = data.data;
    //       console.log('Products:', this.productList); // Log fetched products for debugging
    //     } else {
    //       console.error('Failed to fetch product data:', data.message);
    //     }
    //   }, error => {
    //     console.error('Error fetching product data:', error);
    //   });
    // });
  }
  // id: string;
  productData: any;

  changeimage(image: string) {
    this.selectedImage = image;
  }

  getproduct() {
    const id = this._activeroute.snapshot.paramMap.get('id');
    console.log(id);
    id && this._rest.productwithmain(id).subscribe((data: any) => {
      // this.productList = data.data;
      if (data.success) {
        this.productList = data.data;
        this.mainImages = data.data[0].mainimage.split(','); // Split mainimage string into an array
      } else {
        console.error('Error fetching product:', data.message);
      }
    }, (err: any) => {
      console.log(err);
    })

  }

  getimages() {
    const id = this._activeroute.snapshot.paramMap.get('id');
    console.log(id);
    id && this._rest.mainimage(id).subscribe((data: any) => {
      this.imagess = data.data;
    }, (err: any) => {
      console.log(err);
    })

    // this._rest.mainimage().subscribe((data: any) => {
    //   this.imagess = data.data;
    // }, (err: any) => {
    //   console.log(err);
    // })
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