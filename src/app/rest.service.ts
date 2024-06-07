import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _http: HttpClient, private _state: StateService) { }

  url3 = "http://localhost:5000";
  // url3="https://adminpanel.fourthdm.com/node";

  Login(data: any) {
    return this._http.post(this.url3 + '/Adminlogin', data);
  }

  Alladmins() {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.get(this.url3 + '/Alladmins', { headers });
  }

  AddNewAdmin(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url3 + '/AddAdminUser', data, { headers });
  }

  UpdateAdmin(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url3 + '/UpdateAdmin/' + data.id, data, { headers });
  }

  ADDCategoryToken(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url3 + '/AddCategorybyAdmin', data, { headers });
  }

  GetAllCatgorybytoken() {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.get(this.url3 + '/AllCatgeorybyAdmin', { headers });
  }

  Addimages(data: any) {
    return this._http.post(this.url3 + '/upload', data);
  }

  uploadImages(formData: FormData): Observable<any> {
    return this._http.post(`${this.url3}/upload`, formData);
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

  Deletecategory(Category_id: any) {
    return this._http.delete(this.url3 + '/deletecategory/' + Category_id);
  }

  Brand() {
    return this._http.get(this.url3 + '/Allbrand');
  }

  AllBrand() {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.get(this.url3 + '/AllBrandToken', { headers });
  }

  AddBrand(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url3 + '/ADDBrand', data, { headers });
  }

  Editbrand(data: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({'x-access-token':this._state.token});
    return this._http.put(this.url3 + '/UpdateBrandToken/' + data.Brand_id, data,{headers});
  }

  Deletebrand(Brand_id: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({'x-access-token':this._state.token});
    return this._http.delete(this.url3 + '/DeleteBrandtoken/' + Brand_id,{headers});
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

  Deleteproduct(id: number) {
    return this._http.delete(this.url3 + '/Deleteproduct/' + id);
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

  wishlistbyuser_id(data: any) {
    return this._http.post(this.url3 + '/Wishlistbyuserid', data);
  }

  generatecoupons(data: any) {
    return this._http.post(this.url3 + '/generate-coupon', data);
  }

  AllCoupons() {
    return this._http.get(this.url3 + '/Getallcoupons');
  }

  getcouponbybrand_id(Brand_id: number) {
    return this._http.get(this.url3 + '/validate-coupon/' + Brand_id);
  }

  UpdateCoupons(data: any) {
    return this._http.put(this.url3 + '/UpdateCoupon/' + data.id, data);
  }

  deletecoupon(id: number) {
    return this._http.delete(this.url3 + '/DeleteCoupon/' + id);
  }

}