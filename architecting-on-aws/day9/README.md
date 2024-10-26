# Day 9 (26.10.2024)

## Compute layer

EC2, EBS

Virtual Machines => Amazon EC2, Amazon Lightsail

Containers => Amazon ECS

PaaS => AWS Elastic BeanStalk

Services => AWS Lambda, AWS Fargate

Specialized solutions => AWS Outposts, AWS Batch

Amazon vs AWS services

The pattern is that utility services are prefixed with AWS, while standalone services are prefixed by "Amazon".

- AWS Prefix - These are services that typically link or operate with other services. (AWS Cost Explorer, AWS IAM, AWS Budgets, AWS IAM, etc.)
- Amazon Prefix - These are services that function completely on their own. (Amazon RDS, Amazon SQS, Amazon EC2, etc.)

Amazon EC2 (Amazon Elastic Compute Cloud)

- Web Hosting
- Databases
- Anything a sever can do

- Provides Virtual Machines (Servers)
- Can provision servers in minutes
- Automatically scale capacity as needed
- Pay only for the used capacity

VM vs Physical

Free to Make Mistakes
Instantiated within seconds

EC2 Instances structure

EC2 Provisioning

Amazon AMI (Amazon Machine Image)

- Must specify a source AMI
- Can Launch multiple instances from a single AMI
- Can use different AMIs to launch different type of
instances

What is Include in AMI?

Provides the information required to launch an instance
An AMI includes the following:

- Root Volume Template
  - Full operating system
  - Everything installed into this OS
- Launch Permissions - Control AMI that can be used from which
AWS Accounts
- A block device mapping - attach specific volumes to the instance

How to get AMI?

- Pre Built
- AWS Marketplace
- Own Created

Benefits of AMI

- Repeatability
- Reusability
- Marketplace Solutions
- Recoverability
- Backups

EC2 Image Builder

Source Image => EC2 Image Builder => Customize Software installed on the image => Source image with AWS provided or custom templates => Test images => Distribute golden images

EC2 Image Builder simplifies the building, testing, and deployment of Virtual Machine and container images for use on AWS or on-premises.

User Data in EC2

Your AMI => User Data (EC2 Creation level) => EC2 Instance

Why EBS Volume need for EC2?

- Block-level storage
- Persist Data through shutdown
- Instance store is ephemeral

Multiple EBS Volumes can be on the same instance, but each volume can be attached to only one instance at a time.

Instance Store

An instance store provides temporary block-level storage. This storage is located on disks that are physically attached to the host computer. Instance store is idea for temporary storage of information that changes frequently.

EBS Volumes

Amazon EBS volumes provide durable, detachable, block-level storage for your EC2
instances. Can be used to run a database, to backup your instances into AMI.

Amazon EBS Volumes Type

Solid-State Drive

General Purposed SSD

- General purpose SSD volume that balances price and performance for a wide variety of workloads
- Transactional workloads
- Virtual desktops
- Medium-sized, single-instance databases
- Low-latency interactive applications
- Boot volumes
- Development and test environments

Provisioned IOPS SSD

- Highest-performance SSD volume for mission-
critical low-latency or high-throughput workloads
- Critical business applications that require
sustained IOPS performance
- Large database workloads

Hard-Disk Drive

Throughput Optimized HDD

- Low cost HDD volume designed for frequently accessed, throughput-intensive workloads
- Big data
- Data warehouses
- Log processing
- Cannot be a boot volume

Cold HDD

- Lowest cost HDD volume designed for less frequently accessed workloads
- Throughput-oriented storage for data that is
infrequently accessed
- Scenarios where the lowest storage cost is important
- Cannot be a boot volume

Shared File Systems

- Amazon EBS only
attaches to one instance
- Amazon S3 is an
option but is not ideal
- Amazon EFS and
Amazon FSx are perfect

Amazon EFS

Amazon EFS provides a simple, scalable, elastic file system for Linux-Based workloads with NFSv4 protocol

Share Across

- Availability Zones
- Regions
- VPCs
- Account

Amazon FSx

FSx Family

EC2 Instance Name

m5.large

- m is the family name
- 5 is the generation number
- large is the size of the instance

[ec2-instance-types](https://aws.amazon.com/ec2/instance-types/)

[ec2 on-demand](https://aws.amazon.com/ec2/pricing/on-demand/)

[cost calculator](https://calculator.aws/#/)

cost optimization for clients

FinOps => cloud cost optimization => one of the skill sets
