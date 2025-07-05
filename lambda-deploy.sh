#!/bin/bash

echo "Deploying Lambda zip to function..."

aws lambda update-function-code \
  --function-name sunsetUploader \
  --zip-file fileb://sunset.zip

echo "Updating environment variables..."

aws lambda update-function-configuration \
  --function-name sunsetUploader \
  --environment Variables="{BUCKET=joy-with-sunsets-1122,KMS_KEY_ID=alias/sunset-key-role}"

echo "Deployment complete."
