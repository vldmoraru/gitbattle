import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../services/github-service/github.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit, OnDestroy {

  public repos: string[];
  public error: boolean = false;
  private subscriptions: Subscription = new Subscription();

  constructor(private githubService: GithubService) { }

  public ngOnDestroy(): void {
    this.clearSubscriptions();
  }

  public ngOnInit(): void {
    Promise.resolve().then(() => {
      this.clearSubscriptions();
      this.subscriptions.add(
        this.githubService.getPopularRepos().subscribe(repos => {
          this.repos = repos.items;
        }, error => {
          this.error = true;
        })
      );
    });
  }

  private clearSubscriptions(): void {
    if (this.subscriptions.closed) {
      this.subscriptions.unsubscribe();
    }
  }
}
