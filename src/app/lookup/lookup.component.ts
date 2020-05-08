import { Component, OnDestroy } from '@angular/core';
import { GithubService } from '../github-services/github.service';
import { Subscription, Subject } from 'rxjs';
import { LoaderService } from '../loader-services/loader.service';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  private subscription: Subscription = new Subscription();
  public isLoading: Subject<boolean> = this.loaderService.isLoading;
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private githubService: GithubService, private loaderService: LoaderService) {
    this.createUserForm();
  }

  private createUserForm() {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public findProfile(): void {
    this.githubService.updateUser(this.userName);
    this.subscription.add(
      this.githubService.getUser().subscribe(user => {
        this.user = user;
      })
    );

    this.subscription.add(
      this.githubService.getRepos().subscribe(repos => {
        this.repos = repos;
      })
    );

    this.show = true;
  }

  private clearSubscriptions(): void {
    if (this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  public resetForm(): void {
    this.userForm.reset();
    this.show = false;
  }
}
