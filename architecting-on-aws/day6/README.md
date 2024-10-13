# Day 6 (13.10.2024)

## AWS Landing Zone (Control Tower)

A solution that helps customers more quickly set up a secure, multi-account AWS environment
based on AWS best practices, featuring:

- Multi-Account Structure
- Account Vending Machine
- User Access
- Notifications

## Multiple Accounts

How many AWS accounts does your organization need?

- Can be leveraged for isolation:
  - Separate business units, dev/staging/production environments
- Can be leveraged for security:
  - Separate accounts for regulated workloads, different geographical locations, governing other accounts
- Cross-account access is not enabled by default

## Best Practice in Accounts

- One account - multiple VPCs
- Multiple account - One VPC per account

## Multiple Accounts Strategies

## Landing Zone - Multi Accounts

## How to Manage All these Accounts?

AWS Organizations

- Centralized account management
- Group-based account management
- Policy-based access to AWS services
- Automated account creation and management
- Consolidated billing
- API-based

Lab => no need to add credit cards => consolidated billing => deduct from Management

Email alias

IAM Identity Center Lab

Multiple AWS accounts => AWS Organizations + IAM Identity Center

Users with Multiple Account Permissions

Use IAM Identity Center rather than IAM
