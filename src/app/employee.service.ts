import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private api = "http://localhost:8080/api/v1/employees";

  constructor(private httpCliente: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpCliente.get<Employee[]>(`${this.api}`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpCliente.post(`${this.api}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpCliente.get<Employee>(`${this.api}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpCliente.put(`${this.api}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpCliente.delete(`${this.api}/${id}`);
  }
}
