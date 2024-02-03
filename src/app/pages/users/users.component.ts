import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pro:number = 1;

  Allusers: any[] = [];
  adduser: FormGroup;
  edituser: FormGroup;

  constructor(private _rest: RestService) {
    this.adduser = new FormGroup({
      username: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      emailid: new FormControl('', [Validators.required]),
      phone_no: new FormControl('', [Validators.required]),
      order_id: new FormControl('', [Validators.required]),
      product_id: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      orderdetails_id: new FormControl('', [Validators.required])
    });

    this.edituser = new FormGroup({
      username: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      emailid: new FormControl('', [Validators.required]),
      phone_no: new FormControl('', [Validators.required]),
      order_id: new FormControl('', [Validators.required]),
      product_id: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      orderdetails_id: new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
    this.getusers()
  }

  getusers() {
    this._rest.users().subscribe((data: any) => {
      console.log(data);
      this.Allusers = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  addusers() { }

  updateuser() { }


  delete(id: number) { }

}
