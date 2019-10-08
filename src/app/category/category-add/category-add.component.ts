import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  constructor(private service:CategoryService ) { }

  ngOnInit() {
  }
  
  AddCategory(nf:NgForm){
this.service.addcategory(nf.value);
  }


}
