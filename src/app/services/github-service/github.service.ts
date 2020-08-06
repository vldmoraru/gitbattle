import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
   providedIn: 'root',
})
export class GithubService {
   private apiURL: string = 'https://api.github.com/';
   private clientId: string = '3899367101276f5d353a3';
   private clientSecret: string = '1e7c5d0e75cc9884e7de71e85e7a6865f7d12d2d';
   private params: string = '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret;

   constructor(private http: HttpClient) {
   }

   public getUser(userName: string) {
      return this.http.get(this.apiURL + 'users/' + userName + this.params).pipe(
         map((res: string) => JSON.parse(JSON.stringify(res))));
   }

   public getRepos(userName: string) {
      return this.http.get(this.apiURL + 'users/' + userName + '/repos' + this.params).pipe(
         map((res: string) => JSON.parse(JSON.stringify(res))));
   }

   public getPopularRepos(lang: string) {
      return this.http.get(this.apiURL + 'search/repositories?q=stars:>1+language:' + lang +
         '&sort=stars&order=desc&type=Repositories' + this.params).pipe(
            map((res: string) => JSON.parse(JSON.stringify(res))));
   }
}
