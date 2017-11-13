
aws cloudformation update-stack \
  --stack-name dss-serverless \
  --template-body file://stack.yaml \
  --profile dss-admin

