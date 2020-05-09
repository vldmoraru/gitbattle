import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
   providedIn: 'root',
})
export class GithubService {
   private clientId: string = '3899367101276f5d353a3';
   private clientSecret: string = '1e7c5d0e75cc9884e7de71e85e7a6865f7d12d2d';

   constructor(private http: HttpClient) {
   }

   public getUser(userName: string) {
      return this.http.get('https://api.github.com/users/' + userName + '?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret).pipe(
            map((res: string) => JSON.parse(JSON.stringify(res))));
   }

   public getRepos(userName: string) {
      return this.http.get('https://api.github.com/users/' + userName + '/repos?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret).pipe(
            map((res: string) => JSON.parse(JSON.stringify(res))));
   }
}
