import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers:[GithubService]
})
export class BattleComponent implements OnInit {
  user:any[];
  user2:any[];
  score1:any;
  score2:any;
  player1Name:string;
  player2Name:string;

  sub: Subscription;
  sub2: Subscription;

  constructor(private githubService:GithubService) {
  }

  findProfile(){
  	this.githubService.updateUser(this.player1Name);
  	this.sub = this.githubService.getUser().subscribe(user => {
      this.user = user;
      this.score1 = (user.followers + user.public_repos + user.public_gists) * 2;
    });
  }

  findProfile2(){
  	this.githubService.updateUser(this.player2Name);
  	this.sub2 = this.githubService.getUser().subscribe(user2 => {
      this.user2 = user2;
      this.score2 = (user2.followers + user2.public_repos + user2.public_gists) * 2;
    });
  }

  ngOnInit() {
  	this.sub = this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.sub2 = this.githubService.getUser().subscribe(user2 => {
      this.user2 = user2;
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
	  this.sub2.unsubscribe();
  }
}

export class NgIfSimple {
	show: boolean = true;
}
