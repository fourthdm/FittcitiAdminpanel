import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // imageObj: File;
  // imageUrl: string;

  pro: number = 1;
  Products: any[] = [];
  images: any[] = [];
  pp: any[] = [];
  // AddProductForm: FormGroup;
  // EditProductForm: FormGroup;
  // addproduct: FormGroup;
  Allproducts: any[] = [];
  AllCategory: any[] = [];
  prod: any[] = [];
  Addp: FormGroup;
  Editp: FormGroup;
  ADDimg: FormGroup;

  product_id: any;

  selectedproduct: any = null;

  constructor(private _rest: RestService) {

    this.Addp = new FormGroup({
      Product_Name: new FormControl('', [Validators.required]),
      Weight: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.required]),
      // pricewithdiscount: new FormControl('', [Validators.required]),
      Brand_id: new FormControl('', [Validators.required]),
      Category_id: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      benefits: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),
    });

    this.ADDimg = new FormGroup({
      product_id: new FormControl('', [Validators.required]),
      mainimage: new FormControl('', [Validators.required])
    })
   
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
    this.product();
    // this.GetPod();
    // this.GetProduct();
    // this.newdatbaseproducts();
    // this.show();
    // this.single();
  }

  // single() {
  //   this._rest.getsingleimage().subscribe((data: any) => {
  //     console.log(data);
  //     this.image= data.data

  //   })
  // }

  // ProductAdd() {
  //   this._rest.Addnewproduct(this.AddProductForm.value).subscribe((data: any) => {
  //     console.log(data);
  //     this.AddProductForm.reset();
  //     this.Products.push();
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  // Addproduct() {
  //   this._rest.addproducts(this.addproduct.value).subscribe((data) => {
  //     console.log(data);
  //     this.addproduct.reset();
  //     this.Products.push();
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  // editproduct(i: number) {
  //   this.selectedproduct = 1;
  //   this.EditProductForm.patchValue(this.Products[i - 1]);
  // }

  // updateproduct() {
  //   this._rest.Updateproductwithnewdatbase(this.EditProductForm.value).subscribe((data: any) => {
  //     console.log(data);
  //     this.selectedproduct = null;
  //     this.EditProductForm.reset();
  //     this.ngOnInit();
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  // PrdAdd() {
  //   this._rest.addProd(this.addproduct.value).subscribe((data) => {
  //     console.log(data);
  //     this.addproduct.reset();
  //     this.prod.push();
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  GetProduct() {
    this._rest.product().subscribe((data: any) => {
      console.log(data);
      this.pp = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  

  Allcategory() {
    this._rest.Category().subscribe((result: any) => {
      console.log(result);
      this.AllCategory = result.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  product() {
    this._rest.product().subscribe((data: any) => {
      console.log(data);
      this.pp = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  // show() {
  //   this._rest.images().subscribe((data) => {
  //     console.log(data);
  //     // this.Imagess = data.data;
  //     this.images = (data as any)['data'];
  //   }, err => console.log(err));
  // }

  addimg1() {
    if (this.ADDimg.valid) {
      this._rest.Addimages(this.ADDimg.value).subscribe((data: any) => {
        console.log(data);
        this.images.push();
      }, (err: any) => {
        console.log(err);
      })
    }
  }
  onFileChange(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.Products.push(event.target.files[i]);
    }
  }

  productAdd() {
    const formdata = this.Addp.value;
    this._rest.AddProduct(formdata).subscribe((data: any) => {
      console.log(data);
      this.Addp.reset();
      this.pp.push();
    }, (err: any) => {
      console.log(err);
    })
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

  delete(id: number) {
    if (confirm('Are You Sure To Delete It ?')) {
      this._rest.Deleteproduct(id).subscribe(resp => {
        console.log(resp);
        this.product();
      }, err => {
        console.log(err);
      });
    }
  }




  // onImagePicked(event: Event): void {
  //   // const FILE = (event.target as HTMLInputElement).files[0];
  //   const FILE = (event.target as HTMLInputElement).files[0];
  //   this.imageObj = FILE;
  // }

  // onImageUpload() {
  //   const imageForm = new FormData();
  //   imageForm.append('image', this.imageObj);
  //   this._rest.Addsingleimg(imageForm).subscribe((res:any) => {
  //     this.imageUrl = res['image'];
  //   });
  // }
}