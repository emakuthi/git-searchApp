import{environment} from'../environments/environment'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {ProfileService} from'services/profile.service';
export class Users {
    
    constructor(public http:HttpClient) { 
      console.log("service is ready");
     
    }
  
    getProfileInfo(){
      return this.http.get(environment.API_URL + ProfileService.userName + "?access_token=" + environment.ACCESS_TOKEN);
    }
}
