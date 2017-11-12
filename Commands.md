## Useful Commands

### CloudFormation

    aws cloudformation list-stacks

    aws cloudformation create-stack \
        --stack-name dss-serverless
        --template-body file://stack.yaml \
        --profile dss-admin

    aws cloudformation delete-stack \
        --stack-name dss-serverless \
        --profile dss-admin


### S3

    aws s3api list-buckets


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

