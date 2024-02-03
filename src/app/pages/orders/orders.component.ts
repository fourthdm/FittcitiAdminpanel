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
  addorder: FormGroup;
  editorder: FormGroup;

  constructor(private _rest: RestService) {
    this.addorder = new FormGroup({
      quantity: new FormControl('', [Validators.required]),
      orderdate: new FormControl('', [Validators.required]),
      paydate: new FormControl('', [Validators.required]),
      totaldiscount: new FormControl('', [Validators.required]),
      totalamount: new FormControl('', [Validators.required]),
      satuspaymentamount: new FormControl('', [Validators.required]),
      paymentmode: new FormControl('', [Validators.required]),
      product_id: new FormControl('', [Validators.required]),
      deliverydate: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    })

    this.editorder = new FormGroup({
      quantity: new FormControl('', [Validators.required]),
      orderdate: new FormControl('', [Validators.required]),
      paydate: new FormControl('', [Validators.required]),
      totaldiscount: new FormControl('', [Validators.required]),
      totalamount: new FormControl('', [Validators.required]),
      satuspaymentamount: new FormControl('', [Validators.required]),
      paymentmode: new FormControl('', [Validators.required]),
      product_id: new FormControl('', [Validators.required]),
      deliverydate: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.Getorder()
  }

  updateorder() { }


  addorders() { }


  Getorder() {
    this._rest.orders().subscribe((data: any) => {
      console.log(data);
      this.allorder = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  delete(id: number) {
    
  }

}
