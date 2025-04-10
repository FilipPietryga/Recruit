import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-applications-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-applications-list.component.html',
  styleUrl: './job-applications-list.component.sass'
})
export class JobApplicationsListComponent {
  jobApplications = [
    { id: 1, title: 'Software Developer', company: 'Nexi', status: 'Applied' },
    { id: 2, title: 'Software Developer', company: 'Comarch', status: 'Applied' },
    { id: 3, title: 'Software Developer', company: 'Euvic :)', status: 'Interviewed' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
