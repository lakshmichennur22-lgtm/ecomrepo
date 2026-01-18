variable "project" {}
variable "application" {}
variable "environment" {}
variable "location" {}
variable "location_short" {}
variable "blockcode" {}
variable "aws_region" {}
variable "frontend_image" {
  description = "ECR frontend image"
}

variable "backend_image" {
  description = "ECR backend image"
}

