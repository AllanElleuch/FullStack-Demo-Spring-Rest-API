# Overview
Spring boot app backend coupled with Angular 13+ for front-end.

## Application Architecture


```
 ╭┄┄┄┄┄┄┄┄╮           ┌──────────┐      ┌──────────┐
 ┆   ☁   ┆  ←→       │    ☕    │  ←→  │    💾    │
 ┆  Web   ┆ JSON/HTTP │  Spring  │      │ Database │
 ┆ Angular┆           │  Service │      │ H2       │
 ╰┄┄┄┄┄┄┄┄╯           │          │      └──────────┘
                      └──────────┘

```

## Screenshots


![Index page](https://github.com/AllanElleuch/FullStack-Demo-Spring-Rest-API/blob/main/resources/Screenshot-index.PNG?raw=true "Index page")

![Place detail page](https://github.com/AllanElleuch/FullStack-Demo-Spring-Rest-API/blob/main/resources/Screenshot-place-detail.PNG?raw=true "Place detail")




# Getting started 

### Pre-requisites

* JDK 19

### Start Spring Boot
```cmd
cd spring-boot-rest-api
./gradlew bootRun
```

#### Start Angular 
```cmd
cd angular-front-end
npm install
npm start
```

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




# Improvement 

## security focus
- Implement [TOP 10 OWASP best practise](https://owasp.org/www-project-api-security/)
- Implement Swagger and test proper implementation by using [Security Testing tool for dynamic assessment of an API’s security state](https://owasp.org/www-community/api_security_tools) like [API clarity](https://github.com/openclarity/apiclarity), [Astra](https://github.com/flipkart-incubator/Astra) or [Automatic API Attack tool](https://github.com/imperva/automatic-api-attack-tool) 
- Add JWT token  authentication 
- Add DockerFile for containerization
- Integration [Nikto Web Server Scan](https://github.com/sullo/nikto) when the project is deployed on a server for checking dynamically vulnerabilities

## Other improvement
- Integration in GithubAction
- Make Gradle a multi module project
- Add MockMvc testing case
- Add E2E web testing
