# Day 1 (28.9.2024)

## Module Content

1. What is the Cloud? What is AWS?

2. The Well-Architected Framework

3. AWS Global Infrastructure

4. Support Plan

2004 => SQS => internal

Programmable resources, dynamic abilities, pay as you go

Six advantages of cloud

1. Expense
2. Scale
3. Capacity
4. Speed
5. Focus
6. Global

client (business logic and goals) => architect (structure) => engineer (building)

AWS Well-Architected Framework

Six Pillars

1. Security
2. reliability
3. Cost Optimization
4. Performance Efficiency
5. Operational Excellence
6. Sustainability

## 1. Security

1. Implement a strong identity foundation

2. Enable traceability

3. Apply security at all layers

4. Automate security best practices

5. Protect data in transit and at rest

6. Keep people away from data => least privileged

7. Prepare for security events => accident response

## 2. Reliability

- Test recovery procedures

- Scale horizontally to increase => server load

- aggregate workload availability

- Stop guessing capacity

- Manage change in automation

## 3. Cost Optimization

- Implement cloud financial management => FinOps

- Adopt a consumption model

- Measure overall efficiency

- Stop spending money on undifferentiated heavy lifting

- Analyze and attribute expenditure

## 4. Performance Efficiency

- Democratize advanced technologies

- Go global in minutes

- Use serverless architectures

- Experiment more often

## 5. Operational Excellence

- Perform operations as code

- Make frequent, small, reversible changes

- Refine operations procedures frequently

- Anticipate failure

- Learn from all operational failures

## 6. Sustainability

- Understand your impact

- Establish sustainability goals

- Maximize utilization

- Anticipate and adopt new, more efficient hardware and software offerings

- Use managed services

- Reduce the downstream impact of your cloud workloads

Local Zone => A type of infrastructure deployment that places compute, storage, database, and other select AWS services close to large population and industry centers. (mini DC)

Edge locations => are AWS cache server designed to deliver services with the lowest latency possible.
Amazon has dozens of these data centers spread across the world. They’re closer to users than Regions or Availability Zones, often in major cities, so responses can be fast.
