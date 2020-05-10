import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../services';
import { Subscription } from 'rxjs';
import { Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})

export class LookupComponent implements OnInit, OnDestroy {

  public user: string[];
  private repos: string[];
  public userName: string;
  public show = false;
  private subscriptions: Subscription = new Subscription();
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private githubService: GithubService) { }

  public ngOnInit() {
    this.createUserForm();
  }

  public ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private createUserForm() {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  public findProfile() {
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

  public resetForm() {
    this.user = null;
    this.userForm.reset();
    this.userForm.controls['userName'].enable();
    this.show = false;
  }
}
