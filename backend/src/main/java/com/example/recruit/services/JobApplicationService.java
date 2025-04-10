package com.example.recruit.services;

import com.example.recruit.models.JobApplication;
import com.example.recruit.repositories.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    public List<JobApplication> getAllJobApplications() {
        return jobApplicationRepository.findAll();
    }

    public JobApplication getJobApplicationById(Long id) {
        Optional<JobApplication> jobApplication = jobApplicationRepository.findById(id);
        return jobApplication.orElseThrow(() -> new RuntimeException("Job Application not found"));
    }

    public JobApplication createJobApplication(JobApplication jobApplication) {
        return jobApplicationRepository.save(jobApplication);
    }

    public JobApplication updateJobApplication(Long id, JobApplication jobApplication) {
        if (!jobApplicationRepository.existsById(id)) {
            throw new RuntimeException("Job Application not found");
        }
        jobApplication.setId(id);
        return jobApplicationRepository.save(jobApplication);
    }

    public void deleteJobApplication(Long id) {
        jobApplicationRepository.deleteById(id);
    }
}