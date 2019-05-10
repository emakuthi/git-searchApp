import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userName:string;
  private access_token:string='fba004364abc60aefdf83f26f4ab5b174c5259ec'
  private api_url:string='https://api.github.com/users/'
  constructor(private http:HttpClient) { 
    console.log("service is ready");
    this.userName='emakuthi'
  }

  getProfileInfo(){
    return this.http.get(this.api_url + this.userName + "?access_token=" + this.access_token );
  }
  getProfileRepos(){
    return this.http.get(this.api_url + this.userName + "/repos?access_token=" + this.access_token );
  }
  updateProfile(username:string){
    this.userName=username;

  }
}
