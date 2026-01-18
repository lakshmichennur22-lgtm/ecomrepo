# ECR Repository
resource "aws_ecr_repository" "frontend_repo" {
  name                 = "my-frontend-repo"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  encryption_configuration {
    encryption_type = "AES256"
  }

  tags = {
    Name        = "frontend-ecr"
    Environment = "dev"
  }
}