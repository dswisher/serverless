## Useful Commands

### CloudFormation

Note that a stack with non-empty S3 buckets cannot be deleted.
All bucket content must be deleted first.

    aws cloudformation list-stacks

    aws cloudformation validate-template \
        --template-body file://stack.yaml

    aws cloudformation create-stack \
        --stack-name dss-serverless \
        --template-body file://stack.yaml \
        --profile dss-admin

    aws cloudformation create-stack \
        --stack-name dss-serverless \
        --template-body file://stack.yaml \
        --parameters ParameterKey=BucketName,ParameterValue=dss-serverless \
        --profile dss-admin

    aws cloudformation delete-stack \
        --stack-name dss-serverless \
        --profile dss-admin


### S3

    aws s3 sync . s3://dss-serverless --profile dss-admin


### S3 API

    aws s3api list-buckets

    aws s3api get-bucket-website --bucket dss-serverless


### IAM

Note there is no "update policy" command.
Rather, a new version is created, and made the default.
That requires the policy ARN, which can be found using list-policies.

    aws iam list-policies --scope Local

    aws iam create-policy \
        --policy-name cli-readonly \
        --policy-document file://cli-readonly-policy.json \
        --profile dss-admin

    aws iam create-policy-version \
        --policy-arn arn:aws:iam::126173520472:policy/cli-readonly \
        --policy-document file://cli-readonly-policy.json \
        --set-as-default \
        --profile dss-admin

