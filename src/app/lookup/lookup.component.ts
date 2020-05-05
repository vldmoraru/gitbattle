import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css'],
  providers:[GithubService]
})

export class LookupComponent implements OnInit {
	user:any[];
	repos:any[];
	userName:string;

	sub: Subscription;
	sub2: Subscription;

	constructor(private githubService:GithubService) {
	}
	  
	findProfile(){
		this.githubService.updateUser(this.userName);
		this.sub = this.githubService.getUser().subscribe(user => {	
		  this.user = user;
		});

  		this.sub2 = this.githubService.getRepos().subscribe(repos => {
		  this.repos = repos;
		});
  	}

  	ngOnInit(){
  	}

  	ngOnDestroy(){
		this.sub.unsubscribe();
	  	this.sub2.unsubscribe();
  	}
}

export class NgIfSimple {
	show: boolean = true;
}
