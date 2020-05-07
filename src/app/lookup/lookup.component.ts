import { Component, OnDestroy } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { Subscription, Subject } from 'rxjs';
import { LoaderService } from '../loader-services/loader.service';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})

export class LookupComponent implements OnDestroy {

  public user: string[];
  private repos: string[];
  public userName: string;
  public show = false;
  protected values = '';
  public noInput = true;
  private sub: Subscription;
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

    this.sub = this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });

    this.show = true;
  }

  public inputChange(event: any) {
    this.values = event.target.value;
    this.show = false;
    this.user = null;
    if (this.values === '') {
      this.noInput = true;
    } else {
      this.noInput = false;
    }
  }

  public prevent(event) {
    event.preventDefault();
  }

  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
