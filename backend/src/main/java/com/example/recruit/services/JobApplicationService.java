package com.example.recruit.services;

import com.example.recruit.models.JobApplication;
import com.example.recruit.repositories.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobApplicationService {

    private final JobApplicationRepository jobApplicationRepository;

    @Autowired
    public JobApplicationService(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    public List<JobApplication> getAllJobApplications() {
        return jobApplicationRepository.findAll();
    }

    public Optional<JobApplication> getJobApplicationById(Long id) {
        return jobApplicationRepository.findById(id);
    }

    public JobApplication createJobApplication(JobApplication jobApplication) {
        return jobApplicationRepository.save(jobApplication);
    }

    public void deleteJobApplication(Long id) {
        jobApplicationRepository.deleteById(id);
    }
}
