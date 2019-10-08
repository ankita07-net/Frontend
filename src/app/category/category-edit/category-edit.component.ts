import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  constructor(private service:CategoryService,private http:HttpClient ,private active:ActivatedRoute,private router:Router){ }

  cId:number;
  category:any;
  ngOnInit() {
    this.cId=+this.active.snapshot.paramMap.get('id');
  }


  EditCategory(nf:NgForm)
  {
    
    console.log(nf.value);

      this.service.update(this.cId,nf.value).subscribe(
        res=>{
          this.router.navigate(['/category'])
        },
        err=>{
          
          console.log(err)
        }
      );
    }
  
  }

