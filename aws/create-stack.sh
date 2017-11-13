
aws cloudformation create-stack \
  --stack-name dss-serverless \
  --template-body file://stack.yaml \
  --profile dss-admin

