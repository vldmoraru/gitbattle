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
  private subscriptions: Subscription = new Subscription();
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private githubService: GithubService) {
    this.createUserForm();
  }

  public ngOnDestroy() {
    this.clearSubscriptions();
  }

  private createUserForm() {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  public findProfile(): void {
    this.clearSubscriptions();
    this.subscriptions.add(
      this.githubService.getUser(this.userForm.value.userName).subscribe(user => {
        this.user = user;
      })
    );

    this.subscriptions.add(
      this.githubService.getRepos(this.userForm.value.userName).subscribe(repos => {
        this.repos = repos;
      })
    );

    this.userForm.controls['userName'].disable();
    this.show = true;
  }

  private clearSubscriptions(): void {
    if (this.subscriptions.closed) {
      this.subscriptions.unsubscribe();
    }
  }

  public resetForm(): void {
    this.user = null;
    this.userForm.reset();
    this.userForm.controls['userName'].enable();
    this.show = false;
  }
}
