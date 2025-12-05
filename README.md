# terraform-resume-site

A minimal, production-grade static website hosted on AWS S3 + CloudFront, created entirely with Terraform.

### Resources created
- S3 bucket configured for static website hosting  
- CloudFront distribution with free HTTPS (default certificate) and global caching  
- Public read policy and public-access-block settings required for website mode  
- All resources remain within AWS free-tier limits → $0.00 monthly cost

### Why this exists
I wanted a single command that reliably produces a publicly reachable HTTPS site without manual console clicks. This repository is that command.

### Usage
```bash
terraform init
terraform plan      # review what will be created
terraform apply     # type "yes" when prompted
