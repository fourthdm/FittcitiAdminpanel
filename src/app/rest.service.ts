import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient) { }

  // url = "http://localhost:4040";

  // addProd(data: any) {
  //   return this._http.post(this.url + '/Prod', data);
  // }

  // GetProd() {
  //   return this._http.get(this.url + '/getProd');
  // }

  // addproducts(data: any) {
  //   return this._http.post(this.url + '/AddProduct', data);
  // }

  // getproducts() {
  //   return this._http.get(this.url + '/Allproducts');
  // }

  //  getProductbycategory(data: any) {
  //   return this._http.post(this.url + '/getproductbycategoryid', data);
  // }

  // getProductbyBrand(data: any) {
  //   return this._http.post(this.url + "/getproductbybrandid", data);
  // }

  // EditProduct(Product_id: number, data: any) {
  //   return this._http.put(this.url + "/UpdateProducts/" + Product_id, data);
  // }

  // DeleteProducts(Product_id: number) {
  //   return this._http.delete(this.url + '/Deleteproducts/' + Product_id);
  // }

  // AllCategory() {
  //   return this._http.get(this.url + '/Categories');
  // }

  // addcategory(data: any) {
  //   return this._http.post(this.url + '/AddCategories', data);
  // }

  // editCategory(data: any) {
  //   return this._http.put(this.url + '/UpdateCategories/' + data.Category_id, data);
  // }

  // DeleteCategory(Category_id: number) {
  //   return this._http.delete(this.url + '/DeleteCategory/' + Category_id);
  // }

  // AllBrand() {
  //   return this._http.get(this.url + '/Allbrand');
  // }

  // addbrands(data: any) {
  //   return this._http.post(this.url + '/addBrand', data);
  // }

  // editbrand(data: any) {
  //   return this._http.put(this.url + '/updateBrand/' + data.Brand_id, data);
  // }

  // Deletebrand(Brand_id: number) {
  //   return this._http.delete(this.url + '/deletebrand/' + Brand_id);
  // }


  // End Brands APi

  url2 = "http://localhost:4000";
  uploadImage(imageData: FormData): Observable<any> {
    return this._http.post<any>(`${this.url2}/upload-image`, imageData);
  }
  // Addnewproduct(data: any) {
  //   return this._http.post(this.url2 + '/addproducts', data);
  // }

  // Productsss() {
  //   return this._http.get(this.url2 + '/products');
  // }

  // Updateproductwithnewdatbase(data: any) {
  //   return this._http.put(this.url2 + '/Updateproduct/' + data.product_id, data)
  // }

  // DeletenewdatabaseProducts(product_id: any) {
  //   return this._http.delete(this.url2 + '/Deleteproduct/' + product_id)
  // }

  // Deleteorders() {
  //   return this._http.delete(this.url2 + '/Deleteorders')
  // }

  // orders() {
  //   return this._http.get(this.url2 + '/carts');
  // }

  // users() {
  //   return this._http.get(this.url2 + '/Alluser')
  // }

  url3 = "http://localhost:5000";

  Addimages(data: any) {
    return this._http.post(this.url3 + '/upload', data);
  }

  Addsingleimg(imageForm: FormData) {
    console.log('image uploading');
    return this._http.post(this.url3 + '/upload/single', imageForm);
  }


  images() {
    return this._http.get(this.url3 + '/Showimages');
  }

  getsingleimage() {
    return this._http.get(this.url3 + '/singleimage');
  }

  getenquiry() {
    return this._http.get(this.url3 + '/Allcontact');
  }

  deleteinquiry(Id: any) {
    return this._http.delete(this.url3 + '/Deleteenquiry/' + Id);
  }

  Category() {
    return this._http.get(this.url3 + '/Allcategory');
  }

  Addcategory(data: any) {
    return this._http.post(this.url3 + '/addcategory', data);
  }

  EditCategory(data: any) {
    return this._http.put(this.url3 + '/updatecategory/' + data.Category_id, data);
  }

  Deletecategory(data: any) {
    return this._http.delete(this.url3 + '/deletecategory/' + data.Category_id, data);
  }

  Brand() {
    return this._http.get(this.url3 + '/Allbrand');
  }

  AddBrand(data: any) {
    return this._http.post(this.url3 + '/addbrand', data);
  }

  Editbrand(data: any) {
    return this._http.put(this.url3 + '/updatebrand/' + data.Brand_id, data);
  }

  Deletebrand(data: any) {
    return this._http.delete(this.url3 + '/deletebrand/' + data.Brand_id);
  }

  product() {
    return this._http.get(this.url3 + '/Product');
  }

  Productss() {
    return this._http.get(this.url3 + '/prod');
  }

  AddProduct(data: any) {
    return this._http.post(this.url3 + '/Addproduct', data);
  }

  Editproducts(data: any) {
    return this._http.put(this.url3 + '/Updateproduct/' + data.id, data);
  }

  Deleteproduct(data: any) {
    return this._http.delete(this.url3 + '/Deleteproduct/' + data.id, data);
  }

  getCart() {
    return this._http.get(this.url3 + '/CartsforAdmin');
  }

  getwishlist() {
    return this._http.get(this.url3 + '/Allwishlist');
  }

  getAllusers() {
    return this._http.get(this.url3 + '/ALLuser');
  }

  getorders() {
    return this._http.get(this.url3 + '/AllordersforAdmin');
  }

  showimages(product_id: string) {
    return this._http.get(this.url3 + '/Showimages/' + product_id);
  }

  productwithmain(id: string) {
    return this._http.get(this.url3 + '/Productwithimages/' + id);
  }

  onlyproduct(id: string) {
    return this._http.get(this.url3 + '/onlyproduct/' + id);
  }


  mainimage(id: string) {
    return this._http.get(this.url3 + '/Productwithmainimage/' + id);
  }

}


