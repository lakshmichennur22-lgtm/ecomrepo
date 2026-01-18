#!/bin/bash
set -e

AWS_REGION="us-east-1"
STATE_BUCKET="projectecom-terraform-state-dev-s3"
LOCK_TABLE="terraformecom-locks-dev"

echo "Creating S3 bucket for Terraform state..."

aws s3api create-bucket \
  --bucket $STATE_BUCKET \
  --region $AWS_REGION

echo "Enabling versioning on state bucket..."

aws s3api put-bucket-versioning \
  --bucket $STATE_BUCKET \
  --versioning-configuration Status=Enabled

echo "Creating DynamoDB table for state locking..."

aws dynamodb create-table \
  --table-name $LOCK_TABLE \
  --billing-mode PAY_PER_REQUEST \
  --attribute-definitions AttributeName=LockID,AttributeType=S \
  --key-schema AttributeName=LockID,KeyType=HASH \
  --region $AWS_REGION

echo "Terraform backend setup completed ✅"
