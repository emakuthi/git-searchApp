import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{environment} from'../src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userName:string;
  private access_token:string = environment.ACCESS_TOKEN;
  private api_url:string = environment.API_URL;
  constructor(private http:HttpClient) { 
    console.log("service is ready");
    this.userName=' emakuthi'
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
