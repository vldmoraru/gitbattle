import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-services/github.service';

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

  constructor(private githubService:GithubService) {
  	this.githubService.getUser().subscribe(user => {
  		
  		this.user = user;
  	});

  	this.githubService.getRepos().subscribe(repos => {
  		
  		this.repos = repos;
  	});
  }
  	
  findProfile(){
  	this.githubService.updateUser(this.userName);
  	this.githubService.getUser().subscribe(user => {	
  		this.user = user;
  	});

  	this.githubService.getRepos().subscribe(repos => {
  		
  		this.repos = repos;
  	});
  }

  ngOnInit() {
  }
}

export class NgIfSimple {
	show: boolean = true;
}
