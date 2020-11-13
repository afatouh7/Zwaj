import { Component, OnInit } from '@angular/core'; 
import {HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
Values:any;
  constructor(private http:HttpClient) { }

  ngOnInit() { 
    this.getValues(); 
  }
 getValues() 
 {
this.http.get('https://localhost:44380/api/values').subscribe(
  response=>{this.Values=response;}, error=>{console.log(console.error())
  }
)

 }
}
