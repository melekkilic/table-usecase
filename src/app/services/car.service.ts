import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/enviroment';
import { Car } from '../pages/car-list/car-list.component';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  // Get a list of cars from the server
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${BASE_URL}/cars`);
  }
  
  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/cars/${id}`);
  }

  updateCar(id: number, car: Car): Observable<void> {
    return this.http.put<void>(`${BASE_URL}/cars/${id}`, car);
  }

}