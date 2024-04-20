# API Contracts

## List all goals
An API endpoint to list all the goals in the system

### HTTP Verb
GET 

### Endpoint
`/goals/all`

### Response

```json
{
  "body": [
    {
      "id": 1,
      "name": "Retirement",
      "description": "The goal is to retire at 65",
      "status": "ACTIVE",
      "assumedInflationPercent": 6.75,
      "targetPeriod": {
        "periodType": "YEAR",
        "periodValue": 2043
      },
      "targetAmount": {
        "currency": "INR",
        "amount": 56356372.34
      },
      "currentAmount": {
        "currency": "INR",
        "amount": 1232322.34
      },
      "plannedAmount": {
        "currency": "INR",
        "amount": 3000000.00
      },
      "plannedDate": "2021-01-01",
      "createdDate": "2021-01-01",
      "lastModifiedDate": "2021-01-01",
      "createdBy": "shubha",
      "lastModifiedBy": "shubha",
      "version": 1
    },
    {
      "id": 2,
      "name": "Son college",
      "description": "The goal is to save for son's college",
      "status": "ACTIVE",
      "assumedInflationPercent": 7.75,
      "targetPeriod": {
        "periodType": "YEAR",
        "periodValue": 2034
      },
      "targetAmount": {
        "currency": "INR",
        "amount": 3000000.00
      },
      "currentAmount": {
        "currency": "INR",
        "amount": 1232322.34
      },
      "plannedAmount": {
        "currency": "INR",
        "amount": 3000000.00
      },
      "plannedDate": "2021-01-01",
      "createdDate": "2021-01-01",
      "lastModifiedDate": "2021-01-01",
      "createdBy": "shubha",
      "lastModifiedBy": "parth",
      "version": 3
    }
  ],
  "errors": [{}],
  "status": {
    "code": 200,
    "message": "OK",
    "page": 1,
    "pageSize": 1,
    "totalRecords": 2,
    "totalPages": 1
  }
}
```
### Validations
- None

### Error codes
- 500: Internal Server Error
- 401: Unauthorized
- 429: Too Many Requests