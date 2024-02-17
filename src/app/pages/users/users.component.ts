import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  pro: number = 1;

  Allusers: any[] = [];
  adduser: FormGroup;
  edituser: FormGroup;

  constructor(private _rest: RestService) {
    this.adduser = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Mobileno: new FormControl('', [Validators.required]),

    });

    this.edituser = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Username: new FormControl('', [Validators.required]),
      Address: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Mobileno: new FormControl('', [Validators.required]),

    })

  }

  ngOnInit(): void {
    this.getusers()
  }

  getusers() {
    this._rest.getAllusers().subscribe((data: any) => {
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
