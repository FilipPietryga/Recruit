import { Routes } from '@angular/router';
import { JobApplicationsListComponent } from './job-applications-list/job-applications-list.component';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';
import { JobApplicationDetailsComponent } from './job-application-details/job-application-details.component';

export const appRoutes: Routes = [
  { path: '', component: JobApplicationsListComponent },
  { path: 'job-application-form', component: JobApplicationFormComponent },
  { path: 'job-application-details/:id', component: JobApplicationDetailsComponent },
];
