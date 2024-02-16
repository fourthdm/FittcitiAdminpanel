import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']

})
export class OrdersComponent implements OnInit {

  pro: any;

  allorder: any[] = [];
  // addorder: FormGroup;
  // editorder: FormGroup;

  constructor(private _rest: RestService) {


  }

  ngOnInit(): void {
    this.Getorder()
  }

  updateorder() { }


  addorders() { }


  Getorder() {
    this._rest.getorders().subscribe((data: any) => {
      console.log(data);
      this.allorder = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  delete(id: number) {

  }

}
