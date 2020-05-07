import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { Subscription, Subject } from 'rxjs';
import { LoaderService } from '../loader-services/loader.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit, OnDestroy {

  public user: string[];
  public user2: string[];
  public repos: string[];
  public repos2: string[];
  private score1: number;
  private score2: number;
  public player1Name: string;
  public player2Name: string;
  public show = false;
  private countForks: number;
  protected values = '';
  public noInput1 = true;
  public noInput2 = true;
  private sub: Subscription;
  private sub2: Subscription;
  private sub3: Subscription;
  private sub4: Subscription;
  protected color = 'primary';
  protected mode = 'indeterminate';
  protected value = 50;
  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private githubService: GithubService, private loaderService: LoaderService) {
  }

  public findProfile() {
    this.githubService.updateUser(this.player1Name);
    this.sub = this.githubService.getUser().subscribe(user => {
      this.user = user;
      this.score1 = 2 * user.public_repos + 2 * user.public_gists + user.followers;

      this.sub2 = this.githubService.getRepos().subscribe(repos => {
        this.repos = repos;
        this.countForks = 0;
        for (const repo of repos) {
          this.countForks += repo.forks_count;
        }
        this.score1 += 4 * this.countForks;
      });
    });

    this.show = true;
  }

  public findProfile2() {
    this.githubService.updateUser(this.player2Name);
    this.sub3 = this.githubService.getUser().subscribe(user2 => {
      this.user2 = user2;
      this.score2 = 2 * user2.public_repos + 2 * user2.public_gists + user2.followers;

      this.sub4 = this.githubService.getRepos().subscribe(repos2 => {
        this.repos2 = repos2;
        this.countForks = 0;
        for (const repo of repos2) {
          this.countForks += repo.forks_count;
        }
        this.score2 += 4 * this.countForks;
      });
    });
  }

  public input1Change(event: any) {
    this.values = event.target.value;
    this.show = false;
    this.user = null;
    this.user2 = null;
    if (this.values === '') {
      this.noInput1 = true;
    } else {
      this.noInput1 = false;
    }
  }

  public input2Change(event: any) {
    this.values = event.target.value;
    this.show = false;
    this.user = null;
    this.user2 = null;
    if (this.values === '') {
      this.noInput2 = true;
    } else {
      this.noInput2 = false;
    }
  }

  public prevent(event) {
    event.preventDefault();
  }

  public ngOnInit() {
    this.sub = this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.sub2 = this.githubService.getUser().subscribe(user2 => {
      this.user2 = user2;
    });

    this.sub3 = this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });

    this.sub4 = this.githubService.getRepos().subscribe(repos2 => {
      this.repos2 = repos2;
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
  }
}
