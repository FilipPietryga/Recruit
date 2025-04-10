import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobApplicationService } from '../../services/job-application.service';
import { JobApplication } from '../../models/job-application.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-application-details',
  templateUrl: './job-application-details.component.html',
  styleUrls: ['./job-application-details.component.sass'],
  standalone: true,
  imports: [CommonModule]
})
export class JobApplicationDetailsComponent implements OnInit {
  jobApplication: JobApplication | null = null;

  constructor(
    private route: ActivatedRoute,
    private jobApplicationService: JobApplicationService
  ) {}

  ngOnInit(): void {
    const jobId = +this.route.snapshot.paramMap.get('id')!;

    this.jobApplicationService.getJobApplicationById(jobId).subscribe((data) => {
      this.jobApplication = data;  
    });
  }
}
