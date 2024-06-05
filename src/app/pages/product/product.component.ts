import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedFiles: File[] = [];

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }
  onSubmit() {
    const product_id = 'your_product_id'; // You may get this from your Angular application logic
    const formData = new FormData();
    for (let file of this.selectedFiles) {
      formData.append('mainimage', file);
    }
    formData.append('product_id', product_id);

    this._rest.Addimages(formData).subscribe(
      (response) => {
        console.log(response);
        // Handle success
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }

  // imageObj: File;
  // imageUrl: string;

  pro: number = 1;
  Products: any[] = [];
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
  images: any[] = [];

  product_id: any;

  selectedproduct: any = null;

  constructor(private _rest: RestService) {

    this.Addp = new FormGroup({
      status: new FormControl(),
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
    });

    this.Editp = new FormGroup({
      id: new FormControl(),
      status: new FormControl(),
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
        // Assuming data contains the uploaded image information
        this.images.push(data);
      }, (err: any) => {
        console.log(err);
      });
    }
  }

  onFileChange(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.images.push(event.target.files[i]);
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
    if (confirm('Are You Sure To Delete Product?')) {
      this._rest.Deleteproduct(id).subscribe(resp => {
        console.log(resp);
        this.product();
      }, err => {
        console.log(err);
      });
    }
  }


  getStyle(product: any): any {
    if (product.status == "1") {
      return {
        'color': 'green',
        // 'text':'Product is in Stock',
        // 'border': '2px solid green'
      }
    } else if (product.status == "0") {
      return {
        'color': 'red',
        // 'text':'Product is in Stock',
        // 'border': '2px solid red'
      }
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