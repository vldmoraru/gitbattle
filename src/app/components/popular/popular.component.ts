import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../../services/github-service/github.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit, OnDestroy {

  public repos: string[];
  private subscription: Subscription = new Subscription();

  constructor(private githubService: GithubService) { }

  public ngOnInit(): void {
    Promise.resolve().then(() => {
      this.clearSubscriptions();
      this.subscription.add(
        this.githubService.getPopularRepos().subscribe(repos => {
          this.repos = repos.items;
        })
      );
    });
  }

  public ngOnDestroy(): void {
    this.clearSubscriptions();
  }

  private clearSubscriptions(): void {
    if (this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
}
