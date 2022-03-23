import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable()
export class EmpServiceService {

  constructor() { }

  Employees:Employee [] = [ {"name": "km1", "id" : 123 , "location":"canada"},
  {"name": "km2", "id" : 223, "location":"canada"} ]

getEmpList():Employee[]
{
   return this.Employees;
}

}