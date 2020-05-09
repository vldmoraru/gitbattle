import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../../services/github-service/github.service';
import { LoaderService } from '../../services/loader-service/loader.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit, OnDestroy {

  public repos: string[];
  private subscription: Subscription = new Subscription();

  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private githubService: GithubService, private loaderService: LoaderService) { }

  public ngOnInit(): void {
    this.clearSubscriptions();
    this.subscription.add(
      this.githubService.getPopularRepos().subscribe(repos => {
        this.repos = repos.items;
      })
    );
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
