import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import{NgForm} from '@angular/forms';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service:CategoryService, private route:Router) { }
Base:any[];
CId:number;
CName:string;
CDetails:string;


  ngOnInit() {
    this.service.GetCategory().subscribe(
      posts=>{
        this.Base=posts;
      }
     );
  }



  
  delete(Id:any){
    console.log(Id);
   
      this.service.deletedata(Id).subscribe(
        res=>
        {
          this.ngOnInit();
        }
      );
    }



   
}
