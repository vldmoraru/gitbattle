import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { Subscription, Subject } from 'rxjs';
import { LoaderService } from '../loader-services/loader.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})

export class LookupComponent implements OnInit, OnDestroy {
  public user: string[];
  private repos: any[];
  public userName: string;
  public show = false;

  private sub: Subscription;
  private sub2: Subscription;

  protected color = 'primary';
  protected mode = 'indeterminate';
  protected value = 50;
  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private githubService: GithubService, private loaderService: LoaderService) {
  }

  public findProfile() {
    this.githubService.updateUser(this.userName);
    this.sub = this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.sub2 = this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });

    this.show = true;
  }

  public inputChange() {
    this.show = false;
    this.user = null;
  }

  public ngOnInit() {
    this.githubService.updateUser(this.userName);
    this.sub = this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.sub2 = this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
