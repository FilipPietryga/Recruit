import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../../services/job-application.service';
import { JobApplication } from '../../models/job-application.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-applications-list',
  standalone: true,
  templateUrl: './job-applications-list.component.html',
  styleUrls: ['./job-applications-list.component.sass'],
  imports: [CommonModule, RouterModule]
})
export class JobApplicationsListComponent implements OnInit {
  jobApplications: JobApplication[] = [];

  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit(): void {
    this.loadJobApplications();
  }

  loadJobApplications(): void {
    this.jobApplicationService.getJobApplications().subscribe((data) => {
      this.jobApplications = data;
      this.jobApplicationService.saveJobApplicationsToLocalStorage(data);
    });
  }
}
