aws ecr create-repository \
    --repository-name my-frontend-repo \
    --image-scanning-configuration scanOnPush=true \
    --region us-east-1