# terraform-resume-site

A minimal, production-grade static website hosted on AWS S3 + CloudFront, built and maintained entirely with Terraform and GitHub Actions.

### Resources created
- S3 bucket configured for static website hosting  
- CloudFront distribution with free HTTPS (default certificate) and global caching  
- Public read policy and public-access-block settings required for website mode  
- GitHub Actions workflow that syncs content and invalidates CloudFront cache on every push to main
- All resources remain within AWS free-tier limits → $0.00 monthly cost

### Why this exists
I wanted a single command that reliably produces a publicly reachable HTTPS site without manual console clicks. This repository is that command.

### Deployment
Changes are deployed automatically:

git commit -am "update resume"
git push

GitHub Actions runs in <60 seconds → new content is live worldwide.

Manual commands (for initial creation or local testing):

terraform init
terraform apply     # creates everything
terraform destroy   # removes everything (when no longer needed)


Live site
https://db3vo4wsppsgv.cloudfront.net

See screenshots/ for Terraform state output and the live page.

Carl Weitzel
CompTIA Cloud+ certified
Seeking Helpdesk / Junior Sysadmin position
