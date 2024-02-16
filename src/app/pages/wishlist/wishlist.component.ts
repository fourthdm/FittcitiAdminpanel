import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  pro:any
  wishlist: any[] = [];

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this.getwishlist();
  }

  getwishlist() {
    this._rest.getwishlist().subscribe((data: any) => {
      console.log(data);
      this.wishlist = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

}
