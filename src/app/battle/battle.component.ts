import { Component, OnDestroy } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { Subscription, Subject } from 'rxjs';
import { LoaderService } from '../loader-services/loader.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnDestroy {

  public user: string[];
  public user2: string[];
  public repos: string[];
  private score1: number;
  private score2: number;
  public player1Name: string;
  public player2Name: string;
  public show = false;
  protected values = '';
  public noInput1 = true;
  public noInput2 = true;
  private subscription: Subscription = new Subscription();
  protected color = 'primary';
  protected mode = 'indeterminate';
  protected value = 50;
  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private githubService: GithubService, private loaderService: LoaderService) {
  }

  public findProfiles(): void {
    this.githubService.updateUser(this.player1Name);
    this.subscription = this.githubService.getUser().subscribe(user => {
      this.user = user;
      this.score1 = 2 * user.public_repos + 2 * user.public_gists + user.followers;
    });
    this.subscription = this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      for (const repo of repos) {
        this.score1 += repo.forks_count;
      }
    });

    this.githubService.updateUser(this.player2Name);
    this.subscription = this.githubService.getUser().subscribe(user => {
      this.user2 = user;
      this.score2 = 2 * user.public_repos + 2 * user.public_gists + user.followers;
    });
    this.subscription = this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      for (const repo of repos) {
        this.score2 += repo.forks_count;
      }
    });

    this.show = true;
  }

  public input1Change(event: any) {
    this.values = event.target.value;
    if (this.values === '') {
      this.noInput1 = true;
    } else {
      this.noInput1 = false;
    }
  }

  public input2Change(event: any) {
    this.values = event.target.value;
    if (this.values === '') {
      this.noInput2 = true;
    } else {
      this.noInput2 = false;
    }
  }

  public prevent(event) {
    event.preventDefault();
  }

  public refresh(): void {
    window.location.reload();
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
