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

  product: any[] = [];

  pro: any;
  constructor(private _rest: RestService, private _activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Getproduct();
  }

  productData: any;

  Getproduct() {
    const id = this._activeroute.snapshot.paramMap.get('id');
    this._rest.Productbyid(id || '').subscribe((data: any) => {
      console.log(data);
      this.product = data.data
    }, (err: any) => {
      console.log(err)
    })
  }
}