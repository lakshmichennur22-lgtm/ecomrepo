############################
# OUTPUT RDS ENDPOINT
############################
output "db_endpoint" {
  description = "MySQL endpoint to use in Spring Boot application.properties"
  value       = aws_db_instance.mysql.address
}
