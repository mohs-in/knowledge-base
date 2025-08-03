The presentation layer is mostly responsible for

- **Translation**
  Translates data received from the application layer into the form of ASCII or binary
  - e.g
    - Data: Hello o ASCII: 72 101 108 108 111
    - Binary: 01[001000 0110](tel:0010000110)0101 01[101100 0110](tel:1011000110)1100 01101111
- **Data Compression**
  Suppose after translation we get 1MB of Data. So, Data Compression tries to reduce the size of the data without much loss because the less the size is the faster transmission can happen over the network.
- **Encryption**
  Encrypts the data so that it can’t be misused. HTTPS uses SSL (Secure Socket Layer), which is a cryptographic protocol designed to provide communications security over a computer network.
