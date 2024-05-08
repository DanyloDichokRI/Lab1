provider "aws" {
  region = "eu-central-1" # Замініть на відповідний регіон
}

resource "aws_dynamodb_table" "demo_dynamo_table" {
  name           = "Student1"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  hash_key       = "Student1Id"

  attribute {
    name = "Student1Id"
    type = "S"
  }

  tags = {
    Name        = "Demo Dynamo Table"
    Environment = "Testing"
  }
}

resource "aws_dynamodb_table_item" "item1" {
  depends_on  = [aws_dynamodb_table.demo_dynamo_table]
  table_name  = aws_dynamodb_table.demo_dynamo_table.name
  hash_key    = aws_dynamodb_table.demo_dynamo_table.hash_key
  item = <<ITEM
    {
      "Student1Id": {"S": "001"},
      "Student1Grade": {"N": "98"},
      "Student1FirstName": {"S": "Yaropolk"},
      "Student1LastName": {"S": "Gitler"}
    }
  ITEM
}

resource "aws_dynamodb_table_item" "item2" {
  depends_on  = [aws_dynamodb_table.demo_dynamo_table]
  table_name  = aws_dynamodb_table.demo_dynamo_table.name
  hash_key    = aws_dynamodb_table.demo_dynamo_table.hash_key
  item = <<ITEM
    {
      "Student1Id": {"S": "002"},
      "Student1Grade": {"N": "97"},
      "Student1FirstName": {"S": "Sviatopolk"},
      "Student1LastName": {"S": "Churchill"}
    }
  ITEM
  
}
