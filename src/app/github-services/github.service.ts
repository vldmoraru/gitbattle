import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
   private userName = 'vladmorraru';
   private clientId = '3899367101276f5d353a3';
   private clientSecret = '1e7c5d0e75cc9884e7de71e85e7a6865f7d12d2d';

   constructor(private _http: Http) {
   }

   getUser() {
      return this._http.get('https://api.github.com/users/' + this.userName + '?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret)
         .map(res => res.json());
   }

   getRepos() {
      return this._http.get('https://api.github.com/users/' + this.userName + '/repos?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret)
         .map(res => res.json());
   }

   updateUser(userName: string) {
      this.userName = userName;
   }
}
