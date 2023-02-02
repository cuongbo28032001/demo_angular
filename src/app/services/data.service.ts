import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DMNCC } from '../models/dmncc';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:8080/DM_NCC";

  data:DMNCC;

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(dSNCCrequest:Object):Observable<DMNCC[]>{
    return this.httpClient.post<DMNCC[]>(`${this.REST_API_SERVER}/query`, dSNCCrequest);
  }

  public sendUpdateRequest(updateNCC:DMNCC):Observable<Object>{
    return this.httpClient.post(`${this.REST_API_SERVER}/update`, updateNCC)
  }

  public deleteRequest(deleteNCC:DMNCC):Observable<Object>{
    return this.httpClient.post(`${this.REST_API_SERVER}/delete`, deleteNCC)
  }

  public createRequest(createNCC:DMNCC):Observable<Object>{
    return this.httpClient.post(`${this.REST_API_SERVER}/save`, createNCC); 
  }

  setData(data:any)  
  {
    this.data = data;
    console.log(this.data);
  }

  getData(){
    this.data = this.data;
    return this.data;
  }

}
