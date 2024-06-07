import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/rest.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  liked: boolean = false;

  Loginform: FormGroup;

  constructor(private rest: RestService, private state: StateService, private _router: Router, private toastr: ToastrService) {
    this.Loginform = new FormGroup({
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {

  }

  Show() {
    this.liked = !this.liked;
  }

  loginn() {
    this.rest.Login(this.Loginform.value).subscribe((data: any) => {
      console.log(data);             
      this.toastr.success(data.message,'success');
      localStorage.setItem('token', data.data);
      this.state.token = (data.data);
      this.state.decodetoken();
      this._router.navigate(['/Dashboard']);
    }, (err: any) => {
      console.log(err);
      this.toastr.error(err.error.message, 'Error');
    })
  }
}