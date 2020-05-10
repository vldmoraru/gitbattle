import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../services/github-service/github.service';
import { Subscription } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit, OnDestroy {

  public player1: string[];
  public player2: string[];
  public repos: string[];
  private score1: number;
  private score2: number;
  public player1Name: string;
  public player2Name: string;
  public show: boolean = false;
  private subscriptions: Subscription = new Subscription();
  public playerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private githubService: GithubService) { }

  public ngOnInit() {
    this.createPlayerForm();
  }

  public ngOnDestroy() {
    this.clearSubscriptions();
  }

  private createPlayerForm() {
    this.playerForm = this.formBuilder.group({
      player1Name: ['', Validators.required],
      player2Name: ['', Validators.required]
    });
  }

  public findProfiles(): void {
    this.clearSubscriptions();

    this.subscriptions.add(
      this.githubService.getUser(this.playerForm.value.player1Name).subscribe(user => {
        this.player1 = user;
        this.score1 = 2 * user.public_repos + 2 * user.public_gists + user.followers;
      })
    );
    this.subscriptions.add(
      this.githubService.getRepos(this.playerForm.value.player1Name).subscribe(rp => {
        this.repos = rp;
        for (const repo of rp) {
          this.score1 += repo.forks_count;
        }
      })
    );

    this.subscriptions.add(
      this.githubService.getUser(this.playerForm.value.player2Name).subscribe(user => {
        this.player2 = user;
        this.score2 = 2 * user.public_repos + 2 * user.public_gists + user.followers;
      })
    );
    this.subscriptions.add(
      this.githubService.getRepos(this.playerForm.value.player2Name).subscribe(rp => {
        this.repos = rp;
        for (const repo of rp) {
          this.score2 += repo.forks_count;
        }
      })
    );

    this.playerForm.controls['player1Name'].disable();
    this.playerForm.controls['player2Name'].disable();
    this.show = true;
  }

  private clearSubscriptions(): void {
    if (this.subscriptions.closed) {
      this.subscriptions.unsubscribe();
    }
  }

  public resetForm(): void {
    this.player1 = null;
    this.player2 = null;
    this.playerForm.reset();
    this.playerForm.controls['player1Name'].enable();
    this.playerForm.controls['player2Name'].enable();
    this.show = false;
  }
}