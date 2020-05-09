import { Component, OnDestroy } from '@angular/core';
import { GithubService } from '../../services/github-service/github.service';
import { Subscription } from 'rxjs';
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
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private githubService: GithubService) {
    this.createUserForm();
  }

  private createUserForm() {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  public ngOnDestroy() {
    this.clearSubscriptions();
  }

  public findProfile(): void {
    this.subscription.add(
      this.githubService.getUser(this.userName).subscribe(user => {
        this.user = user;
      })
    );

    this.subscription.add(
      this.githubService.getRepos(this.userName).subscribe(repos => {
        this.repos = repos;
      })
    );

    this.userForm.controls['userName'].disable();
    this.show = true;
  }

  private clearSubscriptions(): void {
    if (this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

  public resetForm(): void {
    this.userForm.reset();
    this.userForm.controls['userName'].enable();
    this.show = false;
  }
}
