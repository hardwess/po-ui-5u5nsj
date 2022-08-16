import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../../services/http.service';

@Component({
  selector: 'app-origem',
  templateUrl: './origem.component.html',
  styleUrls: ['./origem.component.css']
})
export class OrigemComponent implements OnInit {

  aCabGrid = [
    { property: 'id', label: 'Código', align: 'left', readonly: true, freeze: true, width: 220 },
    { property: 'desc', label: 'Descrição', width: '400px', required: true }
  ];

  aEnquad: Array<any> = new Array();

  constructor(private httpService: HttpService) { }

  ngOnInit(){
    //this.listEnquad(),
  }

  listEnquad(){
    this.httpService.get("",{}).subscribe((data) => {
      this.aEnquad = this.aEnquad;
    })
  }

}
