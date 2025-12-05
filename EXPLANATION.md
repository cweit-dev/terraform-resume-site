# terraform-resume-site  
Detailed Explanation  
Carl Weitzel – December 2025

This repository provisions and maintains a publicly reachable static website using only Terraform and GitHub Actions.

Resources created and managed
- S3 bucket configured for static website hosting
- CloudFront distribution with the default CloudFront certificate (free HTTPS)
- Required bucket policy and public-access-block settings for website mode
- GitHub Actions workflow that synchronises the local resume-site/ directory to S3 and invalidates the CloudFront cache on every push to main

All resources stay within the AWS free-tier limits; the site has cost $0.00 since creation.

Operation
A single git push to main is sufficient to update the live site worldwide within roughly one minute. Manual Terraform commands are retained for the initial creation and for deliberate teardown.

Live URL
https://db3vo4wsppsgv.cloudfront.net

Verification screenshots/ contains the Terraform state output after apply and a capture of the rendered page.

The code is intentionally small, readable in its entirety, and contains no external modules. Changes to content are handled entirely through Git; infrastructure changes are handled entirely through Terraform.

Carl Weitzel  
CompTIA Cloud+ certified  
Seeking Helpdesk / Junior Sysadmin position
