# Introduction to AWS

2002 => internally launched
2003 => idea to market
2004 => publicly launched with SQS
2006 => publicly re-launched with SQS, S3, EC2
2007 => launched in Europe

Netflix, AirBnb, Dropbox

AWS is a global infrastructure.

Regions => Availability Zones => Local Zones => Data Centers => Edge Locations (Point of Presence)

Regions => a cluster of data centers => region-scoped services

How to choose regions

1. Compliance with data governance and legal requirements
2. Latency (Proximity) => close to customers
3. Available services
4. Pricing => different regions have different services

Availability Zones

each region has many AZs => default 3, min 2, max 6

eg. ap-southeast-2 => ap-southeast-2a, ap-southeast-2b

each AZ has one or more data centers with redundant power, networking and connectivity

AZ are separated from each others, isolated from disasters, connected with high bandwidth, ultra-low latency network

Edge Locations (Point of Presence)

216 points of presence in 84 cities in 42 countries => low latency content deliver
