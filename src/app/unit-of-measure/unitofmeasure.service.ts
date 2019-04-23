import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { UnitOfMeasure } from './unitofmeasure';


const httpOptions = {
  headers: new HttpHeaders({ 'Accept' : 'application/json',
                             'Access-Control-Allow-Origin' : 'http://localhost' })
};

@Injectable({ providedIn: 'root' })
export class UnitOfMeasureService {

  private unitOfMeasureURL = 'http://localhost/unit';  
  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin' : '*'
    }

  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict)
  };

  constructor(
    private http: HttpClient) { }

    getTemperatureUnits() : Observable<UnitOfMeasure[]> {
      return this.http.get<UnitOfMeasure[]>(this.unitOfMeasureURL + "/temperature", this.requestOptions);
    }

    getMassUnits() : Observable<UnitOfMeasure[]> {
      return this.http.get<UnitOfMeasure[]>(this.unitOfMeasureURL + "/mass", this.requestOptions);
    }

    getLengthUnits() : Observable<UnitOfMeasure[]> {
      return this.http.get<UnitOfMeasure[]>(this.unitOfMeasureURL + "/length", this.requestOptions);
    }
  }