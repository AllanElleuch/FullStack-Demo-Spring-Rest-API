# Application Architecture


```
 ╭┄┄┄┄┄┄┄┄╮           ┌──────────┐      ┌──────────┐
 ┆   ☁   ┆  ←→       │    ☕    │  ←→  │    💾    │
 ┆  Web   ┆ JSON/HTTP │  Spring  │      │ Database │
 ┆ Angular┆           │  Service │      │ H2       │
 ╰┄┄┄┄┄┄┄┄╯           │          │      └──────────┘
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




## Improvement with security focus
- Implement [TOP 10 OWASP best practise](https://owasp.org/www-project-api-security/)
- Add MockMvc testing case
- Implement Swagger and test proper implementation by using [Security Testing tool for dynamic assessment of an API’s security state](https://owasp.org/www-community/api_security_tools) like [API clarity](https://github.com/openclarity/apiclarity) or [Automatic API Attack tool](https://github.com/imperva/automatic-api-attack-tool) 
- Add JWT token  authentication 
- Add DockerFile for containerization
- Integration [Nikto Web Server Scan](https://github.com/sullo/nikto) when the project is deployed on a server for checking dynamically vulnerabilities.
