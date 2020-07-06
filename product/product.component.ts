import { Component, OnInit, ViewChild } from '@angular/core';
import { PhoneService } from '../phone.service';
import { HttpClient } from '@angular/common/http';
import { ProductReport } from '../productreport';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';





@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  searchText:null;
  public ctx =this;
  i:any
  t:any
  products:any
  prod:any
  pages:any[]=[];
  value:any
  search;
  pagno:any;
  data:any;
  searchKey:string;
 ELEMENT_DATA: ProductReport[];
 displayedColumns: string[] = ['id', 'name', 'image', 'description'];
 dataSource = new MatTableDataSource<ProductReport>(this.ELEMENT_DATA);
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public ph: PhoneService,public http:HttpClient) { 
    
  }
  

  ngOnInit(): void {
    // this.ctx=this
    this.dataSource.paginator = this.paginator;
   this.t= this.ph.getToken();
   this.http.get<any>('http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/fish/?page=1&search=').subscribe((data) =>{
    console.log(data);
    this.dataSource.data=data.results;
    // this.products=data.results
    for(var i =1;i<=data.num_pages;i++){
      this.pages.push(i)
    }
    console.log(this.pages)

    
    
  });
  
  
}

onPage(value){
  
  var pagno=value
  
  console.log(value);
  this.http.get<any>('http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/fish/?page='+pagno+'&search=').subscribe((data) =>{
    console.log(data);
    this.dataSource.data=data.results;
    
    
   
    // this.products=data.results;
    
    
})
}

onSearchMe(value){
  
  console.log(this.pagno);
  this.searchText=value.ser;
  this.http.get<any>('http://ec2-13-59-62-104.us-east-2.compute.amazonaws.com:8090/api/v1/fish/?page=1&search='+this.searchText+'').subscribe((data) =>{
    console.log(data);
    this.dataSource.data=data.results;
    // this.products=data.results;
    

})



}
applyFilter(){
  this.dataSource.filter=this.searchKey.trim().toLowerCase();
}

onSearchClear(){
  this.searchKey="";
  // this.applyFilter();
  // this.ngOnInit();
}

}


