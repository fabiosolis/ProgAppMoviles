import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  isFeedbackExpanded: boolean = false;
  isProgressExpanded: boolean = false;

  toggleFeedback() {
    this.isFeedbackExpanded = !this.isFeedbackExpanded;
  }
  toggleProgress() {
    this.isProgressExpanded = !this.isProgressExpanded;
  }
  constructor() { }

  ngOnInit() {
  }

}
