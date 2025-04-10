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
      title: 'Software Developer',
      company: 'Euvic :)',
      status: 'Interviewed',
      applicationDate: new Date('2025-04-06'),
      jobLocation: 'Gliwice, Poland',
      notes: 'Interview scheduled for 2025-04-11, technical interview with the manager'
    },
    {
      id: 4,
      title: 'Frontend Developer',
      company: 'Brainly',
      status: 'Offer',
      applicationDate: new Date('2025-03-01'),
      jobLocation: 'Remote',
      notes: 'Received offer, pending acceptance'
    },
    {
      id: 5,
      title: 'Backend Developer',
      company: 'Capgemini',
      status: 'Applied',
      applicationDate: new Date('2025-03-05'),
      jobLocation: 'Gdańsk, Poland',
      notes: 'Applied through employee referral'
    },
    {
      id: 6,
      title: 'Full Stack Developer',
      company: 'Cognizant',
      status: 'Interviewed',
      applicationDate: new Date('2025-02-20'),
      jobLocation: 'Wrocław, Poland',
      notes: 'Final round of interviews, technical and HR interviews done'
    },
    {
      id: 7,
      title: 'DevOps Engineer',
      company: 'Luxoft',
      status: 'Offer',
      applicationDate: new Date('2025-02-28'),
      jobLocation: 'Poznań, Poland',
      notes: 'Offer received, negotiating salary and benefits'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params['id'];  
      this.getJobApplicationDetails();  
    });
  }

  getJobApplicationDetails(): void {
    if (this.jobId !== null) {
      this.jobApplication = this.jobApplications.find(
        job => job.id === this.jobId
      ) || null;  
    }
  }
}