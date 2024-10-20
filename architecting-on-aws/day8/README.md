# Day 8 (20.10.2024)

Binary to decimal => 2 power n

0010 1111 => 47

Decimal to binary => divide by 2 until 0, count from bottom

192 => 1100 0000
96 / 2 => 0
48 / 2 => 0
24 / 2 => 0
12 / 2 => 0
6 / 2 => 0
3 / 2 => 1
1 / 2 => 1
0 => 1

10 => 0000 10101
5 / 2 => 0
2 / 2 => 1
1 / 2 => 0
0 => 1

34 => 0010 0010
17 / 2 => 0
8 / 2 => 1
4 / 2 => 0
2 / 2 => 0
1 / 2 => 0
0 => 1

IP Address => 192.168.1.1 => 11000000.10101000.00000001.00000001

1 Octet => 8 bit => 8.8.8.8 => 32 bit

range => 0.0.0.0 to 255.255.255.255

IP Address => divide by classes (A, B, C, D, E)

1. Class A => 00000000.00000000.00000000.00000000 to 01111111.11111111.11111111.11111111
           => 0.0.0.0 to 127.255.255.255
2. Class B => 10000000.00000000.00000000.00000000 to 10111111.11111111.11111111.11111111
           => 128.0.0.0 to 191.255.255.255
3. Class C => 11000000.00000000.00000000.00000000 to 11011111.11111111.11111111.11111111
           => 192.0.0.0 to 223.255.255.255
4. Class D => 11100000.00000000.00000000.00000000 to 11101111.11111111.11111111.11111111
           => 224.0.0.0 to 239.255.255.255
5. Class E => 11110000.00000000.00000000.00000000 to 11111111.11111111.11111111.11111111
           => 240.0.0.0 to 255.255.255.255

Class A, B, C => computers IP
Class D => multicast
Class E => experimental

Class A => actual usage 0 - 126 => 127 => loopback address

Private Addresses => internal traffic => free

Class A => 10.0.0.0 to 10.255.255.255
Class B => 172.16.0.0 to 172.31.255.255
Class C => 192.168.0.0 to 192.168.255.255

others are public addresses => internet traffic => unique => license

Subnet mask

255.255.255.0 => subnet mask

Default Subnet Mask

1. Class A
   - Decimal => 255.0.0.0
   - Binary => 11111111.00000000.00000000.00000000
   - CIDR notation => /8 (numbers of 1)
2. Class B
   - Decimal => 255.255.0.0
   - Binary => 11111111.11111111.00000000.00000000
   - CIDR notation => /16 (numbers of 1)
3. Class C
   - Decimal > 255.255.255.0
   - Binary => 11111111.11111111.11111111.00000000
   - CIDR notation => /24 (numbers of 1)

Custom Subnet Mask => desire range of subnet mask => /9, /25

/25 => 255.255.255.128 => 11111111.11111111.11111111.10000000
/26 => 255.255.255.192 => 11111111.11111111.11111111.11000000
/27 => 255.255.255.224 => 11111111.11111111.11111111.11100000
/28 => 255.255.255.240 => 11111111.11111111.11111111.11110000

/20 => 255.255.240.0 => 11111111.11111111.11110000.00000000
/17 => 255.255.128.0 => 11111111.11111111.10000000.00000000
/18 => 255.255.192.0 => 11111111.11111111.11000000.00000000

subnet mask => network + host

Class A => 255 (network) + 0.0.0 (host)
Class B => 255.255 (network) + 0.0 (host)
Class C => 255.255.255 (network) + 0 (host)

No of host (total host IP address)=> 2^(host) - 2
Class A => 2^24 - 2
Class B => 2^16 - 2
Class C => 2^8 - 2

192.168.1.0 /24 => Network Id + Usable ip address + Broadcast address

/24 => (no of 0) 2^8 => 256

(last octet) 0 / 256 => 0

Network id => 192.168.1.0

256 x 1 => 256 - 1 => 255

Broadcast => 192.168.1.255

Usable ip address => 192.168.1.1 to 192.168.1.254

192.168.1.100 /25

/25 => 255.255.255.128 => 2 ^ 7 (no of 0)

100 / 128 => 0

Network Id => 192.168.1.0

128 x 1 => 128 - 1 => 127

Broadcast id => 127

Usable IP address => 192.168.1.1 to 192.168.1.126

Next network id => 192.168.1.128
Next usable ips => 192.168.1.129 to 192.168.1.254
Next broadcast id => 192.168.1.255

192.168.1.100 /26

/26 => 255.255.255.192 => 2^6 (no of 0) => 64 - 2 => 62 (no of host)

100 / 64 => 1 x 64 => 64

network id => 192.168.1.64

64 x 2 => 128 - 1 => 127

broadcast id => 192.168.1.127

usable ips => 192.168.1.65 to 192.168.1.126

192.168.1.29 /27

/27 => 255.255.255.224 => 2^5 (no of 0) => 32 - 2 => 30 (no of host)

29 / 32 => 0 x 32 => 0

network id => 192.168.1.0

32 x 1 => 32 - 1 => 31

broadcast id => 192.168.1.31

usable ips => 192.168.1.1 to 192.168.1.30

192.168.1.130 /26

/26 => 255.255.255.192 => 2^6 => 64 - 2 => 62

130 / 64 => 2 x 64 => 128

network id => 192.168.1.128

64 x 3 => 192 - 1 => 191

broadcast id => 192.168.1.191

usable ips => 192.168.1.129 to 192.168.1.190

[subnetipv4](https://subnetipv4.com/)

177.99.84.14 /20

/20 => 255.255.240.0 => 2^4 => 16

2 ^ 12 => 4096 - 4094 (no of host)

84 / 16 => 5 x 16 => 80

network id => 177.99.80.0

16 x 6 => 96 - 1 => 95

broadcast id => 177.99.95.255

usable ips => 177.99.80.1 to 177.99.95.254

0.0.0.0 => default route

/32 => one ip address
