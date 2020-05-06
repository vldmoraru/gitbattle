
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
//import { HttpClient, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class GithubService {
   private userName = 'vladmorraru';
   private clientId = '3899367101276f5d353a3';
   private clientSecret = '1e7c5d0e75cc9884e7de71e85e7a6865f7d12d2d';

   constructor(private http: HttpClient) {
   }

   public getUser() {
      return this.http.get('https://api.github.com/users/' + this.userName + '?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret).pipe(
         //.map((res: string) => JSON.parse(res));
         map((res: string) => JSON.parse(JSON.stringify(res))));
   }

   public getRepos() {
      return this.http.get('https://api.github.com/users/' + this.userName + '/repos?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret).pipe(
         map((res: string) => JSON.parse(JSON.stringify(res))));
   }

   public updateUser(userName: string) {
      this.userName = userName;
   }
}
