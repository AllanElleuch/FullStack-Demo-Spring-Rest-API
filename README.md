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
- Implement [TOP 10 OWASP API best practise](https://owasp.org/www-project-api-security/)
- Add JWT token  authentication 
- Add DockerFile for containerization
- Add audit logs
- Tool that can be integrated in a CI
    - Integrate **Static Application Security Testing** (SAST) components. SAST scans the application code at rest to discover faulty code posing a security threat. Tools:  [SAST-Scan](https://github.com/ShiftLeftSecurity/sast-scan) or OWASP dependency-check
    - Integrate **Dynamic application security testing** (DAST). DAST tests the running application and has no access to its source code. Tools for web app scanner: [Nikto Web Server Scan](https://github.com/sullo/nikto), [OWASP Zed Attack Proxy (ZAP](https://www.zaproxy.org/) 
    - After implementing a Swagger it is possible to test the proper implementation of the openAPI specification by using [Security Testing tool for dynamic assessment of an API’s security state](https://owasp.org/www-community/api_security_tools) like [API clarity](https://github.com/openclarity/apiclarity), [Astra](https://github.com/flipkart-incubator/Astra) or [Automatic API Attack tool](https://github.com/imperva/automatic-api-attack-tool) 

## Other improvement
- Integration in GithubAction
- Make Gradle a multi module project
- Add MockMvc testing case
- Add E2E web testing
