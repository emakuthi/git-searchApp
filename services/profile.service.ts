import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private api_key:string;
private api_url:""
  constructor(private http:HttpClient) { }
}
