import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmpServiceService } from './emp-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

 /* Employees:Employee [] = [ {"name": "km1", "id" : 123 , "location":"canada"},
{"name": "km2", "id" : 223, "location":"canada"} ]
*/
 
Employees:Employee [];

  ngOnInit() {
  }

  constructor(  es :EmpServiceService) { 

      this.Employees = es.getEmpList();
  }


}