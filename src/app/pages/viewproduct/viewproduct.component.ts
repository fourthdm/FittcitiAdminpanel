import { Component, OnInit, mergeApplicationConfig } from '@angular/core';

import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { LightGallery } from 'lightgallery/lightgallery';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  //   product: any[] = [];

  //   pro: any;
  //   constructor(private _rest: RestService, private _activeroute: ActivatedRoute) { }

  //   ngOnInit(): void {
  //     this.Getproduct();
  //   }

  //   productData: any;

  //   Getproduct() {
  //     const id = this._activeroute.snapshot.paramMap.get('id');
  //     this._rest.Productbyid(id || '').subscribe((data: any) => {
  //       console.log(data);
  //       this.product = data.data
  //     }, (err: any) => {
  //       console.log(err)
  //     })
  //   }

  //   getstyle(product: any): any {
  //     if (product.status == '1') {
  //       return {
  //         'color': 'green'
  //       }
  //     } else {
  //       return {
  //         'color': 'red'
  //       }
  //     }
  //   }
  // }

  scrolltop = document.getElementById("scrolltop");
  rootelement = document.documentElement;

  scroll() {
    this.rootelement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  productList: any;
  mainImages: any[] = [];
  similarProducts: any[] = [];
  similarWeights: any[] = [];
  productQuantity: number = 1;

  constructor(private _rest: RestService, private _activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeroute.params.subscribe((params: Params) => {
      const Project_id = params['Project_id'];
      if (Project_id) {
        this.getProductAndSimilar(Project_id);
      }
    });
  }

  getProductAndSimilar(id: string) {
    this._rest.Productbyid(id).subscribe((productData: any) => {
      if (productData.success) {
        this.productList = productData.data;
        this.mainImages = productData.data[0].mainimage.split(',');
        this.mainImages.reverse();

        this.getSimilarProducts(id);
        // this.GetsimilarWeight(id);
      } else {
        console.error('Error fetching product:', productData.message);
      }
    }, (error: any) => {
      console.error('Error fetching product:', error);
    });
  }

  getSimilarProducts(Project_id: string) {
    this._rest.viewproductsss(Project_id).subscribe((similarData: any) => {
      this.similarProducts = similarData;
    }, (error: any) => {
      console.error('Error fetching similar products:', error);
    });
  }

  getStyle(product: any): any {
    return {
      'color': product.status == "1" ? 'green' : 'red'
    };
  }

}