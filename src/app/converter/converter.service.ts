import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Converter } from './converter';


const httpOptions = {
  headers: new HttpHeaders({ 'Accept' : 'application/json',
                             'Access-Control-Allow-Origin' : 'http://localhost:4200' })
};

@Injectable({ providedIn: 'root' })
export class ConverterService {

  private unitOfMeasureURL = 'http://localhost/converter';
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

    convertTemperature(resource: Converter)  : Observable<Converter> {
      return this.http.post<Converter>(this.unitOfMeasureURL + "/temperature", resource, this.requestOptions);
    }

    convertMass(resource: Converter) : Observable<Converter> {
      return this.http.post<Converter>(this.unitOfMeasureURL + "/mass", resource, this.requestOptions);
    }

    convertLength(resource: Converter) : Observable<Converter> {
      return this.http.post<Converter>(this.unitOfMeasureURL + "/length", resource, this.requestOptions);
    }
  }