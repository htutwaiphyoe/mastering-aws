# Day 3 (5.10.2024)

Simple Architecture

Simple way to store, distribute and
analyze data in the cloud

## Table of contents

1. How Amazon S3 can help?
2. How to store content?
3. S3 Access Control
4. What is Amazon Glacier and how it can help?

## Amazon s3 (Simple Storage Service)

1. Object-level storage
2. Designed for 99.999999999% Durability
3. Event Triggers

An Object storage service

- Can stores massive (unlimited) amounts of unstructured data
- Data Files are stored in Buckets
- Maximum file size for single object is 5TB
- Each object has five consistent characteristics
  - Key
  - Version ID
  - Value
  - Metadata
  - Sub-resources

Amazon S3 Benefits

1. Durability - It ensures data is no loss. Standard provides 11 9s(99.999999999%)
2. Scalability - Virtually unlimited capacity. Each object can be 5 TB or less
3. Availability - Anytime can access data when needed. Standard is designed for 4 9s(99.99%)
4. Security - Fine-grained access control. Many ways to control
Encrypt data
5. Performance - Supports many design patterns. <https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance-design-patterns.html>

Amazon S3 Access Control

1. Private (Default)
2. Public
3. Access Policy (Custom)

S3 Bucket Policies => AWS Policy
Generator => JSON format

Amazon S3 - Encryption

- Encryption means
"encodes data with a secret key to makes it unreadable"
- Only users who have secret key can decode it
- AWS has AWS Key Management Service (AWS KMS) to manage secret keys

Server-side Encryption (Default)

- If enable the feature, this is default encryption option
- Amazon S3 encrypts objects before saving to s3 storage and decrypts objects when you download

Client-side Encryption

- Encrypt data on client side and upload the encrypted files to S3
- In this case, we have to manage the encryption process

Amazon S3 Versioning

maintain history record or pervious version and able to restore

Amazon S3 Access Control - CORS

Origin allow

Amazon S3 Use Case

- Storing and distributing static content and media
- Host Static Websites
- Data Store for large-scale analytics
  - Clickstream Analytics
  - Financial transaction Analytics
  - Media Transcoding
- Using as A Backup Solution

Uploading Data into Amazon S3

Console, CLI, SDKs => API => Files => Objects

Amazon S3 Multipart Upload

- good for large file
- use from CLI or SDKs
- chunks by chunks upload
- no need to upload from start when uploading is failed

Amazon S3 Storage Classes

<https://aws.amazon.com/s3/storage-classes/>

- S3 Standard (Frequently accessed data)
- S3 Intelligent Tiering (Automatically moves objects)
- S3 Standard IA (Long-Lived, infrequently accessed data)
- S3 One Zone IA (Long-Lived, infrequent, but rapid access)
- S3 Glacier/Deep Archive (Archiving rarely accessed data)
Instant Retrival/Flexible Retrival
- S3 Express One Zone (10x & Single Digit Milliseconds Latency
- S3 Outposts => On premise AWS s3

Amazon S3 Glacier

1. Instant Retrieval
2. Flexible Retrieval
3. Deep Archive

- Long-time data storage, Backup or Archival, Very low cost

Glaicer Flexible Retrival

- Expedited => 1 - 5 minutes
- Standard => 3 - 5 hours
- Bulk => 5 - 12 hours

S3 Lifecycle Policies

- Manual trigger
- S3 Standard => 30 Days => S3 Standard IA => 60 Days => S3 Glacier => 365 Days => Bin

Lab : Hosting A Static Website

1. Create an S3 Bucket
2. Deploy your static code
3. Make your website public

## Example Tips

1. 99.9ကိုးလုံး Durability
2. unlimited => storage
3. 5TB => Max size of single object

S3 Free Tier => 5GB
