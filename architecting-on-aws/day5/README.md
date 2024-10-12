# Day 5 (12.10.2024)

Module 3

- IAM Users, Groups, and Roles

- Federated Identity Management
- Amazon Cognito
- AWS Organizations

## AWS Identity and Access Management (IAM)

AWS Account Root User

don't use root user account in day to day

use IAM Admin users

Root user vs IAM user

[root-user_related_information](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user_related_information)

least privileged principle

This account has full access to all AWS services and resources.

Billing information

Personal data

Your entire architecture and its components

## Root User Safety

Create IAM Admin User => Store the root user credentials in safe place => Use IAM admin user

IAM Use Case => Dev User,Test User, DevOps User

## IAM Principals

- IAM User
- Federated User
- IAM Role
- Identity Provider (IdP)

## IAM Users

- IAM users are not separate AWS accounts,they are users within
your account.
- Each user has their own credentials.
- IAM users are authorized to perform specific AWS actions based on
their permissions.
- There are no default permissions.
- Access to the AWS Management Console or CLI must be explicitly
granted.

## IAM Users - Granting Permission

- A formal declaration of one or more permissions
- Evaluated at the time of request
- IAM policies ONLY control access to AWS services
- IAM has no visibility above the hypervisor

## How IAM Determine Permissions

Completely rejected => Can access

login => roles

## IAM Policy

- Identity-Based - Attached to an IAM principal (Key Card)
- Resourced-Based - Attached to an AWS Resource (CEO meeting room lock)

## Identity-Based Policies

Identity-based policies are permission policies that you can attach to a principal, such as IAM user, role or group.These policies
control what actions that identity can perform, on which resources
and under what conditions.

There are three type of policies :

- AWS-managed
- Customer-managed
- Inline

How Control works:

- Actions performed
- Which resources
- What conditions are required

## Resource-Based Policies

Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 Bucket.

How Control works:

- Actions allowed by specific principal
- What conditions are required
- Are always inline policies
- No AWS-managed resource-based policies

## ARNs and Wildcards

Resources are identified by using Amazon Resource Name (ARN) format

Example : " sqs " : " arn:aws:sqs:ap-southeast-1:12345678:devktops "

Use a wildcard (*) to give access to all actions for a specific AWS service

Example : "Action " : " s3:*"

## Amazon Resource Names

There are six segments in ARNs, each separated by a colon :.

```bash
arn:<PARTITION>:<SERVICE>:<REGION>:<ACCOUNT_ID>:<RESOURCE_ID>
```

[ARNS](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html)

## IAM User Group

Can add users to groups and that users get group policies

## IAM Roles

A role lets you define a set of permissions to access the resources that a user or service needs.

- The permissions are not attached to an IAM user or group.
- The permissions are attached to a role and the role is assumed by
the user or the service.

## IAM Roles Use Cases

- Provide AWS resources with access to AWS services
- Provide access to externally authenticated users
- Provide access to third parties
- Switch roles to access resources in:
  - Your AWS account
  - Any other AWS account (cross-account access)

## IAM User Access Key

AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY

## IAM Role Usage

## Assume a Role

- AWS Management Console
- AWS CLI
- API Call
- AWS Security Token Service (AWS STS)

## AWS Security Token Service (AWS STS)

- To Request temporary, limited-privilege credentials
- For IAM users or Federated Users to use this credentials

## Role-based Access Control (RBAC)

Traditional approach to Access Control:

- Grating users specific permissions based on Job function (such as Finance)
- Create a specific IAM role for each permission combination
- Have to update permissions by adding access for each new resource

## Attribute-based Access Control (ABAC)

Highly scalable approach to access control

- Attributes are a key or a key-value pair (tag)
Example : Team = Developers, Project = DevKTOps
- Permissions (policy) rules are easier to handle with ABAC more than with RBAC
- Outcomes
  - Automatically apply permissions based on attributes
  - No need to update a permissions for every new user or resource

tag are essentials
