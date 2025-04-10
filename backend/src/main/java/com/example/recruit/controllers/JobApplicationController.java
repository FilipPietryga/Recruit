package com.example.recruit.controllers;

import com.example.recruit.models.JobApplication;
import com.example.recruit.services.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/job-applications")
@CrossOrigin(origins = "http://localhost:4200")
public class JobApplicationController {

    private final JobApplicationService jobApplicationService;

    @Autowired
    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    @GetMapping
    public List<JobApplication> getAllJobApplications() {
        return jobApplicationService.getAllJobApplications();
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobApplication> getJobApplicationById(@PathVariable Long id) {
        Optional<JobApplication> jobApplication = jobApplicationService.getJobApplicationById(id);
        return jobApplication.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<JobApplication> createJobApplication(@RequestBody JobApplication jobApplication) {
        JobApplication createdJobApplication = jobApplicationService.createJobApplication(jobApplication);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdJobApplication);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobApplication(@PathVariable Long id) {
        jobApplicationService.deleteJobApplication(id);
        return ResponseEntity.noContent().build();
    }
}
