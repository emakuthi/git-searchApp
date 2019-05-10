import{environment} from'../environments/environment'
import{ProfileService} from'../../services/profile.service'
import { HttpClient,HttpHeaders } from '@angular/common/http';
export class Repositories { 
   Profil
        constructor(private http:HttpClient) { 
          console.log("service is ready");
         
        }   
        getProfileRepos(){
          return this.http.get(environment.API_URL + ProfileService.userName + "/repos?access_token=" + environment.ACCESS_TOKEN);
        } 
}
