import { Component, OnDestroy } from '@angular/core';
import { GithubService } from '../services/github-service/github.service';
import { Subscription, Subject } from 'rxjs';
import { LoaderService } from '../services/loader-service/loader.service';
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
  public show = false;
  private subscription: Subscription = new Subscription();
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

    this.githubService.updateUser(this.player1Name);
    this.subscription.add(
      this.githubService.getUser().subscribe(user => {
        this.user = user;
        this.score1 = 2 * user.public_repos + 2 * user.public_gists + user.followers;
      })
    );
    this.subscription.add(
      this.githubService.getRepos().subscribe(repos => {
        this.repos = repos;
        for (const repo of repos) {
          this.score1 += repo.forks_count;
        }
      })
    );

    this.githubService.updateUser(this.player2Name);
    this.subscription.add(
      this.githubService.getUser().subscribe(user => {
        this.user2 = user;
        this.score2 = 2 * user.public_repos + 2 * user.public_gists + user.followers;
      })
    );
    this.subscription.add(
      this.githubService.getRepos().subscribe(repos => {
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
    if (this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  public resetForm(): void {
    this.playerForm.reset();
    this.playerForm.controls['player1Name'].enable();
    this.playerForm.controls['player2Name'].enable();
    this.show = false;
  }
}
