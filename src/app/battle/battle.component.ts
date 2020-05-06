import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit, OnDestroy {
  public user: string[];
  private user2: string[];
  private score1: number;
  private score2: number;
  public player1Name: string;
  public player2Name: string;

  private sub: Subscription;
  private sub2: Subscription;

  constructor(private githubService: GithubService) {
  }

  public findProfile() {
    this.githubService.updateUser(this.player1Name);
    this.sub = this.githubService.getUser().subscribe(user => {
      this.user = user;
      this.score1 = (user.followers + user.public_repos + user.public_gists) * 2;
    });
  }

  public findProfile2() {
    this.githubService.updateUser(this.player2Name);
    this.sub2 = this.githubService.getUser().subscribe(user2 => {
      this.user2 = user2;
      this.score2 = (user2.followers + user2.public_repos + user2.public_gists) * 2;
    });
  }

  public ngOnInit() {
    this.sub = this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.sub2 = this.githubService.getUser().subscribe(user2 => {
      this.user2 = user2;
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
