import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobApplication } from '../../models/job-application.model';

@Component({
  selector: 'app-job-application-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-application-details.component.html',
  styleUrl: './job-application-details.component.sass'
})
export class JobApplicationDetailsComponent implements OnInit {
  jobId: number | null = null;
  jobApplication: JobApplication | null = null;

  jobApplications: JobApplication[] = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Nexi',
      status: 'Applied',
      applicationDate: new Date('2025-01-10'),
      jobLocation: 'Warsaw, Poland',
      notes: 'Applied via LinkedIn, waiting for response'
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'Comarch',
      status: 'Applied',
      applicationDate: new Date('2025-01-15'),
      jobLocation: 'Kraków, Poland',
      notes: 'Applied through company career portal, HR reached out for a call'
    },
    {
      id: 3,
      title: 'Angular Developer',
      company: 'Euvic :)',
      status: 'Interviewed',
      applicationDate: new Date('2025-02-01'),
      jobLocation: 'Katowice, Poland',
      notes: 'Interview scheduled for 2025-02-05, technical interview with team'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = params['id'] ? +params['id'] : null;  
      this.getJobApplicationDetails();  
    });
  }

  getJobApplicationDetails(): void {
    if (this.jobId !== null) {
      this.jobApplication = this.jobApplications.find(
        job => job.id === this.jobId
      ) || null;  
    } else {
      this.jobApplication = null; 
    }
  }
}