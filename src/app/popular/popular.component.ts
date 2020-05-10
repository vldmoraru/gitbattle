import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../services';
import { Subscription } from 'rxjs';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit, OnDestroy {

  public repos: string[] = [];
  public error: boolean = false;
  public langs: string[] = [
    'All', 'Javascript', 'Ruby', 'Java',
    'CSS', 'Python', 'PHP', 'Shell'
  ];
  private subscriptions: Subscription = new Subscription();

  constructor(private githubService: GithubService) { }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public ngOnInit(): void {
    Promise.resolve().then(() => {
      this.subscriptions.add(
        this.githubService.getPopularRepos(this.langs[0]).subscribe(repos => {
          this.repos = repos.items;
        }, error => {
          this.error = true;
        })
      );
    });
  }

  public ChangeLang(event: MatRadioButton): void {
    this.subscriptions.add(
      this.githubService.getPopularRepos(event.value).subscribe(repos => {
        this.repos = repos.items;
        this.error = false;
      }, error => {
        this.error = true;
      })
    );
  }
}
