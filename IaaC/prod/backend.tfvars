terraform {
  backend "azurerm" {
    resource_group_name  = "terraform-backend-rg"
    storage_account_name = "tfbackend123456"
    container_name       = "tfstate"
    key                 = "svtsoftsol-prod.tfstate"
  }
}