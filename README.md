# 🌇 Sunset Uploader

A simple serverless application to upload beautiful sunset images to AWS S3 using a REST API powered by AWS Lambda and API Gateway. Built for educational and demo purposes with automated CI/CD using AWS CodePipeline.

## 🧰 Tech Stack

- AWS S3 – Storage for uploaded images
- AWS Lambda – Serverless backend to handle uploads
- API Gateway – RESTful API endpoint
- AWS CodePipeline – CI/CD automation
- AWS CodeBuild – Build and package Lambda
- IAM – Permissions and security


## 📁 Folder Structure

sunset-uploader/
├── app/
│   └── index.js              # Lambda function handler
│   └── package.json          # Node.js dependencies
├── appspec.yaml              # CodeDeploy/AppSpec config
├── buildspec.yml             # CodeBuild build script
├── template.yaml             # CloudFormation SAM template
├── README.md
└── sunset-uploader.zip       # (Optional) Deployment artifact
