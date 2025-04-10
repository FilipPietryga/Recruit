import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { JobApplication } from '../models/job-application.model';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  private apiUrl = 'http://localhost:8080/api/v1/job-applications'; 

  constructor(private http: HttpClient) {}

  getJobApplications(): Observable<JobApplication[]> {
    const storedData = localStorage.getItem('jobApplications');
    
    if (storedData) {
      return new Observable<JobApplication[]>((observer) => {
        observer.next(JSON.parse(storedData));  
        observer.complete();
      });
    } else {
      return this.http.get<JobApplication[]>(this.apiUrl);  
    }
  }

  getJobApplicationById(id: number): Observable<JobApplication> {
    if (id <= 0) {
      return new Observable<JobApplication>((observer) => {
        observer.complete();
      });
    }
  
    const storedData = sessionStorage.getItem(`jobApplication_${id}`);
    
    if (storedData) {
      return new Observable<JobApplication>((observer) => {
        observer.next(JSON.parse(storedData)); 
        observer.complete();
      });
    } else {
      return this.http.get<JobApplication>(`${this.apiUrl}/${id}`).pipe(
        tap((data) => {
          sessionStorage.setItem(`jobApplication_${id}`, JSON.stringify(data));
        })
      );
    }
  }
  

  saveJobApplicationsToLocalStorage(data: JobApplication[]): void {
    localStorage.setItem('jobApplications', JSON.stringify(data));  
  }

  clearLocalStorage(): void {
    localStorage.removeItem('jobApplications');  
  }

  createJobApplication(jobApplication: JobApplication): Observable<JobApplication> {
    return this.http.post<JobApplication>(this.apiUrl, jobApplication);
  }

  updateJobApplication(jobApplication: JobApplication): Observable<JobApplication> {
    return this.http.put<JobApplication>(`${this.apiUrl}/${jobApplication.id}`, jobApplication); 
  }

  deleteJobApplication(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);  
  }

  refreshJobApplications(): void {
    this.http.get<JobApplication[]>(this.apiUrl).subscribe((data) => {
      this.saveJobApplicationsToLocalStorage(data);  
    });
  }
}