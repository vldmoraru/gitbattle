import { Component, OnDestroy } from '@angular/core';
import { GithubService } from '../../services/github-service/github.service';
import { Subscription, Subject } from 'rxjs';
import { LoaderService } from '../../services/loader-service/loader.service';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  public show: boolean = false;
  private subscriptionUser: Subscription = new Subscription();
  private subscriptionRepos: Subscription = new Subscription();
  public playerForm: FormGroup;

  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private formBuilder: FormBuilder, private githubService: GithubService, private loaderService: LoaderService) {
    this.createPlayerForm();
  }

  private createPlayerForm() {
    this.playerForm = this.formBuilder.group({
      player1Name: ['', Validators.required],
      player2Name: ['', Validators.required]
    });
  }

  public ngOnDestroy() {
    this.clearSubscriptions();
  }

  public findProfiles(): void {
    this.clearSubscriptions();

    this.subscriptionUser.add(
      this.githubService.getUser(this.player1Name).subscribe(user => {
        this.user = user;
        this.score1 = 2 * user.public_repos + 2 * user.public_gists + user.followers;
      })
    );
    this.subscriptionRepos.add(
      this.githubService.getRepos(this.player1Name).subscribe(repos => {
        this.repos = repos;
        for (const repo of repos) {
          this.score1 += repo.forks_count;
        }
      })
    );

    this.clearSubscriptions();
    this.subscriptionUser.add(
      this.githubService.getUser(this.player2Name).subscribe(user => {
        this.user2 = user;
        this.score2 = 2 * user.public_repos + 2 * user.public_gists + user.followers;
      })
    );
    this.subscriptionRepos.add(
      this.githubService.getRepos(this.player2Name).subscribe(repos => {
        this.repos = repos;
        for (const repo of repos) {
          this.score2 += repo.forks_count;
        }
      })
    );

    this.playerForm.controls['player1Name'].disable();
    this.playerForm.controls['player2Name'].disable();
    this.show = true;
  }

  private clearSubscriptions(): void {
    if (this.subscriptionUser.closed) {
      this.subscriptionUser.unsubscribe();
    }

    if (this.subscriptionRepos.closed) {
      this.subscriptionRepos.unsubscribe();
    }
  }

  public resetForm(): void {
    this.playerForm.reset();
    this.playerForm.controls['player1Name'].enable();
    this.playerForm.controls['player2Name'].enable();
    this.show = false;
  }
}
