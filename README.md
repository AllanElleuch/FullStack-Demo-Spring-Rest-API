# Application Architecture


```
 ╭┄┄┄┄┄┄┄┄╮      ┌──────────┐      ┌──────────┐
 ┆   ☁   ┆  ←→  │    ☕    │  ←→  │    💾    │
 ┆  Web   ┆ HTTP │  Spring  │      │ Database │
 ┆ Angular┆      │  Service │      │ H2       │
 ╰┄┄┄┄┄┄┄┄╯      │          │      └──────────┘
                 └──────────┘
                     ↑ JSON/HTTP
                     ↓
                ┌──────────┐
                │    ☁     │
                │ Place    │
                │   API    │
                └──────────┘
```

## Overview
Spring boot app backend coupled with Angular front-end.


## Pre-requisites

* JDK 19

## Getting started 

### Start Spring 
`./gradlew bootRun`

### Start Angular 
`ng start`

## Testing

### Angular 

`./ng test`

### Spring
`./gradlew test`

### H2 console endpoint
`http://localhost:8080/h2-console/`

See `application.properties` for credentials.

### Postman collection
See file `Place API.postman_collection.json`




## Improvement
- Add MockMvc testing case
- Add Swagger 
- Add JWT token  authentication 
- Add Dockerisation for quick demo
