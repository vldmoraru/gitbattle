import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css'],
  providers: [GithubService]
})

export class LookupComponent implements OnInit, OnDestroy {
  private user: any[];
  private repos: any[];
  private userName: string;

  private sub: Subscription;
  private sub2: Subscription;

  constructor(private githubService: GithubService) {
  }

  private findProfile() {
    this.githubService.updateUser(this.userName);
    this.sub = this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.sub2 = this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
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

export class NgIfSimple {
  private show: true;
}
