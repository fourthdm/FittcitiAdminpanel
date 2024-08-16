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
  // url3="http://adminpanel.fourthdm.com/node";

  // url3 = "https://adminpanel.fittciti.in/api";
  // url3 = "https://adminpanel.fittciti.in/node";

  //Apis for Admin
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

  DeleteAdmin(id: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url3 + '/DeleteAdmin/' + id, { headers });
  }

  //Apis admin ends



  // API's for Product
  product() {
    return this._http.get(this.url3 + '/Product');
  }

  Productbyid(id: any) {
    return this._http.get(this.url3 + '/product/' + id);
  }

  Allproducts() {
    return this._http.get(this.url3 + '/AllProjects');//ALL products with images
  }

  viewproductsss(Project_id: string) {
    return this._http.get(this.url3 + '/ProjectsByid/' + Project_id);
  }

  AddProducts(formData: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.post(this.url3 + '/upload_Imagesss/Project', formData, { headers });
  }

  EditProducts(Project_id: number, formData: FormData) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.put(this.url3 + '/UpdateProjects/' + Project_id, formData, { headers });
  }

  DeleteProduct(Project_id: number) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url3 + '/DeleteProduct/' + Project_id, { headers });
  }
  //End Product API's

  getenquiry() {
    return this._http.get(this.url3 + '/Allcontact');
  }

  deleteinquiry(Id: any) {
    return this._http.delete(this.url3 + '/Deleteenquiry/' + Id);
  }





  getAllusers() {
    return this._http.get(this.url3 + '/ALLuser');
  }

  deleteUser(User_id: any) {
    this._state.Checktoken();
    const headers = new HttpHeaders({ 'x-access-token': this._state.token });
    return this._http.delete(this.url3 + '/DeleteUser/' + User_id, { headers });
  }





}