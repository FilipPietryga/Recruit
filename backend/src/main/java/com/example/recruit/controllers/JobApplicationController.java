package com.example.recruit.controllers;

import com.example.recruit.models.JobApplication;
import com.example.recruit.services.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/job-applications")
@CrossOrigin(origins = "http://localhost:4200")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @GetMapping
    public List<JobApplication> getAllJobApplications() {
        return jobApplicationService.getAllJobApplications();
    }

    @GetMapping("/{id}")
    public JobApplication getJobApplicationById(@PathVariable Long id) {
        return jobApplicationService.getJobApplicationById(id);
    }

    @PostMapping
    public JobApplication createJobApplication(@RequestBody JobApplication jobApplication) {
        return jobApplicationService.createJobApplication(jobApplication);
    }

    @PutMapping("/{id}")
    public JobApplication updateJobApplication(@PathVariable Long id, @RequestBody JobApplication jobApplication) {
        return jobApplicationService.updateJobApplication(id, jobApplication);
    }

    @DeleteMapping("/{id}")
    public void deleteJobApplication(@PathVariable Long id) {
        jobApplicationService.deleteJobApplication(id);
    }
}