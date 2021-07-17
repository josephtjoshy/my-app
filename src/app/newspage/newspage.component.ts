import { Component, OnInit } from '@angular/core';
import {NewsapiService} from '../newsapi.service';
@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {
  data:any=[];
  len=0;
  constructor(private api:NewsapiService) { 
    this.api.getData().subscribe(data=>{
      console.warn(data)
      this.data=data
      this.len=this.data.articles.length
     
    })
  }

  ngOnInit(): void {
  }

}
