import { Component } from '@angular/core';
import { GithubService } from '../services/github-service/github.service';
import { LoaderService } from '../services/loader-service/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private githubService: GithubService, private loaderService: LoaderService) { }
}