import json
import boto3
import json
import os
import pandas as pd

TABLE_NAME = os.environ.get("http-crud-tutorial-items")
OUTPUT_BUCKET = os.environ.get("dynamodb-lambda-test")
TEMP_FILENAME = '/tmp/export.csv'
OUTPUT_KEY = 'export.csv'

s3_resource = boto3.resource('s3')
dynamodb_resource = boto3.resource('dynamodb')
table = dynamodb_resource.Table("http-crud-tutorial-items") # TABLE_NAME

def lambda_handler(event, context):
    # for testing:
    print(event)
    response = table.scan()
    df = pd.DataFrame(response['Items'])
    df.to_csv( '/tmp/export.csv', index=False, header=True)

    # Upload temp file to S3
    s3_resource.Bucket("dynamodb-lambda-test").upload_file('/tmp/export.csv', 'export.csv')

    return {
            'statusCode': 200,
            'headers': {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": True,
                "content-type": "application/json"
            },
            'body': json.dumps('OK')
        }    
