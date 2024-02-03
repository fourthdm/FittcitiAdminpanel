import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  pro: any;
  allcategory: any[] = [];
  AddCategory: FormGroup;
  EditCategoryForm: FormGroup;

  selctedcategory: any = null;

  constructor(private _rest: RestService) {
    this.AddCategory = new FormGroup({
      Categories_Name: new FormControl('', [Validators.required]),
    })

    this.EditCategoryForm = new FormGroup({
      Category_id: new FormControl(),
      Categories_Name: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.AllCategory();
  }

  AllCategory() {
    this._rest.AllCategory().subscribe((result: any) => {
      console.log(result);
      this.allcategory = result.data;
    }, (err) => {
      console.log(err);
    })
  }

  AddCategories() {
    this._rest.addcategory(this.AddCategory.value).subscribe((result) => {
      console.log(result);
      this.AddCategory.reset();
      this.allcategory.push()
    }, (err) => {
      console.log(err);
    })
  }

  editcategory(i: number) {
    this.selctedcategory = 1;
    this.EditCategoryForm.patchValue(this.allcategory[i-1]);
  }

  UpdateCategory() {
    this._rest.editCategory(this.EditCategoryForm.value).subscribe((data:any) => {
      console.log(data);
      this.selctedcategory = null;
      this.EditCategoryForm.reset();
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    })
  }

  delete(Category_id: number) {
    if (confirm('Are You Sure To Delete It ?')) {
      this._rest.DeleteCategory(Category_id).subscribe(resp => {
        console.log(resp);
        this.AllCategory();
      }, err => {
        console.log(err);

        this.AllCategory();
      });
    }
  }

}
