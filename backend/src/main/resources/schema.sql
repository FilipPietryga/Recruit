CREATE TABLE job_application (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    company VARCHAR(255),
    status VARCHAR(255),
    job_location VARCHAR(255),
    application_date DATE,
    notes TEXT
);