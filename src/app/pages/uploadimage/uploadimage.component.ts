import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent {

  files: File[]=[];

  constructor(private _rest: RestService, private http: HttpClient) { }

  onFileChange(event:any) {
    this.files = event.target.files;
  }

  uploadImages() {
    const formData = new FormData();
    for (let file of this.files) {
      formData.append('mainimage', file);
    }
    formData.append('product_id', '2'); // Replace with actual product ID

    this._rest.uploadImages(formData).subscribe(
      (res) => {
        console.log('Images uploaded successfully', res);
      },
      (err) => {
        console.error('Error uploading images', err);
      }
    );
  }
}