import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

declare var Razorpay: any;

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  carts: any[] = [];
  pro: any;

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this.getcarts();
  }

  getcarts() {
    this._rest.getCart().subscribe((data: any) => {
      console.log(data);
      this.carts = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

}
