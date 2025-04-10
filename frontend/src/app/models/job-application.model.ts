export interface JobApplication {
    id: number;
    title: string;
    company: string;
    status: 'Applied' | 'Interviewed' | 'Offer' | 'Rejected';
    applicationDate: Date;
    jobLocation: string;  
    notes: string;  
}
  